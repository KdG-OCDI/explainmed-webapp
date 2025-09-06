# Demo Mode voor Gebruikerstesten

## Overzicht

De demo mode is geïmplementeerd om consistente gebruikerstesten mogelijk te maken zonder afhankelijkheid van externe API's. Dit zorgt voor snelle, voorspelbare resultaten tijdens test sessies.

## Hoe Demo Mode te Activeren

### Methode 1: Via de UI

1. Druk op `Ctrl+Shift+D` om de demo mode instellingen te openen
2. Schakel de "Demo mode" toggle aan
3. De instelling wordt opgeslagen in localStorage

### Methode 2: Via URL Parameter

Voeg `?demo=true` toe aan de URL om demo mode te activeren voor die sessie.

## Beschikbare Demo Teksten

De volgende 5 medische teksten zijn beschikbaar voor testen:

### Maria Jansen - Diabetes Type 2

```
PATIENT: Maria Jansen
DATUM: 22 januari 2024

DIAGNOSE:
Diabetes mellitus type 2 met slechte glykemische controle. HbA1c verhoogd tot 8.5%. Er is sprake van diabetische retinopathie en beginnende nefropathie.

BEHANDELING:
- Metformine 1000mg 2x daags
- Gliclazide 80mg 1x daags
- Dagelijkse bloedglucose monitoring
- Dieetadvies van diëtist

VERVOLG:
Controle over 3 maanden bij internist. Oogarts controle voor retinopathie. Nierfunctie monitoring.
```

### Jan de Vries - Hartaanval (STEMI)

```
PATIENT: Jan de Vries
DATUM: 10 januari 2024

DIAGNOSE:
Acute myocardinfarct met ST-elevatie (STEMI). Patiënt heeft pijn op de borst, kortademigheid en zweten. ECG toont ST-elevatie in afleidingen II, III en aVF.

BEHANDELING:
- Acuut coronair angiogram met PCI
- Acetylsalicylzuur 300mg
- Clopidogrel 600mg
- Heparine tijdens procedure

VERVOLG:
Cardiologische revalidatie. Leefstijladviezen: stoppen met roken, gezonde voeding, regelmatige beweging.
```

### Anna Bakker - Depressie en Angst

```
PATIENT: Anna Bakker
DATUM: 18 januari 2024

DIAGNOSE:
Depressieve episode met angstklachten. Patiënt meldt sombere stemming, slaapproblemen, verminderde eetlust en concentratieproblemen. PHQ-9 score: 18 (matig-ernstige depressie).

BEHANDELING:
- Sertraline 50mg per dag
- Cognitieve gedragstherapie
- Regelmatige controle bij psychiater
- Crisisplan opgesteld

VERVOLG:
Controle over 2 weken. Bij verslechtering direct contact opnemen.
```

### Piet van der Berg - Prostaatkanker

```
PATIENT: Piet van der Berg
DATUM: 25 januari 2024

DIAGNOSE:
Prostaatcarcinoom, Gleason score 7 (3+4), klinisch stadium T2a. PSA-waarde 8.5 ng/ml. Geen uitzaaiingen aangetoond op CT-scan en botscan.

BEHANDELING:
- Radicale prostatectomie gepland
- Preoperatieve urologische consultatie
- PSA-monitoring postoperatief
- Leefstijladviezen

VERVOLG:
Operatie gepland over 3 weken. Preoperatieve screening. Postoperatieve controle bij uroloog.
```

### Han Solo - Complexe Cardiovasculaire Aandoening

