<link rel="stylesheet" href="../../templates/main.css"></link>

# 02.02-style-block

Het style block is een html tag waarin we onze CSS kunnen definieren.

*Voorbeeld:*
```
<style>
    <!-- css code here -->
</style>
```

```
<style>
    h1{
        color: red;
    }
</style>
```
In bovenstaand voorbeeld spreken we direct alle h1 elementen aan onderaan deze course kan je terugvinden hoe we werken met **classes** en **identifiers**.

<div style='page-break-after: always;'></div>

Het style block moeten we plaatsen in de **head** tags.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo style block</title>

    <!-- style blocks here -->
    <style>
        h1{
            color: red;
        }
    </style>

</head>
<body>
    
    <header>
        <h1>Title Here</h1>
    </header>

</body>
</html>
```

## classes & Identifiers
Omdat we nu gebruik maken van style blocken hebben we ook de mogelijkheid om **classes** en **identifiers** te gaan definieren binnen het style block.

In HTML hebben we twee attributen **class** en **id**.
de belangrijkste verschillen zijn een class mag meerdere keren voorkomen in eenn document en je kan meerdere classes toekennen aan een element, een id daarintegen moet uniek zijn en het id attribuut kan maar één referentie bevatten.

>***Note:*** wanneer je meerdere HTML elementen hebt met hetzelfde **id** zal de css wel werken over de vesrchillende elementen maar de javascript functie *getElementById* zal niet werken zoals je verwacht.

<div style='page-break-after: always;'></div>

*class:*
```
<h1 class="c-red">Title here</h1>
```


```
<h1 class="c-red size-10">Title here</h1>
```

*id:*
```
<h1 id="c-red">Title here</h1>
```


***definiëren van classes en identifiers:***

*definiëren **class:***
```
.c-red{
    color: red;
}
```
Wanneer we een class definiëren plaatsen we voor de naam van onze class een (.).

*definiëren **id (identifier):***
```
#myTitle{
    font-size: 20px;
}
```
Wanneer we een identifier definiëren plaatsen we voor de naam een (#).


>***Note:*** Ook al is het style block een beter alternatief dan inline css dit is nog steeds niet ideaal we kunnen onze stijl nog niet delen onder verschillende pagina's.


## DEMOS
- [classes](https://jsfiddle.net/QuintenWork/6gsv8uLn/3/)
- [identifiers](https://jsfiddle.net/QuintenWork/6gsv8uLn/6/)