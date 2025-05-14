import { NextResponse } from 'next/server';

import { getDocument } from '@/lib/document-store';

// For testing without a backend
const DUMMY_MODE = false;

// Function to add explanations to medical terms for testing
function addExplanationsToText(text: string) {
  // List of medical terms to explain
  const medicalTerms = [
    { term: 'hypertension', explanation: 'high blood pressure' },
    { term: 'myocardial infarction', explanation: 'heart attack' },
    { term: 'dyspnea', explanation: 'shortness of breath' },
    { term: 'tachycardia', explanation: 'abnormally rapid heart rate' },
    { term: 'arrhythmia', explanation: 'irregular heartbeat' },
    { term: 'hyperlipidemia', explanation: 'high cholesterol levels' },
    {
      term: 'diabetes mellitus',
      explanation: 'a condition causing high blood sugar',
    },
    { term: 'arthritis', explanation: 'inflammation of joints' },
    { term: 'osteoporosis', explanation: 'weakening of bones' },
    { term: 'gastritis', explanation: 'inflammation of the stomach lining' },
  ];

  let modifiedText = text;

  // Replace each term with the explained version using the new format with data attributes
  // Format: <span data-concept='TERM' data-explanation='EXPLANATION'>TERM</span>
  medicalTerms.forEach(({ term, explanation }) => {
    const regex = new RegExp(`\\b${term}\\b`, 'gi');
    modifiedText = modifiedText.replace(
      regex,
      `<span data-concept='${term}' data-explanation='${explanation}'>${term}</span>`,
    );
  });

  return modifiedText;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const trackingId = searchParams.get('trackingId');

    if (!trackingId) {
      return NextResponse.json(
        { error: 'Tracking ID is required' },
        { status: 400 },
      );
    }

    // Let's update the dummy API response to make it clearer that we're using a more realistic example
    // that matches what the real API would return

    if (DUMMY_MODE) {
      // Get the stored document or use a sample one
      const document =
        getDocument(trackingId) ||
        `Allergie: geen gekend.

2008: ernstige gedilateerde cmp na laattijdige presentatie voorwandinfarct. Coronarografie: oude occlusie proximale lad. Refractair hartfalen ondanks mechanische ondersteuning door middel van iabp, diuretica en vasopressie. Nsvt, vermoedelijk op coronaire hypoperfusie.

2009: implantatie lvad, monoventriculair ondersteuning type heartmate 2. Start hartrevalidatie.

2010: pompthrombose waarvoor trombolyse met intracerebrale bloeding met nood aan trepanatie. Nadien verblijf in revalidatiecentrum met complete recuperatie.

2011: hernemen hartrevalidatie.

2013: harttransplantatie. Verwijderen lvad, monoventriculair ondersteuning`;

      // Check if the ID is very recent (less than 10 seconds old)
      const idTimestamp = Number.parseInt(trackingId.split('-')[1] || '0');
      const isRecent = Date.now() - idTimestamp < 10000;

      if (isRecent) {
        // Still processing
        return NextResponse.json({
          status: 'processing',
          message: 'Your document is still being analyzed',
        });
      }

      // Process complete - return the explained document with spans
      // This simulates what the real API would return - HTML with spans containing data attributes
      const explainedDocument = `<span data-concept='Allergie' data-explanation='Een ongewone reactie van je lichaam op iets dat normaal geen probleem moet zijn.'>Allergie</span>: geen <span data-concept='gekend' data-explanation='Bekend of al eerder gezien.'>gekend</span>.

2008: ernstige gedilateerde cmp na laattijdige presentatie <span data-concept='voorwandinfarct' data-explanation='Een hartaanval die de voorkant van het hart aantast.'>voorwandinfarct</span>. <span data-concept='Coronarografie' data-explanation='Een speciale röntgenfoto die laat zien of de bloedvaten van het hart verstopt zijn.'>Coronarografie</span>: oude <span data-concept='occlusie' data-explanation='Een verstopping of blokkade in de bloedvaten.'>occlusie</span> proximale lad. <span data-concept='Refractair' data-explanation='Niet verbeterend of heel moeilijk te behandelen.'>Refractair</span> <span data-concept='hartfalen' data-explanation='Als het hart niet zo goed werkt als het zou moeten.'>hartfalen</span> ondanks mechanische ondersteuning door <span data-concept='middel' data-explanation='Hier betekent het "een manier" of "met behulp van".'>middel</span> van iabp, <span data-concept='diuretica' data-explanation='Medicijnen die helpen om vocht af te voeren, zoals plaspillen.'>diuretica</span> en <span data-concept='vasopressie' data-explanation='Middelen die je bloedvaten samentrekken om je bloeddruk te verhogen.'>vasopressie</span>. Nsvt, vermoedelijk op <span data-concept='coronair' data-explanation='Met betrekking tot de kransslagaders die het hart van bloed voorzien.'>coronaire</span> hypoperfusie.

2009: <span data-concept='implantatie' data-explanation='Het inbrengen of inplanten van iets in het lichaam.'>implantatie</span> lvad, <span data-concept='monoventriculair' data-explanation='Met betrekking tot één ventrikel of hartkamer.'>monoventriculaire</span> ondersteuning <span data-concept='type' data-explanation='Soort of categorie van iets.'>type</span> heartmate 2. Start <span data-concept='hartrevalidatie' data-explanation='Oefeningen en activiteiten om je hart sterker en gezonder te maken na hartproblemen.'>hartrevalidatie</span>.

2010: pompthrombose waarvoor <span data-concept='trombolyse' data-explanation='Een behandeling om bloedklonters op te lossen.'>trombolyse</span> met <span data-concept='intracerebrale bloeding' data-explanation='Een bloeding in de hersenen.'>intracerebrale</span> <span data-concept='bloeding' data-explanation='Wanneer er bloedkomt waar het niet hoort, zoals in het lichaam of de hersenen.'>bloeding</span> met <span data-concept='nood' data-explanation='Een dringende of belangrijke behoefte aan iets.'>nood</span> <span data-concept='aan' data-explanation='Wordt gebruikt om iets aan te geven, zoals een behoefte of wens naar iets belangrijks.'>aan</span> <span data-concept='trepanatie' data-explanation='Een medische ingreep waarbij een stukje van de schedel wordt verwijderd.'>trepanatie</span>. Nadien verblijf in <span data-concept='revalidatiecentrum' data-explanation='Een plek waar je kunt herstellen en sterker kunt worden na een ziekte of operatie.'>revalidatiecentrum</span> met complete <span data-concept='recuperatie' data-explanation='Volledig herstel of weer gezond worden.'>recuperatie</span>.

2011: hernemen <span data-concept='hartrevalidatie' data-explanation='Oefeningen en activiteiten om je hart sterker en gezonder te maken na hartproblemen.'>hartrevalidatie</span>.

2013: <span data-concept='harttransplantatie' data-explanation='Een chirurgische ingreep waarbij een zieke hart wordt vervangen door een gezond hart van een donor.'>harttransplantatie</span>. Verwijderen lvad, <span data-concept='monoventriculair' data-explanation='Met betrekking tot één ventrikel of hartkamer.'>monoventriculaire</span> ondersteuning`;

      return NextResponse.json({
        status: 'completed',
        result: {
          explanation: explainedDocument,
        },
      });
    }

    // Real API implementation (when DUMMY_MODE is false)
    const API_USERNAME = 'explainmed';
    const API_PASSWORD = 'explainmed';
    const API_BASE_URL = 'http://localhost:80';

    // Get authentication token
    const tokenResponse = await fetch(`${API_BASE_URL}/api-token-auth/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: API_USERNAME,
        password: API_PASSWORD,
      }),
    });

    if (!tokenResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to authenticate with the API' },
        { status: 401 },
      );
    }

    const tokenData = await tokenResponse.json();
    const token = tokenData.token;

    // Make the API request to check status
    const response = await fetch(
      `${API_BASE_URL}/api/task/status/${trackingId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Token ${token}`,
        },
      },
    );

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: 'Analysis not found' },
          { status: 404 },
        );
      }

      return NextResponse.json(
        { error: `API responded with status: ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to check status' },
      { status: 500 },
    );
  }
}
