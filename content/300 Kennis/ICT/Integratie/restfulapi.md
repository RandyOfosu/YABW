---
title: RESTful APIs 101
description: Wat zijn RESTful APIs?
aliases: 
tags:
  - rest
  - api
draft: true
date: 2024-06-06
---
# API
Een Application Programming Interface is een manier voor twee computers om met elkaar te kunnen communiceren. Met een #request(verzoek) verstuurt vanuit de #client(klant), kan de #server(dienaar) deze requests vervullen met een #response (reactie).

## REST
De relatie tussen client en server en hoe die requests afgehandeld worden is gekaderd in etiquettes(manieren van omgang). Deze conventies noemen we REpresentational State Transfer, aldus REST, en dit maakt APIs RESTful.

### RESTful APIs
RESTful APIs onderverdelen hun data entiteiten(resources) in speciale #url's. Deze noemen we Uniform Resource Identifiers #uri's. 

> [!tip]Voorbeeld:
> Dus dan heb je de #netwerk-locatie: www.https://www.voorbeeldcom/ de #resource + /v1/overRandy = URI https://www.voorbeeld.com/v1/overRandy.

# Requests
Request-format bestaan uit de #start-Line, #headers en #body. Wanneer een client een request doet gaat de server in diens database kijken wat ie voor de client kan betekenen. 

Mocht alles goed gaan krijgt de client waar die om vraagt. Als dat niet het geval is geeft de server aan waarom dat niet het geval is.

``` JSON
GET /overRandy HTTP/1.1

Host: www.voorbeeld.nl
User-Agent: Mozilla/5.0
Accept: text/html
Authorization: <token>
Connection: keep-alive
```
<sup>Dit is hoe een GET request eruit kan zien. Dit doe je dagelijks via jouw browser.</sup> 
## Start-Line
In de #start-Line wordt aangegeven welke URI je wilt aanroepen en ook wat je wil met de URI doormiddel van een #http-verb. Dus geef je aan of je een data entiteit bijvoorbeeld wil:
- #post -> Creëren, 
- #get -> Inzien, 
- #patch -> Bewerken, 
- #delete -> Verwijderen

## Headers
In #headers zitten de #meta-data van een request en vormen de spelregels waar inkomende request aan moeten voldoen. In de #accept-header staat aangegeven welk format de server accepteert, dit kan #json, #xml, een combinatie van een voorbeeld hiervan is #multipart of iets anders zijn.

De #authorization-header is er om aan te geven dat clients met de juiste #tokens gebruik kunnen maken van de server. Dit kan ook op URI-niveau.
## Body
In de #body zit de #payload van de response hier kan je zien wat de server teruggeeft. 

``` JSON
status 200 OK

{
	"firstName": "Randy🙋🏿‍♂️",
	"lastName": "Ofosu🤴🏾",
	"age": "Praten we niet over.👨🏾‍🦳"
}
```
<sup>Zo'n response kan er ongeveer zo uit zien.</sup>
### Status Codes
Het mocht je al zijn opgevallen dat ik (de server) in het voorbeeld hiervoor een #status-code heb meegegeven van "200 OK". Een server geeft altijd een status code mee om aan te geven wat het vond van de request. 

Je kan de status codes onderverdelen als volgt:
- 2** de server kon de request van de client verwerken.
- 4** er is iets mis is met het verzoek van de client.
- 5** er mankeert iets aan de server.

Als je het nog niet helemaal snapt wordt het hier uitgelegd door middel van schattige honden [foto's](https://http.dog) en voor de personen die katten dienen onder ons bij [deze](https://httpcats.com).

### Stateless
In deze hele constructie is #stateless.  De client en/of de server hoeven niets over elkaar te onthouden voor of na deze transactie van informatie. Daarbij is elke request-en-response-cyclus is onafhankelijk van alle vormen van communicatie, wat het voorspelbaar en betrouwbaar maakt.

# tot slot
Ik hoop dat deze response een status 200 OK is op jouw GET request. En ja, ik weet dat ik net iets heel cringe deed daar. Maar dat bewijst weer eens dat LLM's could never, totdat ie mijn blog ongevraagd gaat scrapen, wat unlucky is. Had ik maar een robot.txt file moeten meegeven aan mijn project.

Weet je welke status ik die zal meegeven dan?

![[406.jpg | 800]]
<sup>🐶 >>>>>>>>>>>>>>>>>>> 🐱.</sup>