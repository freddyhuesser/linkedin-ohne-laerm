# LinkedIn-Check — Setup & Konfiguration

## Dateien

| Datei | Zweck |
|-------|-------|
| `index.html` | App-Shell (Struktur, kein Inline-Text) |
| `style.css` | Alle Styles, mobile-first |
| `config.js` | **Alle Texte & Fragen hier anpassen** |
| `app.js` | Quiz-Logik, State, Rendering |
| `subscribe.php` | MailerLite-API-Proxy (API-Key serverseitig) |

---

## 1. MailerLite einrichten

### API-Key
1. MailerLite Dashboard → **Integrations → API**
2. API-Key kopieren

### Gruppen-ID
1. MailerLite Dashboard → **Subscribers → Groups**
2. Gruppe "Employer-Branding-Kurs" öffnen
3. URL: `.../#/subscribers/groups/XXXXXXXXX` → die Zahl ist die Group ID

### Custom Fields anlegen (einmalig)
In MailerLite unter **Subscribers → Fields → Add field**:
- `eb_score` (Typ: Text oder Number)
- `eb_stufe` (Typ: Text) — Werte: `stark`, `basis`, `luecke`
- `eb_stufe_name` (Typ: Text)

---

## 2. API-Key auf Metanet hinterlegen

### Option A: Direkt in subscribe.php (einfachste Variante)
Zeile 12 in `subscribe.php` öffnen und ersetzen:
```php
define('ML_API_KEY',  'dein_echter_api_key');
define('ML_GROUP_ID', 'deine_echte_group_id');
```
**Wichtig:** `subscribe.php` nie öffentlich auf GitHub committen wenn der Key drin steht.
Stattdessen: Key lokal eintragen, File via FTP/SFTP direkt auf Metanet hochladen (ohne GitHub).

### Option B: Als Umgebungsvariable (sicherer, falls Metanet das unterstützt)
Metanet → Hosting-Einstellungen → Environment Variables:
```
MAILERLITE_API_KEY=dein_key
MAILERLITE_GROUP_ID=deine_group_id
```

---

## 3. Texte & Fragen anpassen

Alles in `config.js` — keine Code-Kenntnisse nötig:
- `CONFIG.intro` → Startseite
- `CONFIG.questions[]` → Fragen + Erklärungstext
- `CONFIG.stages[]` → Ergebnis-Stufen + Texte
- `CONFIG.nextSteps{}` → Konkrete nächste Schritte pro Frage
- `CONFIG.result` → CTA + Buchungslink

---

## 4. Buchungslink eintragen

In `config.js`, Zeile `ctaPrimary`:
```js
ctaPrimary: { label: '☕ Kostenloses Gespräch buchen', url: 'DEIN_HUBSPOT_LINK' },
```

---

## 5. Datenschutz-Link prüfen

In `config.js`:
```js
privacyUrl: '../datenschutz.html',
```
Anpassen falls die Datenschutzseite anders heisst.
