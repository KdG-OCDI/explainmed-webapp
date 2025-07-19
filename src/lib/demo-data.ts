// Demo data for user testing - pre-processed medical texts and their results
// This allows consistent testing without API calls

export interface DemoCase {
  id: string;
  name: string;
  originalText: string;
  result: {
    state: 'SUCCESS';
    result: string; // HTML with medical terms highlighted
  };
}

// In-memory mapping of demo tracking IDs to demo cases
const demoTrackingMap = new Map<string, string>();

export const demoCases: DemoCase[] = [
  {
    id: 'bob-dylan',
    name: 'Bob Dylan',
    originalText: `PATIENT: Bob Dylan
DATUM: 15 januari 2024

DIAGNOSE:
De patiënt presenteert zich met een acute exacerbatie van chronische obstructieve longziekte (COPD) met secundaire pneumonie. Er is sprake van hypoxemie en respiratoire insufficiëntie.

BEHANDELING:
- Intraveneuze antibiotica (amoxicilline/clavulaanzuur)
- Prednisolon 30mg per dag
- Salbutamol inhalatie via vernevelaar
- Zuurstofsuppletie via neusbril

VERVOLG:
Controle na 1 week bij de longarts. Roken volledig stoppen. Vaccinatie tegen pneumokokken en griep aanbevolen.`,
    result: {
      state: 'SUCCESS',
      result: `<p><strong>PATIENT:</strong> Bob Dylan<br>
<strong>DATUM:</strong> 15 januari 2024</p>

<p><strong>DIAGNOSE:</strong><br>
De patiënt presenteert zich met een acute <span data-concept="exacerbatie" data-explanation="Verergering of opflakkering van een bestaande ziekte">exacerbatie</span> van <span data-concept="chronische obstructieve longziekte" data-explanation="Een longziekte waarbij de luchtwegen vernauwd zijn en er problemen zijn met ademhalen, vaak veroorzaakt door roken">chronische obstructieve longziekte (COPD)</span> met secundaire <span data-concept="pneumonie" data-explanation="Longontsteking, een infectie van de longen">pneumonie</span>. Er is sprake van <span data-concept="hypoxemie" data-explanation="Te weinig zuurstof in het bloed">hypoxemie</span> en <span data-concept="respiratoire insufficiëntie" data-explanation="Het ademhalingssysteem werkt niet goed genoeg om voldoende zuurstof in het bloed te krijgen">respiratoire insufficiëntie</span>.</p>

<p><strong>BEHANDELING:</strong><br>
- <span data-concept="Intraveneuze antibiotica" data-explanation="Antibiotica die via een infuus direct in de bloedbaan worden toegediend">Intraveneuze antibiotica</span> (<span data-concept="amoxicilline/clavulaanzuur" data-explanation="Een combinatie van antibiotica die vaak gebruikt wordt bij infecties">amoxicilline/clavulaanzuur</span>)<br>
- <span data-concept="Prednisolon" data-explanation="Een ontstekingsremmend medicijn dat behoort tot de corticosteroïden">Prednisolon</span> 30mg per dag<br>
- <span data-concept="Salbutamol" data-explanation="Een medicijn dat de luchtwegen verwijdt en wordt gebruikt bij ademhalingsproblemen">Salbutamol</span> inhalatie via vernevelaar<br>
- <span data-concept="Zuurstofsuppletie" data-explanation="Extra zuurstof toedienen via een neusbril of masker">Zuurstofsuppletie</span> via neusbril</p>

<p><strong>VERVOLG:</strong><br>
Controle na 1 week bij de <span data-concept="longarts" data-explanation="Een arts die gespecialiseerd is in longziekten">longarts</span>. Roken volledig stoppen. <span data-concept="Vaccinatie" data-explanation="Het toedienen van een vaccin om het lichaam te beschermen tegen bepaalde ziekten">Vaccinatie</span> tegen <span data-concept="pneumokokken" data-explanation="Bacteriën die longontsteking kunnen veroorzaken">pneumokokken</span> en griep aanbevolen.</p>`,
    },
  },
  {
    id: 'maria-jansen',
    name: 'Maria Jansen',
    originalText: `PATIENT: Maria Jansen
DATUM: 22 januari 2024

DIAGNOSE:
Diabetes mellitus type 2 met slechte glykemische controle. HbA1c verhoogd tot 8.5%. Er is sprake van diabetische retinopathie en beginnende nefropathie.

BEHANDELING:
- Metformine 1000mg 2x daags
- Gliclazide 80mg 1x daags
- Dagelijkse bloedglucose monitoring
- Dieetadvies van diëtist

VERVOLG:
Controle over 3 maanden bij internist. Oogarts controle voor retinopathie. Nierfunctie monitoring.`,
    result: {
      state: 'SUCCESS',
      result: `<p><strong>PATIENT:</strong> Maria Jansen<br>
<strong>DATUM:</strong> 22 januari 2024</p>

<p><strong>DIAGNOSE:</strong><br>
<span data-concept="Diabetes mellitus type 2" data-explanation="Een chronische stofwisselingsziekte waarbij het lichaam niet goed reageert op insuline, wat leidt tot hoge bloedsuikers">Diabetes mellitus type 2</span> met slechte <span data-concept="glykemische controle" data-explanation="Het onder controle houden van de bloedsuikerspiegel">glykemische controle</span>. <span data-concept="HbA1c" data-explanation="Een bloedtest die de gemiddelde bloedsuiker over de afgelopen 2-3 maanden meet">HbA1c</span> verhoogd tot 8.5%. Er is sprake van <span data-concept="diabetische retinopathie" data-explanation="Schade aan het netvlies van het oog veroorzaakt door diabetes">diabetische retinopathie</span> en beginnende <span data-concept="nefropathie" data-explanation="Schade aan de nieren, vaak veroorzaakt door diabetes">nefropathie</span>.</p>

<p><strong>BEHANDELING:</strong><br>
- <span data-concept="Metformine" data-explanation="Een medicijn dat de bloedsuiker verlaagt en vaak als eerste behandeling wordt gegeven bij diabetes type 2">Metformine</span> 1000mg 2x daags<br>
- <span data-concept="Gliclazide" data-explanation="Een medicijn dat de alvleesklier stimuleert om meer insuline te maken">Gliclazide</span> 80mg 1x daags<br>
- Dagelijkse <span data-concept="bloedglucose monitoring" data-explanation="Het regelmatig meten van de bloedsuiker om te controleren of de behandeling werkt">bloedglucose monitoring</span><br>
- <span data-concept="Dieetadvies" data-explanation="Advies over voeding om de bloedsuiker onder controle te houden">Dieetadvies</span> van <span data-concept="diëtist" data-explanation="Een voedingsdeskundige die advies geeft over voeding en dieet">diëtist</span></p>

<p><strong>VERVOLG:</strong><br>
Controle over 3 maanden bij <span data-concept="internist" data-explanation="Een arts die gespecialiseerd is in inwendige ziekten">internist</span>. <span data-concept="Oogarts" data-explanation="Een arts die gespecialiseerd is in oogziekten">Oogarts</span> controle voor retinopathie. <span data-concept="Nierfunctie monitoring" data-explanation="Het regelmatig controleren van hoe goed de nieren werken">Nierfunctie monitoring</span>.</p>`,
    },
  },
  {
    id: 'jan-de-vries',
    name: 'Jan de Vries',
    originalText: `PATIENT: Jan de Vries
DATUM: 10 januari 2024

DIAGNOSE:
Acute myocardinfarct met ST-elevatie (STEMI). Patiënt heeft pijn op de borst, kortademigheid en zweten. ECG toont ST-elevatie in afleidingen II, III en aVF.

BEHANDELING:
- Acuut coronair angiogram met PCI
- Acetylsalicylzuur 300mg
- Clopidogrel 600mg
- Heparine tijdens procedure

VERVOLG:
Cardiologische revalidatie. Leefstijladviezen: stoppen met roken, gezonde voeding, regelmatige beweging.`,
    result: {
      state: 'SUCCESS',
      result: `<p><strong>PATIENT:</strong> Jan de Vries<br>
<strong>DATUM:</strong> 10 januari 2024</p>

<p><strong>DIAGNOSE:</strong><br>
Acute <span data-concept="myocardinfarct" data-explanation="Een hartaanval, waarbij een deel van de hartspier afsterft door gebrek aan zuurstof">myocardinfarct</span> met <span data-concept="ST-elevatie" data-explanation="Een specifiek patroon op een hartfilmpje (ECG) dat wijst op een hartaanval">ST-elevatie (STEMI)</span>. Patiënt heeft pijn op de borst, <span data-concept="kortademigheid" data-explanation="Het gevoel dat je niet genoeg lucht krijgt">kortademigheid</span> en zweten. <span data-concept="ECG" data-explanation="Elektrocardiogram, een hartfilmpje dat de elektrische activiteit van het hart registreert">ECG</span> toont ST-elevatie in afleidingen II, III en aVF.</p>

<p><strong>BEHANDELING:</strong><br>
- Acuut <span data-concept="coronair angiogram" data-explanation="Een onderzoek waarbij contrastvloeistof in de kransslagaders wordt gespoten om te zien of er vernauwingen zijn">coronair angiogram</span> met <span data-concept="PCI" data-explanation="Percutane coronaire interventie, een procedure waarbij een vernauwing in een kransslagader wordt opgerekt met een ballonnetje en vaak een stent">PCI</span><br>
- <span data-concept="Acetylsalicylzuur" data-explanation="Aspirine, een medicijn dat bloedstolling tegengaat">Acetylsalicylzuur</span> 300mg<br>
- <span data-concept="Clopidogrel" data-explanation="Een medicijn dat bloedstolling tegengaat en vaak wordt gegeven na een hartaanval">Clopidogrel</span> 600mg<br>
- <span data-concept="Heparine" data-explanation="Een medicijn dat bloedstolling tegengaat en vaak wordt gegeven tijdens procedures">Heparine</span> tijdens procedure</p>

<p><strong>VERVOLG:</strong><br>
<span data-concept="Cardiologische revalidatie" data-explanation="Een programma van oefeningen en begeleiding om te herstellen na een hartziekte">Cardiologische revalidatie</span>. <span data-concept="Leefstijladviezen" data-explanation="Adviezen over hoe je leven aan te passen om gezond te blijven">Leefstijladviezen</span>: stoppen met roken, gezonde voeding, regelmatige beweging.</p>`,
    },
  },
  {
    id: 'anna-bakker',
    name: 'Anna Bakker',
    originalText: `PATIENT: Anna Bakker
DATUM: 18 januari 2024

DIAGNOSE:
Depressieve episode met angstklachten. Patiënt meldt sombere stemming, slaapproblemen, verminderde eetlust en concentratieproblemen. PHQ-9 score: 18 (matig-ernstige depressie).

BEHANDELING:
- Sertraline 50mg per dag
- Cognitieve gedragstherapie
- Regelmatige controle bij psychiater
- Crisisplan opgesteld

VERVOLG:
Controle over 2 weken. Bij verslechtering direct contact opnemen.`,
    result: {
      state: 'SUCCESS',
      result: `<p><strong>PATIENT:</strong> Anna Bakker<br>
<strong>DATUM:</strong> 18 januari 2024</p>

<p><strong>DIAGNOSE:</strong><br>
<span data-concept="Depressieve episode" data-explanation="Een periode van depressie die minstens 2 weken duurt en het dagelijks functioneren beïnvloedt">Depressieve episode</span> met <span data-concept="angstklachten" data-explanation="Symptomen van angst zoals bezorgdheid, spanning en onrust">angstklachten</span>. Patiënt meldt <span data-concept="sombere stemming" data-explanation="Een aanhoudend gevoel van verdriet en hopeloosheid">sombere stemming</span>, <span data-concept="slaapproblemen" data-explanation="Problemen met slapen, zoals moeilijk in slaap vallen of vaak wakker worden">slaapproblemen</span>, verminderde eetlust en <span data-concept="concentratieproblemen" data-explanation="Moeite hebben om je aandacht ergens op te richten">concentratieproblemen</span>. <span data-concept="PHQ-9" data-explanation="Een vragenlijst om de ernst van depressie te meten">PHQ-9</span> score: 18 (matig-ernstige depressie).</p>

<p><strong>BEHANDELING:</strong><br>
- <span data-concept="Sertraline" data-explanation="Een antidepressivum dat behoort tot de SSRI's">Sertraline</span> 50mg per dag<br>
- <span data-concept="Cognitieve gedragstherapie" data-explanation="Een vorm van psychotherapie die zich richt op het veranderen van gedachten en gedrag">Cognitieve gedragstherapie</span><br>
- Regelmatige controle bij <span data-concept="psychiater" data-explanation="Een arts die gespecialiseerd is in psychische aandoeningen">psychiater</span><br>
- <span data-concept="Crisisplan" data-explanation="Een plan dat beschrijft wat te doen bij een psychische crisis">Crisisplan</span> opgesteld</p>

<p><strong>VERVOLG:</strong><br>
Controle over 2 weken. Bij verslechtering direct contact opnemen.</p>`,
    },
  },
  {
    id: 'piet-van-der-berg',
    name: 'Piet van der Berg',
    originalText: `PATIENT: Piet van der Berg
DATUM: 25 januari 2024

DIAGNOSE:
Prostaatcarcinoom, Gleason score 7 (3+4), klinisch stadium T2a. PSA-waarde 8.5 ng/ml. Geen uitzaaiingen aangetoond op CT-scan en botscan.

BEHANDELING:
- Radicale prostatectomie gepland
- Preoperatieve urologische consultatie
- PSA-monitoring postoperatief
- Leefstijladviezen

VERVOLG:
Operatie gepland over 3 weken. Preoperatieve screening. Postoperatieve controle bij uroloog.`,
    result: {
      state: 'SUCCESS',
      result: `<p><strong>PATIENT:</strong> Piet van der Berg<br>
<strong>DATUM:</strong> 25 januari 2024</p>

<p><strong>DIAGNOSE:</strong><br>
<span data-concept="Prostaatcarcinoom" data-explanation="Kanker van de prostaat, een klier die alleen bij mannen voorkomt">Prostaatcarcinoom</span>, <span data-concept="Gleason score" data-explanation="Een systeem om de agressiviteit van prostaatkanker te beoordelen op basis van hoe de kankercellen er onder de microscoop uitzien">Gleason score</span> 7 (3+4), klinisch stadium T2a. <span data-concept="PSA-waarde" data-explanation="Prostaatspecifiek antigeen, een stof die door de prostaat wordt gemaakt en waarvan het gehalte in het bloed kan wijzen op prostaatkanker">PSA-waarde</span> 8.5 ng/ml. Geen <span data-concept="uitzaaiingen" data-explanation="Kankercellen die zich hebben verspreid naar andere delen van het lichaam">uitzaaiingen</span> aangetoond op <span data-concept="CT-scan" data-explanation="Computertomografie, een röntgenonderzoek dat gedetailleerde beelden van het lichaam maakt">CT-scan</span> en <span data-concept="botscan" data-explanation="Een onderzoek om te zien of er uitzaaiingen in de botten zijn">botscan</span>.</p>

<p><strong>BEHANDELING:</strong><br>
- <span data-concept="Radicale prostatectomie" data-explanation="Een operatie waarbij de hele prostaat wordt weggehaald">Radicale prostatectomie</span> gepland<br>
- <span data-concept="Preoperatieve urologische consultatie" data-explanation="Een gesprek met de uroloog voor de operatie">Preoperatieve urologische consultatie</span><br>
- <span data-concept="PSA-monitoring" data-explanation="Het regelmatig controleren van de PSA-waarde">PSA-monitoring</span> postoperatief<br>
- <span data-concept="Leefstijladviezen" data-explanation="Adviezen over hoe je leven aan te passen om gezond te blijven">Leefstijladviezen</span></p>

<p><strong>VERVOLG:</strong><br>
Operatie gepland over 3 weken. <span data-concept="Preoperatieve screening" data-explanation="Onderzoeken die worden gedaan om te controleren of de patiënt gezond genoeg is voor een operatie">Preoperatieve screening</span>. Postoperatieve controle bij <span data-concept="uroloog" data-explanation="Een arts die gespecialiseerd is in aandoeningen van de urinewegen en mannelijke geslachtsorganen">uroloog</span>.</p>`,
    },
  },
];

