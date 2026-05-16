// Shared components for GrowthIve Monitor

function renderSidebar(activePage) {
  const links = [
    { href: 'dashboard.html',    icon: '📊', label: 'Dashboard',    id: 'dashboard' },
    { href: 'sales.html',        icon: '💰', label: 'Daily Sales',  id: 'sales' },
    { href: 'expenses.html',     icon: '📋', label: 'Expenses',     id: 'expenses' },
    { href: 'debts.html',        icon: '🤝', label: 'Debts',        id: 'debts' },
    { href: 'inventory.html',    icon: '📦', label: 'Inventory',    id: 'inventory' },
    { href: 'purchases.html',    icon: '🛒', label: 'Purchases',    id: 'purchases' },
    { href: 'reports.html',      icon: '📈', label: 'Reports',      id: 'reports' },
    { href: 'health-score.html', icon: '🏆', label: 'Health Score', id: 'health-score' },
    { href: 'calendar.html',     icon: '📅', label: 'Calendar',     id: 'calendar' },
    { href: 'settings.html',     icon: '⚙️', label: 'Settings',     id: 'settings' },
    { href: 'contact.html',      icon: '💬', label: 'Support',      id: 'contact' },
  ];

  const el = document.getElementById('sidebar');
  if (!el) return;

  el.innerHTML = `
    <span class="sidebar-label">Main Menu</span>
    ${links.slice(0,6).map(l => `
      <a href="${l.href}" class="${activePage === l.id ? 'active' : ''}">
        <span class="icon">${l.icon}</span> ${l.label}
      </a>`).join('')}
    <span class="sidebar-label">Analytics</span>
    ${links.slice(6,9).map(l => `
      <a href="${l.href}" class="${activePage === l.id ? 'active' : ''}">
        <span class="icon">${l.icon}</span> ${l.label}
      </a>`).join('')}
    <span class="sidebar-label">Account</span>
    ${links.slice(9).map(l => `
      <a href="${l.href}" class="${activePage === l.id ? 'active' : ''}">
        <span class="icon">${l.icon}</span> ${l.label}
      </a>`).join('')}
    <div class="sidebar-logout">
      <button onclick="logout()">🚪 Sign Out</button>
    </div>
  `;
}

function renderFooter() {
  const el = document.getElementById('main-footer');
  if (!el) return;
  el.innerHTML = `
    <footer>
      <div class="footer-services">
        <div class="footer-services-title">✨ More from GrowthIve Systems</div>
        <p>GrowthIve Monitor is just one of our powerful business tools. Explore our full suite of services designed to help businesses grow, scale, and thrive in the digital age.</p>
        <a href="https://mybusinesswebsite.github.io/growthivesystem.org" target="_blank" class="btn btn-gold btn-sm">Visit GrowthIve Systems →</a>
      </div>
      <div class="footer-grid">
        <div>
          <div class="footer-brand-name">GrowthIve <span>Monitor</span></div>
          <p class="footer-desc">Your all-in-one digital business record management system. Track sales, expenses, inventory and grow smarter.</p>
        </div>
        <div>
          <div class="footer-title">Quick Links</div>
          <ul class="footer-links">
            <li><a href="dashboard.html">Dashboard</a></li>
            <li><a href="sales.html">Daily Sales</a></li>
            <li><a href="reports.html">Reports</a></li>
            <li><a href="inventory.html">Inventory</a></li>
            <li><a href="purchases.html">Purchases</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-title">Support</div>
          <ul class="footer-links">
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="terms.html">Terms & Conditions</a></li>
            <li><a href="login.html">Login</a></li>
            <li><a href="register.html">Register</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-title">Powered By</div>
          <p class="footer-desc" style="font-size:0.82rem;">GrowthIve Systems<br>Building tools that empower businesses everywhere.</p>
          <a href="https://mybusinesswebsite.github.io/growthivesystem.org/" target="_blank" style="color:var(--gold);font-size:0.82rem;">growthivesystems.com →</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} GrowthIve Monitor. Powered by <a href="https://mybusinesswebsite.github.io/growthivesystem.org/" target="_blank">GrowthIve Systems</a>.</span>
        <span><a href="terms.html">Terms & Conditions</a> · <a href="contact.html">Support</a></span>
      </div>
    </footer>
  `;
}

function renderNavbar() {
  const el = document.getElementById('main-navbar');
  if (!el) return;
  el.innerHTML = `
    <nav class="navbar">
      <button class="hamburger" onclick="toggleSidebar()">☰</button>
      <a href="dashboard.html" class="navbar-brand">GrowthIve <span>Monitor</span></a>
      <div class="navbar-spacer"></div>
      <button class="theme-toggle" onclick="toggleTheme()" title="Toggle theme">🌙</button>
      <div class="navbar-user" onclick="window.location.href='settings.html'">
        <img src="https://ui-avatars.com/api/?name=User&background=1c1c1c&color=c9a84c&size=80" alt="avatar" class="navbar-avatar" id="user-avatar">
        <span class="navbar-name" id="user-display-name">Loading...</span>
      </div>
    </nav>
    <div class="overlay" id="sidebar-overlay" onclick="toggleSidebar()"></div>
  `;
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebar-overlay');
  sb.classList.toggle('open');
  ov.classList.toggle('show');
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next === 'dark' ? '' : 'light');
  localStorage.setItem('theme', next);
  document.querySelector('.theme-toggle').textContent = next === 'light' ? '🌙' : '☀️';
}

function applyTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = '☀️';
  }
}

function formatCurrency(amount) {
  return '₦' + Number(amount || 0).toLocaleString('en-NG', { minimumFractionDigits: 2 });
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

async function initPage(activeId) {
  applyTheme();
  renderNavbar();
  renderSidebar(activeId);
  renderFooter();
  await loadUserHeader();
}
