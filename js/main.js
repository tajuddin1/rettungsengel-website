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

  const ARROW_PREV = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15.4 4.6a1 1 0 0 1 0 1.4L10.4 11l5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 0z" fill="currentColor"/></svg>`;
  const ARROW_NEXT = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8.6 4.6a1 1 0 0 1 1.4 0l5.7 5.7a1 1 0 0 1 0 1.4L10 17.4A1 1 0 1 1 8.6 16l5-5-5-5a1 1 0 0 1 0-1.4z" fill="currentColor"/></svg>`;

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
          <img src="${first.src}" alt="${escapeHTML(first.alt)}" draggable="false">
          ${images.length > 1 ? `
            <button class="gallery-btn prev" type="button" aria-label="Vorheriges Bild">${ARROW_PREV}</button>
            <button class="gallery-btn next" type="button" aria-label="Nächstes Bild">${ARROW_NEXT}</button>
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
    const mainWrap = node.querySelector(".gallery-main");
    const main = mainWrap.querySelector("img");
    const thumbs = [...node.querySelectorAll(".thumbs button")];

    function show(i) {
      index = (i + images.length) % images.length;
      main.src = images[index].src;
      main.alt = images[index].alt;
      thumbs.forEach((t, n) => t.classList.toggle("is-active", n === index));
    }

    node.querySelector(".prev")?.addEventListener("click", (e) => {
      e.stopPropagation();
      show(index - 1);
    });
    node.querySelector(".next")?.addEventListener("click", (e) => {
      e.stopPropagation();
      show(index + 1);
    });
    thumbs.forEach((t) => t.addEventListener("click", () => show(Number(t.dataset.index))));

    mainWrap.addEventListener("click", (e) => {
      if (e.target.closest(".gallery-btn")) return;
      if (mainWrap.dataset.didDrag === "1") return;
      if (window.ProductLightbox) {
        window.ProductLightbox.open(images, index);
      }
    });

    // Pointer drag to slide (mouse + touch)
    let startX = 0;
    let startY = 0;
    let dragging = false;
    let moved = false;

    mainWrap.addEventListener("pointerdown", (e) => {
      if (e.target.closest(".gallery-btn")) return;
      if (e.button !== undefined && e.button !== 0) return;
      dragging = true;
      moved = false;
      startX = e.clientX;
      startY = e.clientY;
      mainWrap.dataset.didDrag = "0";
      mainWrap.classList.add("is-dragging");
      mainWrap.setPointerCapture?.(e.pointerId);
    });

    mainWrap.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (Math.abs(dx) > 8 || Math.abs(dy) > 8) moved = true;
      if (Math.abs(dx) > Math.abs(dy)) {
        main.style.transform = `translateX(${dx * 0.35}px)`;
      }
    });

    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      mainWrap.classList.remove("is-dragging");
      main.style.transform = "";

      const dx = e.clientX - startX;
      if (Math.abs(dx) > 45) {
        mainWrap.dataset.didDrag = "1";
        show(index + (dx < 0 ? 1 : -1));
      } else if (moved) {
        mainWrap.dataset.didDrag = "1";
      }
    }

    mainWrap.addEventListener("pointerup", endDrag);
    mainWrap.addEventListener("pointercancel", endDrag);
  }

  function productList() {
    return Object.values(SITE.products).filter((p) => p.enabled);
  }

  function setAmazonLinks() {
    const url = SITE.amazonNavUrl;
    ["#nav-amazon", "#footer-amazon", "#cta-amazon", "#solution-amazon", "#mobile-amazon", "#hero-amazon"].forEach((sel) => {
      const node = $(sel);
      if (node) node.href = url;
    });
  }

  function renderNav() {
    const list = $("#nav-links");
    list.innerHTML = SITE.nav.map((item) => `<li><a href="${item.href}">${item.label}</a></li>`).join("");
    setAmazonLinks();
  }

  function renderHero() {
    const h = SITE.hero;
    $("#hero-kicker").textContent = h.kicker;
    $("#hero-title").textContent = h.title;
    $("#hero-subtitle").textContent = h.subtitle;
    $("#hero-text").textContent = h.text;

    const img = $("#hero-image");
    if (img) {
      img.src = h.image || "images/hero/hero-bg.jpg";
      img.alt = h.imageAlt || "";
    }

    const trust = $("#hero-trust");
    if (trust) {
      const items = h.trust || SITE.trustStrip || [];
      trust.innerHTML = items.map((item) => `<li>${escapeHTML(item)}</li>`).join("");
    }
  }

  function renderSituations() {
    const s = SITE.situations;
    $("#situations-kicker").textContent = s.kicker;
    $("#situations-title").textContent = s.title;
    $("#situations-text").textContent = s.text;

    $("#scenario-grid").innerHTML = s.items.map((item) => `
      <article class="scenario reveal ${item.size === "wide" ? "is-wide" : "is-tall"}">
        <div class="scenario-media">
          <img src="${item.image}" alt="${escapeHTML(item.alt)}" loading="lazy">
        </div>
        <div class="scenario-body">
          <span class="scenario-number">${item.number}</span>
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
      const chips = (p.highlights || []).map((h) => `
        <li>${escapeHTML(h)}</li>
      `).join("");

      const details = p.details
        ? `<p class="product-details">${escapeHTML(p.details)}</p>`
        : "";

      const card = el(`
        <article class="product-card reveal" id="detail-${p.id}">
          ${galleryHTML(p)}
          <div class="product-card-body">
            <div class="brand-tag">${escapeHTML(p.brand)}</div>
            <h3>${escapeHTML(p.name)}</h3>
            <p class="product-short">${escapeHTML(p.short)}</p>
            ${details}
            <ul class="feature-chips">${chips}</ul>
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
      const points = (p.highlights || []).map((h) => `
        <li><span aria-hidden="true"></span>${escapeHTML(h)}</li>
      `).join("");

      const details = p.details
        ? `<p class="product-details">${escapeHTML(p.details)}</p>`
        : "";

      const block = el(`
        <div class="partner-block reveal" id="detail-${p.id}">
          <article class="partner-card">
            ${galleryHTML(p)}
            <div class="partner-copy">
              <div class="partner-copy-top">
                <div class="brand-tag partner">${escapeHTML(p.brand)}</div>
                <h3>${escapeHTML(p.name)}</h3>
                <p class="product-short">${escapeHTML(p.short)}</p>
                ${details}
                <ul class="partner-points">${points}</ul>
              </div>
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
      <article class="benefit reveal">
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
      <article class="application-step reveal">
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
      <figure class="cert reveal">
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
          <p>Authentische Aufnahmen mit echten Einsatzkräften werden hier integriert.</p>
        </div>
      `;
    }

    $("#firefighter-title").textContent = SITE.firefighter.title;
    $("#firefighter-text").textContent = SITE.firefighter.text;
  }

  function renderReviews() {
    const r = SITE.reviews;
    if (!r) return;

    $("#reviews-kicker").textContent = r.kicker;
    $("#reviews-title").textContent = r.title;
    $("#reviews-text").textContent = r.text;

    $("#reviews-grid").innerHTML = (r.items || []).map((item) => `
      <article class="review reveal">
        <div class="review-stars" aria-hidden="true">★★★★★</div>
        <p>“${escapeHTML(item.text)}”</p>
        <footer>
          <strong>${escapeHTML(item.name)}</strong>
          <span>${escapeHTML(item.meta)}</span>
        </footer>
      </article>
    `).join("");
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
      const toggle = $("#nav-toggle");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Menü öffnen");
    });

    $("#nav-toggle").addEventListener("click", () => {
      const nav = $("#nav");
      const toggle = $("#nav-toggle");
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    });
  }

  function bindReveal() {
    const nodes = [...document.querySelectorAll(".reveal")];
    if (!nodes.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    nodes.forEach((node) => observer.observe(node));
  }

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
  renderVideos();
  renderReviews();
  renderCerts();
  renderAboutContact();
  bindNavigation();
  bindReveal();
})();
