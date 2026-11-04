# ohnelaerm.ch

Statische Website, ausgeliefert von Metanet. Metanet holt Änderungen aus diesem Repo nicht automatisch: Freddy löst den Pull bei Metanet selbst aus.

## Pflicht nach jedem neuen oder geänderten Artikel

1. Die URL in sitemap.xml eintragen oder lastmod aktualisieren.
2. Committen und Freddy bitten, bei Metanet zu pullen.
3. Prüfen, ob die Seite live ist.
4. Unter Actions den Workflow «IndexNow melden» starten (Run workflow auf main). Er meldet alle URLs der Live-Sitemap an IndexNow. Erwartete Antwort: 200 oder 202.

## Nicht entfernen

- Meta-Tag msvalidate.01 in index.html (Verifizierung Bing Webmaster Tools)
- fd0ff962d919c88f0b54bc4b50a07baa.txt im Hauptverzeichnis (IndexNow-Schlüssel)
