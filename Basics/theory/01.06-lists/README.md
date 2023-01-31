<link rel="stylesheet" href="../../templates/main.css"></link>

# 01.06-lists

In HTML kunnen we verschillende soorten lists maken ```ordered list```, ```unordered list``` en ```description list```.

## Ordered list
Een ordered list kunnen we maken met de ```<ol>``` tag. Om elementen toe te voegen aan een list gebruiken we de ```<li>``` tag.

*Voorbeeld:*
```
<ol>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ol>
```
*resultaat:*

<div class="code">
    <ol>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ol>
</div>

<div style='page-break-after: always;'></div>

## Unordered list
Het verschil tussen ```ordered list``` en ```unordered list``` is een ordered list wordt aangeduidt door een symbool dat op elkaar volgt, Dit kunnen getallen, letters, etc... zijn. 

*Voorbeeld:*
```
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ul>
```

*resultaat:*

<div class="code">
    <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>
</div>

<div style='page-break-after: always;'></div>

## Description list
Een description list is een lijst waar ieder element nog een desciptie bevat. Voor het maken van een description list gebruiken we de tag ```<dl>``` voor de items gebruiken we de ```<dt>``` tag, voor de descriptie aan het element toe te voegen gebruiken we de tag ```<dd>```.

*Voorbeeld:*
```
<dl>
    <dt>HTML</dt>
    <dd>is a markup language!</dd>

    <dt>CSS</dt>
    <dd>is a style sheet language!</dd>
</dl>
``` 

*resultaat:*

<div class="code">
    <dl>
        <dt>HTML</dt>
        <dd>is a markup language!</dd>
        <dt>CSS</dt>
        <dd>is a style sheet language!</dd>
    </dl>
</div>
