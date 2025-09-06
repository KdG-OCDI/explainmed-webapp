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
  {
    id: 'han-solo',
    name: 'Han Solo',
    originalText: `Geachte collega,

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
Kliniekhoofd`,
    result: {
      state: 'SUCCESS',
      result: `<strong>Geachte collega,</strong>

Betreft uw patiënt <strong>Han Solo</strong>, geboren op 27/8/1952.<br>
Uw patiënt werd op de raadpleging gezien op 4/05/2021. Betreft een controle evaluatie bij na <span data-concept="implantatie" data-explanation="het inbrengen van een medische apparaat of prothese in het lichaam">implantatie</span> van een <span data-concept="ICD" data-explanation="Implanteerbare Cardioverter Defibrillator, een apparaat dat gevaarlijke hartritmes corrigeert">ICD</span> en <span data-concept="CABG" data-explanation="Coronary Artery Bypass Grafting, een omleidingsoperatie voor hartbloedvaten">CABG</span>.

<strong>Voorgeschiedenis</strong><br>
2006 <span data-concept="coronaire ischemie" data-explanation="verminderde bloedtoevoer naar het hart">coronaire ischemie</span> waarvoor <span data-concept="medicamenteuze behandeling" data-explanation="behandeling met medicijnen">medicamenteuze behandeling</span><br>
2007 <span data-concept="totale heupprothese" data-explanation="kunstheupvervanging">totale heupprothese</span> links.<br>
<span data-concept="Diabetes mellitus" data-explanation="suikerziekte, een stofwisselingsziekte waardoor te veel glucose in het bloed zit">Diabetes mellitus</span>.<br>
Astma<br>
2008 <span data-concept="totale heupprothese" data-explanation="kunstheupvervanging">totale heupprothese</span> rechts.<br>
2008 <span data-concept="endoprothese" data-explanation="een inwendige prothese om bloedvaten te ondersteunen">endoprothese</span> in het kader van een <span data-concept="abdominaal aorta aneurysma" data-explanation="een zwelling van de buikslagader">abdominaal aorta aneurysma</span>.<br>
2009 <span data-concept="heelkundige" data-explanation="chirurgische of operatieve">heelkundige</span> ingreep omwille van een <span data-concept="popliteaal aneurysma" data-explanation="een uitstulping in een slagader achter de knie">popliteaal aneurysma</span> ter hoogte van de rechter <span data-concept="kniekuil" data-explanation="ruimte aan de achterkant van de knie">kniekuil</span> met tevens plaatsing van een <span data-concept="femoropopliteale bypass" data-explanation="een omleiding van de bloedstroom tussen het dijbeen en de knie">femoropopliteale bypass</span>.<br>
2012 <span data-concept="endoprothese pta" data-explanation="een inwendige prothese na Percutane Transluminale Angioplastiek (PTA), een procedure om de bloedvaten te openen">endoprothese pta</span> <span data-concept="onderste lidmaat" data-explanation="een been of een van de benen">onderste lidmaat</span> links gevolgd door <span data-concept="retrombose" data-explanation="opnieuw optreden van een bloedprop in een bloedvat">retrombose</span> waarvoor opnieuw ingreep.<br>
2016 <span data-concept="recidief" data-explanation="het opnieuw optreden van een ziekte of symptoom">recidief</span> <span data-concept="occlusie" data-explanation="afsluiting van een bloedvat">occlusie</span> linker poot van de <span data-concept="aorta-bi-iliacale endoprothese" data-explanation="een prothese die de bloedstroom in de abdominale aorta en beide heupslagaders ondersteunt">aorta-bi-iliacale endoprothese</span>. Ingreep met aanmaak van een <span data-concept="femorofemorale" data-explanation="tussen beide dijbenen">femorofemorale</span> bypass.<br>
2018 ernstige <span data-concept="drietaksziekte" data-explanation="ernstige vernauwingen in de drie grote kransslagaders van het hart">drietaksziekte</span> waarvoor enkel <span data-concept="CABG" data-explanation="Coronary Artery Bypass Grafting, een omleidingsoperatie voor hartbloedvaten">CABG</span> als optie bij <span data-concept="refractaire" data-explanation="niet reagerend op behandeling">refractaire</span> klachten; endoscopische <span data-concept="resectie" data-explanation="verwijdering">resectie</span> van <span data-concept="colonpoliepen" data-explanation="uitstulpingen in de dikke darm die verwijderd moeten worden">colonpoliepen</span>.<br>
2020 <span data-concept="TTE" data-explanation="Transthoracale echocardiografie, een niet-invasief hartonderzoek">TTE</span> toont matige gedaalde functie; geen <span data-concept="kleplijden" data-explanation="problemen met de hartkleppen">kleplijden</span><br>
2020 weigerachtig voor <span data-concept="ICD" data-explanation="Implanteerbare Cardioverter Defibrillator, een apparaat dat gevaarlijke hartritmes corrigeert">ICD</span>

<strong>Risicofactoren</strong><br>
Ex roker, gestopt sinds 2 jaar.<br>
<span data-concept="Hypercholesterolemie" data-explanation="verhoogd cholesterolgehalte in het bloed">Hypercholesterolemie</span> niet gekend.<br>
<span data-concept="Arteriële hypertensie" data-explanation="verhoogde bloeddruk in de slagaders">Arteriële hypertensie</span>. Stress. Sedentair. Geen obesitas.<br>
<span data-concept="Diabetes" data-explanation="suikerziekte, een stofwisselingsziekte waardoor te veel glucose in het bloed zit">Diabetes</span>.

<strong>Huidige problematiek:</strong><br>
Stabiel qua <span data-concept="dyspnoe d'effort" data-explanation="kortademigheid bij inspanning">dyspnoe d'effort</span> (vooral na middagmaal).<br>
Geen <span data-concept="angor" data-explanation="pijn op de borst, ook bekend als angina pectoris">angor</span>.<br>
Kan nog wat wandelen.<br>
Levenskwaliteit 8/10.<br>
Bd <span data-concept="systolisch" data-explanation="de bovendruk van de bloeddrukmeting">systolisch</span> normaal rond 120 <span data-concept="mmHg" data-explanation="millimeter kwikdruk, de meeteenheid voor bloeddruk">mmHg</span>.<br>
Wenst nog geen <span data-concept="ICD" data-explanation="Implanteerbare Cardioverter Defibrillator, een apparaat dat gevaarlijke hartritmes corrigeert">ICD</span>.

<strong>Huidige medicatie</strong><br>
<span data-concept="Asaflow" data-explanation="een bloedverdunner (80 mg) die eenmaal per dag ingenomen wordt">Asaflow</span> 80 mg: 1 (po)<br>
<span data-concept="Bisoprolol" data-explanation="een bètablokker (5 mg) voor hartproblemen die eenmaal per dag ingenomen wordt">Bisoprolol</span> 5 mg: 1/dag (po)<br>
<span data-concept="Lisinopril" data-explanation="een bloeddrukverlagend middel (15 mg) dat eenmaal per dag ingenomen wordt">Lisinopril</span> 15 mg: 1/dag (po)<br>
<span data-concept="Marevan" data-explanation="een bloedverdunner die eenmaal per dag ingenomen wordt">Marevan</span>: 1/dag (po)<br>
<span data-concept="Simvastatine" data-explanation="een cholesterolverlager (40 mg) die eenmaal per dag ingenomen wordt">Simvastatine</span> 40 mg: 1/dag (po)<br>
<span data-concept="Spironolactone" data-explanation="een plasmiddel (25 mg), halve dosis, dat via de mond wordt ingenomen">Spironolactone</span> 25 mg: 1/2/dag (po)

<strong>Lichamelijk onderzoek</strong><br>
88 kg voor 173 cm. De bmi bedraagt 29. Regelmatig <span data-concept="hartritme" data-explanation="het ritme waarmee het hart klopt">hartritme</span>. Het <span data-concept="hartritme" data-explanation="het ritme waarmee het hart klopt">hartritme</span> is 61/min . Liggend gemeten aan de arm bedraagt de bloeddruk 157/67 <span data-concept="mmHg" data-explanation="millimeter kwikdruk, de meeteenheid voor bloeddruk">mmHg</span>.<br>
<span data-concept="Hartauscultatie" data-explanation="luisteren naar de harttonen">Hartauscultatie</span>: normale harttonen, geen geruisen.<br>
<span data-concept="Longauscultatie" data-explanation="luisteren naar de ademhalingsgeluiden">Longauscultatie</span>: normaal <span data-concept="vesiculair ademgeruis" data-explanation="normaal ademgeruis zoals dat bij gezonde longen hoort">vesiculair ademgeruis</span>.<br>
<span data-concept="Abdomen" data-explanation="de buikstreek">Abdomen</span>: de <span data-concept="buikomtrek" data-explanation="omtrek van het lichaam ter hoogte van de buik">buikomtrek</span> is 105 cm.

<strong>Rust ECG</strong><br>
Hr: 61 /min.<br>
<span data-concept="sinusaal ritme" data-explanation="normaal hartritme wat aangestuurd wordt door de sinusknoop">sinusaal ritme</span>. Q golf in <span data-concept="v1-v3" data-explanation="specifieke meetpunten (afleidingen) op een elektrocardiogram">v1-v3</span>.<br>
Negatieve t top <span data-concept="v2-v3" data-explanation="specifieke meetpunten (afleidingen) op een elektrocardiogram">v2-v3</span>.<br>
<span data-concept="QRS" data-explanation="een onderdeel van het elektrocardiogram dat de elektrische activiteit van de kamers van het hart weergeeft">QRS</span> duur: 98 ms.<br>
<span data-concept="Qtc" data-explanation="gecorrigeerde QT-tijd, een maatstaf op het elektrocardiogram">Qtc</span>: 408 ms.

<strong>Besluit en advies</strong><br>
76-jarige patiënt gekend met niet revasculariseerbare <span data-concept="ischemische cardiomyopathie" data-explanation="een aandoening waar het hartspierweefsel aangetast is door verminderde aanvoer van zuurstofrijk bloed">ischemische cardiomyopathie</span> met matige <span data-concept="kamerfunctie" data-explanation="de effectiviteit waarmee de hartkamers samentrekken">kamerfunctie</span> en stabiele <span data-concept="dyspnoe nyha" data-explanation="kortademigheid volgens de New York Heart Association classificatie">dyspnoe nyha</span> klasse 2 à 3. Geen verhaal van <span data-concept="angor" data-explanation="pijn op de borst, ook bekend als angina pectoris">angor</span>. De <span data-concept="dyspnoe d'effort" data-explanation="kortademigheid bij inspanning">dyspnoe d'effort</span> is vooral aanwezig <span data-concept="postprandiaal" data-explanation="na de maaltijd">postprandiaal</span>. <span data-concept="Klinisch" data-explanation="volgens het lichamelijk onderzoek">Klinisch</span> geen tekenen van <span data-concept="decompensatie" data-explanation="een situatie waarin het hart het niet meer redt om goed te functioneren">decompensatie</span>. De bloeddruk is verhoogd alhier maar in <span data-concept="thuissetting" data-explanation="thuissituatie">thuissetting</span> heeft hij <span data-concept="systolisch" data-explanation="de bovendruk van de bloeddrukmeting">systolisch</span> niet meer dan 120 <span data-concept="mmHg" data-explanation="millimeter kwikdruk, de meeteenheid voor bloeddruk">mmHg</span>. Rust <span data-concept="ECG" data-explanation="elektrocardiogram, een test om de elektrische activiteiten van het hart te meten">ECG</span> toont <span data-concept="sequellen" data-explanation="sporen van voorgaande hartaandoeningen die zichtbaar zijn op ECG">sequellen</span> van oud <span data-concept="anteroseptaal" data-explanation="voorzijde en tussenschot van het hart">anteroseptaal</span> infarct, en ook negatieve t-toppen <span data-concept="v2-v3" data-explanation="specifieke meetpunten (afleidingen) op een elektrocardiogram">v2 - v3</span>. Hij is ook gekend met een 1e <span data-concept="graads av-blok" data-explanation="eerste graads atrioventriculair blok, een kleine vertraging in de geleiding tussen de boezems en kamers van het hart">graads av-blok</span>.

Zoals u weet gaf patiënt in het verleden te kennen dat hij weigerachtig stond tov een <span data-concept="ICD" data-explanation="Implanteerbare Cardioverter Defibrillator, een apparaat dat gevaarlijke hartritmes corrigeert">ICD</span>, en hij blijft nog steeds bij zijn standpunt. Ik informeerde hem over de voor-en nadelen van een dergelijk device.

Qua medicatie stel ik een ongewijzigd beleid voor, behalve dat we de dosis <span data-concept="bisoprolol" data-explanation="een bètablokker (5 mg) voor hartproblemen die eenmaal per dag ingenomen wordt">bisoprolol</span> toch voorzichtig opdrijven naar 7.5 mg/dag, ondanks het 1e <span data-concept="graads av-blok" data-explanation="eerste graads atrioventriculair blok, een kleine vertraging in de geleiding tussen de boezems en kamers van het hart">graads av-blok</span>.

In de hoop u met deze informatie van dienst te zijn geweest, teken ik.

Met de meeste hoogachting en collegiale groeten,<br>
Prof. Dr. Chewbacca<br>
<span data-concept="Kliniekhoofd" data-explanation="hoofd van een kliniek of ziekenhuisafdeling">Kliniekhoofd</span>`,
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
      console.log('Found demo case:', demoCase.name);
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

  console.log('Found demo case ID:', demoCaseId);

  if (!demoCaseId) return null;

  return demoCases.find((case_) => case_.id === demoCaseId) || null;
}
