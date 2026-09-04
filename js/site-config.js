/**
 * RETTUNGSENGEL — Inhalte zentral verwalten
 * Nur Inhalte, Bilder, Links und Videos ändern.
 * Layout und Funktionalität bleiben in HTML/CSS/JS.
 */
window.SITE = {
  brand: "Rettungsengel",
  contactEmail: "hello@rettungsengel.de",

  nav: [
    { label: "Startseite", href: "#top" },
    { label: "Situationen", href: "#situations" },
    { label: "Produkte", href: "#products" },
    { label: "Vorteile", href: "#benefits" },
    { label: "Zertifikate", href: "#certificates" },
    { label: "Feuerwehr", href: "#firefighters" },
    { label: "Kontakt", href: "#contact" }
  ],

  amazonNavUrl: "https://www.amazon.de/dp/B0FJYLPKMJ",

  trustStrip: [
    "Geprüfte Qualität",
    "Für echte Notfälle entwickelt",
    "Sofort griffbereit",
    "Bei Amazon erhältlich"
  ],

  hero: {
    kicker: "Rettungsengel",
    title: "Wenn jede Sekunde zählt, zählt Vorbereitung.",
    subtitle: "Was würden Sie tun, wenn Sie plötzlich nicht mehr aus Ihrem Auto kommen?",
    text: "Unfall. Feuer. Wasser. Eine blockierte Tür oder ein festsitzender Sicherheitsgurt. Rettungsengel entwickelt kompakte Rettungswerkzeuge für genau die Momente, die niemand plant.",
    image: "images/products/pen/11.jpg",
    imageAlt: "Rettungsengel Notfallstift für Unfall, Brand und Hochwasser",
    imageLabel: "Bereit, bevor es passiert."
  },

  situations: {
    kicker: "Es passiert ohne Vorwarnung",
    title: "Eine normale Fahrt kann in Sekunden anders aussehen.",
    text: "Wir denken nicht zuerst an ein Produkt. Wir denken an den Moment, in dem Sie es wirklich brauchen.",
    items: [
      {
        number: "01",
        title: "Fahrzeugbrand",
        text: "Rauch steigt auf. Hitze nimmt zu. Sie müssen schnell raus.",
        image: "images/products/hammer/05.jpg",
        alt: "Notfallhammer beim Einschlagen einer Autoscheibe"
      },
      {
        number: "02",
        title: "Unfall & blockierte Tür",
        text: "Die Tür lässt sich nicht öffnen. Der Sicherheitsgurt sitzt fest.",
        image: "images/products/pen/07.jpg",
        alt: "Gurtschneider des Rettungsengel Notfallstifts"
      },
      {
        number: "03",
        title: "Kinder im Auto",
        text: "Wenn Familie an Bord ist, zählt jede Sekunde doppelt.",
        image: "images/products/pen/11.jpg",
        alt: "Rettungsengel Notfallstift für kritische Situationen"
      },
      {
        number: "04",
        title: "Wasser & Alltag",
        text: "Kritische Situationen kündigen sich nicht an. Vorbereitung schon.",
        image: "images/products/hammer/06.jpg",
        alt: "Rettungsengel Gurtschneider im Einsatz"
      }
    ]
  },

  question: {
    title: "Hätten Sie im Ernstfall alles griffbereit?",
    text: "Nicht irgendwann. Nicht im Kofferraum. Sondern genau dort, wo Sie es erreichen können, wenn keine Zeit zum Suchen bleibt."
  },

  problem: {
    kicker: "Das eigentliche Problem",
    title: "In einem Notfall fehlt nicht nur Zeit. Es fehlt Handlungsspielraum.",
    text: "Wenn eine Tür blockiert ist oder der Gurt sich nicht lösen lässt, können vertraute Abläufe plötzlich nicht mehr funktionieren. Genau deshalb gehört ein Rettungswerkzeug dorthin, wo Sie es sofort erreichen.",
    image: "images/products/hammer/07.jpg",
    alt: "Rettungsengel Notfallhammer in seiner Halterung",
    points: [
      "Der Sicherheitsgurt muss schnell durchtrennt werden können.",
      "Eine Seitenscheibe muss im Notfall erreichbar sein.",
      "Das Werkzeug darf nicht erst gesucht werden müssen."
    ]
  },

  solution: {
    kicker: "Die Lösung",
    title: "Rettungsengel. Für den Moment, in dem Sie ihn brauchen.",
    text: "Kompakte Rettungswerkzeuge, klare Funktionen und eine Platzierung, die schnellen Zugriff ermöglicht. Kein unnötiger Ballast. Sondern Vorbereitung für einen Ausnahmezustand.",
    promise: "Gurt durchtrennen. Scheibe einschlagen. Raus.",
    image: "images/products/hammer/01.jpg",
    alt: "Rettungsengel 2-in-1 Notfallhammer"
  },

  productsIntro: {
    kicker: "Die Rettungsengel Werkzeuge",
    title: "Zwei Wege, vorbereitet zu sein.",
    text: "Der 2-in-1 Notfallhammer ist für den festen Platz im Fahrzeug gedacht. Der Notfallstift verbindet Rettungsfunktionen mit einem Format, das Sie auch außerhalb des Autos bei sich tragen können."
  },

  products: {
    hammer: {
      enabled: true,
      id: "hammer",
      brand: "Rettungsengel",
      name: "2-in-1 Notfallhammer",
      short: "Glasbrecher und Gurtschneider in einem robusten Werkzeug. Immer griffbereit in der Türablage – für Fahrer und Beifahrer.",
      amazonUrl: "https://www.amazon.de/dp/B0FJYLPKMJ",
      images: [
        { src: "images/products/hammer/01.jpg", alt: "Rettungsengel 2-in-1 Notfallhammer mit Verpackung" },
        { src: "images/products/hammer/02.jpg", alt: "Rettungsengel Notfallhammer 2er-Set mit Verpackung" },
        { src: "images/products/hammer/03.jpg", alt: "Abmessungen des Notfallhammers und Halterung" },
        { src: "images/products/hammer/04.jpg", alt: "2er-Set für Fahrer und Beifahrer" },
        { src: "images/products/hammer/05.jpg", alt: "Notfallhammer beim Einschlagen einer Autoscheibe" },
        { src: "images/products/hammer/06.jpg", alt: "Gurtschneider beim Durchtrennen eines Sicherheitsgurts" },
        { src: "images/products/hammer/07.jpg", alt: "Notfallhammer in seiner Halterung" },
        { src: "images/products/hammer/08.jpg", alt: "Rettungsengel Qualität im Vergleich zu anderen Herstellern" }
      ],
      highlights: [
        "Gehärtete Spitzen zum Einschlagen von Seitenscheiben",
        "Integrierter, sicher geschützter Gurtschneider",
        "Inklusive Halterung für schnellen Zugriff",
        "Übungsglas zum Erlernen der richtigen Bewegung inklusive"
      ],
      details: "Der Rettungsengel 2-in-1 Notfallhammer kombiniert einen verstärkten Glasbrecher mit einem scharfen, geschützten Gurtschneider. Bei einem Unfall, Fahrzeugbrand oder Hochwasser hilft er dabei, sich zu befreien und das Fahrzeug zu verlassen. Die Halterung hält ihn griffbereit – kein Suchen, kein Zögern."
    },

    pen: {
      enabled: true,
      id: "pen",
      brand: "Rettungsengel",
      name: "Notfallstift",
      badge: { score: "1,1", label: "Sehr Gut" },
      short: "Ein kompaktes Rettungswerkzeug für den Alltag – Glasbrecher und Gurtschneider in einem Format, das Sie bei sich tragen können.",
      amazonUrl: "https://www.amazon.de/dp/B0FMYZ5NDR",
      images: [
        { src: "images/products/pen/01.jpg", alt: "Rettungsengel Notfallstift mit Verpackung" },
        { src: "images/products/pen/02.jpg", alt: "Funktionen des Notfallstifts und Prüfheld 1,1 Sehr Gut Bewertung" },
        { src: "images/products/pen/03.jpg", alt: "Abmessungen des Notfallstifts und Halterung" },
        { src: "images/products/pen/04.jpg", alt: "Notfallstift im Fahrzeug befestigt" },
        { src: "images/products/pen/05.jpg", alt: "Notfallstift beim Einschlagen einer Autoscheibe mit 6 kg Aufprallkraft" },
        { src: "images/products/pen/06.jpg", alt: "Federmechanismus des Glasbrechers im Notfallstift" },
        { src: "images/products/pen/07.jpg", alt: "Gurtschneider des Notfallstifts im Einsatz" },
        { src: "images/products/pen/08.jpg", alt: "Nahaufnahme des Glasbrechers des Notfallstifts" },
        { src: "images/products/pen/09.jpg", alt: "2-in-1 Funktionen des Notfallstifts im Detail" },
        { src: "images/products/pen/10.jpg", alt: "Rettungsengel Notfallstift, kompakt und jederzeit einsatzbereit" },
        { src: "images/products/pen/11.jpg", alt: "Notfallstift für Situationen wie Hochwasser, Brand und Unfall" },
        { src: "images/products/pen/12.jpg", alt: "Rettungsengel Notfallstift im Vergleich zu anderen Herstellern" }
      ],
      highlights: [
        "Alltagsformat – für Tasche, Rucksack oder Handschuhfach",
        "Glasbrecherspitze aus Wolfram",
        "Gurtschneider immer griffbereit",
        "Unabhängig getestet: 1,1 Sehr Gut"
      ],
      details: "Der Rettungsengel Notfallstift ist Sicherheit, die Sie über das Auto hinaus mitnehmen können. Kompakt genug für den Alltag und stark genug für den Moment, den man sich niemals wünscht. Im Produkttest mit 1,1 Sehr Gut bewertet."
    },

    saniwerk: {
      enabled: true,
      id: "saniwerk",
      partner: true,
      brand: "Saniwerk",
      name: "Auto-Verbandtasche",
      short: "Produkt unseres Messepartners: eine kompakte, DIN-konforme Verbandtasche für das Fahrzeug.",
      amazonUrl: "https://www.amazon.de/dp/B0H3V1D8GB",
      images: [
        { src: "images/products/saniwerk/1.jpg", alt: "Saniwerk Auto-Verbandtasche" },
        { src: "images/products/saniwerk/2.jpg", alt: "Inhalt der Erste-Hilfe-Tasche" },
        { src: "images/products/saniwerk/3.jpg", alt: "Inhalt der Erste-Hilfe-Tasche" },
        { src: "images/products/saniwerk/4.jpg", alt: "Inhalt der Erste-Hilfe-Tasche" },
        { src: "images/products/saniwerk/5.jpg", alt: "Inhalt der Erste-Hilfe-Tasche" },
        { src: "images/products/saniwerk/6.jpg", alt: "Inhalt der Erste-Hilfe-Tasche" }
      ],
      highlights: [
        "DIN 13164 Fahrzeug-Verbandtasche",
        "Kompakte Tasche, einfach zu verstauen",
        "Übersichtlich organisierter Inhalt",
        "Partnerprodukt für die Messe"
      ],
      details: "Saniwerk begleitet Rettungsengel als Messepartner mit einer kompakten Auto-Verbandtasche. Es handelt sich um ein Partnerprodukt – Rettungsengel bleibt die Hauptmarke dieser Website."
    }
  },

  benefitsIntro: {
    kicker: "Warum Rettungsengel?",
    title: "Entwickelt für die Momente, die niemand planen kann.",
    text: "Im Ernstfall zählt nicht, wie kompliziert ein Produkt ist. Es zählt, ob es da ist, ob Sie es erreichen und ob Sie wissen, wofür es gedacht ist."
  },

  benefits: [
    { num: "01", title: "Sofort erreichbar", text: "Halterungen und kompakte Formate bringen das Werkzeug dorthin, wo Sie es im Fahrzeug erreichen können." },
    { num: "02", title: "Klare Funktionen", text: "Glasbrecher und Gurtschneider erfüllen konkrete Aufgaben für kritische Situationen." },
    { num: "03", title: "Robust & zuverlässig", text: "Materialien und Konstruktion sind auf anspruchsvolle Situationen ausgelegt." },
    { num: "04", title: "Geprüfte Qualität", text: "Produktprüfungen und Nachweise helfen dabei, Vertrauen vor dem Ernstfall aufzubauen." }
  ],

  application: {
    kicker: "So soll es sein",
    title: "Nicht im Kofferraum. Nicht irgendwo.",
    text: "Ein Rettungswerkzeug bringt nur etwas, wenn Sie es im entscheidenden Moment erreichen können.",
    items: [
      { title: "Im Fahrzeug", text: "Halterung an einem festen, gut erreichbaren Platz montieren.", icon: "01" },
      { title: "Vorbereitet", text: "Machen Sie sich vorab mit der Funktion und dem richtigen Handgriff vertraut.", icon: "02" },
      { title: "Im Ernstfall", text: "Wenn es darauf ankommt, zählt eine klare Handlung statt langes Suchen.", icon: "03" }
    ]
  },

  certificates: {
    kicker: "Vertrauen durch Nachweise",
    title: "Was wir zeigen können, zeigen wir.",
    text: "Unabhängige Tests, Produktinformationen und offizielle Kennzeichnungen gehören sichtbar zur Geschichte der Marke.",
    items: [
      { name: "TÜV / Geprüft", image: "images/certificates/tuv.svg" },
      { name: "DEKRA", image: "images/certificates/dekra.svg" },
      { name: "DIN", image: "images/certificates/din.svg" },
      { name: "Produkttest", image: "images/certificates/product-test.svg" },
      { name: "Qualität", image: "images/certificates/quality.svg" }
    ]
  },

  videos: {
    kicker: "Echte Einsatzprofis",
    title: "Sicherheit sollte nicht nur gut aussehen. Sie sollte verstanden werden.",
    text: "Die nächsten Inhalte entstehen mit echten Feuerwehrleuten auf der Messe. Sobald die Aufnahmen vorliegen, werden sie hier integriert.",
    items: [
      {
        enabled: false,
        title: "Messe – authentische Inhalte mit Feuerwehrleuten",
        youtubeId: "",
        poster: ""
      }
    ]
  },

  firefighter: {
    title: "Erfahrung aus echten Einsatzsituationen.",
    text: "Wir wollen Rettungsengel nicht nur über Produktmerkmale erklären. Die kommenden Videos und Fotos mit Feuerwehrleuten zeigen, warum Vorbereitung, Erreichbarkeit und einfache Handgriffe im Ernstfall wichtig sind."
  },

  about: {
    title: "Eine Sicherheitsmarke für den Moment, den man nicht planen kann.",
    text: "Rettungsengel entwickelt Rettungswerkzeuge für Fahrzeuge und Alltag. Unser Anspruch ist einfach: Produkte verständlich machen, dort platzieren, wo sie erreichbar sind, und Vertrauen mit echten Nachweisen und echten Menschen aufbauen."
  },

  contact: {
    title: "Fragen, Messe oder Großhandel?",
    text: "Schreiben Sie uns. Wir antworten persönlich.",
    note: "Die neuen Fotos und Videos von der Messe werden nach und nach ergänzt."
  },

  cta: {
    title: "Seien Sie vorbereitet, bevor Sie Rettungsengel brauchen.",
    text: "Entdecken Sie die Rettungsengel Werkzeuge auf Amazon.",
    button: "Bei Amazon kaufen"
  }
};
