import type { DemoCase } from './demo-data.util';

export const demoCases: DemoCase[] = [
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
    summary: {
      state: 'SUCCESS',
      result: `Han Solo, geboren op 27 augustus 1952, is een patiënt die eerder een <span data-concept='cabg' data-explanation='Een operatie om de bloedtoevoer naar het hart te verbeteren door verstopte delen van de kransslagaders te omzeilen.'>cabg</span> (een speciale hartoperatie) en een <span data-concept='icd' data-explanation='Een apparaat dat helpt bij het reguleren van gevaarlijke hartritmes.'>icd</span> (een apparaat voor het hart) heeft gehad. Hij heeft ook te maken met <span data-concept='coronaire ischemie' data-explanation='Een aandoening waarbij de bloedtoevoer naar de hartspier afneemt.'>coronaire ischemie</span> sinds 2006 en heeft suikerziekte en astma. Han rookt niet meer en heeft een normale bloeddruk als hij thuis is.
      
Han neemt verschillende medicijnen, waaronder <span data-concept='Asaflow' data-explanation='Een medicijn dat helpt bloedklonters te voorkomen.'>Asaflow</span>, <span data-concept='Bisoprolol' data-explanation='Een medicijn dat de hartslag verlaagt en helpt de bloeddruk te beheersen.'>Bisoprolol</span>, <span data-concept='Lisinopril' data-explanation='Een medicijn dat helpt bij het verlagen van de bloeddruk.'>Lisinopril</span>, <span data-concept='Marevan' data-explanation='Een bloedverdunner om bloedstolsels te voorkomen.'>Marevan</span>, <span data-concept='Simvastatine' data-explanation='Een medicijn om cholesterol te verlagen.'>Simvastatine</span>, en <span data-concept='spironolactone' data-explanation='Een medicijn dat helpt om overtollig vocht uit het lichaam te verwijderen.'>Spironolactone</span>.

Bij het onderzoek bleek zijn hartslag normaal te zijn, en zijn bloeddruk was iets hoger in de kliniek dan thuis. Hij heeft geen pijn op de borst en kan nog redelijk goed bewegen, al wordt hij wel kortademig na het eten. Zijn levenskwaliteit is goed, en hij wil geen <span data-concept='icd' data-explanation='Een apparaat dat helpt bij het reguleren van gevaarlijke hartritmes.'>icd</span> laten plaatsen. Zijn medicijnen blijven bijna hetzelfde, alleen de <span data-concept='Bisoprolol' data-explanation='Een medicijn dat de hartslag verlaagt en helpt de bloeddruk te beheersen.'>Bisoprolol</span> wordt iets verhoogd.`,
    },
  },
  {
    id: 'obi-wan-kenobi',
    name: 'Obi-Wan Kenobi',
    originalText: `Geachte collega,

Betreft uw patiënt Obi-Wan Kenobi, geboren op 27/8/1952. Uw patiënt werd op de raadpleging gezien op 10/04/2017. Betreft een controle evaluatie na implantatie van een ICD en CABG.

Voorgeschiedenis
1998 val met barst in de linker femur. 
COPD.
Heupprothese, 4 x links en 5 x rechts.
2006 vkf met snel ventriculair antwoord, sinusaal na cordarone iv (paroxysmale vkf).
Concentrische linkerventrikel hypertrofie.
2009 plaatsing bms in mid rcx, niet succesvolle PTCA van de eerste diagonaaltak (az damiaan, oostende).
2011 CABG (lima op diagonaaltak en op dist LAD. saphena op RCA).
Symptomatisch orthostatisme na start van ace-inhibitie.
2013 hartfalen, paroxysmale vkf, nsvt, controle coronaro, pci vd natieve RCA, implantatie DDDR-ICD Boston Scientific.
2014 tweetakslijden met significante vernauwingen in gebied vd LAD en de RCA, doorgankelijke bypassen, geen coronaire evolutie.
2016 toename hartfalen waarvoor opname.

Risicofactoren
- ex roker, gestopt half jaar.
- hypercholesterolemie.
- arteriële hypertensie.
- stress.
- niet sedentair.
- obesitas.
- geen diabetes.
- erfelijk belast.
- nierinsufficiëntie.
- perifeer vaatlijden niet gekend.

Huidige problematiek
Globaal gaat het vrij goed. Neemt nu dagelijks 2.5 mg Burinex.

Huidige medicatie
Allopurinol 300mg sandoz: 1/dag (po)
Asaflow 80mg: 1/dag (po)
Cordarone 200mg: 1/dag (po)
Emconcor Minor 2,5mg: 2x1/2/dag (po)
Marevan 5mg: volgens INR (po)
Pantomed = pantoprazole eg 20mg: (po)
Simvastatine 40mg sandoz: 1/dag (po)

Lichamelijk onderzoek
104 kg voor 178 cm. De bmi bedraagt 33. Liggend gemeten aan de arm bedraagt de bloeddruk 132/71 mmHg.
Hoofd en hals: geen bijzonderheden.
Hartauscultatie: systolisch geruis.
Longauscultatie: bilaterale basale crepitaties.
Thorax: geen bijzonderheden.
Abdomen: geen bijzonderheden.
Onderste ledematen: geen bijzonderheden.

Rust ECG
Sinusaal ritme. Eerstegraads AV blok. Afgevlakte t-golf (lateraal, anterior).

Besluit en advies
Patiënt wordt gezien na implantatie van een ICD; hij is gekend na CABG en hij onderging nog een PCI van de RCA via de veneuze greffe, dit in het kader van niet onderhouden ventrikeltachycardie.
Heden stabiele cardiale toestand- het gewicht blijft stabiel na opdrijven van de dosis diuretica na gewichtstoename van 4kg na de recente hospitalisatie.
Ik zou de huidige dosis Burinex verderzetten onder controle van de nierfunctie en ionen (hij crepiteert nog steeds bibasaal).
Verdere opvolging met ICD controle is gepland.

In de hoop u met deze informatie van dienst te zijn geweest, teken ik.

Met de meeste hoogachting en collegiale groeten,
Dr. Ki-Adi-Mundi
Cardioloog`,
    result: {
      state: 'SUCCESS',
      result: `<strong>Geachte collega,</strong>

Betreft uw patiënt <strong>Obi-Wan Kenobi</strong>, geboren op 27/8/1952. Uw patiënt werd op de raadpleging gezien op 10/04/2017. Betreft een controle evaluatie na <span data-concept="implantatie" data-explanation="het plaatsen van een medisch hulpmiddel of apparaat in het lichaam">implantatie</span> van een <span data-concept="ICD" data-explanation="Implanteerbare Cardioverter-Defibrillator, een apparaat dat hartritmestoornissen corrigeert">ICD</span> en <span data-concept="CABG" data-explanation="Coronary Artery Bypass Grafting, een operatie om verstopping in de hartslagaders te omzeilen">CABG</span>.

<strong>Voorgeschiedenis</strong><br>
1998 val met barst in de linker <span data-concept="femur" data-explanation="dijbeen, het langste bot in het lichaam">femur</span>.<br>
<span data-concept="COPD" data-explanation="Chronic Obstructive Pulmonary Disease, een chronische longziekte">COPD</span>.<br>
Heupprothese, 4 x links en 5 x rechts.<br>
2006 <span data-concept="vkf" data-explanation="Voorkamerfibrilleren, een hartritmestoornis waarbij de boezems van het hart onregelmatig en vaak te snel samentrekken">vkf</span> met snel <span data-concept="ventriculair" data-explanation="betrekking hebbend op de kamers van het hart">ventriculair</span> antwoord, <span data-concept="sinusaal" data-explanation="normaal hartritme dat begint in de sinusknoop">sinusaal</span> na <span data-concept="Cordarone" data-explanation="een medicijn dat wordt gebruikt om bepaalde soorten ernstige hartritmestoornissen te behandelen">cordarone</span> iv (<span data-concept="paroxysmale vkf" data-explanation="plotseling optredende episodes van Voorkamerfibrilleren, een hartritmestoornis waarbij de boezems van het hart onregelmatig en vaak te snel samentrekken">paroxysmale vkf</span>).<br>
Concentrische <span data-concept="linkerventrikel" data-explanation="de linker hartkamer, het deel van het hart dat bloed naar de rest van het lichaam pompt">linkerventrikel</span> <span data-concept="hypertrofie" data-explanation="verdikking van de spierwand">hypertrofie</span>.<br>
2009 plaatsing <span data-concept="BMS" data-explanation="Bare Metal Stent, een onbedekte stent die helpt om een bloedvat open te houden">bms</span> in <span data-concept="MID" data-explanation="het middenliggende deel van een bloedvat">mid</span> <span data-concept="rcx" data-explanation="een tak van de linker kransslagader">rcx</span>, niet succesvolle <span data-concept="ptca" data-explanation="Percutane Transluminale Coronaire Angioplastiek, een procedure om een vernauwd deel van een kransslagader te openen">PTCA</span> van de eerste <span data-concept="diagonaaltak" data-explanation="een zijtak van een kransslagader van het hart">diagonaaltak</span> (az damiaan, oostende).<br>
2011 <span data-concept="cabg" data-explanation="Coronary Artery Bypass Grafting, een operatie om verstopping in de hartslagaders te omzeilen">CABG</span> (<span data-concept="lima" data-explanation="de linker interne borstslagader, vaak gebruikt in bypassoperaties">lima</span> op <span data-concept="diagonaaltak" data-explanation="een zijtak van een kransslagader van het hart">diagonaaltak</span> en op dist <span data-concept="lad" data-explanation="Left Anterior Descending, een grote kransslagader">LAD</span>. <span data-concept="saphena" data-explanation="een ader uit het been die vaak gebruikt wordt voor bypassoperaties in het hart">saphena</span> op <span data-concept="RCA" data-explanation="Right Coronary Artery, de rechter kransslagader">RCA</span>).<br>
<span data-concept="symptomatisch" data-explanation="symptomen vertonend">Symptomatisch</span> <span data-concept="orthostatisme" data-explanation="bloeddrukval bij rechtop staan">orthostatisme</span> na start van <span data-concept="ace-inhibitie" data-explanation="medicatie gebruik om hoge bloeddruk en hartproblemen te behandelen">ace-inhibitie</span>.<br>
2013 hartfalen, <span data-concept="paroxysmale vkf" data-explanation="plotselinge aanvallen van voorkamerfibrilleren, een hartritmestoornis waarbij de bovenste kamers van het hart niet normaal pompen">paroxysmale vkf</span>, <span data-concept="nsvt" data-explanation="niet-aanhoudende ventriculaire tachycardie, een tijdelijke snelle hartslag van de onderste kamers, ook bekend als ventrikeltachycardie">nsvt</span>, controle coronaro, <span data-concept="pci" data-explanation="Percutane Coronaire Interventie, een procedure om de kransslagaders van het hart te openen">pci</span> vd <span data-concept="natieve" data-explanation="originele, niet-aangepaste">natieve</span> <span data-concept="RCA" data-explanation="Right Coronary Artery, de rechter kransslagader">RCA</span>, implantatie <span data-concept="dddr-icd" data-explanation="een type implanteerbare cardioverter-defibrillator dat meerdere functies biedt, zoals pacemaken in verschillende kamers van het hart">DDDR-ICD</span> <span data-concept="Scientific" data-explanation="van het merk Boston Scientific, een medische hulpmiddelenfabrikant">Boston Scientific</span>.<br>
2014 <span data-concept="tweetakslijden" data-explanation="ziekte waarbij twee takken van de kransslagaders van het hart betrokken zijn">tweetakslijden</span> met <span data-concept="significant" data-explanation="betekenisvol; serieus">significante</span> <span data-concept="vernauwingen" data-explanation="vernauwde bloedvaten">vernauwingen</span> in gebied vd <span data-concept="LAD" data-explanation="Left Anterior Descending, een grote kransslagader">LAD</span> en de <span data-concept="RCA" data-explanation="Right Coronary Artery, de rechter kransslagader">RCA</span>, doorgankelijke bypassen, geen coronaire evolutie.<br>
2016 toename hartfalen waarvoor opname.

<strong>Risicofactoren</strong><br>
- ex roker, gestopt half jaar.<br>
- <span data-concept="hypercholesterolemie" data-explanation="hoog cholesterolgehalte in het bloed">hypercholesterolemie</span>.<br>
- <span data-concept="arteriele" data-explanation="arterieel, betrekking hebbend op slagaders">arteriële</span> <span data-concept="hypertensie" data-explanation="hoge bloeddruk">hypertensie</span>.<br>
- stress.<br>
- niet sedentair.<br>
- obesitas.<br>
- geen diabetes.<br>
- erfelijk belast.<br>
- <span data-concept="nierinsufficientie" data-explanation="onvoldoende nierfunctie">nierinsufficiëntie</span>.<br>
- <span data-concept="perifeer vaatlijden" data-explanation="aandoeningen van de bloedvaten buiten het hart en de hersenen">perifeer vaatlijden</span> niet gekend.

<strong>Huidige problematiek</strong><br>
<span data-concept="globaal" data-explanation="in het algemeen; als geheel">Globaal</span> gaat het vrij goed. Neemt nu dagelijks 2.5 mg <span data-concept="Burinex" data-explanation="een merknaam voor een veel gebruikt plasmiddel of diureticum">Burinex</span>.

<strong>Huidige medicatie</strong><br>
<span data-concept="allopurinol" data-explanation="een medicijn gebruikt om het urinezuurniveau in het bloed te verlagen">Allopurinol</span> 300mg sandoz: 1/dag (po)<br>
<span data-concept="Asaflow" data-explanation="merkennaam voor een lage dosis aspirine, gebruikt om bloedstolsels te voorkomen">Asaflow</span> 80mg: 1/dag (po)<br>
<span data-concept="Cordarone" data-explanation="een medicijn dat wordt gebruikt om bepaalde soorten ernstige hartritmestoornissen te behandelen">Cordarone</span> 200mg: 1/dag (po)<br>
<span data-concept="Emconcor Minor" data-explanation="een beta-blokker gebruikt om hoge bloeddruk en andere hartproblemen te behandelen">Emconcor Minor</span> 2,5mg: 2x1/2/dag (po)<br>
<span data-concept="Marevan" data-explanation="merknaam voor warfarine, een bloedverdunner">Marevan</span> 5mg: volgens <span data-concept="INR" data-explanation="International Normalized Ratio, een laboratoriumtest die de tijd meet die het bloed nodig heeft om te stollen">INR</span> (po)<br>
<span data-concept="Pantomed" data-explanation="merknaam voor pantoprazool, een medicijn dat maagzuur vermindert">Pantomed</span> = <span data-concept="Pantoprazole" data-explanation="een geneesmiddel om maagzuur te verminderen">pantoprazole</span> eg 20mg: (po)<br>
<span data-concept="simvastatine" data-explanation="een medicijn dat de hoeveelheid cholesterol en bepaalde vetten in het bloed verlaagt">Simvastatine</span> 40mg sandoz: 1/dag (po)

<strong>Lichamelijk onderzoek</strong><br>
104 kg voor 178 cm. De bmi bedraagt 33. Liggend gemeten aan de arm bedraagt de bloeddruk 132/71 <span data-concept="mmHg" data-explanation="millimeter kwikdruk, een eenheid voor meting van bloeddruk">mmHg</span>.<br>
Hoofd en hals: geen bijzonderheden.<br>
<span data-concept="hartauscultatie" data-explanation="luisteren naar hartgeluiden met een stethoscoop">Hartauscultatie</span>: <span data-concept="systolisch" data-explanation="betrekking hebbend op de samentrekkingsfase van het hart">systolisch</span> <span data-concept="geruis" data-explanation="abnormaal geluid van het hart, gehoord met een stethoscoop">geruis</span>.<br>
<span data-concept="longauscultatie" data-explanation="luisteren naar longgeluiden met een stethoscoop">Longauscultatie</span>: bilaterale basale <span data-concept="crepitaties" data-explanation="knisperende of krakende longgeluiden">crepitaties</span>.<br>
<span data-concept="thorax" data-explanation="borstkas, het gebied van het lichaam dat hart en longen omvat">Thorax</span>: geen bijzonderheden.<br>
<span data-concept="abdomen" data-explanation="de buik; het lichaam tussen borstkas en bekken">Abdomen</span>: geen bijzonderheden.<br>
Onderste ledematen: geen bijzonderheden.

<strong>Rust ECG</strong><br>
<span data-concept="sinusaal ritme" data-explanation="normaal hartritme dat begint in de sinusknoop">Sinusaal ritme</span>. Eerstegraads <span data-concept="av blok" data-explanation="een lichte vertraging van de elektrische transmissie van de boezems naar de ventrikels van het hart">AV blok</span>. Afgevlakte t-golf (lateraal, anterior).

<strong>Besluit en advies</strong><br>
Patiënt wordt gezien na <span data-concept="implantatie" data-explanation="het plaatsen van een medisch hulpmiddel of apparaat in het lichaam">implantatie</span> van een <span data-concept="icd" data-explanation="Implanteerbare Cardioverter-Defibrillator, een apparaat dat hartritmestoornissen corrigeert">ICD</span>; hij is gekend na <span data-concept="cabg" data-explanation="Coronary Artery Bypass Grafting, een operatie om verstopping in de hartslagaders te omzeilen">CABG</span> en hij onderging nog een <span data-concept="pci" data-explanation="Percutane Coronaire Interventie, een procedure om de kransslagaders van het hart te openen">PCI</span> van de <span data-concept="RCA" data-explanation="Right Coronary Artery, de rechter kransslagader">RCA</span> via de veneuze greffe, dit in het kader van niet onderhouden <span data-concept="ventrikeltachycardie" data-explanation="snelle hartslag die ontstaat in de ventrikels van het hart">ventrikeltachycardie</span>.<br>
Heden stabiele cardiale toestand- het gewicht blijft stabiel na opdrijven van de dosis <span data-concept="diuretica" data-explanation="medicatie die helpt bij het verwijderen van overtollig vocht uit het lichaam, ook bekend als plasmiddelen">diuretica</span> na <span data-concept="gewichtstoename" data-explanation="toename in lichaamsgewicht">gewichtstoename</span> van 4kg na de recente <span data-concept="hospitalisatie" data-explanation="opname in het ziekenhuis">hospitalisatie</span>.<br>
Ik zou de huidige dosis <span data-concept="Burinex" data-explanation="een merknaam voor een veel gebruikt plasmiddel of diureticum">Burinex</span> verderzetten onder controle van de <span data-concept="nierfunctie" data-explanation="de werking van de nieren; hoe goed ze hun werk doen">nierfunctie</span> en ionen (hij crepiteert nog steeds <span data-concept="bibasaal" data-explanation="aan beide kanten, aan de basis van de longen">bibasaal</span>).<br>
Verdere opvolging met <span data-concept="icd" data-explanation="Implanteerbare Cardioverter-Defibrillator, een apparaat dat hartritmestoornissen corrigeert">ICD</span> controle is gepland.

In de hoop u met deze informatie van dienst te zijn geweest, teken ik.

Met de meeste hoogachting en collegiale groeten,<br>
Dr. Ki-Adi-Mundi<br>
<span data-concept="Cardioloog" data-explanation="een arts die gespecialiseerd is in hartziekten">Cardioloog</span>`,
    },
    summary: {
      state: 'SUCCESS',
      result: `Obi-Wan Kenobi, geboren op 27 augustus 1952, kwam voor controle nadat er een <span data-concept='icd' data-explanation='Implanteerbare Cardioverter Defibrillator, een apparaat dat helpt bij het reguleren van hartproblemen'>ICD</span> in zijn hart is geplaatst. Hij had eerder ook al een <span data-concept='cabg' data-explanation='Coronary Artery Bypass Grafting, een operatie om een omleiding te maken voor het bloed om een blokkade in de kransslagaders te omzeilen'>CABG</span> operatie gehad.

In 1998 had hij een val waarbij zijn <span data-concept='femur' data-explanation='Dijbeen, het bot in je bovenbeen'>linker dijbeen</span> was gebroken. Hij heeft <span data-concept='copd' data-explanation='Chronische obstructieve longziekte, een longziekte die ademen moeilijk maakt'>COPD</span> en heeft meerdere heupoperaties ondergaan. Hij heeft verschillende hartproblemen gehad, zoals <span data-concept='paroxysmale vkf' data-explanation='Plotseling optredende onregelmatige hartslag'>paroxysmale vkf</span> en hartfalen. Hij was vroeger een roker, maar is nu gestopt.

Over het algemeen gaat het nu redelijk goed met hem. Hij neemt dagelijks <span data-concept='Burinex' data-explanation='Een medicijn dat helpt bij het verwijderen van overtollig vocht'>Burinex</span> om vocht in zijn lichaam te verminderen.

Hij gebruikt verschillende medicijnen: <span data-concept='allopurinol' data-explanation='Medicijn tegen jicht'>Allopurinol</span>, <span data-concept='Asaflow' data-explanation='Een vorm van aspirine, helpt het bloed te verdunnen'>Asaflow</span>, <span data-concept='Cordarone' data-explanation='Medicijn dat helpt om de hartslag te reguleren'>Cordarone</span>, <span data-concept='Emconcor Minor' data-explanation='Help bij hartproblemen'>Emconcor Minor</span>, <span data-concept='Marevan' data-explanation='Bloedverdunner, doseren op basis van INR-test'>Marevan</span> (afhankelijk van <span data-concept='INR' data-explanation='Een bloedtest om te zien hoe snel uw bloed stolt'>INR</span> resultaten), <span data-concept='Pantomed' data-explanation='Helpt bij maagproblemen'>Pantomed</span> en <span data-concept='simvastatine' data-explanation='Verlaagt het cholesterolgehalte'>Simvastatine</span>.

De dokter heeft de <span data-concept='ecg' data-explanation='Elektrocardiogram, een test die de elektrische activiteit van het hart registreert'>ECG</span> getest en zegt dat zijn hart momenteel stabiel is. Zijn gewicht is nu ook stabiel nadat hij vocht kwijt is geraakt na de laatste ziekenhuisopname. De dokter plant nog verdere controles om te kijken hoe het met zijn <span data-concept='icd' data-explanation='Implanteerbare Cardioverter Defibrillator, een apparaat dat helpt bij het reguleren van hartproblemen'>ICD</span> gaat.`,
    },
  },
  {
    id: 'padme-amidala',
    name: 'Padmé Amidala',
    originalText: `Geachte collega,

Betreft uw patiënt Padmé Amidala, geboren op 3/7/1964.
Uw patiënt werd op de raadpleging gezien op 23/12/2022. Betreft een controle evaluatie bij gedilateerde cardiomyopathie.

Voorgeschiedenis
- 2020 : progressieve dyspnoe met diagnose van onderliggende gedilateerde cardiomyopathie.
- 2021: urineweginfectie.
- 2022: recovery linker ventrikelfunctie.

Risicofactoren
Nooit gerookt. Geen hypercholesterolemie. Geen arteriële hypertensie. Geen stress. Niet sedentair. Geen overgewicht. Geen diabetes. Erfelijk belast. Familiaal: moeder hartproblemen, niet gekend welke. Geen nierinsufficiëntie. Geen perifeer vaatlijden.

Huidige problematiek
Patiënt biedt zich actueel aan voor controle-evaluatie. Subjectief stelt hij het goed en vermeldt hij éénmalig een episode van vertigo bij inspanning. Overigens verricht hij actueel zijn activiteiten in het bedrijf maar zware inspanningen blijven toch wat moeilijker. Hierbij geeft patiënt duidelijk aan dat een volledige dagactiviteit zoals hij vroeger deed in elk geval niet meer haalbaar is en dat hij de nodige rustpauzes dient te nemen. Hij vermeldt actueel geen oedemen noch klachten van claudicatio.
Intussen ontving patiënt een schrijven van de mutualiteit waarbij zijn deeltijdse arbeidsongeschiktheid wordt opgeheven. Voor patiënt is dit uiteraard een moeilijke beslissing gezien het impact heeft op zijn bedrijf. Strict genomen is de beslissing van de adviserend geneesheer correct en begrijpelijk maar anderzijds lijkt de toepassing op de werkomstandigheden van patiënt niet optimaal.

Huidige medicatie
Zestril 20 mg: 1 co/dag (po)

Lichamelijk onderzoek
Algemene indruk: bij evaluatie zien wij een man in goede algemene toestand.
73 kg voor 174 cm. De bmi bedraagt 24. Regelmatig hartritme. Liggend gemeten aan de arm bedraagt de bloeddruk 123/76 mmHg.
Hoofd en hals: geen bijzonderheden.
Hartauscultatie: normale harttonen, geen geruisen.
Longauscultatie: normaal vesiculair ademgeruis.
Abdomen: geen bijzonderheden. De buikomtrek is 83 cm.
Onderste ledematen: geen oedemen. Normale perifere polsen.

Rust ecg
Hr: 72 /min. Sinusaal ritme. Normale duur en morfologie van de p-toppen. Pq-afstand 0.14 sec.

Besluit en advies
Wij zien patiënt kortelings terug voor bespreking van resultaten.

In de hoop u met deze informatie van dienst te zijn geweest, teken ik.

Met de meeste hoogachting en collegiale groeten,
Dr. Luke Skywalker
Coördinerend cardioloog`,
    result: {
      state: 'SUCCESS',
      result: `<strong>Geachte collega,</strong>

Betreft uw patiënt <strong>Padmé Amidala</strong>, geboren op 3/7/1964.<br>
Uw patiënt werd op de raadpleging gezien op 23/12/2022. Betreft een controle evaluatie bij <span data-concept="gedilateerde cardiomyopathie" data-explanation="Een aandoening van de hartspier waarbij deze verwijd is en het hart minder goed pompt">gedilateerde cardiomyopathie</span>.

<strong>Voorgeschiedenis</strong><br>
- 2020 : progressieve <span data-concept="dyspnoe" data-explanation="Kortademigheid of moeite met ademhalen">dyspnoe</span> met diagnose van onderliggende gedilateerde cardiomyopathie.<br>
- 2021: <span data-concept="urineweginfectie" data-explanation="Een infectie in het urinewegstelsel, zoals een blaasontsteking">urineweginfectie</span>.<br>
- 2022: <span data-concept="recovery" data-explanation="Herstel of verbetering">recovery</span> <span data-concept="linker ventrikelfunctie" data-explanation="Het functioneren van de linker hartkamer, die verantwoordelijk is voor het rondpompen van bloed naar het lichaam">linker ventrikelfunctie</span>.

<strong>Risicofactoren</strong><br>
Nooit gerookt. Geen <span data-concept="hypercholesterolemie" data-explanation="Een hoog cholesterolgehalte in het bloed">hypercholesterolemie</span>. Geen <span data-concept="arteriële hypertensie" data-explanation="Hoge bloeddruk in de slagaders">arteriële hypertensie</span>. Geen stress. Niet sedentair. Geen overgewicht. Geen diabetes. Erfelijk belast. Familiaal: moeder hartproblemen, niet gekend welke. Geen <span data-concept="nierinsufficiëntie" data-explanation="Onvoldoende werking van de nieren">nierinsufficiëntie</span>. Geen <span data-concept="perifeer vaatlijden" data-explanation="Verminderde bloedtoevoer naar de armen of benen door vernauwde bloedvaten">perifeer vaatlijden</span>.

<strong>Huidige problematiek</strong><br>
Patiënt biedt zich actueel aan voor controle-evaluatie. <span data-concept="Subjectief" data-explanation="Volgens de persoonlijke beleving van de patiënt">Subjectief</span> stelt hij het goed en vermeldt hij éénmalig een <span data-concept="episode" data-explanation="Een voorval of gebeurtenis">episode</span> van <span data-concept="vertigo" data-explanation="Duizeligheid of het gevoel dat de omgeving om je heen draait">vertigo</span> bij inspanning. Overigens verricht hij actueel zijn activiteiten in het bedrijf maar zware inspanningen blijven toch wat moeilijker. Hierbij geeft patiënt duidelijk aan dat een volledige dagactiviteit zoals hij vroeger deed in elk geval niet meer haalbaar is en dat hij de nodige rustpauzes dient te nemen. Hij vermeldt actueel geen oedemen noch klachten van <span data-concept="claudicatio" data-explanation="Pijn in de benen bij lopen, vaak door vernauwde bloedvaten">claudicatio</span>.<br>
Intussen ontving patiënt een schrijven van de mutualiteit waarbij zijn deeltijdse <span data-concept="arbeidsongeschiktheid" data-explanation="Niet in staat zijn om (volledig) te werken vanwege gezondheidsproblemen">arbeidsongeschiktheid</span> wordt opgeheven. Voor patiënt is dit uiteraard een moeilijke beslissing gezien het impact heeft op zijn bedrijf. Strict genomen is de beslissing van de adviserend <span data-concept="geneesheer" data-explanation="Een arts of dokter">geneesheer</span> correct en begrijpelijk maar anderzijds lijkt de toepassing op de werkomstandigheden van patiënt niet <span data-concept="optimaal" data-explanation="Het beste of meest gunstige">optimaal</span>.

<strong>Huidige medicatie</strong><br>
<span data-concept="Zestril" data-explanation="Een medicijn genaamd lisinopril, gebruikt om hoge bloeddruk en hartfalen te behandelen">Zestril</span> 20 mg: 1 co/dag (po)

<strong>Lichamelijk onderzoek</strong><br>
Algemene indruk: bij evaluatie zien wij een man in goede algemene toestand.<br>
73 kg voor 174 cm. De bmi bedraagt 24. Regelmatig <span data-concept="hartritme" data-explanation="Het ritme van de hartslagen">hartritme</span>. Liggend gemeten aan de arm bedraagt de bloeddruk 123/76 <span data-concept="mmHg" data-explanation="Milimeter kwikdruk, de eenheid voor bloeddruk">mmHg</span>.<br>
Hoofd en hals: geen bijzonderheden.<br>
<span data-concept="hartauscultatie" data-explanation="Luisteren naar het hart met een stethoscoop">Hartauscultatie</span>: normale harttonen, geen geruisen.<br>
<span data-concept="longauscultatie" data-explanation="Luisteren naar de longen met een stethoscoop">Longauscultatie</span>: normaal <span data-concept="vesiculair ademgeruis" data-explanation="Normale ademgeluiden door de longen">vesiculair ademgeruis</span>.<br>
<span data-concept="abdomen" data-explanation="Buikstreek">Abdomen</span>: geen bijzonderheden. De <span data-concept="buikomtrek" data-explanation="De omtrek van de buik, gemeten met een meetlint">buikomtrek</span> is 83 cm.<br>
Onderste ledematen: geen oedemen. Normale perifere polsen.

<strong>Rust ecg</strong><br>
Hr: 72 /min. <span data-concept="sinusaal ritme" data-explanation="Normaal hartritme afkomstig van de sinusknoop">Sinusaal ritme</span>. Normale duur en <span data-concept="morfologie" data-explanation="De vorm of structuur">morfologie</span> van de p-toppen. Pq-afstand 0.14 sec.

<strong>Besluit en advies</strong><br>
Wij zien patiënt kortelings terug voor bespreking van resultaten.

In de hoop u met deze informatie van dienst te zijn geweest, teken ik.

Met de meeste hoogachting en collegiale groeten,<br>
Dr. Luke Skywalker<br>
<span data-concept="Coördinerend cardioloog" data-explanation="Een cardioloog die de zorg coördineert">Coördinerend cardioloog</span>`,
    },
    summary: {
      state: 'SUCCESS',
      result: `Padmé Amidala, geboren op 3 juli 1964, kwam voor controle van haar <span data-concept='gedilateerde cardiomyopathie' data-explanation='gezondheidsprobleem waarbij het hart vergroot en verzwakt is'>gedilateerde cardiomyopathie</span>. Ze heeft last van <span data-concept='dyspnoe' data-explanation='moeilijkheden met ademhalen'>dyspnoe</span> sinds 2020 en heeft in 2021 een <span data-concept='urineweginfectie' data-explanation='een infectie die de urinewegen treft'>urineweginfectie</span> gehad. In 2022 herstelde haar <span data-concept='linker' data-explanation='in dit geval verwijst het naar de linker kant van het hart'>linker</span> <span data-concept='ventrikelfunctie' data-explanation='de pompkracht van de linker hartkamer'>ventrikelfunctie</span>. 
      
Ze heeft geen last van roken, diabetes of overgewicht, maar haar moeder had hartproblemen. Padmé voelt zich over het algemeen goed, maar kreeg tijdens inspanning een keer <span data-concept='vertigo' data-explanation='duizeligheid of draaierig gevoel'>vertigo</span>. Zeer zware inspanningen zijn moeilijker, en ze moet vaak rusten. Haar <span data-concept='arbeidsongeschiktheid' data-explanation='niet in staat zijn om te werken vanwege gezondheidsproblemen'>arbeidsongeschiktheid</span> is opgeheven, wat het moeilijk maakt voor haar bedrijf.

Ze gebruikt dagelijks <span data-concept='Zestril' data-explanation='een medicijn dat de bloeddruk verlaagt en het hart helpt beter te pompen'>Zestril</span> 20 mg. Bij onderzoek was haar bloeddruk 123/76 <span data-concept='mmHg' data-explanation='een eenheid voor druk die vaak wordt gebruikt om bloeddruk te meten'>mmHg</span>, en haar <span data-concept='hartritme' data-explanation='de snelheid waarmee het hart klopt'>hartritme</span> was normaal. De <span data-concept='longauscultatie' data-explanation='luisteren naar geluiden in de longen met een stethoscoop'>longauscultatie</span> en <span data-concept='hartauscultatie' data-explanation='luisteren naar hartgeluiden met een stethoscoop'>hartauscultatie</span> waren normaal en er waren geen <span data-concept='claudicatio' data-explanation='pijnlijke benen bij lopen door een verminderde bloedtoevoer'>claudicatio</span>-klachten. Er zijn geen <span data-concept='oedeem' data-explanation='zwelling door vochtophoping in het lichaam'>oedemen</span> aangetroffen in haar <span data-concept='onderste ledematen' data-explanation='de benen van een persoon'>onderste ledematen</span>.
      
Ze komt binnenkort terug voor de bespreking van de resultaten.`,
    },
  },
  {
    id: 'bail-organa',
    name: 'Bail Organa',
    originalText: `Geachte collega,

Betreft uw patiënt Bail Organa, geboren op 10/5/1968.

Uw patiënt werd opgenomen op 1/2/2022 op onze afdeling owv revisie implantatie lvad, monoventriculaire ondersteuning type heartmate 2. Dit wegens bloeding. De operatie is zonder complicaties verlopen. Uw patiënt stelt het verder goed. Hij werd in goede gezondheid ontslagen uit het ziekenhuis op 4/2/2022. Thuismedicatie mag terug opgestart worden. Controleafspraak werd reeds ingepland.

Voorgeschiedenis
- 2016: progressieve dyspnoe met initiële diagnose van astma met naderhand beeld van onderliggende gedilateerde cardiomyopathie. Ef: 40% met afwezigheid van specifieke diagnose bij endomyocardbiopsie.
- 2017: progressie linker ventrikeldysfunctie naar ef: 30%. Patiënt vertoeft in een nyha klasse 2 met een maximale inspanningstolerantie van 115 watt.
- 2018: documenteren van non-sustained vt bij holterregistratie. stabiele linker ventrikelfunctie.
- 2019:
implantatie van icd met nood aan revisie.
  progressieve dyspnoe sinds mei 2019 met evolutie naar nyha klasse 3 en recidiverende bovenste luchtweginfecties.
  Vermoedelijk doormaken van tia in oktober 2019 gekenmerkt door een uitval van kracht in de rechterarm.
- 2021: cva met diplopie en gerecupereerde uitval linkerarm en -been. Opstarten anticoagulantia.
Progressie dyspnoe en hartfalen met vermagering en verminderde eetlust.
- Januari 2022: implantatie lvad, monoventriculaire ondersteuning type heartmate 2.

Risicofactoren
Nicotinegebruik (5 à 6 sigaretten/dag).
Familiale anamnese: negatief.
Recidiverende infecties op kinderleeftijd.
Beroep: Patiënt was metaalbewerker en naderhand volledig arbeidsongeschikt.

Besluit en advies
Zie volgende brief.

In de hoop u met deze informatie van dienst te zijn geweest, teken ik.
Met de meeste hoogachting en collegiale groeten,

Prof. Dr. Sheev Palpatine
Cardiochirurg`,
    result: {
      state: 'SUCCESS',
      result: `<strong>Geachte collega,</strong>

Betreft uw patiënt <strong>Bail Organa</strong>, geboren op 10/5/1968.

Uw patiënt werd opgenomen op 1/2/2022 op onze afdeling <span data-concept="owv" data-explanation="omwille van">owv</span> <span data-concept="revisie" data-explanation="herziening of aanpassing van een eerder uitgevoerde operatie">revisie</span> <span data-concept="implantatie" data-explanation="het plaatsen of inbrengen van een medisch hulpmiddel in het lichaam">implantatie</span> <span data-concept="lvad" data-explanation="left ventricular assist device, een hartpomp dat de linker hartkamer ondersteunt, in dit geval type Heartmate 2">lvad</span>, monoventriculaire ondersteuning type <span data-concept="heartmate" data-explanation="heartmate is een merk van hartpompen die worden gebruikt voor hartondersteuning">heartmate</span> 2. Dit wegens <span data-concept="bloeding" data-explanation="het ontstaan van een bloeding">bloeding</span>. De operatie is zonder <span data-concept="complicaties" data-explanation="onverwachte problemen tijdens of na een medische behandeling">complicaties</span> verlopen. Uw patiënt stelt het verder goed. Hij werd in goede gezondheid ontslagen uit het ziekenhuis op 4/2/2022. <span data-concept="thuismedicatie" data-explanation="medicatie die de patiënt al eerder gebruikte en thuis kan blijven gebruiken">Thuismedicatie</span> mag terug opgestart worden. Controleafspraak werd reeds ingepland.

<strong>Voorgeschiedenis</strong><br>
- 2016: progressieve <span data-concept="dyspnoe" data-explanation="kortademigheid">dyspnoe</span> met <span data-concept="initiële" data-explanation="beginnende of eerste">initiële</span> diagnose van astma met naderhand beeld van onderliggende <span data-concept="gedilateerde cardiomyopathie" data-explanation="gedilateerde cardiomyopathie is een aandoening van de hartspier die leidt tot een verzwakt en vergroot hart">gedilateerde cardiomyopathie</span>. Ef: 40% met afwezigheid van specifieke diagnose bij <span data-concept="endomyocardbiopsie" data-explanation="het nemen van een klein stukje weefsel uit de hartspier voor onderzoek">endomyocardbiopsie</span>.<br>
- 2017: <span data-concept="progressie" data-explanation="toename of verslechtering van een conditie">progressie</span> <span data-concept="linker ventrikeldysfunctie" data-explanation="verminderde werking van de linker hartkamer">linker ventrikeldysfunctie</span> naar ef: 30%. Patiënt vertoeft in een <span data-concept="nyha klasse" data-explanation="New York Heart Association, een maatstaf voor de ernst van hartfalen; klasse 2 betekent milde symptomen">nyha klasse 2</span> met een maximale <span data-concept="inspanningstolerantie" data-explanation="hoeveelheid fysieke activiteit die een persoon kan verdragen">inspanningstolerantie</span> van 115 watt.<br>
- 2018: documenteren van <span data-concept="non-sustained vt" data-explanation="niet-aanhoudende ventriculaire tachycardie, een kortdurende versnelde hartslag vanuit de hartkamers">non-sustained vt</span> bij <span data-concept="holterregistratie" data-explanation="een 24-uurs opname van de hartslag met een draagbaar apparaat">holterregistratie</span>. <span data-concept="stabiele" data-explanation="onveranderde, in dit geval gelijkblijvende">stabiele</span> linker <span data-concept="ventrikelfunctie" data-explanation="de werking of functie van de onderkant van het hart, de linker ventrikel">ventrikelfunctie</span>.<br>
- 2019:<br>
<span data-concept="implantatie" data-explanation="het plaatsen of inbrengen van een medisch hulpmiddel in het lichaam">implantatie</span> van <span data-concept="icd" data-explanation="implantable cardioverter-defibrillator, een apparaat dat abnormale hartslagen kan corrigeren">icd</span> met nood aan <span data-concept="revisie" data-explanation="herziening of aanpassing van">revisie</span>.<br>
<span data-concept="progressieve dyspnoe" data-explanation="geleidelijke verergering van kortademigheid">progressieve dyspnoe</span> sinds mei 2019 met evolutie naar <span data-concept="nyha klasse" data-explanation="New York Heart Association, klasse 3 betekent ernstige symptomen bij lichte inspanning">nyha klasse 3</span> en <span data-concept="recidiverende infecties" data-explanation="herhaalde of steeds terugkerende infecties">recidiverende bovenste luchtweginfecties</span>.<br>
Vermoedelijk doormaken van <span data-concept="tia" data-explanation="transient ischemic attack, een voorbijgaande beroerte met tijdelijke uitvalsverschijnselen">tia</span> in oktober 2019 gekenmerkt door een uitval van kracht in de rechterarm.<br>
- 2021: <span data-concept="cva" data-explanation="cerebrovasculair accident, oftewel een beroerte">cva</span> met <span data-concept="diplopie" data-explanation="dubbelzien">diplopie</span> en gerecupereerde uitval linkerarm en -been. Opstarten <span data-concept="anticoagulantia" data-explanation="bloedverdunners, medicijnen die voorkomen dat het bloed te veel stolt">anticoagulantia</span>.<br>
<span data-concept="progressie dyspnoe" data-explanation="toename van kortademigheid">Progressie dyspnoe</span> en hartfalen met <span data-concept="vermagering" data-explanation="gewichtsverlies">vermagering</span> en verminderde eetlust.<br>
- Januari 2022: <span data-concept="implantatie" data-explanation="het plaatsen van een medisch hulpmiddel">implantatie</span> <span data-concept="lvad" data-explanation="left ventricular assist device, een soort hartpomp">lvad</span>, monoventriculaire ondersteuning type <span data-concept="heartmate" data-explanation="een merk van hartondersteunende apparaten, in dit geval een specifieke lvat">heartmate</span> 2.

<strong>Risicofactoren</strong><br>
<span data-concept="nicotinegebruik" data-explanation="roken, in dit geval 5 à 6 sigaretten per dag">Nicotinegebruik</span> (5 à 6 sigaretten/dag).<br>
<span data-concept="familiale anamnese" data-explanation="gezondheidsvraaggesprek betreffende familiegeschiedenis">Familiale anamnese</span>: negatief.<br>
<span data-concept="recidiverende infecties" data-explanation="herhaalde infecties, voornamelijk op jonge leeftijd">Recidiverende infecties</span> op kinderleeftijd.<br>
Beroep: Patiënt was metaalbewerker en naderhand volledig <span data-concept="arbeidsongeschikt" data-explanation="niet in staat zijn om te werken door medische omstandigheden">arbeidsongeschikt</span>.

<strong>Besluit en advies</strong><br>
Zie volgende brief.

In de hoop u met deze informatie van dienst te zijn geweest, teken ik.<br>
Met de meeste hoogachting en collegiale groeten,<br><br>
Prof. Dr. Sheev Palpatine<br>
<span data-concept="Cardiochirurg" data-explanation="een chirurg die gespecialiseerd is in hartoperaties">Cardiochirurg</span>`,
    },
    summary: {
      state: 'SUCCESS',
      result: `Bail Organa, geboren op 10 mei 1968, had een operatie op 1 februari 2022. Hij kreeg een nieuw <span data-concept='implantatie' data-explanation='plaatsen of inbrengen van een medisch apparaat in het lichaam'>implantatie</span> van een apparaat genaamd
<span data-concept='heartmate' data-explanation='een type apparaat dat het hart ondersteunt bij het pompen van bloed'>Heartmate 2</span> om zijn hart te helpen, omdat hij een bloeding had. De operatie ging goed en hij voelde zich weer beter toen hij op 4 februari het ziekenhuis mocht verlaten.

Voor zijn gezondheid is het belangrijk om zijn medicijnen weer te gebruiken. Hij heeft al een nieuwe afspraak om zijn gezondheid te laten controleren.\n\nIn het verleden had Bail ademhalingsproblemen, ten eerste werd gedacht dat het door astma kwam. Maar later bleek dat hij last had van een probleem met zijn hart, genaamd <span data-concept='gedilateerde cardiomyopathie' data-explanation='een ziekte waarbij de hartspier zich vergroot en verzwakt'>gedilateerde cardiomyopathie</span>, waardoor zijn hart minder goed pompt. Ook had hij in 2019 een aanval die leek op een mini-beroerte, noem je een <span data-concept='CVA' data-explanation='Een beroerte, veroorzaakt door problemen met de bloedcirculatie in de hersenen'>CVA</span>.

Bail rookte 5 à 6 sigaretten per dag en werkte vroeger met metaal, maar nu kan hij niet meer werken, oftewel is hij <span data-concept='arbeidsongeschikt' data-explanation='niet in staat te werken door ziekte of letsel'>arbeidsongeschikt</span>.`,
    },
  },
];
