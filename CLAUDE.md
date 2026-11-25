# ohnelaerm.ch

Statische Website, ausgeliefert von Metanet (Plesk, Server gothicus). Seit 25.11.2026 holt Plesk jeden Push auf main automatisch per GitHub-Webhook und stellt ihn bereit. Ein Push auf main ist damit live.

Klare Aufträge von Freddy (Chat oder Karte «Auftrag Claude Code») gehen direkt bis live. Ablauf und Grenzen: `wissen/web-auftraege.md` im Repo freddyhuesser/mutterhaus.

## Pflicht nach jedem neuen oder geänderten Artikel

1. Die URL in sitemap.xml eintragen oder lastmod aktualisieren.
2. Committen und auf main pushen (Webhook stellt bereit).
3. Prüfen, ob die Seite live ist.
4. Unter Actions den Workflow «IndexNow melden» starten (Run workflow auf main). Er meldet alle URLs der Live-Sitemap an IndexNow. Erwartete Antwort: 200 oder 202.

## Nicht entfernen

- Meta-Tag msvalidate.01 in index.html (Verifizierung Bing Webmaster Tools)
- fd0ff962d919c88f0b54bc4b50a07baa.txt im Hauptverzeichnis (IndexNow-Schlüssel)
