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
  // ── Check 15 minute inactivity timeout FIRST ──
  if (isSessionExpired()) {
    await forceLogoutDueToInactivity();
    return null;
  }
  const user = await getUser();
  if (!user) {
    window.location.href = 'login.html';
    return null;
  }
  // User is active and authenticated — update activity timestamp
  updateActivity();
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

// ── 15 MINUTE INACTIVITY TIMEOUT ──
const INACTIVITY_LIMIT = 15 * 60 * 1000; // 15 minutes in milliseconds
const ACTIVITY_KEY     = 'growthive_last_activity';
const AUTH_PAGES       = ['login.html', 'register.html', 'welcome.html', 'returning.html'];

// Record current time as last activity
function updateActivity() {
  localStorage.setItem(ACTIVITY_KEY, Date.now().toString());
}

// Check if user has been inactive for more than 15 minutes
function isSessionExpired() {
  const currentPage = window.location.pathname.split('/').pop();
  // Never timeout on auth pages
  if (AUTH_PAGES.includes(currentPage)) return false;
  const last = parseInt(localStorage.getItem(ACTIVITY_KEY) || '0');
  if (!last) return false; // No record yet — let them in
  return (Date.now() - last) > INACTIVITY_LIMIT;
}

// Force logout due to inactivity
async function forceLogoutDueToInactivity() {
  const lang = localStorage.getItem('growthive_lang') || 'en';
  await _supabase.auth.signOut();
  localStorage.clear();
  localStorage.setItem('growthive_lang', lang);
  localStorage.setItem('growthive_timeout', 'true'); // Flag to show message on login
  window.location.href = 'login.html';
}

// Track user activity — reset timer on any interaction
(function trackActivity() {
  const currentPage = window.location.pathname.split('/').pop();
  if (AUTH_PAGES.includes(currentPage)) return;
  const events = ['click', 'keypress', 'scroll', 'touchstart', 'mousemove'];
  events.forEach(evt => {
    document.addEventListener(evt, updateActivity, { passive: true });
  });
  // Update activity on page load too
  updateActivity();
})();
