// Optional link to Growthive Monitor. Owner password is used once to sign in, never stored.
const MONITOR_URL = 'https://ejuhpwiyzevuhzcdsjmi.supabase.co';
const MONITOR_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdWhwd2l5emV2dWh6Y2Rzam1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MDA3NzcsImV4cCI6MjA5NDA3Njc3N30.YVIC1qcywVycAEOIQeg0WfDyFzFnqfRPP-WMbcM2QC4';

const MonitorLink = {
  client(){ return supabase.createClient(MONITOR_URL, MONITOR_ANON_KEY, { auth: { persistSession: false, autoRefreshToken: false } }); },

  async get(sb, businessId){
    const { data, error } = await sb.from('monitor_links').select('*').eq('business_id', businessId).maybeSingle();
    return error ? null : data;
  },

  async connect(sb, business, services, email, password){
    const m = this.client();
    const { data: auth, error: aerr } = await m.auth.signInWithPassword({ email, password });
    if (aerr || !auth || !auth.user) return { error: 'Monitor did not accept that email and password.' };
    const { data: token, error: lerr } = await m.rpc('create_book_link', { p_business_id: business.id, p_business_name: business.business_name });
    await m.auth.signOut();
    if (lerr || !token) return { error: 'Could not link: ' + ((lerr && lerr.message) || 'unknown') + ' (Has 24-book-link.sql been run in Monitor?)' };
    const { error: serr } = await sb.from('monitor_links').upsert({ business_id: business.id, token, monitor_email: email, connected_at: new Date().toISOString() });
    if (serr) return { error: 'Linked, but could not save the link here: ' + serr.message + ' (Has book-02-monitor-link.sql been run?)' };
    const list = (services || []).map(s => ({ name: s.name, price: s.price || 0, duration_minutes: s.duration_minutes || null }));
    if (list.length) await m.rpc('book_link_services', { p_token: token, p_services: list });
    return { ok: true };
  },

  async disconnect(sb, businessId){
    const link = await this.get(sb, businessId);
    if (link) { try { await this.client().rpc('book_unlink', { p_token: link.token }); } catch (e) {} }
    await sb.from('monitor_links').delete().eq('business_id', businessId);
  },

  // Sends every finished booking (since connecting) that Monitor has not received yet. Safe to call any time.
  async syncPending(sb, businessId){
    const link = await this.get(sb, businessId);
    if (!link) return { sent: 0 };
    const { data: rows } = await sb.from('bookings').select('id, booking_date, amount_paid, payment_method, owner_note, completed_at, services(name, duration_minutes)')
      .eq('business_id', businessId).eq('status', 'completed').is('monitor_synced_at', null).gte('completed_at', link.connected_at);
    const m = this.client();
    let sent = 0;
    for (const b of (rows || [])){
      const { error } = await m.rpc('book_push_job', {
        p_token: link.token, p_ref: b.id, p_service: (b.services && b.services.name) || 'Service',
        p_amount: Number(b.amount_paid || 0), p_method: b.payment_method || 'cash', p_date: b.booking_date,
        p_duration: (b.services && b.services.duration_minutes) || null, p_note: b.owner_note || null });
      if (error) { if (/Link not valid/i.test(error.message)) { await sb.from('monitor_links').delete().eq('business_id', businessId); } break; }
      await sb.from('bookings').update({ monitor_synced_at: new Date().toISOString() }).eq('id', b.id);
      sent++;
    }
    return { sent };
  }
};