// Function to find a demo case by matching text content
export function findDemoCase(medicalText: string): DemoCase | null {
  const normalizedInput = medicalText.toLowerCase().trim();

  for (const demoCase of demoCases) {
    const normalizedDemo = demoCase.originalText.toLowerCase().trim();

    // Check if the input contains key identifying information
    if (
      normalizedInput.includes(demoCase.name.toLowerCase()) ||
      normalizedInput.includes(demoCase.id.replace('-', ' '))
    ) {
      return demoCase;
    }

    // Check for partial matches (first few words)
    const inputWords = normalizedInput.split(' ').slice(0, 3);
    const demoWords = normalizedDemo.split(' ').slice(0, 3);

    if (inputWords.some((word) => demoWords.includes(word))) {
      return demoCase;
    }
  }

  return null;
}

// Function to generate a demo tracking ID
export function generateDemoTrackingId(): string {
  return `demo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Function to store mapping between tracking ID and demo case
export function storeDemoTracking(
  trackingId: string,
  demoCaseId: string,
): void {
  demoTrackingMap.set(trackingId, demoCaseId);
}

// Function to get demo case by tracking ID
export function getDemoCaseByTrackingId(trackingId: string): DemoCase | null {
  const demoCaseId = demoTrackingMap.get(trackingId);
  if (!demoCaseId) return null;

  return demoCases.find((case_) => case_.id === demoCaseId) || null;
}
