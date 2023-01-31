# 02.05-CSS specificity

In de vorige hoofstukken hebben we gezien dat er drie manieren zijn om CSS toe te passen op onze HTML, daarna hebben we selectors bekeken in dit hoofdstuk gaan we ons verdiepen in CSS specificity.

**Specifity** is een algoritme dat door browsers wordt gebruikt om te bepalen welke css declaratie het meest relevant is voor een element, wat op zijn beurt zal bepalen hoe het element er zal gaan uitzien. Het specificiteitsalgoritme berekent het gewicht van de CSS selector. De selector met het grootste gewicht zal worden toegepast op het element.

**Specificity hiërarchie**:
- Inline style: inline css heeft de hoogste prioriteit.
- Identifiers (id): ID heeft de tweede hoogste prioriteit.
- Classes, Pseudo classes en attributen: Deze drie delen de derde plaats in de hiërarchie.
- Elementen en pseudo elementen: Deze hebben de laagste prioriteit.

Om het op een eenvoudigere manier te demonstreren heeft [*stuff & nonsense*](https://stuffandnonsense.co.uk/archives/css_specificity_wars.html) een overzicht gemaakt in de vorm van **specificity wars**.

<table>
    <tr>
        <td><img src="src/css-specificity-wars-storm-trooper.png"></td>  
        <td><img src="src/css-specificity-wars-maul.png"></td>
        <td><img src="src/css-specificity-wars-vader.png"></td>
        <td><img src="src/css-specificity-wars-emperor.png"></td>
    </tr>
    <tr>
        <td><b>element selector</b> <br/> Specifity: 0,0,1</td>
        <td><b>class, attribute, <br/> pseudo-class selector</b> <br/> Specifity: 0,1,0</td>
        <td><b>id selector</b> <br/> Specifity: 1,0,0</td>
        <td><b>style attribute</b> <br/> Specifity: <b>1</b>,0,0,0</td>
    </tr>
</table>

Ieder personage (selector) heeft een bepaalde kracht (specificity value).
- Een **Storm Trooper (element selector)** is minder krachtig dan **Darth Maul (class selector)**.
- **Darth Maul** is minder krachtig dan **darth Vader (Id selector)**.
- **Darth Vader** is minder krachtig dan de **Emperor (style attribute)**.
- De **Death Star** is het krachtigste in het CSS universum.

*Overzicht:*
![specificity wars](src/css-specificity-wars.png)

## Death Star - !important
Het important statement plaatsen we achter een style eigenschap/value.
```
.class-name{
    font-size: 10px !important;
}
```

Met onderstaande website kan je de specificity van een selector berekenen.

[CSS specificity calculator](https://specificity.keegan.st/)