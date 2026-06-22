// ─── KONFIGURATION — hier alle Texte & Fragen anpassen ───────────────────────

const CONFIG = {

  meta: {
    title: 'LinkedIn-Check: Ist euer Unternehmen wirklich sichtbar?',
    description: 'Beantworte 10 Fragen und erfahre, wo euer Employer Branding auf LinkedIn steht.',
  },

  intro: {
    label: 'Selbst-Assessment · 3 Minuten · 10 Fragen',
    headline: 'Erfahrt in 3 Minuten, wo ihr steht und erhaltet eure Auswertung mit Tipps direkt per E-Mail',
    subline: 'Viele Unternehmen nutzen LinkedIn «nebenbei» und hoffen so auf Ergebnisse. Leider funktioniert diese Strategie nur selten. Dieser kurze Check zeigt euch, wo ihr aktuell steht und was als nächstes zu tun ist, um erste Ziele mit LinkedIn zu erreichen.',
    cta: 'Check starten',
  },

  questions: [
    {
      id: 1,
      text: 'Eure Führungskräfte posten regelmässig über ihr eigenes Profil — nicht nur die Firmenseite.',
      hint: 'Reichweite entsteht über Menschen, nicht über Logos. Persönliche Profile haben auf LinkedIn bis zu 10x mehr organische Reichweite.',
    },
    {
      id: 2,
      text: 'Ihr habt eine verbindliche LinkedIn-Strategie oder zumindest einen simplen Fahrplan definiert und für alle zugänglich?',
      hint: 'Ohne Verbindlichkeit leidet als erstes die Konsistenz.',
    },
    {
      id: 3,
      text: 'LinkedIn-Sichtbarkeit steht bei mindestens einer Person konkret im Stellenbeschrieb.',
      hint: 'Was in keiner Stellenbeschreibung steht, passiert auch nicht. Ohne Ownership bleibt LinkedIn ein Nebenprojekt.',
    },
    {
      id: 4,
      text: 'Es gibt einen einfachen Content-Plan, sodass niemand jede Woche bei null anfängt.',
      hint: 'Konsistenz schlägt Perfektion. Ein simpler Redaktionsplan nimmt den Druck und erhöht die Regelmässigkeit massiv.',
    },
    {
      id: 5,
      text: 'Mitarbeitende teilen und kommentieren aus eigenem Antrieb.',
      hint: 'Employee Advocacy funktioniert nur, wenn das Team versteht warum und sich damit identifiziert. Befehlen bringt nichts.',
    },
    {
      id: 6,
      text: 'Jemand ist verantwortlich, in den ersten 60–90 Minuten auf Kommentare zu reagieren oder wenn das Unternehmen von Externen erwähnt (getaggt) wird.',
      hint: 'Wer nicht reagiert, verliert Vertrauen und Reichweite.',
    },
    {
      id: 7,
      text: 'Ihr nutzt KI, um Content effizient zu erstellen — ohne dass er nach Maschine klingt.',
      hint: 'KI spart Zeit, aber muss unbedingt sauber aufgebaut werden. Nur, wer weiss, wie guter Content aussieht, kann auch guten KI-Content erstellen.',
    },
    {
      id: 8,
      text: 'Ihr verlasst euch für Reichweite nicht allein auf die Firmenseite.',
      hint: 'Unternehmensseiten auf LinkedIn haben organisch kaum Reichweite. Wer nur dort postet, spricht meist nur ins Leere.',
    },
    {
      id: 9,
      text: 'Es gibt klare, messbare Ziele — nicht nur «mehr Reichweite».',
      hint: 'Ohne konkretes Ziel fehlt die Richtung. Ob Recruiting, Leads oder Positionierung — LinkedIn braucht eine klare Aufgabe.',
    },
    {
      id: 10,
      text: 'Neue Leute werden befähigt (Schulung, Begleitung) — statt allein gelassen.',
      hint: 'LinkedIn-Marketing ist lernbar. Wer Mitarbeitende einfach «machen lässt», ohne Unterstützung, ist zwar aktiv, aber oft auch wirkungslos und am Ende frustriert.',
    },
  ],

  answers: [
    { label: 'Ja',        value: 1,   key: 'ja' },
    { label: 'Teilweise', value: 0.5, key: 'teilweise' },
    { label: 'Nein',      value: 0,   key: 'nein' },
  ],

  stages: [
    {
      min: 8, max: 10,
      key: 'stark',
      emoji: '💪',
      label: 'Stark aufgestellt',
      color: '#2E7D32',
      text: 'Ihr habt verstanden, dass Sichtbarkeit über Menschen läuft — nicht über Logos. Das Fundament steht. Jetzt geht es ums Feintuning: Konsistenz halten, Reichweite skalieren, das Team weiter befähigen.',
    },
    {
      min: 4, max: 7.5,
      key: 'basis',
      emoji: '🔧',
      label: 'Solide Basis, Potenzial brach',
      color: '#C17B2B',
      text: 'Das Fundament steht — aber viel Wirkung bleibt liegen. Einzelne Bausteine fehlen noch oder laufen nicht konsequent. Genau hier liegt euer grösster Hebel für mehr Sichtbarkeit.',
    },
    {
      min: 0, max: 3.5,
      key: 'luecke',
      emoji: '🚨',
      label: 'Grosse Lücke',
      color: '#C0392B',
      text: 'Hier wird gerade viel Reichweite — und oft auch Geld — verschenkt. Die gute Nachricht: Wer jetzt die richtigen Basics aufsetzt, sieht schnell Wirkung. Der erste Schritt ist oft kleiner als gedacht.',
    },
  ],

  nextSteps: {
    1: 'Startet mit einer Führungskraft, die einmal pro Woche etwas postet — authentisch, kein Corporate-Speak.',
    2: 'Haltet eure LinkedIn-Strategie in einem einfachen Dokument fest — ein A4-Blatt reicht als Fahrplan.',
    3: 'Definiert klipp und klar, wer im Team für LinkedIn zuständig ist. Ohne Ownership kein Fortschritt.',
    4: 'Erstellt einen simplen Content-Plan für vier Wochen — vier Themen reichen für den Anfang.',
    5: 'Erklärt dem Team den Nutzen: nicht «postet bitte», sondern «deshalb bringt es uns allen etwas».',
    6: 'Richtet eine Benachrichtigung ein (z.B. über Mention oder einfach LinkedIn-Benachrichtigungen) und reagiert in den ersten 60–90 Minuten nach dem Posten.',
    7: 'Testet ein KI-Tool (z.B. Claude oder ChatGPT) für erste Entwürfe — und überarbeitet sie in eurem Ton.',
    8: 'Identifiziert zwei bis drei Personen im Team, die LinkedIns Möglichkeiten stärker nutzen könnten.',
    9: 'Setzt ein konkretes 90-Tage-Ziel: z.B. «5 qualifizierte Bewerbungen über LinkedIn» oder «3 Inbound-Anfragen».',
    10: 'Plant einen 2-stündigen Workshop, um das Team abzuholen — danach wissen alle, wo sie stehen und was zu tun ist.',
  },

  gate: {
    headline: 'Dein Ergebnis ist bereit.',
    subline: 'Trag deine E-Mail-Adresse ein — wir senden dir die vollständige Auswertung und zeigen, welche nächsten Schritte für euch sinnvoll sind.',
    gdpr: 'Ich bin einverstanden, dass meine Daten zur Zusendung des Ergebnisses und weiterer hilfreicher Inhalte zu LinkedIn-Marketing genutzt werden. Keine Weitergabe an Dritte. Abmeldung jederzeit möglich.',
    privacyUrl: '../datenschutz.html',
    submitLabel: 'Ergebnis anzeigen',
  },

  result: {
    ctaHeadline: 'Willst du das konkret angehen?',
    ctaText: 'In einem kurzen Gespräch schauen wir gemeinsam, welche Massnahmen bei euch den grössten Unterschied machen.',
    ctaPrimary: { label: '☕ Kostenloses Gespräch buchen', url: 'https://meetings-eu1.hubspot.com/freddy-huesser' },
    ctaSecondary: { label: '📧 5-Tage-Kurs: Employer Branding auf LinkedIn', url: '#' },
  },

  // MailerLite group ID für "Employer-Branding-Kurs" → in subscribe.php als Env-Variable
  // Hier nur die Bezeichnung für Tracking-Zwecke
  mailerLiteGroup: 'Employer-Branding-Kurs',
};