```
Geachte collega,

Betreft uw patiënt Han Solo, geboren op 27/8/1952.
Uw patiënt werd op de raadpleging gezien op 4/05/2021. Betreft een controle evaluatie bij na implantatie van een ICD en CABG.

Voorgeschiedenis
2006 coronaire ischemie waarvoor medicamenteuze behandeling
2007 totale heupprothese links.
Diabetes mellitus.
Astma
2008 totale heupprothese rechts.
2008 endoprothese in het kader van een abdominaal aorta aneurysma.
2009 heelkundige ingreep omwille van een popliteaal aneurysma ter hoogte van de rechter kniekuil met tevens plaatsing van een femoropopliteale bypass.
2012 endoprothese pta onderste lidmaat links gevolgd door retrombose waarvoor opnieuw ingreep.
2016 recidief occlusie linker poot van de aorta-bi-iliacale endoprothese. Ingreep met aanmaak van een femorofemorale bypass.
2018 ernstige drietaksziekte waarvoor enkel CABG als optie bij refractaire klachten; endoscopische resectie van colonpoliepen.
2020 TTE toont matige gedaalde functie; geen kleplijden
2020 weigerachtig voor ICD

Risicofactoren
Ex roker, gestopt sinds 2 jaar.
Hypercholesterolemie niet gekend.
Arteriële hypertensie. Stress. Sedentair. Geen obesitas.
Diabetes.

Huidige problematiek:
Stabiel qua dyspnoe d'effort (vooral na middagmaal).
Geen angor.
Kan nog wat wandelen.
Levenskwaliteit 8/10.
Bd systolisch normaal rond 120 mmHg.
Wenst nog geen ICD.

Huidige medicatie
Asaflow 80 mg: 1 (po)
Bisoprolol 5 mg: 1/dag (po)
Lisinopril 15 mg: 1/dag (po)
Marevan: 1/dag (po)
Simvastatine 40 mg: 1/dag (po)
Spironolactone 25 mg: 1/2/dag (po)

Lichamelijk onderzoek
88 kg voor 173 cm. De bmi bedraagt 29. Regelmatig hartritme. Het hartritme is 61/min . Liggend gemeten aan de arm bedraagt de bloeddruk 157/67 mmHg.
Hartauscultatie: normale harttonen, geen geruisen.
Longauscultatie: normaal vesiculair ademgeruis.
Abdomen: de buikomtrek is 105 cm.

Rust ECG
Hr: 61 /min.
sinusaal ritme. Q golf in v1-v3.
Negatieve t top v2-v3.
QRS duur: 98 ms.
Qtc: 408 ms.

Besluit en advies
76-jarige patiënt gekend met niet revasculariseerbare ischemische cardiomyopathie met matige kamerfunctie en stabiele dyspnoe nyha klasse 2 à 3. Geen verhaal van angor. De dyspnoe d'effort is vooral aanwezig postprandiaal. Klinisch geen tekenen van decompensatie. De bloeddruk is verhoogd alhier maar in thuissetting heeft hij systolisch niet meer dan 120 mmHg. Rust ECG toont sequellen van oud anteroseptaal infarct, en ook negatieve t-toppen v2 - v3. Hij is ook gekend met een 1e graads av-blok.

Zoals u weet gaf patiënt in het verleden te kennen dat hij weigerachtig stond tov een ICD, en hij blijft nog steeds bij zijn standpunt. Ik informeerde hem over de voor-en nadelen van een dergelijk device.

Qua medicatie stel ik een ongewijzigd beleid voor, behalve dat we de dosis bisoprolol toch voorzichtig opdrijven naar 7.5 mg/dag, ondanks het 1e graads av-blok.

In de hoop u met deze informatie van dienst te zijn geweest, teken ik.

Met de meeste hoogachting en collegiale groeten,
Prof. Dr. Chewbacca
Kliniekhoofd
```

## Hoe Demo Mode Werkt

1. **Activatie**: Demo mode wordt geactiveerd via localStorage of URL parameter
2. **Tekst Matching**: Het systeem zoekt naar overeenkomsten tussen ingevoerde tekst en demo cases
3. **Resultaat**: Pre-verwerkte resultaten worden direct teruggegeven
4. **Tracking**: Demo tracking IDs beginnen met "demo-" voor identificatie

## Technische Details

- **Demo Data**: Opgeslagen in `src/lib/demo-data.ts`
- **Demo Mode Utilities**: Beheerd via `src/lib/demo-mode.ts`
- **API Routes**: Aangepast om demo mode te ondersteunen
- **Frontend**: Demo mode toggle en instructies toegevoegd

## Test Scenario's

### Scenario 1: Eenvoudige Test

1. Activeer demo mode
2. Kopieer een van de demo teksten
3. Plak in de applicatie
4. Verificatie: Resultaat verschijnt binnen 1-2 seconden

### Scenario 2: Onbekende Tekst

1. Activeer demo mode
2. Voer een willekeurige tekst in
3. Verificatie: Foutmelding met suggesties voor demo teksten

### Scenario 3: Demo Mode Uit

1. Schakel demo mode uit
2. Voer een demo tekst in
3. Verificatie: Normale API flow wordt gevolgd

## Voordelen voor Gebruikerstesten

- **Consistentie**: Altijd dezelfde resultaten
- **Snelheid**: Geen API vertragingen
- **Betrouwbaarheid**: Geen externe afhankelijkheden
- **Controle**: Volledige controle over test scenario's
- **Kosten**: Geen API kosten tijdens testen
