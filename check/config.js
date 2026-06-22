// ─── KONFIGURATION — hier alle Texte & Fragen anpassen ───────────────────────

const CONFIG = {

  meta: {
    title: 'LinkedIn-Check: Ist euer Unternehmen wirklich sichtbar?',
    description: 'Beantworte 10 Fragen und erfahre, wo euer Employer Branding auf LinkedIn steht.',
  },

  intro: {
    label: 'Selbst-Assessment · 2 Minuten · 10 Fragen',
    headline: 'Ist euer Unternehmen auf LinkedIn wirklich sichtbar?',
    subline: 'Viele Unternehmen investieren in Content — und trotzdem bleibt die Wirkung aus. Dieser kurze Check zeigt euch, wo die grössten Hebel liegen.',
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
      text: 'LinkedIn-Sichtbarkeit steht bei mindestens einer Person konkret in der Rolle.',
      hint: 'Was in keiner Stellenbeschreibung steht, passiert auch nicht. Ohne Ownership bleibt LinkedIn ein Nebenprojekt.',
    },
    {
      id: 3,
      text: 'Es gibt einen einfachen Themenplan, sodass niemand jede Woche bei null anfängt.',
      hint: 'Konsistenz schlägt Perfektion. Ein simpler Redaktionsplan nimmt den Druck und erhöht die Regelmässigkeit massiv.',
    },
    {
      id: 4,
      text: 'Mitarbeitende teilen und kommentieren aus eigenem Antrieb — nicht auf Zuruf.',
      hint: 'Employee Advocacy funktioniert nur, wenn das Team versteht warum und sich damit identifiziert. Befehlen bringt nichts.',
    },
    {
      id: 5,
      text: 'Jemand reagiert, wenn das Unternehmen erwähnt oder getaggt wird.',
      hint: 'Sichtbarkeit ist keine Einbahnstrasse. Wer nicht reagiert, verliert Vertrauen und Reichweite.',
    },
    {
      id: 6,
      text: 'Ihr nutzt KI, um Content effizient zu erstellen — ohne dass er nach Maschine klingt.',
      hint: 'KI spart Zeit, aber der menschliche Ton muss erhalten bleiben. Die Kombination aus KI und echter Stimme ist der Hebel.',
    },
    {
      id: 7,
      text: 'Ihr verlasst euch für Reichweite nicht allein auf die Firmenseite.',
      hint: 'Unternehmensseiten auf LinkedIn haben organisch kaum Reichweite. Wer nur dort postet, spricht meist nur ins Leere.',
    },
    {
      id: 8,
      text: 'Es gibt klare, messbare Ziele — nicht nur «mehr Reichweite».',
      hint: 'Ohne konkretes Ziel fehlt die Richtung. Ob Recruiting, Leads oder Positionierung — LinkedIn braucht eine klare Aufgabe.',
    },
    {
      id: 9,
      text: 'Neue Leute werden befähigt (Schulung, Begleitung) — statt allein gelassen.',
      hint: 'LinkedIn-Sichtbarkeit ist lernbar. Wer Mitarbeitende einfach «machen lässt», ohne Unterstützung, erzeugt Unsicherheit.',
    },
    {
      id: 10,
      text: 'Eure Energie fliesst in Menschen-Profile — nicht in bezahlte Reichweite fürs Logo.',
      hint: 'Paid Ads für Employer Branding können sinnvoll sein — aber organische Sichtbarkeit über Personen ist nachhaltiger und günstiger.',
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
    2: 'Definiert klipp und klar, wer im Team für LinkedIn zuständig ist. Ohne Ownership kein Fortschritt.',
    3: 'Erstellt einen simplen Themenplan für vier Wochen — vier Themen reichen für den Anfang.',
    4: 'Erklärt dem Team den Nutzen: nicht «postet bitte», sondern «deshalb bringt es uns allen etwas».',
    5: 'Richtet eine Benachrichtigung ein (z.B. über Mention oder einfach LinkedIn-Benachrichtigungen) und reagiert täglich.',
    6: 'Testet ein KI-Tool (z.B. Claude oder ChatGPT) für erste Entwürfe — und überarbeitet sie in eurem Ton.',
    7: 'Identifiziert zwei bis drei Personen im Team, die LinkedIns Möglichkeiten stärker nutzen könnten.',
    8: 'Setzt ein konkretes 90-Tage-Ziel: z.B. «5 qualifizierte Bewerbungen über LinkedIn» oder «3 Inbound-Anfragen».',
    9: 'Plant einen 2-stündigen Workshop, um das Team abzuholen — danach wissen alle, wo sie stehen und was zu tun ist.',
    10: 'Analysiert, wo eure Zeit wirklich fliesst. Oft ist eine Umverteilung Richtung organisch die bessere Investition.',
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
