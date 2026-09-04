/**
 * ProductLightbox — lightweight gallery lightbox for product images
 * Supports: open/close, prev/next, keyboard, swipe, counter
 */
(function (global) {
  const SVG_PREV = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15.4 4.6a1 1 0 0 1 0 1.4L10.4 11l5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 0z" fill="currentColor"/></svg>`;
  const SVG_NEXT = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8.6 4.6a1 1 0 0 1 1.4 0l5.7 5.7a1 1 0 0 1 0 1.4L10 17.4A1 1 0 1 1 8.6 16l5-5-5-5a1 1 0 0 1 0-1.4z" fill="currentColor"/></svg>`;
  const SVG_CLOSE = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.7 6.7a1 1 0 0 1 1.4 0L12 10.6l3.9-3.9a1 1 0 1 1 1.4 1.4L13.4 12l3.9 3.9a1 1 0 1 1-1.4 1.4L12 13.4l-3.9 3.9a1 1 0 1 1-1.4-1.4L10.6 12 6.7 8.1a1 1 0 0 1 0-1.4z" fill="currentColor"/></svg>`;

  let root = null;
  let imgEl = null;
  let counterEl = null;
  let images = [];
  let index = 0;
  let dragStartX = 0;
  let dragging = false;

  function ensureDom() {
    if (root) return;

    root = document.createElement("div");
    root.className = "plb";
    root.id = "product-lightbox";
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-label", "Produktbild");
    root.innerHTML = `
      <div class="plb-backdrop" data-plb-close></div>
      <button type="button" class="plb-close" aria-label="Schließen">${SVG_CLOSE}</button>
      <button type="button" class="plb-nav plb-prev" aria-label="Vorheriges Bild">${SVG_PREV}</button>
      <button type="button" class="plb-nav plb-next" aria-label="Nächstes Bild">${SVG_NEXT}</button>
      <div class="plb-stage">
        <img class="plb-image" alt="">
        <div class="plb-counter" aria-live="polite"></div>
      </div>
    `;
    document.body.appendChild(root);

    imgEl = root.querySelector(".plb-image");
    counterEl = root.querySelector(".plb-counter");

    root.querySelector(".plb-close").addEventListener("click", close);
    root.querySelector("[data-plb-close]").addEventListener("click", close);
    root.querySelector(".plb-prev").addEventListener("click", () => show(index - 1));
    root.querySelector(".plb-next").addEventListener("click", () => show(index + 1));

    bindStageDrag(root.querySelector(".plb-stage"));
  }

  function bindStageDrag(stage) {
    stage.addEventListener("pointerdown", (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      dragging = true;
      dragStartX = e.clientX;
      stage.setPointerCapture?.(e.pointerId);
    });

    stage.addEventListener("pointerup", (e) => {
      if (!dragging) return;
      dragging = false;
      const dx = e.clientX - dragStartX;
      if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    });

    stage.addEventListener("pointercancel", () => {
      dragging = false;
    });
  }

  function show(i) {
    if (!images.length) return;
    index = (i + images.length) % images.length;
    const item = images[index];
    imgEl.classList.remove("is-ready");
    imgEl.src = item.src;
    imgEl.alt = item.alt || "";
    counterEl.textContent = `${index + 1} / ${images.length}`;

    const single = images.length < 2;
    root.querySelector(".plb-prev").hidden = single;
    root.querySelector(".plb-next").hidden = single;
    counterEl.hidden = single;

    requestAnimationFrame(() => imgEl.classList.add("is-ready"));
  }

  function onKey(e) {
    if (!root?.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  }

  function open(list, startAt = 0) {
    ensureDom();
    images = (list || []).filter((item) => item && item.src);
    if (!images.length) return;

    show(startAt);
    root.classList.add("is-open");
    document.body.classList.add("lightbox-open");
    document.addEventListener("keydown", onKey);
  }

  function close() {
    if (!root) return;
    root.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
    document.removeEventListener("keydown", onKey);
  }

  global.ProductLightbox = { open, close };
})(window);
