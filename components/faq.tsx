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
      "Die Anmeldung läuft nicht über Datasport - Du findest sie deshalb auf der Seite 'Kategorien' wenn Du auf mehr Infos bei der Kategorie klickst.",
  },
  {
    id: 3,
    question: "Hat es Parkplätze?",
    answer:
      "Ja, es gibt jeweils Parkplätze in der Nähe vom Wettkampfzentrum (Badi Hüttwilen). Diese werden jeweils beschildert sein, spätestens ab Einfahrt Badi Hüttwilen. Dennoch - falls Du nicht unbedingt mit dem Auto kommen musst bitten wir Dich der Umwelt zuliebe mit den ÖV anzureisen. Herzlichen Dank!",
  },
  {
    id: 3,
    question: "Gibt es die Strecken als GPX Datei?",
    answer:
      "Selbstverständlich. Du findest sie auf der jeweiligen Seite mit Informationen zur Kategorie.",
  },
  {
    id: 4,
    question: "Wo finde ich die Teambörse?",
    answer:
      "Die Teambörse gibt es im Moment noch nicht. Wir sind aktuell an der Umsetzung bzw. auf der Suche nach einer geeigneten Lösung.",
  },
]

const lists = [
  { name: 'Startliste 2023', link: 'https://www.datasport.com/live/startlist/?racenr=25893' },
  { name: 'Rangliste 2022', link: 'https://www.datasport.com/live/ranking/?racenr=24893' },
  { name: 'Rangliste 2021', link: 'https://www.datasport.com/live/ranking/?racenr=23893' },
  { name: 'Rangliste 2019', link: 'https://www.datasport.com/live/ranking/?racenr=21893' },
];

export default function FAQ() {
  return (
    <div className="">
      <h3 className="h3">Oft gestellte Fragen</h3>
      <div className="mt-12">
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="text-lg font-medium leading-6 text-gray-900">{faq.question}</dt>
              <dd className="mt-2 p-paddingless text-gray-500">{faq.answer}</dd>
            </div>
          ))}
          <div >
            <dt className="text-lg font-medium leading-6 text-gray-900">Wo finde ich Start- und/oder Ranglisten?</dt>
            <dd className="mt-2 p-paddingless text-gray-500">
              Du findest sie auf Datasport (Suche - Dreiseenstafette) - sie sind verantwortlich für den Anmeldeprozess und die Auswertung. Unten findest du die letzten Paar Start- und Ranglisten.
              <ul className="list-disc list-inside mt-4">
                {lists.map(item => (
                  <li><a className="link" target="_blank" href={item.link}>{item.name}</a></li>
                ))}
              </ul>
            </dd>
          </div>

        </dl>
      </div>
    </div>
  )
}

