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
              <strong>Laatst bijgewerkt:</strong> 24-9-2025
            </p>

            <section className="mb-8">
              <p className="mb-4 text-gray-700">
                ExplainMed respecteert uw privacy en zal uw persoonlijke gegevens beschermen. Hier leggen we uit hoe ExplainMed omgaat met uw verslag wanneer u deze tool gebruikt. ExplainMed maakt gebruik van AI.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Informatie die wij verzamelen
              </h2>
              <p className="mb-4 text-gray-700">
                Wanneer u een medisch verslag uploadt voor analyse, verwerken wij deze gegevens tijdelijk om:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                <li>Medische termen te identificeren en uit te leggen</li>
                <li>Een samenvatting van het verslag te genereren</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Tijdelijke opslag
              </h2>
              <p className="mb-4 text-gray-700">
                Wij bewaren uw medische verslagen niet permanent. Alle geüploade documenten worden automatisch verwijderd na verwerking.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Beveiliging
              </h2>
              <p className="mb-4 text-gray-700">
                Wij gebruiken maatregelen om uw gegevens te beschermen:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                <li>
                  <strong>Versleuteling van gegevens:</strong> Informatie wordt geheim gemaakt met een soort code, zodat anderen het niet zomaar kunnen lezen tijdens de overdracht en opslag
                </li>
                <li>
                  <strong>Toegangscontrole en authenticatie:</strong> Alleen mensen die toestemming hebben, kunnen erbij. Ze moeten zich bijvoorbeeld aanmelden met een wachtwoord of extra code.
                </li>
                <li>
                  <strong>Regelmatige controles:</strong> Er wordt vaak gecontroleerd of alles nog veilig is en of er geen fouten in de beveiliging zitten
                </li>
                <li>Beperkte toegang tot gegevens</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Gegevensdeling
              </h2>
              <p className="mb-4 text-gray-700">
                Wij delen uw persoonlijke gegevens niet met derden, behalve in de volgende gevallen:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                <li>Wanneer wettelijk verplicht</li>
                <li>Met uw uitdrukkelijke toestemming</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Uw rechten
              </h2>
              <p className="mb-4 text-gray-700">
                U mag uw gegevens inzien, aanpassen of laten verwijderen. Ook kunt u altijd bezwaar maken tegen het gebruik van uw gegevens.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Contact
              </h2>
              <p className="mb-4 text-gray-700">
                Als u vragen heeft over dit privacybeleid of over hoe wij uw gegevens verwerken, kunt u contact met ons opnemen via:
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
                Dit privacybeleid is opgesteld in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG) en de Belgische privacywetgeving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}