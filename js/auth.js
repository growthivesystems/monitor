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
  const nameEl = document.getElementById('user-display-name');
  const avatarEl = document.getElementById('user-avatar');
  if (nameEl && profile) nameEl.textContent = profile.business_name || profile.full_name || 'User';
  if (avatarEl && profile && profile.avatar_url) avatarEl.src = profile.avatar_url;
}

async function logout() {
  await _supabase.auth.signOut();
  localStorage.clear();
  window.location.href = 'login.html';
}
