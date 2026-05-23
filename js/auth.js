 // Auth helpers for GrowthIve Monitor

async function getUser() {
  const { data: { user } } = await _supabase.auth.getUser();
  return user;
}

async function getProfile(userId) {
  const { data, error } = await _supabase.from('profiles').select('*').eq('id', userId).single();
  if (error) return null;
  return data;
}

async function requireAuth() {
  const user = await getUser();
  if (!user) {
    window.location.href = 'login.html';
    return null;
  }
  return user;
}

async function loadUserHeader() {
  const user = await getUser();
  if (!user) return;

  const profile = await getProfile(user.id);

  // ── Update navbar display name and avatar ──
  const nameEl   = document.getElementById('user-display-name');
  const avatarEl = document.getElementById('user-avatar');
  if (nameEl && profile) nameEl.textContent = profile.business_name || profile.full_name || 'User';
  if (avatarEl && profile && profile.avatar_url) avatarEl.src = profile.avatar_url;

  // ── Load and apply user's saved language from Supabase ──
  if (profile && profile.preferred_language) {
    const savedLang    = profile.preferred_language;
    const currentLang  = localStorage.getItem('growthive_lang') || 'en';

    // Sync localStorage with what Supabase has
    if (savedLang !== currentLang) {
      localStorage.setItem('growthive_lang', savedLang);
      // Reload to apply the correct language across the page
      window.location.reload();
    }
  }
}

async function logout() {
  // Save current language before clearing storage
  // so it still lives in Supabase and comes back on next login
  const lang = localStorage.getItem('growthive_lang') || 'en';
  await _supabase.auth.signOut();
  localStorage.clear();
  // Restore language so it applies on login page too
  localStorage.setItem('growthive_lang', lang);
  window.location.href = 'login.html';
}
