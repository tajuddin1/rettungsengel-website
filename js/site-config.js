/**
 * RETTUNGSENGEL — einfache Inhaltsaktualisierung
 * ================================================
 * Texte, Amazon-Links, Bilder und Videos können hier geändert werden.
 * Sie müssen für normale Aktualisierungen kein HTML oder CSS bearbeiten.
 *
 * BILDER
 * Dateien in /images mit denselben Dateinamen ersetzen
 * oder die Pfade unten ändern.
 *
 * VIDEOS
 * YouTube-IDs in `videos` eintragen, sobald sie verfügbar sind.
 * Beispiel: youtubeId: "dQw4w9WgXcQ"
 *
 * SANIWERK NACH DER MESSE ENTFERNEN
 * products.saniwerk.enabled auf false setzen
 */

window.SITE = {

  brand: "Rettungsengel",

  contactEmail: "hello@rettungsengel.de",

  nav: [
    { label: "Startseite", href: "#top" },
    { label: "Produkte", href: "#products" },
    { label: "Vorteile", href: "#benefits" },
    { label: "Zertifikate", href: "#certificates" },
    { label: "Über uns", href: "#about" },
    { label: "Kontakt", href: "#contact" }
  ],

  amazonNavUrl: "https://www.amazon.de/dp/B0FJYLPKMJ",

  trustStrip: [
    "Geprüfte Qualität",
    "Zertifikate vorhanden",
    "Für echte Notfälle entwickelt",
    "Bei Amazon kaufen"
  ],

  hero: {

    kicker: "Rettungsengel",

    title: "Für die entscheidenden Momente",

    subtitle: "Sicherheit, auf die Sie sich verlassen können, wenn es darauf ankommt.",

    text: "Rettungsengel entwickelt Sicherheitsprodukte für Fahrzeuge und den Alltag, die funktionieren, wenn jede Sekunde zählt – geprüfte Qualität, klare Funktionen und immer griffbereit.",

    image: "images/products/hammer/01.jpg",

    imageAlt: "Rettungsengel 2-in-1 Notfallhammer mit Verpackung"

  },

  productsIntro: {

    kicker: "Unsere Produkte",

    title: "Zwei Rettungsengel Werkzeuge. Eine Verpflichtung: Sicherheit, wenn es darauf ankommt.",

    text: "Jedes Rettungsengel Produkt ist für echte Notfälle entwickelt – nicht für eine Schublade, die man vergisst. Saniwerk ist als Messepartner mit einer DIN-konformen Erste-Hilfe-Tasche dabei."

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

      short: "Ein kompaktes Rettungswerkzeug für den Alltag – Glasbrecher, Gurtschneider und ein Werkzeug, das immer bei Ihnen bleibt.",

      amazonUrl: "https://www.amazon.de/",

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

      short: "Produkt unseres Messepartners: eine kompakte, DIN-konforme Verbandtasche für das Fahrzeug – bereit für unterwegs und für Kontrollen.",

      amazonUrl: "https://www.amazon.de/",

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

  benefits: [

    {

      num: "01",

      title: "Geprüfte Qualität",

      text: "Zertifikate und unabhängige Produkttests sind Teil unserer Qualitätsphilosophie – kein Kleingedrucktes."

    },

    {

      num: "02",

      title: "Sofort einsatzbereit",

      text: "Ein Sicherheitswerkzeug funktioniert nur, wenn Sie es erreichen können. Halterungen, kompakte Formate und eine klare Platzierung."

    },

    {

      num: "03",

      title: "Robust & zuverlässig",

      text: "Materialien und Konstruktion sind für anspruchsvolle Situationen ausgelegt – Hitze, Stress, Dunkelheit und Panik."

    },

    {

      num: "04",

      title: "Einfach anzuwenden",

      text: "Keine komplizierten Abläufe. Gurt durchtrennen. Scheibe einschlagen. Raus."

    }

  ],

  benefitsIntro: {

    kicker: "Warum Rettungsengel?",

    title: "Entwickelt für die Momente, die zählen."

  },

  certificates: {

    kicker: "Vertrauen durch Nachweise",

    title: "Zertifikate & Produkttests",

    text: "Unabhängige Tests und offizielle Kennzeichnungen schaffen Vertrauen, bevor der entscheidende Moment eintritt – nicht erst danach.",

    items: [

      { name: "TÜV / Geprüft", image: "images/certificates/tuv.svg" },

      { name: "DEKRA", image: "images/certificates/dekra.svg" },

      { name: "DIN", image: "images/certificates/din.svg" },

      { name: "Produkttest", image: "images/certificates/product-test.svg" },

      { name: "Qualität", image: "images/certificates/quality.svg" }

    ]

  },

  videos: {

    kicker: "Über Rettungsengel",

    title: "Sicherheit & Vertrauen. Gefilmt mit Feuerwehrleuten.",

    text: "Diese Woche filmen wir auf der Messe mit echten Feuerwehrleuten. Sobald die Videos fertig sind, werden sie hier veröffentlicht – authentisch, ungestellt und vertrauenswürdig.",

    items: [

      {

        enabled: false,

        title: "Messe – authentische Inhalte mit Feuerwehrleuten",

        youtubeId: "",

        poster: ""

      }

    ]

  },

  about: {

    title: "Entwickelt für die Sekunde, die man nicht planen kann.",

    text: "Rettungsengel ist eine Sicherheitsmarke für Fahrzeuge und den Alltag. Wir konzentrieren uns auf Werkzeuge, die auch unter Druck funktionieren müssen: geprüft, griffbereit und ehrlich in dem, was sie leisten. Aktuell überarbeiten wir Produktbilder und Produktbeschreibungen Schritt für Schritt. Diese Website ist so aufgebaut, dass solche Aktualisierungen das Design nicht beeinträchtigen."

  },

  contact: {

    title: "Fragen, Messe oder Großhandel?",

    text: "Schreiben Sie uns. Wir antworten persönlich.",

    note: "Wir sind ab dem 3. September auf der Messe. Die dort mit Feuerwehrleuten aufgenommenen Videos werden hier veröffentlicht, sobald sie fertig sind."

  },

  cta: {

    title: "Rettungsengel im Auto haben, bevor Sie ihn brauchen.",

    button: "Bei Amazon kaufen"

  }

};