<link rel="stylesheet" href="../../templates/main.css"></link>

# 01.01-Tags

## Recap

De DOM is onze HTML code geinterpreteerd als objecten die op een eenvoudige manier kunnen opgevraagd en gemanipuleerd worden via javascript.

## Doctype

**Doctype:** A Doctype of document type declaratie is een instructie dat aan onze web browser verteld in welke markup taal onze huidige pagina is geschreven. De doctype is niet echt een element of tag. Het laat de browser weten welke versie of welke standaard van HTML of andere markup taal wordt gebruikt in het document.

**De declaratie van de Doctype:** De Doctype declaratie vinden we telkens terug aan de bovenkant van ons document of web pagina boven elk ander element. Volgens de HTML specificaties of standaarden, ieder HTML document moet een doctype declaratie hebben zodat de pagina op een correcte manier kan gepresenteerd worden.

*De DOCTYPE voor HTML5 is niet hoofdletter gevoelig en kan als volgt geschreven worden:*

```
<!DOCTYPE html>
```

## Tags

In HTML hebben we twee soorten tags

- de normale tags
- self-closing tags

*normale tags*

```
<h1> title </h1>
```

<div class="page-break"></div>

***vaak voorkomende tags***

pagina structuur

```
<header> header of the page </header>
<main> main content of the page </main>
<footer> foot of the page </footer>
```

soorten titels

```
<h1> title </h1>
<h2> title </h2>
<h3> title </h3>
<h4> title </h4>
<h5> title </h5>
<h6> title </h6>
```

containers

```
<div> general container </div>
<p> paragraph </p>
```

inline container

```
<span> inline </span>
```

link

```
<a> anchor tag </a>
```

```
<a href="https://www.google.com"> google </a>
```

<div style='page-break-after: always;'></div>

De ```<a>``` tag heeft ook een attribuut **target** dit heeft aan hoe de link moet geopend worden.

```
<a href="https://www.google.com" target="_blank"> google </a>
```



| value     | beschrijving                                                                                                         |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| **_blank**    | Opent de link of het document in een nieuw window of tab.                                                            |
| **_self**     | Opent de link of document in het zelfde window of tab, Dit is de standaard optie wanneer we geen target definiëren. |
| **_parent**   | Opent de link of het document in de **parent** window of tab.                                                         |
| **_top**      | Dit opent de link of document in het heuide scherm op de maximale grote.                                             |
| **framename** | Dit opent de link of document in het gelijknamige frame.                                                             |

*table code voorbeeld:*

```
<table> table structure </table>
<thead> table head (group) </thead>
<tbody> table body (group) </tbody>
<tfoot> table footer (group) </tfoot>

<tr> table row </tr>
<td> table data </td>

<th> header cell use this inside thead/mark cell as header cell </th>
````

<div style='page-break-after: always;'></div>

*Voorbeeld:*

```
<table>
    <thead>
        <tr>
            <th>Nr.</th>
            <th>Name</th>
            <th>gender</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>0</th>
            <td>John Doe</td>
            <td>Male</td>
            <td>34</td>
        </tr>
    </tbody>
</table>
```

<div class="page-break"></div>

images

```
<img src="demos/wallpaper.gif" width="100%" height="auto" >
```

*resultaat:*

<div class="code">
    <img src="demos/wallpaper.gif" width="100%" height="auto" >
</div>

***self-closing tags***

line break

```
<br/>
```

***Commentaar in HTML***

In onze html code kunnen we ook commentaar schrijven. Commentaar zal nooit getoond worden op hte scherm.

```
<!-- Write your comments here -->
```
