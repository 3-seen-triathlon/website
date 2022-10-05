import type { NextPage } from 'next'
import LayoutWithoutHeader from '../components/layoutwithoutheader';
import { ArrowTrendingUpIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Infos from '../components/infos';

const statsShortDistance = [
  { name: 'Swim', stat: '0.5 km', change: '0 m', link: 'https://connect.garmin.com/modern/course/29506834' },
  { name: 'Bike', stat: '20.64 km', change: '260 m', link: 'https://connect.garmin.com/modern/course/29504861' },
  { name: 'Run', stat: '6.2 km', change: '52m', link: 'https://connect.garmin.com/modern/course/29507069' },
]
const statsOlympicDistance = [
  { name: 'Swim', stat: '1.5 km', change: '0 m', link: 'https://connect.garmin.com/modern/course/29506908' },
  { name: 'Bike', stat: '38.2 km', change: '500 m', link: 'https://connect.garmin.com/modern/course/29506670' },
  { name: 'Run', stat: '10.5 km', change: '100m', link: 'https://connect.garmin.com/modern/course/29507170' },
]


const Triathlon: NextPage = () => {
  return (
    <LayoutWithoutHeader>
      <div className="content">
        <h1 className="h1">Triathlon</h1>
        <h2 className="h2 width">
          Die abwechslungsreichste Disziplin an der DSS.
          Athlet:innen entdecken das Seebachtal auf 3 verschiedene Arten.
        </h2>
      </div>

      <div className="content">
        <h3 className="h4">Allgemeine Infos</h3>
        <p className="p">
          Alle Kategorien starten im Wettkampfzentrum am Hüttwilersee.
          Eine Karte vom Wettkampfzentrum und allgemeine Athleteninfos findest du unter <Link href="/informationen"><span className="link" >Informationen</span></Link>.
          Für beide Triathlon-Kategorien besteht <span className="font-bold">keine</span> Lizenzpflicht.
        </p>

        {/* TODO */}
        {/* darstellung von den infos */}
        {/* verpflegungsposten auf der laufstrecke erwähnen + dann später im Ziel */}

        <p className="p">
          Es wird im Hüttwilersee geschwommen.
          Der Start (Men / Women) erfolgt jeweils als Massenstart.
          Es wird jeweils am Wettkampftag basierend auf der Wassertemperatur entschieden, ob ein Neopren erlaubt ist oder nicht.
        </p>
        <ul className="list-disc list-inside">
          <li>Schwimmen: Massenstart am Hüttwilersee</li>
          <li>Velo: Strecke ist auf vollständig asphaltierten Strassen in gutem Zustand. Windschattenfahren ist erlaubt.</li>
          <li>Run: Trailrunning</li>
        </ul>
      </div>


      <div className="content">
        <h3 className="h4">Strecken Short Distance</h3>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:mt-8">
          {statsShortDistance.map((item) => (
            <a href={item.link} target="_blank">
              <div className="relative col-span-1 bg-gray-50 hover:bg-gray-100 py-8 px-8 rounded-lg group">
                <ArrowUpRightIcon
                  className="h-5 w-5 absolute top-2 right-2 group-hover:visible text-gray-300 group-hover:text-blue-500"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1">
                  <div className="col-span-1 text-base font-normal text-gray-900">{item.name}</div>

                  <div className="flex justify-between items-baseline">
                    <div className="flex items-baseline text-2xl font-semibold text-blue-600">
                      {item.stat}
                    </div>
                    <div
                      className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 bg-blue-100">
                      <ArrowTrendingUpIcon
                        className="-ml-1 mr-2 h-5 w-5 flex-shrink-0 self-center text-blue-600"
                        aria-hidden="true"
                      />
                      {item.change}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="content">
        <h3 className="h4">Strecken Olympic Distance</h3>
        <p className="p">
          Die Radstrecke ist identisch zur Short Distance, die Runde wird jedoch 2x gefahren bevor die Athleten wieder zurück zur Wechselzone kommen.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:mt-8">
          {statsOlympicDistance.map((item) => (
            <a href={item.link} target="_blank">
              <div className="relative col-span-1 bg-gray-50 hover:bg-gray-100 py-8 px-8 rounded-lg group">
                <ArrowUpRightIcon
                  className="h-5 w-5 absolute top-2 right-2 group-hover:visible text-gray-300 group-hover:text-blue-500"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1">
                  <div className="col-span-1 text-base font-normal text-gray-900">{item.name}</div>

                  <div className="flex justify-between items-baseline">
                    <div className="flex items-baseline text-2xl font-semibold text-blue-600">
                      {item.stat}
                    </div>
                    <div
                      className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 bg-blue-100">
                      <ArrowTrendingUpIcon
                        className="-ml-1 mr-2 h-5 w-5 flex-shrink-0 self-center text-blue-600"
                        aria-hidden="true"
                      />
                      {item.change}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

    </LayoutWithoutHeader>
  )
}

export default Triathlon;
