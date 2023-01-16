<link rel="stylesheet" href="../../templates/main.css"></link>

# 02.09-overflow

Met de CSS `overflow` property kunnen we gaan bepalen wat er met content moet gebeuren wanneer de deze groter is dan de oppervlakte.

De overflow property heeft verschillende waardes die kunnen gebruikt worden:
- `visible`: Dit is de standaard waarde. De content is niet afgekapt. De inhoud wordt buiten het vak van het element weergegeven.
- `hidden`: De content wordt afgekapt en de rest van de inhoud is onzichtbaar.
- `scroll`: De content wordt afgekapt en er wordt een scrollbar toegevoegd om de rest van de inhoud te zien.
- `auto`: Vergelijkbaar met scrollen, maar het voegt alleen scrollbars toe als dat nodig is.

> **Note:** De waarde `overflow` werkt enkel voor blokelementen die en specifieke hoogte hebben.

> **Note:** Bij OS X lion (apple mac) zijn scollbars standaard verborgen enkel wanneer het element gebruikt wordt zal de scrollbar zichtbaar worden (ook wanneer de overflow waarde `scroll` is).

Bekijk de online voorbeelden:
- [overflow example](https://codepen.io/Quinten-Work/pen/YzLKqKz)