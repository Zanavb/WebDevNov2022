<link rel="stylesheet" href="../../templates/main.css"></link>

# 02.06-CSS-units

In CSS hebben we verschillende soorten `units` em de lengte te gaan bepalen. Er zijn in CSS heel wat properties die een lengte aanvaarden als waarde zoals `width`, `height`, `margin`, `padding`, `font-size`, etc...

Lengte is een waarde gevolgt door een eenheid `px`, `em`, `cm`.

*Voorbeeld:*
```
h1 {
    font-size: 60px;
}

p {
  font-size: 1.2em;
  line-height: 50px;
}

div {
    height: 3cm;
    width: 45px;
}

article {
    margin: 0;
}
```

> **Note:** We mogen tussen het nummer en eenheid geen spatie laten!

> **Note:** Wanneer we de waarde 0 meegeven mogen de eenheid weg laten!

<div style='page-break-after: always;'></div>

In CSS bestaan er twee soorten lengtes *`absolute`* en *`relative`*.

## Absolute lengte
De absolute lengte-eenheden zijn vast, een lengte in deze eenheid wordt uitgedrukt wordt precies weergegeven in deze maat.

| Eenheid | beschrijving |
|---|---|
|cm| centimeters|
|mm| millimeters|
|in| inches (1in = 96px = 2.54cm)|
|px *| pixels (1px = 1/96th of 1in)|
|pt| points (1pt = 1/72 of 1in)|
|pc| picas (1pc = 12 pt)|

> **Note:** Pixels `px` is relatief ten opzichte van het apparaat, voor apparaten met een lage DPI zal `1px` gelijk zijn aan 1 pixel. Voor apparaten met een hoge DPI of printer zal `1px` meerdere pixels innemen. 

<div style='page-break-after: always;'></div>

## Relatieve lengte
Relatieve lengte-eenheden specificeren een lengte ten opzichte van een andere lengte-eigenschap. Relatieve lengte-eenheden schalen beter tussen verschillende weergavemedia desktop en mobiele toestellen.

| Eenheid | beschrijving |
|---|---|
|em| Ten opzichte van de lettergrootte van het element (2em betekent 2 keer de grootte van het huidige lettertype)|
|ex| Ten opzichte van de x-hoogte van het huidige lettertype (zelden gebruikt)|
|ch| Ten opzichte van de breedte van het cijfer "0" (nul)|
|rem| Ten opzichte van de lettergrootte van het hoofdelement|
|vw| Ten opzichte van 1% van de breedte van de viewport*|
|vh| Ten opzichte van 1% van de hoogte van de viewport*|
|vmin| Ten opzichte van 1% van de hoogte of breedte van de viewport* afhankelijk van welke het kleinst is.|
|vmax| Ten opzichte van 1% van de hoogte of breedte van de viewport* afhankelijk van welke het grootst is.|
|%| Ten opzichte van het bovenliggende element|

> **\*** Met viewport bedoelen we het browser venster.

> **Note:** De units `em` en `rem` zijn praktisch bij het maken van een schaalbare layout.
