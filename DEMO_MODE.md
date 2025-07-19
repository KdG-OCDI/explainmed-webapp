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

### 1. Bob Dylan - COPD en Longontsteking

```
PATIENT: Bob Dylan
DATUM: 15 januari 2024

DIAGNOSE:
De patiënt presenteert zich met een acute exacerbatie van chronische obstructieve longziekte (COPD) met secundaire pneumonie. Er is sprake van hypoxemie en respiratoire insufficiëntie.

BEHANDELING:
- Intraveneuze antibiotica (amoxicilline/clavulaanzuur)
- Prednisolon 30mg per dag
- Salbutamol inhalatie via vernevelaar
- Zuurstofsuppletie via neusbril

VERVOLG:
Controle na 1 week bij de longarts. Roken volledig stoppen. Vaccinatie tegen pneumokokken en griep aanbevolen.
```

### 2. Maria Jansen - Diabetes Type 2

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

### 3. Jan de Vries - Hartaanval (STEMI)

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

### 4. Anna Bakker - Depressie en Angst

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

### 5. Piet van der Berg - Prostaatkanker

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
