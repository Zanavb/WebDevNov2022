<link rel="stylesheet" href="../../templates/main.css"></link>

# 01.07-forms

```<form>``` is een HTML element waarmee we input kunnen ontvangen van de gebruiker, We kunnen in een form verschillende interactive elementen gebruiken zoals: *"Text input"*, *"numbers"*, *"values"*, *"email"* en *"password"* waar de gebruiker informatie kan invullen. Naast de alfanumerieke invoer hebben we ook nog *"checkboxes"*, *"radio buttons"* en *"buttons"* dat we aan een formulier kunnen toevoegen.

HTML Syntax
```
<form>
    <!-- form elements -->
</form>
```

## form elementen
- **```<label>```**: Dit toont text dat bij het input veld behoort zoals password, username, etc...
- **```<input>```**: Met deze tag kunnen we alfanumerieke invoer velden maken, checkboxes en radio buttons.
- **```<button>```**: Deze tag maakt een knop om andere functionaliteit uit te voeren zaosl het verzenden van het formulier.
- **```<select>```**: Met deze tag maakt een drop down lijst.
- **```<textarea>```**: Deze tag maakt een text veld waar de gebruiker lange text kan invullen.
- **```<fieldset>```**: Deze tag zal een box tekenen rond een groep van elementen.
- **```<legend>```**: Dit heeft een onderschift voor elementen in een fieldset.
- **```<datalist>```**: De datalist lijkt op de select je kan een item selecteren uit een lijst maar je hebt als gebruiker ook de mogelijkheid om zelf tekst te schrijven.
- **```<output>```**: De output tag zal een waarde teruggeven van een bewerking.
- **```<option>```**: Deze tag wordt gebruikt om een optie toe te voegen aan een dropdown lijst zoals ```<select>``` of ```<datalist>```.
- **```<optgroup>```**: Deze tag gaan we gebruiken om een groep te definiëren van options ```<option>```.

<div style='page-break-after: always;'></div>

## syntax form elementen

**input**

HTML
```
<input type="text" />
```
Of de shorthand voor text:
```
<input />
```

voor paswoorden gebruiken we het type **password**.

```
<input type="password" />
```

## radio buttons
Met de ```<input>``` tag kunnen we naast alfanumerieke invoer ook nog radio buttons toevoegen.

Syntax:
```
<input type="radio" name="some variable name" value="variable value"/>
```

Voorbeeld:
```
<label>Male <input type="radio" name="gender" value="male" /></label>
<label>Female <input type="radio" name="gender" value="female" /></label>
```

<div style='page-break-after: always;'></div>

## checkbox
Naast alfanumerieke invoer en radio buttons zijn er ook nog checkboxes.

Syntax:
```
<input type="checkbox" name="some variable name" value="variable value"/>
```

Voorbeeld:
```
<ul>
    <li><input type="checkbox" name="language" value="Dutch"/></li>
    <li><input type="checkbox" name="language" value="French"/></li>
    <li><input type="checkbox" name="language" value="German"/></li>
</ul>
```
