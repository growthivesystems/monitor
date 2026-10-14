// GrowthIve Monitor — business type (products / services / both).
// Loaded after app.js. Products is the default, so existing users see nothing different.
(function () {
  'use strict';
  var KEY = 'gv_biz_type';
  var VALID = { products: 1, services: 1, both: 1 };

  window.getBizType = function () {
    try { var v = localStorage.getItem(KEY); if (VALID[v]) return v; } catch (e) {}
    return 'products';
  };
  function setCache(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  window.isServiceBiz = function () { var t = getBizType(); return t === 'services' || t === 'both'; };

  /* ── Sidebar ── */
  var origSidebar = window.renderSidebar;
  window.renderSidebar = function (activePage) {
    origSidebar(activePage);
    var type = getBizType();
    var el = document.getElementById('sidebar');
    if (!el) return;
    function link(href) { return el.querySelector('a[href="' + href + '"]'); }
    function addLink(afterHref, href, id, icon, label) {
      var after = link(afterHref);
      if (!after || link(href)) return;
      var a = document.createElement('a');
      a.href = href;
      if (activePage === id) a.className = 'active';
      a.innerHTML = '<span class="icon">' + icon + '</span> ' + label;
      after.parentNode.insertBefore(a, after.nextSibling);
    }
    addLink('inventory.html', 'buy-list.html', 'buy-list', '📝', 'Buy List');
    if (type !== 'services') addLink('reports.html', 'sellers.html', 'sellers', '🏅', 'Best Sellers');
    if (type === 'products') return;
    function setLabel(a, text) {
      if (!a) return;
      Array.prototype.slice.call(a.childNodes).forEach(function (n) { if (n.nodeType === 3) a.removeChild(n); });
      a.appendChild(document.createTextNode(' ' + text));
    }
    var sales = link('sales.html');
    if (sales && !link('services.html')) {
      var a = document.createElement('a');
      a.href = 'services.html';
      if (activePage === 'services') a.className = 'active';
      a.innerHTML = '<span class="icon">✂️</span> Services';
      sales.parentNode.insertBefore(a, sales.nextSibling);
    }
    if (type === 'services') {
      setLabel(link('sales.html'), 'Daily Totals');
      setLabel(link('inventory.html'), 'Supplies');
      var p = link('purchases.html'); if (p) p.style.display = 'none';
    }
  };

  /* ── Load the type from the profile (updates the cache, redraws the sidebar if it changed) ── */
  window.loadBizType = async function () {
    try {
      var user = await getUser(); if (!user) return null;
      var r = await _supabase.from('profiles').select('business_type, business_type_chosen').eq('id', user.id).single();
      if (r.error || !r.data) return null;
      var t = VALID[r.data.business_type] ? r.data.business_type : 'products';
      var changed = t !== getBizType();
      setCache(t);
      if (changed) {
        var active = document.querySelector('#sidebar a.active');
        var id = active ? active.getAttribute('href').replace('.html', '') : '';
        renderSidebar(id);
        if (typeof applyBizPage === 'function') applyBizPage();
      }
      return r.data;
    } catch (e) { return null; }
  };

  // Saves the type, then reads it back so a silent failure can never look like success.
  window.saveBizType = async function (type, userId) {
    if (!VALID[type]) return { ok: false, error: 'Unknown type' };
    var r = await _supabase.from('profiles').update({ business_type: type, business_type_chosen: true }).eq('id', userId);
    if (r.error) return { ok: false, error: r.error.message };
    var chk = await _supabase.from('profiles').select('business_type').eq('id', userId).single();
    if (chk.error) return { ok: false, error: chk.error.message };
    if (chk.data.business_type !== type) return { ok: false, error: 'The change was not saved (database refused it). Please try again or contact support.' };
    setCache(type);
    return { ok: true };
  };

  var origInit = window.initPage;
  if (typeof origInit === 'function') {
    window.initPage = async function (activeId) {
      await origInit(activeId);
      await loadBizType();
    };
  }

  /* ── One-time question card on the dashboard, for people who have not chosen yet ── */
  window.maybeShowBizCard = async function () {
    var data = await loadBizType();
    if (!data || data.business_type_chosen) return;
    var main = document.querySelector('.main'); if (!main || document.getElementById('biz-card')) return;
    var user = await getUser(); if (!user) return;
    var card = document.createElement('div');
    card.id = 'biz-card'; card.className = 'card'; card.style.marginBottom = '20px';
    card.innerHTML =
      '<div class="modal-title" style="font-size:1.05rem;margin-bottom:6px;">What kind of business do you run?</div>' +
      '<div style="color:var(--muted);font-size:0.85rem;margin-bottom:14px;">This only changes the labels and tools you see. Your records stay exactly as they are, and you can change it any time in Settings.</div>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;">' +
      '<button class="btn btn-gold" data-t="products">🛍️ I sell products</button>' +
      '<button class="btn btn-outline" data-t="services">✂️ I provide services</button>' +
      '<button class="btn btn-outline" data-t="both">🛍️✂️ Both</button>' +
      '</div>';
    main.insertBefore(card, main.firstChild);
    card.addEventListener('click', async function (e) {
      var b = e.target.closest('button[data-t]'); if (!b) return;
      b.disabled = true;
      var res = await saveBizType(b.getAttribute('data-t'), user.id);
      if (res.ok) window.location.reload(); else { b.disabled = false; alert('Could not save: ' + res.error); }
    });
  };

  /* ── Keep the Daily Sales row in step with the jobs done that day ── */
  // delta (optional) = { amount, method } signed; only used when the day already has a hand-typed entry.
  window.syncSalesForDate = async function (userId, date, delta) {
    function sums(rows, amtKey) {
      var s = { total: 0, cash: 0, transfer: 0, pos: 0 };
      (rows || []).forEach(function (r) {
        var a = Number(r[amtKey] || 0); s.total += a;
        if (r.payment_method === 'cash') s.cash += a;
        else if (r.payment_method === 'transfer') s.transfer += a;
        else if (r.payment_method === 'pos') s.pos += a;
      });
      return s;
    }
    var jobs = await _supabase.from('service_jobs').select('amount, payment_method').eq('user_id', userId).eq('date', date);
    if (jobs.error) throw new Error(jobs.error.message);
    var txns = await _supabase.from('purchase_transactions').select('total_amount, payment_method').eq('user_id', userId).eq('date', date);
    var s = sums(jobs.data, 'amount');
    var p = txns.error ? sums([], 'total_amount') : sums(txns.data, 'total_amount');
    var hasPos = !txns.error && (txns.data || []).length > 0;
    var ex = await _supabase.from('sales').select('*').eq('user_id', userId).eq('date', date).maybeSingle();
    if (ex.error) throw new Error(ex.error.message);
    var existing = ex.data, now = new Date().toISOString();
    var jobCount = (jobs.data || []).length;
    var note = jobCount + ' service' + (jobCount === 1 ? '' : 's') + ' done' + (hasPos ? ' + POS sales' : '');
    if (!existing) {
      if (jobCount === 0 && !hasPos) return;
      var ins = await _supabase.from('sales').insert({
        user_id: userId, date: date, total_amount: s.total + p.total, cash_amount: s.cash + p.cash,
        transfer_amount: s.transfer + p.transfer, pos_amount: s.pos + p.pos,
        source: hasPos ? 'pos' : 'service', updated_at: now, notes: note });
      if (ins.error) throw new Error(ins.error.message);
    } else if (existing.source === 'pos' || existing.source === 'service' || existing.source === null) {
      var up = await _supabase.from('sales').update({
        total_amount: s.total + p.total, cash_amount: s.cash + p.cash,
        transfer_amount: s.transfer + p.transfer, pos_amount: s.pos + p.pos,
        source: hasPos ? 'pos' : (existing.source || 'service'), updated_at: now, notes: note }).eq('id', existing.id);
      if (up.error) throw new Error(up.error.message);
    } else if (delta && delta.amount) {
      var m = delta.method, d = Number(delta.amount);
      var upd = await _supabase.from('sales').update({
        total_amount: Number(existing.total_amount || 0) + d,
        cash_amount: Number(existing.cash_amount || 0) + (m === 'cash' ? d : 0),
        transfer_amount: Number(existing.transfer_amount || 0) + (m === 'transfer' ? d : 0),
        pos_amount: Number(existing.pos_amount || 0) + (m === 'pos' ? d : 0),
        updated_at: now }).eq('id', existing.id);
      if (upd.error) throw new Error(upd.error.message);
    }
  };

  /* ── Inventory: "Used" and "Restock" buttons for supplies ── */
  window.supplyButtons = function (r) {
    if (!isServiceBiz()) return '';
    var n = String(r.item_name).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, "\\'");
    return '<button class="btn btn-outline btn-sm" onclick="openSupplyModal(\'used\',\'' + r.id + '\',\'' + n + '\',' + Number(r.quantity || 0) + ')">Used</button> ' +
           '<button class="btn btn-outline btn-sm" onclick="openSupplyModal(\'restock\',\'' + r.id + '\',\'' + n + '\',' + Number(r.quantity || 0) + ')">+ Restock</button> ';
  };
  window.openSupplyModal = function (mode, id, name, qty) {
    var m = document.getElementById('supply-modal');
    if (!m) {
      m = document.createElement('div'); m.className = 'modal-overlay'; m.id = 'supply-modal';
      m.innerHTML = '<div class="modal"><div class="modal-title" id="sp-title"></div>' +
        '<div id="sp-msg"></div>' +
        '<div class="form-group"><label id="sp-qlabel"></label><input type="number" id="sp-qty" min="1" step="1" value="1"></div>' +
        '<div class="form-group" id="sp-cost-wrap"><label>Total amount you paid (₦)</label><input type="number" id="sp-cost" min="0" step="0.01" placeholder="0.00"></div>' +
        '<div style="display:flex;gap:10px;"><button class="btn btn-gold" id="sp-ok">Save →</button>' +
        '<button class="btn btn-outline" onclick="document.getElementById(\'supply-modal\').classList.remove(\'show\')">Cancel</button></div></div>';
      document.body.appendChild(m);
    }
    m.dataset.mode = mode; m.dataset.id = id; m.dataset.name = name; m.dataset.qty = qty;
    document.getElementById('sp-msg').innerHTML = '';
    document.getElementById('sp-qty').value = 1;
    document.getElementById('sp-cost').value = '';
    document.getElementById('sp-title').textContent = (mode === 'used' ? 'Used: ' : 'Restock: ') + name;
    document.getElementById('sp-qlabel').textContent = mode === 'used' ? 'How many used up or finished?' : 'How many did you buy?';
    document.getElementById('sp-cost-wrap').style.display = mode === 'used' ? 'none' : '';
    document.getElementById('sp-ok').onclick = saveSupply;
    m.classList.add('show');
  };
  async function saveSupply() {
    var m = document.getElementById('supply-modal'), msg = document.getElementById('sp-msg');
    var mode = m.dataset.mode, id = m.dataset.id, name = m.dataset.name;
    var n = parseInt(document.getElementById('sp-qty').value, 10);
    if (!n || n < 1) { msg.innerHTML = '<div class="alert alert-danger">Enter a number of 1 or more.</div>'; return; }
    var cost = parseFloat(document.getElementById('sp-cost').value);
    if (mode === 'restock' && (isNaN(cost) || cost < 0)) { msg.innerHTML = '<div class="alert alert-danger">Enter the total amount you paid (use 0 if it was free).</div>'; return; }
    var cur = await _supabase.from('inventory').select('quantity, unit_price').eq('id', id).eq('user_id', currentUser.id).single();
    if (cur.error) { msg.innerHTML = '<div class="alert alert-danger">' + cur.error.message + '</div>'; return; }
    var oldQ = Number(cur.data.quantity || 0);
    var newQ = mode === 'used' ? Math.max(0, oldQ - n) : oldQ + n;
    var up = await _supabase.from('inventory').update({ quantity: newQ }).eq('id', id).eq('user_id', currentUser.id);
    if (up.error) { msg.innerHTML = '<div class="alert alert-danger">' + up.error.message + '</div>'; return; }
    if (mode === 'restock' && cost > 0) {
      var today = new Date().toLocaleDateString('en-CA');
      var ex = await _supabase.from('expenses').insert({ user_id: currentUser.id, date: today, description: 'Supplies: ' + name + ' x' + n, amount: cost });
      if (ex.error) { msg.innerHTML = '<div class="alert alert-danger">Stock updated but the expense was not saved: ' + ex.error.message + '</div>'; return; }
    }
    if (typeof writeLog === 'function') await writeLog(mode === 'used' ? 'used' : 'restocked', id, name, oldQ, newQ, null, null, mode === 'restock' ? 'Paid ' + cost : '');
    m.classList.remove('show');
    if (typeof loadInventory === 'function') loadInventory();
    if (typeof auditLogOpen !== 'undefined' && auditLogOpen && typeof loadAuditLog === 'function') loadAuditLog();
  }
})();
