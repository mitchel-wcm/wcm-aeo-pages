// Shared header + footer for Community pages
// Usage: include after <body> opens, with data-active attribute for nav state
// <script src="assets/site-chrome.js" data-active="community"></script>

(function() {
  const currentScript = document.currentScript;
  const active = currentScript?.dataset?.active || '';

  const navItems = [
    { key: 'home', label: 'Home', href: 'https://www.wilsoncountymotors.com/' },
    { key: 'new', label: 'New Inventory', href: 'https://www.wilsoncountymotors.com/new-inventory/' },
    { key: 'used', label: 'Used Inventory', href: 'https://www.wilsoncountymotors.com/used-inventory/' },
    { key: 'service', label: 'Service', href: 'https://www.wilsoncountymotors.com/service/' },
    { key: 'finance', label: 'Finance', href: 'https://www.wilsoncountymotors.com/finance/' },
    { key: 'community', label: 'Community', href: '/community/' },
    { key: 'about', label: 'About', href: 'https://www.wilsoncountymotors.com/about/' },
  ];

  const navHTML = navItems.map(n =>
    `<a href="${n.href}" ${n.key === active ? 'class="active" aria-current="page"' : ''}>${n.label}</a>`
  ).join('');

  const header = `
  <div class="site-utility">
    <div class="site-utility-inner">
      <span class="since">A Bone Family tradition · since 1927</span>
      <div class="utility-links">
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>903 S Hartmann Dr, Lebanon, TN</span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:+16155495079" class="tel">(615) 549-5079</a></span>
        <span>Mon–Sat 8a–7p</span>
      </div>
    </div>
  </div>
  <header class="site-header" role="banner">
    <div class="site-header-inner">
      <a href="https://www.wilsoncountymotors.com/" class="site-brand" aria-label="Wilson County Chevrolet Buick GMC home">
        <span class="wordmark">wilson<br>county</span>
        <span class="divider" aria-hidden="true"></span>
        <span class="sub">Chevrolet<br>Buick · GMC</span>
      </a>
      <nav class="site-nav" aria-label="Primary">${navHTML}</nav>
    </div>
  </header>`;

  const footer = `
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-wordmark">wilson<br>county</div>
          <div class="footer-sub">Chevrolet · Buick · GMC</div>
          <p style="font-family:var(--font-serif);font-size:14px;line-height:1.6;color:var(--fg-2);max-width:300px;margin:0;">A Bone Family tradition since 1927. Serving Lebanon, Nashville, Murfreesboro, and middle Tennessee.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <a href="https://www.wilsoncountymotors.com/new-inventory/">New Vehicles</a>
          <a href="https://www.wilsoncountymotors.com/used-inventory/">Pre-Owned</a>
          <a href="https://www.wilsoncountymotors.com/finance/">Finance</a>
          <a href="https://www.wilsoncountymotors.com/service/">Service</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/community/">Overview</a>
          <a href="/community/bbb.html">Better Business Bureau</a>
          <a href="/community/business-person-of-the-year.html">Business Person of the Year</a>
          <a href="/community/cumberland-university.html">Cumberland University</a>
          <a href="/community/hermitage.html">Andrew Jackson&rsquo;s Hermitage</a>
        </div>
        <div>
          <h4>Visit</h4>
          <address style="font-family:var(--font-serif);font-size:14px;line-height:1.6;color:var(--fg-2);font-style:normal;">
            903 South Hartmann Dr<br>Lebanon, TN 37090
          </address>
          <div style="font-family:var(--font-mono);font-size:15px;font-weight:600;margin-top:10px;color:var(--wc-ink-900);">(615) 549-5079</div>
          <div style="font-family:var(--font-ui);font-size:13px;margin-top:10px;color:var(--fg-3);">Mon–Sat · 8am–7pm<br>Sunday Closed</div>
        </div>
      </div>
      <div class="footer-bar">
        <div>© 1927–2026 Wilson County Motors, LLC · All rights reserved</div>
        <div style="display:flex;gap:20px;">
          <a href="#" style="color:var(--fg-3);">Privacy</a>
          <a href="#" style="color:var(--fg-3);">Accessibility</a>
          <a href="#" style="color:var(--fg-3);">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>`;

  // Inject at current script position for header, append footer before </body>
  document.write(header);
  window.addEventListener('DOMContentLoaded', () => {
    const f = document.createElement('div');
    f.innerHTML = footer;
    document.body.appendChild(f.firstElementChild);
  });
})();
