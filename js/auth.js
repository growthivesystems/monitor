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

  // Update navbar display name and avatar
  const nameEl   = document.getElementById('user-display-name');
  const avatarEl = document.getElementById('user-avatar');
  if (nameEl && profile) nameEl.textContent = profile.business_name || profile.full_name || 'User';
  if (avatarEl && profile && profile.avatar_url) avatarEl.src = profile.avatar_url;

  // Sync language from Supabase — but DO NOT reload if we are on login/welcome/returning
  // to avoid breaking the routing and redirect flow
  const currentPage = window.location.pathname.split('/').pop();
  const skipReloadPages = ['login.html', 'welcome.html', 'returning.html', 'register.html', ''];
  
  if (profile && profile.preferred_language) {
    const savedLang   = profile.preferred_language;
    const currentLang = localStorage.getItem('growthive_lang') || 'en';

    if (savedLang !== currentLang) {
      localStorage.setItem('growthive_lang', savedLang);
      // Only reload on main app pages — never on auth/routing pages
      if (!skipReloadPages.includes(currentPage)) {
        window.location.reload();
      }
    }
  }
}

async function logout() {
  // Preserve language preference across logout
  const lang = localStorage.getItem('growthive_lang') || 'en';
  await _supabase.auth.signOut();
  localStorage.clear();
  localStorage.setItem('growthive_lang', lang);
  window.location.href = 'login.html';
}
