const events = [
  { time: '07:30', event: 'Öffnung Wettkampfgelände', location: '-' },
  { time: '07:30 - 08:00', event: 'Startnummernausgabe Teamcaptains', location: 'Infopoint' },
  { time: '08:15 - 08:30', event: 'Briefing Teamcaptains', location: 'Festzelt' },
  { time: '08:00 - 09:00', event: 'Startnummernausgabe Triathlet:innen und Nachmeldungen', location: 'Infopoint' },
  { time: '09:00 - 10:00', event: 'Startnummernausgabe Lauf und Nachmeldungen', location: 'Infopoint' },
  { time: '08:00 - 12:00', event: 'Startnummernausgabe "Diä schnellste Seebachtaler:inne" und Nachmeldungen', location: 'TV Hüttwilen Zelt' },
  { time: '09:45', event: 'Räumung Wechselzone + Briefing für Triathlon', location: 'Wechselzone' },
  { time: '10:00', event: 'Start Triathlon Olympic Distance - Men', location: 'Torbogen am See' },
  { time: '10:05', event: 'Start Triathlon Olympic Distance - Women', location: 'Torbogen am See' },
  { time: '10:15', event: 'Start Stafette lang', location: 'Torbogen am See' },
  { time: '10:30', event: 'Start Stafette kurz', location: 'Torbogen am See' },
  { time: '10:35', event: 'Start Triathlon Short Distance - Men', location: 'Torbogen am See' },
  { time: '10:40', event: 'Start Triathlon Short Distance - Women', location: 'Torbogen am See' },
  { time: '11:00', event: 'Start Lauf', location: 'Passerelle' },
  { time: '13:00', event: 'Start "Diä schnellste Seebachtaler:inne"', location: 'Finish-Line' },
  { time: '14:00', event: 'Rangverkündigung Triathlon Short Distance', location: 'Festzelt' },
  { time: '14:15', event: 'Rangverkündigung Triathlon Olympic Distance', location: 'Festzelt' },
  { time: '14:30', event: 'Rangverkündigung Stafette kurz', location: 'Festzelt' },
  { time: '14:45', event: 'Rangverkündigung Stafette lang', location: 'Festzelt' },
  { time: '15:00', event: 'Finalläufe "Diä schnellste Seebachtaler:inne"', location: 'Finish-Line' },
  { time: '15:15', event: 'Rangverkündigung "Diä schnellste Seebachtaler:inne"', location: 'Festzelt' },
]

export default function Timetable() {
  return (
    <div className="">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Zeit
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Event
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {events.map((event) => (
                    <tr key={event.event}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {event.time} Uhr
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{event.event}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{event.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
