<link rel="stylesheet" href="../../templates/main.css"></link>

# 01.03-lang

lang is een globaal attribuut het helpt onze browser en zoekmachine te begrijpen in welke taal de niet aanpasbare elementen zijn geschreven. we vinden dit attribuut op de html tag van onze website. zie in het voorbeeld hieronder:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
onze website is nu gedefinieerd als engels zonder een specifieke regio.


Maar we kunnen het lang attribuut ook op andere tags gaan toepassen:
```
<p lang="en-GB">This paragraph is defined as British English.</p>

<p lang="fr">Ce paragraphe est défini en français.</p>
```

Om te controlleren of we de juiste *language tag* gebruiken kunnen we gebruik maken van deze website: [lang lookup](https://r12a.github.io/app-subtags/)