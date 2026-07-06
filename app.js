/* ============================================================================
   VISIT LOUDOUN — PARTNER PORTAL
   App logic: tab navigation, rendering from data.js, charts, animations.
   You should not need to edit this file to update numbers — edit data.js.
   ============================================================================ */
(function () {
  "use strict";
  var D = window.PORTAL_DATA;
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------------------------------------------------- inline icon set */
  var ICONS = {
    megaphone: '<path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    users:     '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    camera:    '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
    heart:     '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>',
    calendar:  '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    handshake: '<path d="M11 17l2 2a1 1 0 0 0 3-3"/><path d="M14 14l2.5 2.5a1 1 0 0 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 0 1-1.42 0L7.5 8.5a1 1 0 0 0-3 3L9 16"/><path d="M21 3l-3 3"/><path d="M3 3l3 3"/>',
    search:    '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    badge:     '<path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L3.8 7.7l5.4-.8z"/>'
  };
  function icon(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || ICONS.badge) + '</svg>';
  }

  /* ---------------------------------------------------- helpers */
  function el(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }
  function formatShort(n) {
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    if (n >= 1e3) return Math.round(n / 1e3) + 'K';
    return Math.round(n).toString();
  }

  /* ============================================================ META LABELS */
  function renderMeta() {
    $('#heroBadge').textContent = D.meta.quarterLabel + ' · data through ' + D.meta.dataThrough;
    $('#updateLine').textContent = 'Reporting window ' + D.meta.reportWindowLabel + ' · next refresh ' + D.meta.nextUpdate;
    $('#footUpdate').innerHTML = 'Data window: ' + D.meta.reportWindowLabel + '<br>Refreshes quarterly — next update ' + D.meta.nextUpdate + '.';
    $('#socialReferralInsight').innerHTML = '<p>' + D.website.socialReferralNote + '</p>';
  }

  /* ============================================================ REACH GROUPS */
  function renderReach() {
    var box = $('#reachGroups');
    D.reach.forEach(function (g) {
      var cards = g.cards.map(function (s) {
        return '<div class="stat-card">' +
          '<div class="num" data-count="' + s.value + '" data-display="' + s.display + '">0</div>' +
          '<div class="lbl">' + s.label + '</div>' +
        '</div>';
      }).join('');
      box.appendChild(el(
        '<div class="reach-group">' +
          '<div class="reach-head">' + icon(g.icon) + '<span class="reach-title">' + g.group + '</span></div>' +
          '<div class="stat-grid">' + cards + '</div>' +
          '<p class="reach-tip"><span class="reach-tip-label">How to market here:</span> ' + g.tip + '</p>' +
        '</div>'
      ));
    });
  }

  /* ============================================================ COUNT-UP */
  function countUp(node) {
    var target = parseFloat(node.getAttribute('data-count'));
    var display = node.getAttribute('data-display');
    var dur = 1400, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      node.textContent = formatShort(target * eased);
      if (p < 1) requestAnimationFrame(step);
      else if (display) node.textContent = display;
    }
    requestAnimationFrame(step);
  }

  /* ============================================================ BENEFITS */
  function renderBenefits() {
    var box = $('#benefitGrid');
    D.benefits.forEach(function (b) {
      box.appendChild(el(
        '<div class="card hover">' +
          '<div class="card-icon">' + icon(b.icon) + '</div>' +
          '<h3>' + b.title + '</h3>' +
          '<p>' + b.text + '</p>' +
        '</div>'
      ));
    });
  }

  /* ============================================================ CASE STUDY */
  function renderCase() {
    var c = D.caseStudy;
    var stats = c.stats.map(function (s) {
      return '<div class="cs"><div class="v">' + s.value + '</div><div class="l">' + s.label + '</div></div>';
    }).join('');
    $('#caseStudy').innerHTML =
      '<span class="eyebrow" style="color:var(--blonde-ale)">Proof it works</span>' +
      '<h3>' + c.title + '</h3>' +
      (c.url
        ? '<a class="post-name case-post-link" href="' + c.url + '" target="_blank" rel="noopener">' + c.post + ' ↗</a>'
        : '<div class="post-name">' + c.post + '</div>') +
      '<p>' + c.blurb + '</p>' +
      '<div class="case-stats">' + stats + '</div>';
  }

  /* ============================================================ NEW-AUDIENCE REACH */
  function renderNewAudience() {
    if (!D.newAudience) return;
    $('#newAudienceIntro').textContent = D.newAudience.intro;
    var box = $('#newAudienceCards');
    D.newAudience.cards.forEach(function (c) {
      var inner =
        '<span class="na-platform">' + c.platform + '</span>' +
        '<div class="na-stat">' + c.stat + '</div>' +
        '<div class="na-label">' + c.label + '</div>' +
        '<p class="na-sub">' + c.sub + '</p>' +
        (c.url ? '<span class="na-link">Follow our ' + c.platform + ' ↗</span>' : '');
      box.appendChild(el(c.url
        ? '<a class="card hover na-card na-card-link" href="' + c.url + '" target="_blank" rel="noopener">' + inner + '</a>'
        : '<div class="card hover na-card">' + inner + '</div>'));
    });
    $('#newAudienceNote').innerHTML = '<p><strong>Best format for new reach:</strong> ' + D.newAudience.formatNote + '</p>';
  }

  /* ============================================================ AUDIENCE */
  function renderAudience() {
    var bars = $('#ageBars');
    D.audience.ageBuckets.forEach(function (a) {
      bars.appendChild(el(
        '<div class="audience-row">' +
          '<span class="ar-lbl">' + a.range + '</span>' +
          '<span class="ar-bar"><span class="ar-fill" data-w="' + a.pct + '"></span></span>' +
          '<span class="ar-val">' + a.pct + '%</span>' +
        '</div>'
      ));
    });
    var pills = $('#audiencePills');
    pills.appendChild(el('<div class="pill-stat"><span class="v">' + D.audience.gender.female + '%</span><span class="l">women</span></div>'));
    pills.appendChild(el('<div class="pill-stat"><span class="v">' + D.audience.country.pct + '%</span><span class="l">United States</span></div>'));
    pills.appendChild(el('<div class="pill-stat"><span class="v">25–54</span><span class="l">core age</span></div>'));
    $('#audienceNote').textContent = D.audience.coreNote;
  }
  function animateAgeBars() {
    $$('#ageBars .ar-fill').forEach(function (f) { f.style.width = f.getAttribute('data-w') + '%'; });
  }

  /* ============================================================ VISITOR PROFILE */
  function renderVisitorProfile() {
    if (!D.visitorProfile) return;
    var intro = $('#visitorIntro'); if (intro) intro.textContent = D.visitorProfile.intro;
    var box = $('#visitorCards'); if (!box) return;
    D.visitorProfile.cards.forEach(function (c) {
      box.appendChild(el(
        '<div class="stat-card">' +
          '<div class="num">' + c.value + '</div>' +
          '<div class="lbl">' + c.label + '</div>' +
          '<div class="sub">' + c.sub + '</div>' +
        '</div>'
      ));
    });
    var src = $('#visitorSource'); if (src) src.textContent = D.visitorProfile.sourceNote;
  }

  /* ============================================================ PARTNER TOOLKIT PDF */
  function renderToolkitPdf() {
    if (!D.toolkitPdf) return;
    var host = $('#toolkitPdfBanner'); if (!host) return;
    var t = D.toolkitPdf;
    host.innerHTML =
      '<a class="pdf-banner" href="' + t.url + '" target="_blank" rel="noopener">' +
        '<span class="pdf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg></span>' +
        '<span class="pdf-copy"><span class="pdf-eyebrow">Official guide · PDF</span><span class="pdf-title">' + t.title + '</span><span class="pdf-blurb">' + t.blurb + '</span></span>' +
        '<span class="btn btn-gold pdf-btn">Open the toolkit ↗</span>' +
      '</a>';
  }

  /* ============================================================ SEARCH + WEB CARDS */
  function renderSearchWeb() {
    var sc = $('#searchCards');
    D.search.cards.forEach(function (c) {
      sc.appendChild(el('<div class="stat-card"><div class="num">' + c.value + '</div><div class="lbl">' + c.label + '</div><div class="sub">' + c.note + '</div></div>'));
    });
    var wc = $('#webCards');
    D.website.cards.forEach(function (c) {
      wc.appendChild(el('<div class="stat-card"><div class="num">' + c.value + '</div><div class="lbl">' + c.label + '</div><div class="chg">' + c.change + '</div></div>'));
    });
  }

  /* ============================================================ PLATFORM SWITCHER */
  function renderPlatformSwitch() {
    var keys = ['instagram', 'facebook', 'tiktok'];
    var names = { instagram: 'Instagram', facebook: 'Facebook', tiktok: 'TikTok' };
    var sw = $('#platformSwitch');
    keys.forEach(function (k, i) {
      var b = el('<button class="switch-btn' + (i === 0 ? ' active' : '') + '" data-platform="' + k + '">' + names[k] + '</button>');
      b.addEventListener('click', function () {
        $$('#platformSwitch .switch-btn').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        renderPosts(k);
      });
      sw.appendChild(b);
    });
    renderPosts('instagram');
  }
  var PLATFORM_NAMES = { instagram: 'Instagram', facebook: 'Facebook', tiktok: 'TikTok' };
  function renderPosts(key) {
    var box = $('#topPosts');
    box.innerHTML = '';
    var pname = PLATFORM_NAMES[key] || '';
    (D.topPosts[key] || []).forEach(function (p) {
      var stats = p.stats.map(function (s) {
        return '<div class="ps"><div class="v">' + s.value + '</div><div class="l">' + s.label + '</div></div>';
      }).join('');
      var titleHtml = p.url
        ? '<h4><a class="post-title-link" href="' + p.url + '" target="_blank" rel="noopener">' + p.title + '</a></h4>'
        : '<h4>' + p.title + '</h4>';
      var viewHtml = p.url
        ? '<a class="post-link" href="' + p.url + '" target="_blank" rel="noopener">View on ' + pname + ' ↗</a>'
        : '';
      box.appendChild(el(
        '<div class="post-card">' +
          '<span class="post-tag">' + p.tag + '</span>' +
          titleHtml +
          '<div class="post-stats">' + stats + '</div>' +
          viewHtml +
        '</div>'
      ));
    });
  }

  /* ============================================================ TOOLKIT */
  function copyToClipboard(text, btn) {
    var done = function () {
      var old = btn.textContent;
      btn.textContent = 'Copied!'; btn.classList.add('copied');
      setTimeout(function () { btn.textContent = old; btn.classList.remove('copied'); }, 1400);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, done);
    } else {
      var ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta);
      ta.select(); try { document.execCommand('copy'); } catch (e) {} document.body.removeChild(ta); done();
    }
  }
  function renderToolkit() {
    var hl = $('#handleList');
    D.toolkit.handles.forEach(function (h) {
      var handleHtml = h.url
        ? '<a class="hh hh-link" href="' + h.url + '" target="_blank" rel="noopener">' + h.handle + '</a>'
        : '<span class="hh">' + h.handle + '</span>';
      var row = el(
        '<div class="handle-row">' +
          '<span class="hp">' + h.platform + '</span>' +
          handleHtml +
          '<button class="copy-btn">Copy</button>' +
        '</div>'
      );
      $('.copy-btn', row).addEventListener('click', function () { copyToClipboard(h.handle, this); });
      hl.appendChild(row);
    });
    var il = $('#industryList');
    D.toolkit.industry.forEach(function (h) {
      var ihandle = h.url
        ? '<a class="hh hh-link" href="' + h.url + '" target="_blank" rel="noopener">' + h.handle + '</a>'
        : '<span class="hh">' + h.handle + '</span>';
      il.appendChild(el(
        '<div class="handle-row">' +
          '<span class="hp">' + h.platform + '</span>' +
          '<span style="text-align:right">' + ihandle +
          (h.note ? '<br><span class="hn">' + h.note + '</span>' : '') + '</span>' +
        '</div>'
      ));
    });
    var dos = $('#dosList');
    D.toolkit.dos.forEach(function (t) { dos.appendChild(el('<li><span class="mk">✓</span><span>' + t + '</span></li>')); });
    var don = $('#dontsList');
    D.toolkit.donts.forEach(function (t) { don.appendChild(el('<li><span class="mk">✕</span><span>' + t + '</span></li>')); });
    var ig = $('#ideaGrid');
    D.toolkit.contentIdeas.forEach(function (i) {
      ig.appendChild(el('<div class="idea-card"><h4>' + i.title + '</h4><p>' + i.text + '</p></div>'));
    });
    var cg = $('#contactGrid');
    D.contacts.forEach(function (c) {
      cg.appendChild(el(
        '<div class="contact-card">' +
          '<div class="nm">' + c.name + '</div>' +
          '<div class="rl">' + c.role + '</div>' +
          '<a href="mailto:' + c.email + '">' + c.email + '</a>' +
        '</div>'
      ));
    });
  }

  /* ============================================================ EMAIL BUTTONS */
  function wireEmailButtons() {
    var to = D.contacts.map(function (c) { return c.email; }).join(',');
    var infoSubject = encodeURIComponent('Partner update for Visit Loudoun');
    var infoBody = encodeURIComponent('Hi Visit Loudoun team,\n\nHere is an update about my business:\n\nBusiness name:\nWhat’s new:\nLinks / details:\n\nThanks!');
    var photoSubject = encodeURIComponent('Photos to share with Visit Loudoun');
    var photoBody = encodeURIComponent('Hi Visit Loudoun team,\n\nI have photos/video I’d like to share for use on your channels.\n\nBusiness name:\nWhere the photos can be downloaded:\nUsage rights / credit:\n\nThanks!');
    var infoBtn = $('#emailInfoBtn');
    if (infoBtn) infoBtn.setAttribute('href', 'mailto:' + to + '?subject=' + infoSubject + '&body=' + infoBody);
    var photoBtn = $('#emailPhotoBtn');
    if (photoBtn) photoBtn.setAttribute('href', 'mailto:' + to + '?subject=' + photoSubject + '&body=' + photoBody);
  }

  /* ============================================================ FOOTER HANDLES */
  function renderFootHandles() {
    var fh = $('#footHandles');
    D.toolkit.handles.forEach(function (h) {
      var label = h.platform + ' ' + h.handle;
      fh.appendChild(el(h.url
        ? '<a href="' + h.url + '" target="_blank" rel="noopener">' + label + '</a>'
        : '<span>' + label + '</span>'));
    });
  }

  /* ============================================================ CHARTS */
  var charts = {};
  var chartFont = { family: "Inter, Arial, sans-serif" };
  Chart.defaults.font.family = chartFont.family;
  Chart.defaults.color = '#4a4f4d';

  function buildGrowthChart() {
    if (charts.growth) return;
    var labels = D.platforms.map(function (p) { return p.name; });
    charts.growth = new Chart($('#growthChart'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          { label: 'Start of window', data: D.platforms.map(function (p) { return p.start; }), backgroundColor: '#A7BDBE', borderRadius: 6, maxBarThickness: 26 },
          { label: 'Now',             data: D.platforms.map(function (p) { return p.current; }), backgroundColor: '#77092E', borderRadius: 6, maxBarThickness: 26 }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 12, padding: 16 } },
          tooltip: { callbacks: { afterBody: function (items) {
            var p = D.platforms[items[0].dataIndex];
            return 'Growth: +' + p.growthPct + '%';
          } } }
        },
        scales: { y: { beginAtZero: true, ticks: { callback: function (v) { return formatShort(v); } }, grid: { color: '#eee' } }, x: { grid: { display: false } } }
      }
    });
  }

  function buildChannelChart() {
    if (charts.channel) return;
    var palette = ['#77092E', '#3E495B', '#7B8F86', '#D5BC5F', '#9D5950', '#608FBB', '#A7BDBE', '#C9C9C1'];
    charts.channel = new Chart($('#channelChart'), {
      type: 'doughnut',
      data: {
        labels: D.website.channels.map(function (c) { return c.label; }),
        datasets: [{ data: D.website.channels.map(function (c) { return c.pct; }), backgroundColor: palette, borderColor: '#fff', borderWidth: 2 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: '58%',
        plugins: {
          legend: { position: 'right', labels: { boxWidth: 12, padding: 10, font: { size: 12 } } },
          tooltip: { callbacks: { label: function (ctx) { return ctx.label + ': ' + ctx.parsed + '%'; } } }
        }
      }
    });
  }

  function buildStatesChart() {
    if (charts.states) return;
    charts.states = new Chart($('#statesChart'), {
      type: 'bar',
      data: {
        labels: D.website.topStates.map(function (s) { return s.label; }),
        datasets: [{ data: D.website.topStates.map(function (s) { return s.pct; }), backgroundColor: '#3E495B', borderRadius: 6, maxBarThickness: 22 }]
      },
      options: {
        indexAxis: 'y', responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (ctx) { return ctx.parsed.x + '% of visitors'; } } } },
        scales: { x: { beginAtZero: true, ticks: { callback: function (v) { return v + '%'; } }, grid: { color: '#eee' } }, y: { grid: { display: false } } }
      }
    });
  }

  /* ============================================================ TABS */
  function activateTab(name) {
    $$('.tab-btn').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-tab') === name); });
    $$('.panel').forEach(function (p) { p.classList.toggle('active', p.id === 'panel-' + name); });
    // lazily build charts that live in just-shown panels (avoids 0-size canvas)
    if (name === 'dashboard') { buildGrowthChart(); buildChannelChart(); }
    if (name === 'why') { buildStatesChart(); animateAgeBars(); }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // re-run reveal for the newly shown panel
    setTimeout(revealNow, 60);
    closeMenu();
  }
  function wireTabs() {
    $$('.tab-btn').forEach(function (b) { b.addEventListener('click', function () { activateTab(b.getAttribute('data-tab')); }); });
    $$('[data-go]').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); activateTab(a.getAttribute('data-go')); }); });
  }

  /* ---------------- mobile menu ---------------- */
  function closeMenu() { var t = $('#tabs'); if (t) t.classList.remove('open'); }
  function wireMenu() {
    var mt = $('#menuToggle');
    if (mt) mt.addEventListener('click', function () { $('#tabs').classList.toggle('open'); });
  }

  /* ============================================================ REVEAL + COUNT observers */
  var revealObserver, countObserver;
  function setupObservers() {
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); } });
    }, { threshold: 0.12 });
    countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); countObserver.unobserve(e.target); } });
    }, { threshold: 0.4 });
    $$('.reveal').forEach(function (n) { revealObserver.observe(n); });
    $$('[data-count]').forEach(function (n) { countObserver.observe(n); });
  }
  // force reveal for elements already in view in the active panel
  function revealNow() {
    $$('.panel.active .reveal').forEach(function (n) {
      var r = n.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) n.classList.add('in');
    });
  }

  /* ============================================================ INIT */
  function init() {
    if (!D) { console.error('PORTAL_DATA missing — check data.js'); return; }
    renderMeta();
    renderReach();
    renderBenefits();
    renderNewAudience();
    renderCase();
    renderAudience();
    renderVisitorProfile();
    renderToolkitPdf();
    renderSearchWeb();
    renderPlatformSwitch();
    renderToolkit();
    wireEmailButtons();
    renderFootHandles();
    wireTabs();
    wireMenu();
    setupObservers();
    // dashboard is active at load
    buildGrowthChart();
    buildChannelChart();
    revealNow();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
