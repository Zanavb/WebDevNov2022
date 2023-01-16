<link rel="stylesheet" href="../../templates/main.css"></link>

# 01.05-video

Met de ```<video>``` tag hebben we de mogelijkheid om videobestanden af te spelen op onze webpagina.

## Attributes
Net zoals de ```<video>``` tag heeft deze ook een aantal attributen een aantal zullen je bekend voorkomen van de ```<video>``` tag.

- ```controls```: Dit voegt de audio controls toe zoals play, pause en volume.
- ```autoplay```: Zoals de de naam doet vermoeden zal dit attribuut ervoor zorgen dat het audio bestand automatisch wordt afgespeeld.
- ```muted```: Dit attribut zorgt ervoor dat het video element geen geluid zal maken.
- ```height```: De hoogte van de video gedefinieërd in pixels. 
- ```width```: De breedte van de video gedefinieërd in pixels.

> **Note:** Gebruik telkens de width samen met het heigth attribuut anders zal de webpagina verward zijn hoeveel de video werkelijk inneemt op het scherm.

*Voorbeeld:*
```
<video width="320" height="240" controls autoplay muted>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
</video>
```

Zoals dat je hier boven kan zien kunnen we net zoals bij de ```<audio>``` tag meerdere source's koppelen aan de ```<video>``` tag. De browser zal de eerste source gebruiken dat hij ondersteund.

> **Note:** Browsers die gebaseerd zijn op Chromium staan autoplay niet toe, Maar *muted autoplay* is wel toegestaan.

<div class="page-break"></div>

Er bestaat ook nog een ```<track>``` tag bij video, hiermee hebben we de mogelijkheid om ondertitels aan een video te koppelen.

*Voorbeeld:*
```
<video width="320" height="240" controls>
  <source src="forrest_gump.mp4" type="video/mp4">
  <source src="forrest_gump.ogg" type="video/ogg">
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="subtitles_no.vtt" kind="subtitles" srclang="nl" label="Dutch">
</video>
```

Met het *kind* attribuut kunnen we definiëren wat voor type track het is. Wanneer we kiezen voor subtitles **moeten** we ook het attribuut *srclang* gebruiken.