export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Algemene Voorwaarden
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Laatst bijgewerkt:</strong>{' '}
              {new Date().toLocaleDateString('nl-NL')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Inleiding
              </h2>
              <p className="text-gray-700 mb-4">
                Welkom bij ExplainMed. Deze algemene voorwaarden regelen het
                gebruik van onze AI-gestuurde medische verslag analyse service.
                Door gebruik te maken van onze service, gaat u akkoord met deze
                voorwaarden.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Beschrijving van de service
              </h2>
              <p className="text-gray-700 mb-4">
                ExplainMed biedt een AI-gestuurde tool die:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  Medische verslagen analyseert en complexe terminologie uitlegt
                </li>
                <li>
                  Samenvattingen genereert van diagnoses, behandelingen en
                  aanbevelingen
                </li>
                <li>Medische termen markeert en van uitleg voorziet</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Gebruik van de service
              </h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                3.1 Toegestaan gebruik
              </h3>
              <p className="text-gray-700 mb-4">
                U mag onze service gebruiken voor:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Het analyseren van uw eigen medische verslagen</li>
                <li>Het begrijpen van medische terminologie</li>
                <li>
                  Het verkrijgen van uitleg over diagnoses en behandelingen
                </li>
                <li>Educatieve doeleinden</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                3.2 Verboden gebruik
              </h3>
              <p className="text-gray-700 mb-4">
                Het is verboden om onze service te gebruiken voor:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  Het analyseren van verslagen van anderen zonder toestemming
                </li>
                <li>
                  Commerciële doeleinden zonder onze schriftelijke toestemming
                </li>
                <li>Het uploaden van schadelijke of illegale content</li>
                <li>Het proberen te hacken of de service te verstoren</li>
                <li>
                  Het misbruiken van de service voor spam of andere ongewenste
                  activiteiten
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Medische disclaimer
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-yellow-800 font-medium">
                  <strong>Belangrijke medische disclaimer:</strong>
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                ExplainMed is een informatief hulpmiddel en vervangt{' '}
                <strong>niet</strong> professioneel medisch advies. Onze service
                is bedoeld om u te helpen medische verslagen beter te begrijpen,
                maar:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  Raadpleeg altijd een gekwalificeerde zorgverlener voor medisch
                  advies
                </li>
                <li>
                  Onze AI-analyse is geen vervanging voor professionele medische
                  beoordeling
                </li>
                <li>
                  Neem geen medische beslissingen op basis van onze analyse
                  alleen
                </li>
                <li>
                  Bij medische noodsituaties, neem direct contact op met een
                  arts of bel 112
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Gegevensverwerking
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>Geen permanente opslag:</strong> Wij bewaren uw medische
                verslagen niet permanent. Alle geüploade documenten worden
                automatisch verwijderd na verwerking. Voor meer informatie over
                hoe wij uw gegevens verwerken, zie ons
                <a
                  href="/privacy"
                  className="text-blue-600 ml-1 hover:text-blue-800 underline"
                >
                  privacybeleid
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Beschikbaarheid van de service
              </h2>
              <p className="text-gray-700 mb-4">
                Wij streven ernaar onze service 24/7 beschikbaar te houden, maar
                kunnen niet garanderen dat de service altijd ononderbroken
                beschikbaar is. Wij behouden ons het recht voor om:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>De service tijdelijk te onderbreken voor onderhoud</li>
                <li>Updates en verbeteringen door te voeren</li>
                <li>De service te beëindigen indien nodig</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Intellectueel eigendom
              </h2>
              <p className="text-gray-700 mb-4">
                Alle rechten op de ExplainMed service, inclusief de
                AI-technologie, software, en content, zijn eigendom van
                ExplainMed of onze licentiegevers. U mag onze service niet
                kopiëren, distribueren, of reverse engineeren zonder onze
                schriftelijke toestemming.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Aansprakelijkheid
              </h2>
              <p className="text-gray-700 mb-4">
                ExplainMed is niet aansprakelijk voor:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  Medische beslissingen die u neemt op basis van onze analyse
                </li>
                <li>
                  Schade als gevolg van het gebruik of onvermogen om de service
                  te gebruiken
                </li>
                <li>Onjuistheden in de AI-analyse of uitleg</li>
                <li>Verlies van gegevens of serviceonderbrekingen</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Onze aansprakelijkheid is beperkt tot het maximumbedrag dat u
                heeft betaald voor het gebruik van onze service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Wijzigingen aan de voorwaarden
              </h2>
              <p className="text-gray-700 mb-4">
                Wij kunnen deze algemene voorwaarden van tijd tot tijd wijzigen.
                Wijzigingen worden op deze pagina gepubliceerd en de datum van
                de laatste update wordt bovenaan vermeld. Door de service te
                blijven gebruiken na wijzigingen, gaat u akkoord met de nieuwe
                voorwaarden.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Toepasselijk recht
              </h2>
              <p className="text-gray-700 mb-4">
                Deze algemene voorwaarden worden beheerst door het Belgische
                recht. Eventuele geschillen worden voorgelegd aan de bevoegde
                rechter in België.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Contact
              </h2>
              <p className="text-gray-700 mb-4">
                Als u vragen heeft over deze algemene voorwaarden, kunt u
                contact met ons opnemen via:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>ExplainMed</strong>
                  <br />
                  E-mail: info@nextgenics.co
                  <br />
                  Website: https://nextgenics.co/explainmed
                </p>
              </div>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Deze algemene voorwaarden zijn opgesteld in overeenstemming met
                de Belgische wetgeving en de Algemene Verordening
                Gegevensbescherming (AVG).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
