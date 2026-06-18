# FDND x Q42 x Teylers Museum

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

Q42 was opzoek naar een invulling van een nieuw concept. Het concept is een tijdlijn component gekoppeld aan een quiz. De doelgroep zijn basisschool kinderen met als doel om hun beter te leren begrijpend lezen. De enige vereisde van het project was dat de tijdlijn items gekoppeld zijn aan quiz vragen. Dus een vraag over een gebeurtenis in het jaar 1800 moet ook terug koppelen aan de informatie die daar bij hoort. Het zou mooi zijn om de stijl van het Teylers museum aan het houden maar dit was geen verplichting.

[Live link](https://proof-of-concept-mn6a.onrender.com)


<img width="1384" height="1557" alt="q42" src="https://github.com/user-attachments/assets/da5b465a-b4e7-46f0-8859-3a70e339dbae" />


## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

### Scroll-buttons
Tijdens het testen kwam ik er achter dat de gebruiker erg veel moet scrollen. Bijvoorbeeld als je onderaan de tijdlijn bent en je weer naar boven wilt moet je scrolle. En als je via een hint in de quiz terug wilt naar de quiz vragen moet je ook weer scrollen. Hier heb ik als oplossing het volgende:

Bij het scrollen van de pagina krijg je links onderin een button die als functie heeft om naar de bovenste tijdlijn item te scrollen. Dan is er daar onder een button die naar de quiz scrolled. Deze button is overigens alleen te zien als de gebruiker de quiz sectie in beeld heeft gehad. Dit komt omdat kinderen dan minder geneigd zijn om alle tijdlijn items te skippen en direct naar de vragen te gaan.

https://github.com/user-attachments/assets/7c9829ab-5901-4f81-9cb6-c057e7c75f9c


### PE quiz
De quiz is op de manier van progressive enhancement gemaakt. Hij werkt server side en heeft als enhancement een client side (zodat de pagina niet reload en er een loading state is)

Ik heb dit gemaakt doormiddel van het na bootsen van een 'session'. In de server staat een object die bij elke POST (beantwoorde vraag) geupdate wordt met of de vraag goed is of niet. Dat object wordt vervolgens met de redirect meegegeven aan de nieuwe route en zo wordt het antwoord geupdate. De enhancement is de client-side en die neemt eigenlijk de taak van de server over. Dit is handig omdat de pagina dan niet geheel herladen hoeft te worden. Nu is er wel een loading state nodig die de gebruiker duidelijk maakt dat er iets aan het gebeuren is.

#### Server-side versie:

https://github.com/user-attachments/assets/1aca6643-b460-438d-8665-2bb950ed607d

#### Enhanced (client-side) versie:

https://github.com/user-attachments/assets/d8621854-fb31-4548-8bee-b15853e729b2


### Responsive tijdlijn
De tijdlijn is een belangrijk onderdeel van de pagina. Het moet interessant zijn voor de gebruiker zodat diegene het ook wil gaan lezen. Voor mobiel heb ik een ander design dan voor de desktop. Hier heb ik voor gekozen omdat er op desktop veel meer ruimte is. Ook ben ik voor desktop veel meer naar het huidige design van het teylers museum gaan kijken.

#### Mobiel design:

https://github.com/user-attachments/assets/46720a71-fb2c-41bf-9e6b-621725f5b9c8

#### Desktop design

https://github.com/user-attachments/assets/47adca3a-5761-4d00-b8dc-ea9d2843774b


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
De basis van de website is Server-side JS om de data op te halen en te verwerken. De structuur van de website is gemaakt in HTML. Alles doet het in HTML (ook de quiz), alles er bovenop zijn enhancements. Ik heb een aantal enhancements gedaan met CSS bijvoorbeeld een scroll-driven animatie. Die heeft als fallback (bijvoorbeeld op firefox) dat je geen animatie ziet. Ook heb ik een aantal enhancements met client-side JS gemaakt. Bijvoorbeeld de functie dat de knop naar de quiz pas te zien is als de sectie van de quiz een keer in beeld is geweest. En de client-side POST met loading state.

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
Stap 1: **Fork de repo**
Stap 2: **Clone de code**
Stap 3: **npm install**
Stap 4: **npm run dev**

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
