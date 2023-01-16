<link rel="stylesheet" href="../../templates/main.css"></link>

# 01.04-audio

De ```<audio>``` tag wordt gebruikt om geluidsbestanden af te spelen op een web pagina.

## attributes


De ```<audio>``` tag heeft verchillende attributen:
- ```controls```: Dit voegt de audio controls toe zoals play, pause en volume.
- ```autoplay```: Zoals de de naam doet vermoeden zal dit attribuut ervoor zorgen dat het audio bestand automatisch wordt afgespeeld.
- ```muted```: Dit attribut zorgt ervoor dat het audio element geen geluid zal maken.


*Voorbeeld:*
```
<audio controls autoplay muted>
    <source src="src/song.mp3" type="audio/mp3">
    <source src="src/song.ogg" type="audio/ogg">
</audio>
```

Met de ```<source>``` tag kunnen we het bestand dat moet afgespeeld worden definiëren. Het is ook mogelijk om meerdere ```<source>``` tags toe te voegen aan de ```<audio>``` tag. Dit kan handig zijn wanneer een bepaalde browser een bestandsformaat niet ondersteund zoals *firefox* kan geen *mp3* bestanden afspelen en moet er een *ogg* bestand worden voorzien.

> **Note:** Sommige browsers die gebaseerd zijn op Chromium staan autoplay niet toe, Maar *muted autoplay* is wel toegestaan.