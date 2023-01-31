<link rel="stylesheet" href="../../templates/main.css"></link>

# 01.00-DOM

## DOM (Document Object Model)
De Document Object Model (DOM) is een programmeerbare interface voor HTML(HyperText Markup Language) en XML(Extensible Markup Language) documenten.
Het definieerd de logische structuur van het document en de wanneer hoe het document bereikt kan worden of bewerkt kan worden.

**Opmerking:** het wordt de logische structuur genoemd omdat DOM niet de relatie bepaald tussen objecten. Het Document Object Model (DOM) is een programmeerbare interface voor HTML (HyperText Markup Language) en XML(Extensible Markup Language) documenten. het definieerd de logische structuur van documenten en de manier hie het document kan bewerkt en benaderd worden.


DOM is een manier om een webpagina te representeren in een gestructureerde manier zodat het voor programmeurs en gebruikers gemakkelijker is om door het document te navigeren. Met DOM, kunnen we gemakkelijk tags, IDs, classes, attributen en elementen manipuleren met commandos of methoden die aangeleverd worden door het document. Door de DOM heeft javascript toegang tot de HTML maar ook de CSS van web pagina's. het kan ook het gedrag van HTML veranderen. Met andere woorden de Document Object Model is aan API dat toegang en interactie heeft met HTML of XML documenten.


## Waarom is DOM nodig? 

HTML is gebruikt om structuur te geven aan web paginas en javascript is gebruikt het gedrag van HTML elementen te veranderen. Wanneer een HTML bestand in onze browser wordt ingeladen, dan zal Javascript dit niet zomaar begrijpen. Daarom wordt er een DOM aangemaakt. De DOM is een representatie van dezelfde HTML maar in een ander formaat dat gebruik maakt van objecten. Javascript kan de DOM namelijk heel makkelijk begrijpen javascript begrijpt geen tags zoals ```<h1>Title</h1>``` in een HTML document maar het begrijpt wel objecten zoals h1 in een DOM
nu kan javascript ieder object bevragen door verschillende functies.

**Structuur van de DOM:** DOM kan je het best bekijken als een boom. De term structuurmodel wordt soms gebruikt om de boomachtige weergave van een document te beschrijven. iedere tak van de boom eindigt in een node, iedere node bevat een object aan het object kan je een event listenere koppelen deze wordt uitgevoerd wanneer een bepaalde gebeurtenis plaatsvindt.

## Waarom wordt het een object model genoemd?

Documenten zijn een samengang van objecten, en het model bevat niet enkel de strcutuur van het document maar ook het gedrag van het document de objecten worden dan voorgesteld door tag elementen met attributen in HTML.

<div class="page-break"></div>


*voorstelling*

HTML
```
<!DOCTYPE html>
<html> 
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <table>
            <!-- row 1 -->
            <tr>
                <td>Car</td>
                <td>Scooter</td>
            </tr>

            <!-- row 2 -->
            <tr>
                <td>MotorBike</td>
                <td>Bus</td>
            </tr>
        </table>
    </body> 
</html>
```
<div class="page-break"></div>

*DOM*

![DOM Table](src/DOM_table_example.png)