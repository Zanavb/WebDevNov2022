<link rel="stylesheet" href="../../templates/main.css"></link>

# 02.08-pseudo-classes
In CSS hebben we ook pseudo classes het is een kernwoord dat we kunnen toevoegen aan een selector. Bijvoorbeeld ```:hover``` is een pseudo class die heel vaak voorkomt in CSS. In deze cursus kan je de belangrijkste pseudo classes terugvinden er bestaan nog een hele reeks andere classes deze kan je terugvinden via deze [link](https://www.w3schools.com/css/css_pseudo_classes.asp).


**:hover** Met deze pseudo class kunnen we eigenschappen aanpassen wanneer met onze muis over een element bewegen.

*HTML*
```
<div class="example"></div>
```


*CSS*
```
.example {
    max-width: 100px;
    min-height: 50px;
    background-color: red;
}

.example:hover{
    background-color: blue;
}
```
**:first-child** De volgende pseudo class zal je de eerste child teruggeven van de eerste match dat het tegen komt.

HTML
```
<div>
  <p>This text is selected!</p>
  <p>This text isn't selected.</p>
</div>
<div>
  <h2>This text isn't selected: it's not a `p`.</h2>
  <p>This text isn't selected.</p>
</div>
```

CSS
```
p:first-child {
  color: red;
  background-color: black;
  padding: 5px;
}
```

**:last-child** Natuurlijk hebben we ook de last-child als pseudo class dit zal het omgekeerde resultaat geven van *:first-child*.

*HTML*
```
<div>
  <p>This text isn't selected.</p>
  <p>This text is selected!</p>
</div>

<div>
  <p>This text isn't selected.</p>
  <h2>This text isn't selected: it's not a `p`.</h2>
</div>
```

*CSS*
```
p:last-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

<div style='page-break-after: always;'></div>

**:nth-child()** Met *"nth-child"* hebben we de mogelijkheid om een element(en) te gaan selecteren die niet eerst of laatst zijn. Tussen de haakjes kunnen we parameters meegeven. Deze pseudo class heeft ook kernwoorden zoals *even* en *odd* dit zal er voor zorgen dat je alle even of oneven elementen terugkrijgt.

*HTML*
```
<div class="first">
    <p>item 1</p>
    <p>item 2</p>
    <p>item 3</p>
    <p>item 4</p>
    <p>item 5</p>
</div>

<div class="second">
    <p>item 1</p>
    <p>item 2</p>
    <p>item 3</p>
    <p>item 4</p>
    <p>item 5</p>
</div>
```

*CSS*
```
.first p:nth-child(even){
    color: red;
}

.second p:nth-child(odd){
    color: blue;
}
```

<div style='page-break-after: always;'></div>

Naast ```even``` of ```odd``` kunnen we ook een cijfer meegeven met de *:nth-child*.

HTML
```
<div>
    <p>item 1</p>
    <p>item 2</p>
    <p>item 3</p>
    <p>item 4</p>
    <p>item 5</p>
</div>
```

CSS
```
div p:nth-child(3n){
    color: blue;
}
```

Dit zal er voor zorgen dat om de drie items het derde item een blauwe kleur zal hebben. We kunnen ook meer geavanceerde paramaters gaan meegeven. zoals **:nth-child(-n+2)**.

HTML
```
<div>
    <p>item 1</p>
    <p>item 2</p>
    <p>item 3</p>
    <p>item 4</p>
    <p>item 5</p>
</div>
```

CSS
```
div p:nth-child(-n+2){
    color: blue;
}
```

Met de code hierboven zullen de eerste twee items een blauwe kleur krijgen.
