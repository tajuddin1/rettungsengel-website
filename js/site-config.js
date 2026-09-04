/**
 * RETTUNGSENGEL — Inhalte zentral verwalten
 * Nur Inhalte, Bilder, Links und Videos ändern.
 * Layout und Funktionalität bleiben in HTML/CSS/JS.
 */
window.SITE = {
  brand: "Rettungsengel",
  contactEmail: "hello@rettungsengel.de",

  nav: [
    { label: "Situationen", href: "#situations" },
    { label: "Lösung", href: "#solution" },
    { label: "Produkte", href: "#products" },
    { label: "Feuerwehr", href: "#firefighters" },
    { label: "Bewertungen", href: "#reviews" },
    { label: "Kontakt", href: "#contact" }
  ],

  amazonNavUrl: "https://www.amazon.de/dp/B0FJYLPKMJ",

  hero: {
    kicker: "Rettungsengel",
    title: "Was, wenn Sie plötzlich nicht mehr rauskommen?",
    subtitle: "Unfall. Feuer. Wasser. Eine blockierte Tür.",
    text: "Rettungsengel holt Sie aus dem kritischen Moment – mit kompakten Rettungswerkzeugen, die dort sind, wo Sekunden zählen.",
    image: "images/hero/hero-bg.jpg",
    imageAlt: "Rettungsengel Notfallhammer und Notfallstift vor zerbrochener Autoscheibe",
    trust: [
      "Glasbrecher & Gurtschneider",
      "Sofort griffbereit",
      "Bei Amazon erhältlich"
    ]
  },

  situations: {
    kicker: "Es passiert ohne Vorwarnung",
    title: "Eine normale Fahrt kann in Sekunden anders aussehen.",
    text: "Wir verkaufen nicht zuerst ein Produkt. Wir zeigen den Moment, in dem Sie eines brauchen – und warum Vorbereitung zählt.",
    items: [
      {
        number: "01",
        title: "Fahrzeugbrand",
        text: "Rauch steigt auf. Hitze nimmt zu. Sie müssen raus – und Gurt oder Tür halten Sie zurück.",
        image: "images/situations/fire.jpg",
        alt: "Fahrzeugbrand bei Nacht – Rettungsengel Notfallhammer bereit",
        size: "wide"
      },
      {
        number: "02",
        title: "Unfall & blockierte Tür",
        text: "Die Tür öffnet nicht. Der Gurt sitzt fest. Ohne Werkzeug bleibt nur Warten.",
        image: "images/situations/crash.jpg",
        alt: "Unfall mit blockierter Tür und zerbrochener Scheibe",
        size: "tall"
      },
      {
        number: "03",
        title: "Familie an Bord",
        text: "Wenn Kinder oder Partner mitfahren, zählt jede Sekunde doppelt.",
        image: "images/situations/family.jpg",
        alt: "Familienfahrzeug mit Rettungswerkzeugen in Reichweite",
        size: "tall"
      },
      {
        number: "04",
        title: "Wasser & Hochwasser",
        text: "Steigendes Wasser. Türen unter Druck. Vorbereitung entscheidet, bevor Panik beginnt.",
        image: "images/situations/water.jpg",
        alt: "Hochwasser um ein Fahrzeug – Rettungswerkzeuge griffbereit",
        size: "wide"
      }
    ]
  },

  question: {
    title: "Hätten Sie im Ernstfall alles griffbereit?",
    text: "Nicht irgendwann. Nicht im Kofferraum. Sondern genau dort, wo Sie es erreichen können, wenn keine Zeit zum Suchen bleibt."
  },

  problem: {
    kicker: "Das eigentliche Problem",
    title: "Im Notfall fehlt nicht nur Zeit. Es fehlt Handlungsspielraum.",
    text: "Wenn eine Tür blockiert oder der Gurt sich nicht löst, funktionieren vertraute Abläufe plötzlich nicht mehr. Genau deshalb gehört ein Rettungswerkzeug dorthin, wo Sie es sofort erreichen.",
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
    text: "Kompakte Rettungswerkzeuge, klare Funktionen und eine Platzierung für schnellen Zugriff. Kein Ballast – Vorbereitung für den Ausnahmezustand.",
    promise: "Gurt durchtrennen. Scheibe einschlagen. Raus.",
    image: "images/products/hammer/01.jpg",
    alt: "Rettungsengel 2-in-1 Notfallhammer"
  },

  productsIntro: {
    kicker: "Die Rettungsengel Werkzeuge",
    title: "Zwei Wege, vorbereitet zu sein.",
    text: "Im Fahrzeug fest platziert – oder kompakt mit dabei."
  },

  products: {
    hammer: {
      enabled: true,
      id: "hammer",
      brand: "Rettungsengel",
      name: "2-in-1 Notfallhammer",
      short: "Glasbrecher und Gurtschneider in einem robusten Werkzeug – fest in der Türablage für Fahrer und Beifahrer.",
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
        "Gehärtete Glasspitzen",
        "Geschützter Gurtschneider",
        "Inkl. Halterung",
        "Übungsglas inklusive"
      ],
      details: "Der Rettungsengel 2-in-1 Notfallhammer kombiniert einen verstärkten Glasbrecher mit einem scharfen, geschützten Gurtschneider. Bei Unfall, Fahrzeugbrand oder Hochwasser hilft er, sich schnell zu befreien. Die Halterung hält ihn griffbereit – kein Suchen, kein Zögern."
    },

    pen: {
      enabled: true,
      id: "pen",
      brand: "Rettungsengel",
      name: "Notfallstift",
      badge: { score: "1,1", label: "Sehr Gut" },
      short: "Kompaktes Rettungswerkzeug für Alltag und Auto – Glasbrecher und Gurtschneider in einem Format, das Sie bei sich tragen können.",
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
        "Wolfram-Glasbrecher",
        "Gurtschneider integriert",
        "Alltagsformat",
        "Testnote 1,1 Sehr Gut"
      ],
      details: "Der Rettungsengel Notfallstift ist Sicherheit, die Sie über das Auto hinaus mitnehmen. Kompakt genug für Tasche, Rucksack oder Handschuhfach – und stark genug für den Moment, den man sich niemals wünscht. Unabhängig getestet mit 1,1 Sehr Gut."
    },

    saniwerk: {
      enabled: true,
      id: "saniwerk",
      partner: true,
      brand: "Saniwerk",
      name: "Auto-Verbandtasche",
      short: "Kompakte KFZ-Verbandtasche nach DIN 13164:2022 – Erste Hilfe im Fahrzeug, übersichtlich organisiert und sofort griffbereit.",
      amazonUrl: "https://www.amazon.de/dp/B0H3V1D8GB",
      images: [
        { src: "images/products/saniwerk/1.jpg", alt: "Saniwerk Auto-Verbandtasche" },
        { src: "images/products/saniwerk/2.jpg", alt: "Inhalt der Erste-Hilfe-Tasche" },
        { src: "images/products/saniwerk/3.jpg", alt: "Inhalt der Erste-Hilfe-Tasche" },
        { src: "images/products/saniwerk/4.jpg", alt: "Inhalt der Erste-Hilfe-Tasche" },
        { src: "images/products/saniwerk/5.jpg", alt: "Inhalt der Erste-Hilfe-Tasche" },
        { src: "images/products/saniwerk/6.jpg", alt: "Inhalt der Erste-Hilfe-Tasche" },
        { src: "images/products/saniwerk/7.jpg", alt: "Inhalt der Erste-Hilfe-Tasche" },
        { src: "images/products/saniwerk/8.jpg", alt: "Saniwerk Auto-Verbandtasche Details" }
      ],
      highlights: [
        "DIN 13164:2022 konform",
        "TÜV Rheinland geprüft",
        "Kompakt & leicht verstaut",
        "Übersichtlicher Inhalt",
        "Europaweit nutzbar",
        "Fürs Auto geeignet"
      ],
      details: "Die Auto-Verbandtasche ergänzt Ihre Notfallausrüstung um verlässliche Erste Hilfe. Inhalt nach aktueller DIN-Norm und StVZO-Vorgabe, klar sortiert und bereit für den Ernstfall – vom Pflaster bis zur Rettungsdecke. So sind Sie nicht nur für Flucht aus dem Fahrzeug, sondern auch für Verletzungen vorbereitet."
    }
  },

  benefitsIntro: {
    kicker: "Warum Rettungsengel?",
    title: "Entwickelt für die Momente, die niemand plant.",
    text: "Im Ernstfall zählt nicht, wie kompliziert ein Produkt ist. Es zählt, ob es da ist, ob Sie es erreichen – und ob Sie wissen, wofür es gedacht ist."
  },

  benefits: [
    { num: "01", title: "Sofort erreichbar", text: "Halterungen und kompakte Formate bringen das Werkzeug dorthin, wo Sie es im Fahrzeug erreichen." },
    { num: "02", title: "Klare Funktionen", text: "Glasbrecher und Gurtschneider erfüllen konkrete Aufgaben für kritische Situationen." },
    { num: "03", title: "Robust & zuverlässig", text: "Materialien und Konstruktion sind auf anspruchsvolle Situationen ausgelegt." },
    { num: "04", title: "Geprüfte Qualität", text: "Produktprüfungen und Nachweise helfen, Vertrauen vor dem Ernstfall aufzubauen." }
  ],

  application: {
    kicker: "Anwendung",
    title: "Nicht im Kofferraum. Nicht irgendwo.",
    text: "Ein Rettungswerkzeug bringt nur etwas, wenn Sie es im entscheidenden Moment erreichen können.",
    items: [
      { title: "Platzieren", text: "Halterung an einem festen, gut erreichbaren Platz im Fahrzeug montieren.", icon: "01" },
      { title: "Vertraut machen", text: "Vorab mit Funktion und Handgriff vertraut werden – nicht erst im Ernstfall.", icon: "02" },
      { title: "Handeln", text: "Wenn es darauf ankommt: klare Bewegung statt langes Suchen.", icon: "03" }
    ]
  },

  certificates: {
    kicker: "Vertrauen durch Nachweise",
    title: "Was wir zeigen können, zeigen wir.",
    text: "Unabhängige Tests, Produktinformationen und Kennzeichnungen gehören sichtbar zur Marke.",
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
    text: "Aktuell entstehen authentische Aufnahmen mit echten Feuerwehrleuten. Sobald sie vorliegen, stehen sie hier – als starker Teil der Rettungsengel Geschichte.",
    items: [
      {
        enabled: false,
        title: "Authentische Inhalte mit Feuerwehrleuten",
        youtubeId: "",
        poster: ""
      }
    ]
  },

  firefighter: {
    title: "Erfahrung aus echten Einsatzsituationen.",
    text: "Wir erklären Rettungsengel nicht nur über Specs. Die kommenden Videos und Fotos mit Feuerwehrleuten zeigen, warum Vorbereitung, Erreichbarkeit und einfache Handgriffe im Ernstfall zählen."
  },

  reviews: {
    kicker: "Stimmen von Käufern",
    title: "Vertrauen entsteht im Alltag – und auf Amazon.",
    text: "Echte Rückmeldungen von Menschen, die vorbereitet sein wollen. Kaufen Sie dort, wo Bewertungen und Lieferung klar sind: bei Amazon.",
    items: [
      {
        name: "Markus K.",
        meta: "Notfallhammer · Amazon",
        text: "Sitzt fest in der Türablage, fühlt sich hochwertig an. Genau das, was man im Auto haben sollte – und hoffentlich nie braucht."
      },
      {
        name: "Sandra W.",
        meta: "Notfallstift · Amazon",
        text: "Kompakt, klar erklärt, gute Bewertung im Test. Für mich Pflicht im Handschuhfach und in der Tasche."
      },
      {
        name: "Thomas R.",
        meta: "2er-Set · Amazon",
        text: "Eins für Fahrer, eins für Beifahrer. Einfache Montage, solider Eindruck. Hätte ich schon früher bestellen sollen."
      }
    ]
  },

  about: {
    title: "Eine Sicherheitsmarke für den Moment, den man nicht planen kann.",
    text: "Rettungsengel entwickelt Rettungswerkzeuge für Fahrzeuge und Alltag. Unser Anspruch: Situation verständlich machen, Produkt als klare Lösung zeigen, Vertrauen mit Nachweisen und echten Menschen aufbauen – und den Kauf bewusst über Amazon führen."
  },

  contact: {
    title: "Fragen oder Großhandel?",
    text: "Schreiben Sie uns. Wir antworten persönlich.",
    note: "Neue Fotos und Videos von der Feuerwehr-Produktion werden nach und nach ergänzt."
  },

  cta: {
    title: "Seien Sie vorbereitet, bevor Sie Rettungsengel brauchen.",
    text: "Emotion verstehen. Lösung erkennen. Bei Amazon bestellen.",
    button: "Bei Amazon kaufen"
  }
};
