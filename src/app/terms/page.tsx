export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            Algemene voorwaarden
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-gray-600">
              <strong>Laatst bijgewerkt:</strong>{' '}
              {new Date().toLocaleDateString('nl-NL')}
            </p>

            <section className="mb-8">
              <p className="mb-4 text-gray-700">
                Welkom bij ExplainMed. Door deze tool te gebruiken, gaat u
                akkoord met deze voorwaarden.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Wat we doen
              </h2>
              <p className="mb-4 text-gray-700">
                ExplainMed biedt een AI-tool die:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                <li>
                  Medische verslagen analyseert en moeilijke termen uitlegt
                </li>
                <li>
                  Samenvattingen maakt van diagnoses, behandelingen en
                  aanbevelingen
                </li>
                <li>Medische termen markeert en uitlegt</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Gebruik van ExplainMed
              </h2>

              <h3 className="mb-3 text-xl font-medium text-gray-900">
                Toegestaan:
              </h3>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                <li>Uw eigen medische verslagen analyseren</li>
                <li>Medische termen begrijpen</li>
                <li>Uitleg krijgen over diagnoses en behandelingen</li>
                <li>
                  Voor leerdoelen, zoals bijvoorbeeld het tonen in een les
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-medium text-gray-900">
                Niet toegestaan:
              </h3>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                <li>Verslagen van anderen analyseren zonder toestemming</li>
                <li>Commercieel gebruik zonder onze toestemming</li>
                <li>Schadelijke of illegale inhoud uploaden</li>
                <li>Proberen de service te hacken of te verstoren</li>
                <li>Misbruik zoals spam</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Medische disclaimer
              </h2>
              <div className="mb-4 border-l-4 border-yellow-400 bg-yellow-50 p-4">
                <p className="font-medium text-yellow-800">
                  <strong>Belangrijke medische disclaimer:</strong>
                </p>
              </div>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                <li>
                  ExplainMed is alleen een hulpmiddel en vervangt geen
                  professioneel medisch advies
                </li>
                <li>
                  Raadpleeg altijd een arts voor medische vragen of
                  noodsituaties
                </li>
                <li>
                  Maak geen medische beslissingen alleen op basis van onze
                  analyse
                </li>
                <li>
                  Bij medische noodsituaties, neem direct contact op met een
                  arts of bel 112
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Gegevens
              </h2>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                <li>Uw documenten worden niet permanent bewaard</li>
                <li>Alles wordt automatisch verwijderd na verwerking</li>
                <li>
                  Zie ons{' '}
                  <a
                    href="/privacy"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    privacybeleid
                  </a>{' '}
                  voor meer info
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Beschikbaarheid
              </h2>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                <li>
                  We proberen 24/7 online te zijn, maar kunnen dit niet
                  garanderen
                </li>
                <li>
                  We mogen de service tijdelijk onderbreken voor onderhoud,
                  updates of beëindiging
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Eigendom
              </h2>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                <li>
                  Alles aan ExplainMed (software, AI-model, content) is ons
                  eigendom
                </li>
                <li>
                  Kopiëren, verspreiden of reverse-engineeren is niet toegestaan
                  zonder toestemming
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Aansprakelijkheid
              </h2>
              <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
                <li>
                  We zijn niet verantwoordelijk voor medische beslissingen die u
                  neemt
                </li>
                <li>
                  We zijn niet aansprakelijk voor schade, fouten in de analyse
                  of onderbrekingen
                </li>
                <li>
                  Onze maximale aansprakelijkheid is het bedrag dat u voor de
                  service heeft betaald
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Wijzigingen
              </h2>
              <p className="mb-4 text-gray-700">
                We kunnen deze voorwaarden van tijd tot tijd aanpassen. Nieuwe
                voorwaarden worden hier gepubliceerd en de datum van de laatste
                update wordt bovenaan vermeld. Door de service te blijven
                gebruiken, accepteert u de nieuwe voorwaarden.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Recht en geschillen
              </h2>
              <p className="mb-4 text-gray-700">
                De Belgische wet is van toepassing op deze voorwaarden.
                Eventuele geschillen (bv. meningsverschillen) worden voorgelegd
                aan de bevoegde rechter in België.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Contact
              </h2>
              <p className="mb-4 text-gray-700">
                Als u vragen heeft over deze algemene voorwaarden, kunt u
                contact met ons opnemen via:
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
          </div>
        </div>
      </div>
    </div>
  );
}
