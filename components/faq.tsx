const faqs = [
  {
    id: 1,
    question: "Ich kann leider nicht starten. Kann ich das Startgeld zurückfordern?",
    answer:
      "Datasport bietet für solche Fälle eine Versicherung an, die bei der Anmeldung mit einem kleinen Beitrag dazugebucht werden kann. Falls Du das nicht gemacht hast, ist es leider nicht möglich. Wir können Dir aber anbieten, Deinen Startplatz auf das nächste Jahr zu verschieben.",
  },
  {
    id: 2,
    question: "Wo finde ich die Anmeldung für 'Diä schnellste Seebachtaler:inne'?",
    answer:
      "Die Anmeldung läuft nicht über Datasport - du findest sie deshalb auf der Seite 'Kategorien' wenn du auf mehr Infos bei der Kategorie klickst.",
  },
]

export default function FAQ() {
  return (
    <div className="content">
      <h3 className="h3">Oft gestellte Fragen</h3>
      <div className="mt-12">
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="text-lg font-medium leading-6 text-gray-900">{faq.question}</dt>
              <dd className="mt-2 p-paddingless text-gray-500">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

