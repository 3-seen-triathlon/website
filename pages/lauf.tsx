import type { NextPage } from 'next'
import LayoutWithoutHeader from '../components/layoutwithoutheader';
import { ArrowTrendingUpIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

const statsShortDistance = [
  { name: 'Lauf', stat: '10.5 km', change: '100 m', link: 'https://connect.garmin.com/modern/course/29507170' },
]

const Lauf: NextPage = () => {
  return (
    <LayoutWithoutHeader>
      <div className="content">
        <h1 className="h1">Stafette</h1>
        <h2 className="h2 width">
          Die älteste Kategorie der DSS - und die coolste!
          Im Gegensatzu zum Triathlon kommen hier auch die Biker zum Zug!
        </h2>
      </div>

      <div className="content">
        <h3 className="h4">Allgemeine Infos</h3>
        <p className="p">
          Alle Kategorien starten im Wettkampfzentrum am Hüttwilersee.
          Eine Karte vom Wettkampfzentrum und allgemeine Athleteninfos findest du unter <Link href="/informationen"><span className="link" >Informationen</span></Link>.
        </p>
      </div>


      <div className="content">
        <h3 className="h4">Laufstrecke</h3>
        <p className="p">
          So schön das Seebachtal ist, so vielfältig ist auch die Laufstrecke des Dreiseenlaufs.
          Abwechslung geniesst bei uns oberste Priorität!
          So führt die Laufstrecke zuerst auf die Anhöhen des Seerückens mit herrlicher Aussicht auf den Hüttwilersee.
          Danach wird über Holzsteg und Natur-Trail der Nussbaumersee umrundet.
          Entlang des Hasensees findet die Runde mit einer kleinen Schlaufe zur geschichtsträchtigen Ruine Helfenberg abermals beim Strandbad des Hüttwilersees sein Ende.
          (Die Distanz über den Halbmarathon wurde per 2019 aus dem Angebot gestrichen.
          Dafür wurde der Start auf den Morgen gelegt, was Vorteile bezüglich Tagesplanung und Wettkampftemperatur mit sich bringt.)
        </p>

        <p className="p">
          Die Viertelmarathonstrecke von 10,55 km besteht aus einer Runde im Gegenuhrzeigersinn.
          Auf der Strecke verteilt befinden sich zwei Verpflegungsposten mit Sponserprodukten (Riegel und isotonische Getränke), Banane und Wasser.
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

export default Lauf;
