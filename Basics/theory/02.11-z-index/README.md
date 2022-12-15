<link rel="stylesheet" href="../../templates/main.css"></link>

# 02.11-z-index

Tot nu toe hebben altijd elementen verplaatst op de 'X' en 'Y' as met de `z-index` property kunnen we bepalen waar op de 'Z' as een element zich bevindt. Op deze manier kunnen elementen elkaar overlappen.

> **Note**: de `z-index` werkt alleen bij elementen die een position property hebben of flex elementen (`display: flex;`).

> **Note:** Wanneer elementen dezelde `z-index` hebben zal het laatste element zichtbaar zijn.

De verschillende waardes die we kunnen meegeven aan de z-index zijn:
- `auto`: De stapelvolgorde is gelijk aan die van het bovenliggend element (Standaard waarde).
- `number`: De orde hangt af van het getal dat wordt meegegeven, negatieve getallen zijn ook mogelijk.
- `initial`: Dit stelt de property in op de standaardwaarde.
- `inherit`: Hierbij zal de property overnemen van het bovenliggend element.

Gebruik de links hieronder voor de online voorbeelden:
- [z-index](https://codepen.io/Quinten-Work/pen/ZEozMoJ)
