(function () {
  const SITE = window.SITE;
  if (!SITE) return;

  const $ = (sel, root = document) => root.querySelector(sel);

  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function escapeHTML(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function amazonBtn(url, extraClass = "") {
    return `<a class="btn btn-red ${extraClass}" href="${url}" target="_blank" rel="noopener noreferrer"><span class="amz" aria-hidden="true"></span>Bei Amazon kaufen</a>`;
  }

  function galleryHTML(product) {
    const images = product.images || [];
    const first = images[0] || { src: "", alt: product.name };

    const badge = product.badge
      ? `<div class="badge" aria-label="Test ${escapeHTML(product.badge.score)} ${escapeHTML(product.badge.label)}"><div><b>${escapeHTML(product.badge.score)}</b><span>${escapeHTML(product.badge.label)}</span></div></div>`
      : "";

    const thumbs = images.map((img, i) => `
      <button type="button" class="${i === 0 ? "is-active" : ""}" data-index="${i}" aria-label="Bild ${i + 1} anzeigen">
        <img src="${img.src}" alt="">
      </button>
    `).join("");

    return `
      <div class="gallery" data-gallery="${product.id}">
        <div class="gallery-main">
          ${badge}
          <img src="${first.src}" alt="${escapeHTML(first.alt)}">
          ${images.length > 1 ? `
            <button class="gallery-btn prev" type="button" aria-label="Vorheriges Bild">‹</button>
            <button class="gallery-btn next" type="button" aria-label="Nächstes Bild">›</button>
          ` : ""}
        </div>
        ${images.length > 1 ? `<div class="thumbs">${thumbs}</div>` : ""}
      </div>
    `;
  }

  function bindGallery(node, product) {
    const images = product.images || [];
    if (!images.length) return;

    let index = 0;
    const main = node.querySelector(".gallery-main img");
    const thumbs = [...node.querySelectorAll(".thumbs button")];

    function show(i) {
      index = (i + images.length) % images.length;
      main.src = images[index].src;
      main.alt = images[index].alt;
      thumbs.forEach((t, n) => t.classList.toggle("is-active", n === index));
    }

    node.querySelector(".prev")?.addEventListener("click", () => show(index - 1));
    node.querySelector(".next")?.addEventListener("click", () => show(index + 1));
    thumbs.forEach((t) => t.addEventListener("click", () => show(Number(t.dataset.index))));
    main.addEventListener("click", () => openLightbox(images[index].src, images[index].alt));

    let startX = 0;
    main.addEventListener("touchstart", (e) => {
      startX = e.changedTouches[0].clientX;
    }, { passive: true });

    main.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
    });
  }

  function openLightbox(src, alt) {
    const box = $("#lightbox");
    box.querySelector("img").src = src;
    box.querySelector("img").alt = alt || "";
    box.classList.add("is-open");
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    $("#lightbox").classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
  }

  function productList() {
    return Object.values(SITE.products).filter((p) => p.enabled);
  }

  function renderNav() {
    const list = $("#nav-links");
    list.innerHTML = SITE.nav.map((item) => `<li><a href="${item.href}">${item.label}</a></li>`).join("");

    $("#nav-amazon").href = SITE.amazonNavUrl;
    const footerAmazon = $("#footer-amazon");
    if (footerAmazon) footerAmazon.href = SITE.amazonNavUrl;
    const ctaAmazon = $("#cta-amazon");
    if (ctaAmazon) ctaAmazon.href = SITE.amazonNavUrl;
  }

  function renderHero() {
    const h = SITE.hero;
    $("#hero-kicker").textContent = h.kicker;
    $("#hero-title").textContent = h.title;
    $("#hero-subtitle").textContent = h.subtitle;
    $("#hero-text").textContent = h.text;
    $("#hero-image").src = h.image;
    $("#hero-image").alt = h.imageAlt;
    $("#hero-image-label").textContent = h.imageLabel;

    $("#trust-strip").innerHTML = SITE.trustStrip.map((item) => `<span>${item}</span>`).join("");
  }

  function renderSituations() {
    const s = SITE.situations;
    $("#situations-kicker").textContent = s.kicker;
    $("#situations-title").textContent = s.title;
    $("#situations-text").textContent = s.text;

    $("#scenario-grid").innerHTML = s.items.map((item) => `
      <article class="scenario-card">
        <div class="scenario-image">
          <img src="${item.image}" alt="${escapeHTML(item.alt)}">
          <span class="scenario-number">${item.number}</span>
        </div>
        <div class="scenario-body">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      </article>
    `).join("");
  }

  function renderProblem() {
    const p = SITE.problem;
    $("#problem-kicker").textContent = p.kicker;
    $("#problem-title").textContent = p.title;
    $("#problem-text").textContent = p.text;
    $("#problem-image").src = p.image;
    $("#problem-image").alt = p.alt;
    $("#problem-points").innerHTML = p.points.map((point, i) => `
      <div class="problem-point">
        <span>0${i + 1}</span>
        <p>${point}</p>
      </div>
    `).join("");
  }

  function renderSolution() {
    const s = SITE.solution;
    $("#solution-kicker").textContent = s.kicker;
    $("#solution-title").textContent = s.title;
    $("#solution-text").textContent = s.text;
    $("#solution-promise").textContent = s.promise;
    $("#solution-image").src = s.image;
    $("#solution-image").alt = s.alt;
  }

  function renderProducts() {
    const featured = productList().filter((p) => !p.partner);
    const partner = productList().filter((p) => p.partner);
    const intro = SITE.productsIntro;

    $("#products-kicker").textContent = intro.kicker;
    $("#products-title").textContent = intro.title;
    $("#products-text").textContent = intro.text;

    $("#product-grid").innerHTML = "";

    featured.forEach((p) => {
      const bullets = (p.highlights || []).map((h) => `<li>${h}</li>`).join("");

      const card = el(`
        <article class="product-card" id="detail-${p.id}">
          ${galleryHTML(p)}
          <div class="product-card-body">
            <div class="brand-tag">${p.brand}</div>
            <h3>${p.name}</h3>
            <p class="product-short">${p.short}</p>
            <p>${p.details}</p>
            <ul class="bullets">${bullets}</ul>
            <div class="card-actions">${amazonBtn(p.amazonUrl)}</div>
          </div>
        </article>
      `);

      bindGallery(card, p);
      $("#product-grid").appendChild(card);
    });

    const partnerWrap = $("#partner-wrap");
    partnerWrap.innerHTML = "";

    partner.forEach((p) => {
      const bullets = (p.highlights || []).map((h) => `<li>${h}</li>`).join("");
      const block = el(`
        <div class="partner-block" id="detail-${p.id}">
          <div class="partner-note">
            <div>
              <span class="partner-label">Messepartner</span>
              <h3>${p.name}</h3>
            </div>
            <p>Für die Messe integriert und später einfach entfernbar.</p>
          </div>
          <article class="partner-card">
            ${galleryHTML(p)}
            <div class="partner-copy">
              <div class="brand-tag partner">${p.brand}</div>
              <h3>${p.name}</h3>
              <p>${p.details}</p>
              <ul class="bullets">${bullets}</ul>
              <div class="card-actions">${amazonBtn(p.amazonUrl)}</div>
            </div>
          </article>
        </div>
      `);
      bindGallery(block, p);
      partnerWrap.appendChild(block);
    });
  }

  function renderBenefits() {
    const intro = SITE.benefitsIntro;
    $("#benefits-kicker").textContent = intro.kicker;
    $("#benefits-title").textContent = intro.title;
    $("#benefits-text").textContent = intro.text;

    $("#benefits-grid").innerHTML = SITE.benefits.map((b) => `
      <article class="benefit">
        <div class="num">${b.num}</div>
        <h3>${b.title}</h3>
        <p>${b.text}</p>
      </article>
    `).join("");
  }

  function renderApplication() {
    const a = SITE.application;
    $("#application-kicker").textContent = a.kicker;
    $("#application-title").textContent = a.title;
    $("#application-text").textContent = a.text;

    $("#application-grid").innerHTML = a.items.map((item) => `
      <article class="application-card">
        <span>${item.icon}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `).join("");
  }

  function renderCerts() {
    const c = SITE.certificates;
    $("#certs-kicker").textContent = c.kicker;
    $("#certs-title").textContent = c.title;
    $("#certs-text").textContent = c.text;
    $("#cert-row").innerHTML = c.items.map((item) => `
      <figure class="cert">
        <img src="${item.image}" alt="${escapeHTML(item.name)}">
        <figcaption>${item.name}</figcaption>
      </figure>
    `).join("");
  }

  function renderVideos() {
    const v = SITE.videos;
    $("#video-kicker").textContent = v.kicker;
    $("#video-title").textContent = v.title;
    $("#video-text").textContent = v.text;

    const active = (v.items || []).filter((item) => item.enabled && item.youtubeId);
    const frame = $("#video-frame");

    if (active.length) {
      frame.classList.add("has-video");
      frame.innerHTML = active.map((item) => `
        <div class="video-slot">
          <iframe src="https://www.youtube.com/embed/${item.youtubeId}" title="${escapeHTML(item.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      `).join("");
    } else {
      frame.innerHTML = `
        <div class="video-placeholder">
          <span class="play-mark">▶</span>
          <strong>Feuerwehr-Content folgt</strong>
          <p>Die neuen Aufnahmen von der Messe werden hier integriert.</p>
        </div>
      `;
    }

    $("#firefighter-title").textContent = SITE.firefighter.title;
    $("#firefighter-text").textContent = SITE.firefighter.text;
  }

  function renderAboutContact() {
    $("#about-title").textContent = SITE.about.title;
    $("#about-text").textContent = SITE.about.text;
    $("#contact-title").textContent = SITE.contact.title;
    $("#contact-text").textContent = SITE.contact.text;
    $("#contact-note").textContent = SITE.contact.note;
    $("#cta-title").textContent = SITE.cta.title;
    $("#cta-text").textContent = SITE.cta.text;

    const mail = $("#contact-mail");
    mail.href = `mailto:${SITE.contactEmail}`;
    mail.textContent = SITE.contactEmail;
  }

  function scrollToTarget(target) {
    const header = $("#nav");
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }

  function bindNavigation() {
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      scrollToTarget(target);

      $("#nav").classList.remove("is-open");
      $("#nav-toggle").setAttribute("aria-expanded", "false");
    });

    $("#nav-toggle").addEventListener("click", () => {
      const nav = $("#nav");
      const open = nav.classList.toggle("is-open");
      $("#nav-toggle").setAttribute("aria-expanded", String(open));
    });
  }

  $("#lightbox-close").addEventListener("click", closeLightbox);
  $("#lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  renderNav();
  renderHero();
  renderSituations();
  $("#question-title").textContent = SITE.question.title;
  $("#question-text").textContent = SITE.question.text;
  renderProblem();
  renderSolution();
  renderProducts();
  renderBenefits();
  renderApplication();
  renderCerts();
  renderVideos();
  renderAboutContact();
  bindNavigation();
})();
