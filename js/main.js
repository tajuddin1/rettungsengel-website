(function () {
  const SITE = window.SITE;

  if (!SITE) return;

  const $ = (sel, root = document) => root.querySelector(sel);

  function el(html) {
    const t = document.createElement("template");

    t.innerHTML = html.trim();

    return t.content.firstElementChild;
  }

  function amazonBtn(url, extraClass = "") {
    return `<a class="btn btn-red ${extraClass}" href="${url}" target="_blank" rel="noopener noreferrer"><span class="amz" aria-hidden="true"></span>Buy on Amazon</a>`;
  }

  function galleryHTML(product) {
    const images = product.images || [];

    const first = images[0] || { src: "", alt: product.name };

    const badge = product.badge
      ? `<div class="badge" aria-label="Test result ${product.badge.score} ${product.badge.label}"><div><b>${product.badge.score}</b><span>${product.badge.label}</span></div></div>`
      : "";

    const thumbs = images

      .map(
        (img, i) =>
          `<button type="button" class="${i === 0 ? "is-active" : ""}" data-index="${i}" aria-label="View image ${i + 1}">

            <img src="${img.src}" alt="">

          </button>`,
      )

      .join("");

    return `

      <div class="gallery" data-gallery="${product.id}">

        <div class="gallery-main">

          ${badge}

          <img src="${first.src}" alt="${first.alt}">

          ${
            images.length > 1
              ? `<button class="gallery-btn prev" type="button" aria-label="Previous image">‹</button>

                 <button class="gallery-btn next" type="button" aria-label="Next image">›</button>`
              : ""
          }

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

    node
      .querySelector(".prev")
      ?.addEventListener("click", () => show(index - 1));

    node
      .querySelector(".next")
      ?.addEventListener("click", () => show(index + 1));

    thumbs.forEach((t) =>
      t.addEventListener("click", () => show(Number(t.dataset.index))),
    );

    main.addEventListener("click", () =>
      openLightbox(images[index].src, images[index].alt),
    );

    let startX = 0;

    main.addEventListener(
      "touchstart",
      (e) => {
        startX = e.changedTouches[0].clientX;
      },
      { passive: true },
    );

    main.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - startX;

      if (Math.abs(dx) > 40) {
        show(index + (dx < 0 ? 1 : -1));
      }
    });
  }

  function openLightbox(src, alt) {
    const box = $("#lightbox");

    box.querySelector("img").src = src;

    box.querySelector("img").alt = alt || "";

    box.classList.add("is-open");
  }

  function productList() {
    return Object.values(SITE.products).filter((p) => p.enabled);
  }

  function renderNav() {
    const list = $("#nav-links");

    list.innerHTML = SITE.nav

      .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)

      .join("");

    $("#nav-amazon").href = SITE.amazonNavUrl;

    const footerAmazon = document.getElementById("footer-amazon");

    if (footerAmazon) footerAmazon.href = SITE.amazonNavUrl;

    const ctaAmazon = document.getElementById("cta-amazon");

    if (ctaAmazon) {
      ctaAmazon.href = SITE.amazonNavUrl;
    }
  }

  function renderHero() {
    const h = SITE.hero;

    $("#hero-kicker").textContent = h.kicker;

    $("#hero-title").textContent = h.title;

    $("#hero-subtitle").textContent = h.subtitle;

    $("#hero-text").textContent = h.text;

    const img = $("#hero-image");

    img.src = h.image;

    img.alt = h.imageAlt;

    const strip = $("#trust-strip");

    if (strip && SITE.trustStrip) {
      strip.innerHTML = SITE.trustStrip
        .map((item) => `<span>${item}</span>`)
        .join("");
    }
  }

  function renderProducts() {
    const featured = productList().filter((p) => !p.partner);

    const partner = productList().filter((p) => p.partner);

    const intro = SITE.productsIntro;

    $("#products-kicker").textContent = intro.kicker;

    $("#products-title").textContent = intro.title;

    $("#products-text").textContent = intro.text;

    const grid = $("#product-grid");

    grid.innerHTML = "";

    featured.forEach((p) => {
      const bullets = (p.highlights || []).map((h) => `<li>${h}</li>`).join("");

      const card = el(`

        <article class="card" id="detail-${p.id}">

          ${galleryHTML(p)}

          <div class="card-body">

            <div class="brand-tag">${p.brand}</div>

            <h3>${p.name}</h3>

            <p>${p.details}</p>

            <ul class="bullets">${bullets}</ul>

            <div class="card-actions">

              ${amazonBtn(p.amazonUrl)}

            </div>

          </div>

        </article>

      `);

      bindGallery(card, p);

      grid.appendChild(card);
    });

    const partnerWrap = $("#partner-wrap");

    partnerWrap.innerHTML = "";

    partner.forEach((p) => {
      const bullets = (p.highlights || []).map((h) => `<li>${h}</li>`).join("");

      const block = el(`

        <div class="partner-block" id="detail-${p.id}">

          <div class="partner-note">

            <h3>Trade-fair partner</h3>

            <p>Included for the fair — easy to remove later.</p>

          </div>

          <article class="partner-card">

            ${galleryHTML(p)}

            <div class="partner-copy">

              <div class="brand-tag partner">${p.brand}</div>

              <h3>${p.name}</h3>

              <p>${p.details}</p>

              <ul class="bullets">${bullets}</ul>

              <div class="card-actions">

                ${amazonBtn(p.amazonUrl)}

              </div>

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

    if (intro) {
      $("#benefits-kicker").textContent = intro.kicker;

      $("#benefits-title").textContent = intro.title;
    }

    $("#benefits-grid").innerHTML = SITE.benefits

      .map(
        (b) => `

        <article class="benefit">

          <div class="num">${b.num}</div>

          <h3>${b.title}</h3>

          <p>${b.text}</p>

        </article>`,
      )

      .join("");
  }

  function renderCerts() {
    const c = SITE.certificates;

    $("#certs-kicker").textContent = c.kicker;

    $("#certs-title").textContent = c.title;

    $("#certs-text").textContent = c.text;

    $("#cert-row").innerHTML = c.items

      .map(
        (item) => `

        <figure class="cert">

          <img src="${item.image}" alt="${item.name}">

          <figcaption>${item.name}</figcaption>

        </figure>`,
      )

      .join("");
  }

  function renderVideos() {
    const v = SITE.videos;

    $("#video-kicker").textContent = v.kicker;

    $("#video-title").textContent = v.title;

    $("#video-text").textContent = v.text;

    const active = (v.items || []).filter(
      (item) => item.enabled && item.youtubeId,
    );

    const frame = $("#video-frame");

    if (active.length === 1) {
      frame.classList.add("has-video");

      frame.innerHTML = `<iframe src="https://www.youtube.com/embed/${active[0].youtubeId}" title="${active[0].title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else if (active.length > 1) {
      frame.classList.add("has-many");

      frame.innerHTML = active

        .map(
          (item) =>
            `<div class="video-slot"><iframe src="https://www.youtube.com/embed/${item.youtubeId}" title="${item.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`,
        )

        .join("");
    } else {
      frame.innerHTML = `<div><div class="label">Trade fair</div><h3>Authentic firefighter content</h3><p class="soon">Videos will be added after filming with firefighters.</p></div>`;
    }
  }

  function renderAboutContact() {
    $("#about-title").textContent = SITE.about.title;

    $("#about-text").textContent = SITE.about.text;

    $("#contact-title").textContent = SITE.contact.title;

    $("#contact-text").textContent = SITE.contact.text;

    $("#contact-note").textContent = SITE.contact.note;

    if (SITE.cta?.title) {
      $("#cta-title").textContent = SITE.cta.title;
    }

    const mail = $("#contact-mail");

    mail.href = `mailto:${SITE.contactEmail}`;

    mail.textContent = SITE.contactEmail;
  }

  /*
   * Navigation
   * Smooth scrolling with automatic header offset.
   * Keeps the mobile menu closing behavior.
   */

  document.getElementById("nav-links").addEventListener("click", (e) => {
    const link = e.target.closest("a");

    if (!link) return;

    const href = link.getAttribute("href");

    if (href && href.startsWith("#")) {
      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const header =
          document.querySelector("header") ||
          document.querySelector(".site-header") ||
          document.querySelector(".header");

        const headerHeight = header ? header.offsetHeight : 0;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,

          behavior: "smooth",
        });
      }
    }

    // Keep mobile navigation behavior
    document.getElementById("nav").classList.remove("is-open");
  });

  document.getElementById("nav-toggle").addEventListener("click", () => {
    const nav = document.getElementById("nav");

    const open = nav.classList.toggle("is-open");

    document
      .getElementById("nav-toggle")
      .setAttribute("aria-expanded", String(open));
  });

  document.getElementById("lightbox-close").addEventListener("click", () => {
    document.getElementById("lightbox").classList.remove("is-open");
  });

  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") {
      document.getElementById("lightbox").classList.remove("is-open");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.getElementById("lightbox").classList.remove("is-open");
    }
  });

  renderNav();

  renderHero();

  renderProducts();

  renderBenefits();

  renderCerts();

  renderVideos();

  renderAboutContact();
})();
