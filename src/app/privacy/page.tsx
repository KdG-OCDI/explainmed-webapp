export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            Privacybeleid
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-gray-600">
              <strong>Laatst bijgewerkt:</strong>{' '}
              {new Date().toLocaleDateString('nl-NL')}
            </p>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                1. Inleiding
              </h2>
              <p className="mb-4 text-gray-700">
                ExplainMed respecteert uw privacy en is toegewijd aan het
                beschermen van uw persoonlijke gegevens. Dit privacybeleid legt
                uit hoe wij omgaan met de informatie die u aan ons verstrekt
                wanneer u onze AI-gestuurde medische verslag analyse tool
                gebruikt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                2. Gegevens die wij verzamelen
              </h2>
              <p className="mb-4 text-gray-700">
                Wanneer u een medisch verslag uploadt voor analyse, verwerken
                wij deze gegevens tijdelijk om:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                <li>Medische termen te identificeren en uit te leggen</li>
                <li>Een samenvatting van het verslag te genereren</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                3. Gegevensopslag en -beveiliging
              </h2>
              <h3 className="mb-3 text-xl font-medium text-gray-900">
                3.1 Tijdelijke opslag
              </h3>
              <p className="mb-4 text-gray-700">
                <strong>Belangrijk:</strong> Wij bewaren uw medische verslagen
                niet permanent. Alle geüploade documenten worden automatisch
                verwijderd na verwerking. Wij houden geen database bij van uw
                medische gegevens.
              </p>

              <h3 className="mb-3 text-xl font-medium text-gray-900">
                3.2 Beveiliging
              </h3>
              <p className="mb-4 text-gray-700">
                Wij implementeren passende technische en organisatorische
                maatregelen om uw gegevens te beschermen:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                <li>Versleuteling van gegevens tijdens overdracht en opslag</li>
                <li>Toegangscontrole en authenticatie</li>
                <li>Regelmatige beveiligingsaudits</li>
                <li>Beperkte toegang tot gegevens</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                4. Gegevensdeling
              </h2>
              <p className="mb-4 text-gray-700">
                Wij delen uw persoonlijke gegevens niet met derden, behalve in
                de volgende gevallen:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                <li>Wanneer wettelijk verplicht</li>
                <li>Met uw uitdrukkelijke toestemming</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                5. Uw rechten
              </h2>
              <p className="mb-4 text-gray-700">
                Onder de Algemene Verordening Gegevensbescherming (AVG) heeft u
                de volgende rechten:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                <li>Recht op toegang tot uw gegevens</li>
                <li>Recht op rechtzetting van onjuiste gegevens</li>
                <li>Recht op verwijdering van uw gegevens</li>
                <li>Recht op beperking van de verwerking</li>
                <li>Recht op gegevensoverdraagbaarheid</li>
                <li>Recht van bezwaar tegen verwerking</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                6. Wijzigingen aan dit privacybeleid
              </h2>
              <p className="mb-4 text-gray-700">
                Wij kunnen dit privacybeleid van tijd tot tijd bijwerken.
                Wijzigingen worden op deze pagina gepubliceerd en de datum van
                de laatste update wordt bovenaan vermeld. Wij adviseren u om
                deze pagina regelmatig te controleren.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                7. Contact
              </h2>
              <p className="mb-4 text-gray-700">
                Als u vragen heeft over dit privacybeleid of over hoe wij uw
                gegevens verwerken, kunt u contact met ons opnemen via:
              </p>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-gray-700">
                  <strong>ExplainMed</strong>
                  <br />
                  E-mail: info@nextgenics.co
                  <br />
                  Website: https://nextgenics.co/explainmed
                </p>
              </div>
            </section>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500">
                Dit privacybeleid is opgesteld in overeenstemming met de
                Algemene Verordening Gegevensbescherming (AVG) en de Belgische
                privacywetgeving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
