import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import type { NextPage } from 'next'
import Link from 'next/link';
import FAQ from '../components/faq';
import Layout from '../components/layout';
import Timetable from '../components/timetable';

const quicklinks = [
  { name: 'Ablauf Wettkampftag', stat: 'Zeitplan', link: '#zeitplan', target: '' },
  { name: 'Badi Hüttwilersee', stat: 'Wettkampfzentrum', link: '#wettkampfzentrum', target: '' },
  { name: 'Oft gestellte Frage', stat: 'FAQ', link: '#faq', target: '' },
  { name: 'Wettkampfbestimmungen', stat: 'Reglement', link: '/dokumente/2020_reglement.pdf', target: '_blank' },
  { name: 'Fotos & Videos', stat: 'Impressionen', link: 'https://next.tiny-rocket.ch/s/AXgbWcyae2EpXs9', target: '_blank' },
  { name: 'Team vervollständigen oder suchen', stat: 'Teambörse', link: '/teamboerse', target: '' },
];

const Informationen: NextPage = () => {
  return (
    <Layout>
      <div className="content">
        <h1 className="h1">Informationen</h1>
        <h2 className="h2">
          Hier findest Du die wichtigsten Eckdaten und allgemeine Infos zum Wettkampftag; vom Wettkampfzentrum über den Zeitplan bis hin zur Verpflegung.
        </h2>
      </div>

      <div className="content">
        <h3 className="h4">Übersicht</h3>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:mt-8">
          {quicklinks.map((item) => (
            <Link href={item.link}>
              <a target={item.target}>
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
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className="content">
        <h3 className="h4" id="zeitplan">Zeitplan</h3>
        <Timetable />
      </div>

      <div className="content">
        <h3 className="h4" id="wettkampfzentrum">Wettkampfzentrum</h3>
        <p className="p">
          Das Wettkampfzentrum liegt beim <a href="https://goo.gl/maps/PmSss7vXpTofKFjy8" className="link">Strandbad Hüttwilen</a>.
          Dort befindet sich nebst Start- und Ziellinie auch die gesamte Infrastruktur für die Athleten und Zuschauer.
          Die Details kannst Du dem Plan unterhalb entnehmen.
        </p>
        <p className="p">
          Der Parkplatz sowie der Reitparcour können je nach Fruchtfolge an einem leicht anderen Ort sein - sie sind aber entsprechend beschriftet ab der Einfahrt Badi Hüttwilen.
        </p>
        <Link href="/dokumente/2020_wechselzone.png">
          <a target="_blank" className="group relative inline-block image">
            <div className='absolute text-black flex justify-center items-center top-0 left-0 right-0 bottom-0 invisible group-hover:visible z-10  group-hover:backdrop-blur-sm goup-hover:bg-white/30 image'>
              <p className="">In neuem Fenster öffnen</p>
              <ArrowUpRightIcon
                className="ml-2 h-5 w-5"
                aria-hidden="true"
              />

            </div>

            <img className='image h-96 z-0' src="/dokumente/2020_wechselzone.png"></img>
          </a>
        </Link>
      </div>

      <div className="content" id="faq">
        <FAQ />
      </div>

    </Layout>
  )
}

export default Informationen;
