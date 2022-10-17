import type { NextPage } from 'next'
import { ArrowTrendingUpIcon, ArrowUpRightIcon, MapIcon, RocketLaunchIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Infos, { InfoPoint, InfoPointCycling, InfoPointRun, InfoPointSwim } from '../components/infos';
import Layout from '../components/layout';
import RandomImage from '../components/RandomImage';

const statsShortDistance = [
  { name: 'Schwimmen', stat: '0.5 km', change: '0 m', link: 'https://connect.garmin.com/modern/course/29506834' },
  { name: 'Rad', stat: '20.64 km', change: '260 m', link: 'https://connect.garmin.com/modern/course/29504861' },
  { name: 'Bike', stat: '6.6 km', change: '150 m', link: 'https://connect.garmin.com/modern/course/29509069' },
  { name: 'Lauf', stat: '6.2 km', change: '52 m', link: 'https://connect.garmin.com/modern/course/29507069' },
]
const statsOlympicDistance = [
  { name: 'Schwimmen', stat: '1 km', change: '0 m', link: 'https://connect.garmin.com/modern/course/29506971' },
  { name: 'Rad', stat: '38.2 km', change: '500 m', link: 'https://connect.garmin.com/modern/course/29506670' },
  { name: 'Bike', stat: '12.6 km', change: '220 m', link: 'https://connect.garmin.com/modern/course/29529369' },
  { name: 'Lauf', stat: '10.55 km', change: '100 m', link: 'https://connect.garmin.com/modern/course/29507170' },
]

{/* TODOs: gleiche Infos wie bei Triathlon */ }
{/* Reitparcours -> link zum doc */ }

const infos: InfoPoint[] = [
  {
    name: 'Start',
    icon: (props: any) => (<RocketLaunchIcon {...props} />),
    description: 'Bei den Stafette-Kategorien gibt es jeweils einen Massenstart am Hüttwilersee.'
  },
  InfoPointSwim,
  InfoPointCycling,
  {
    name: 'Biken',
    icon: (props: any) => (<MapIcon {...props} />),
    description: 'Die Bikestrecke beinhaltet Sprünge, deshalb sind Mountainbikes empfohlen. Gravelbikes können auf eigene Verwantwortung benutzt werden.'
  },
  InfoPointRun,
  {
    name: 'Teambörse',
    icon: (props: any) => (<UserGroupIcon {...props} />),
    description: 'Die Stafette ist ein Team-Wettkampf und es werden nur vollständige Teams zugelassen. Wir haben aber weiter oben eine Teambörse verlinkt, bei der du entweder einen Platz im Team oder noch fehlende Mitglieder suchen kannst.'
  },
];

const Stafette: NextPage = () => {
  return (
    <Layout>
      <div className="content">
        <h1 className="h1">Stafette</h1>
        <h2 className="h2 width">
          Die älteste Kategorie der DSS - und die coolste!
          Im Gegensatz zum Triathlon kommen hier auch die Biker zum Zug!
        </h2>
      </div>

      <div className="content-wide">
        <RandomImage />
      </div>

      <div className="content">
        <h3 className="h4">Allgemeine Infos</h3>
        <p className="p">
          Alle Kategorien starten im Wettkampfzentrum am Hüttwilersee.
          Eine Karte vom Wettkampfzentrum und allgemeine Athleteninfos findest du unter <Link href="/informationen"><span className="link" >Informationen</span></Link>. <span className="p italic">
            Neu bieten wir dieses Jahr auch eine Teambörse an, damit du dein Team ergänzen oder als einzelner Athlet nach einem Team suchen kannst: <Link href="/teamboerse"><span className="link" >zur Teambörse</span></Link>.
          </span>
        </p>

        <Infos props={infos} />
      </div>

      <div className="content">
        <h3 className="h4">Strecken Stafette Kurz</h3>
        <p className="p">
          Für die Kategorie Stafette Kurz gibt es zwei Wertungen: mit bzw. ohne Reiter.
          Der Parcour variiert von Jahr zu Jahr aufgrund der Fruchtfolge der umliegenden Kulturzonen.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:mt-8">
          {statsShortDistance.map((item) => (
            <a href={item.link} target="_blank">
              <div className="relative col-span-1 bg-gray-50 hover:bg-gray-100 py-8 px-8 rounded-lg border-2 border-transparent group">
                <ArrowUpRightIcon
                  className="h-5 w-5 absolute top-2 right-2 group-hover:visible text-gray-300 group-hover:text-blue-500"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1">
                  <div className="col-span-1 text-base text-gray-900">{item.name}</div>

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
          <div className="relative col-span-1 bg-gray-50 hover:bg-gray-100 py-8 px-8 rounded-lg border-2 border-transparent group">
            <div className="grid grid-cols-1">
              <div className="col-span-1 text-base text-gray-900">Reiten (optional)</div>

              <div className="flex justify-between items-baseline">
                <div className="flex items-baseline text-2xl font-semibold text-blue-600">
                  ~ 1 km
                </div>
                <div
                  className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 bg-blue-100">
                  <ArrowTrendingUpIcon
                    className="-ml-1 mr-2 h-5 w-5 flex-shrink-0 self-center text-blue-600"
                    aria-hidden="true"
                  />
                  0 m
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="content">
        <h3 className="h4">Strecken Stafette Lang</h3>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:mt-8">
          {statsOlympicDistance.map((item) => (
            <a href={item.link} target="_blank">
              <div className="relative col-span-1 bg-gray-50 hover:bg-gray-100 py-8 px-8 rounded-lg border-2 border-transparent group">
                <ArrowUpRightIcon
                  className="h-5 w-5 absolute top-2 right-2 group-hover:visible text-gray-300 group-hover:text-blue-500"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1">
                  <div className="col-span-1 text-base text-gray-900">{item.name}</div>

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

    </Layout>
  )
}

export default Stafette;
