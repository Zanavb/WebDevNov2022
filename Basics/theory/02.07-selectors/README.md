<link rel="stylesheet" href="../../templates/main.css"></link>

# 02.07-CSS-selectors
We hebben ondertussen al de meest basic selectors bekeken: *html tag*, *clas* en *id*. We kunnen hier nog dieper op ingaan door combinaties te gaan maken. Met de volgende [link](https://www.w3schools.com/cssref/trysel.asp) kan je de verschillen bekijken op een interactieve manier. Op de website van [w3schools](https://www.w3schools.com/cssref/css_selectors.asp) kan je een lijst terugvinden met alle selectors.

Hieronder is een lijst met selectors die regelmatig voorkomen.

**Meest gebruikt!**

*Selecteer een class:*
```
.class-name{
    // css here
}
```

*Selecteer een id:*
```
#id-name{
    // css here
}
```

**Regelmatig gebruikt!**

*Selecteer meerdere HTML tags zoals alle divs en alle p tags:*
```
div, p {
    // css here
}
```

*Selecteer alle p tags in een div tag:*
```
div p {
    // css here
}
```

<div style='page-break-after: always;'></div>

*Selecteer alle p tags in een div tag:*
```
div p {
    // css here
}
```

*Selecteer alle p tags waar de **"parent"** tag een div is:*
```
div > p {
    // css here
}
```

*Selecteer de eerste p tag binnen een div tag:*
```
div + p {
    // css here
}
```