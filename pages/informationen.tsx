import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import type { NextPage } from 'next'
import Link from 'next/link';
import Image from "next/legacy/image";
import FAQ from '../components/faq';
import Layout from '../components/layout';
import Timetable from '../components/timetable';

const reitparcour_links = [
    { name: 'Hindernis Skizzen', stat: 'Parcours', link: '/dokumente/reiterparcours_skizze.pdf', target: '_blank' },
    { name: 'Anfahrt', stat: 'Situationsplan', link: '/dokumente/reiterparcours_situationsplan.pdf', target: '_blank' },
    { name: 'Wettkampfbestimmungen', stat: 'Reglement', link: '/dokumente/reiterparcours_regeln.pdf', target: '_blank' },
]

const quicklinks = [
    { name: 'Ablauf Wettkampftag', stat: 'Zeitplan', link: '#zeitplan', target: '' },
    { name: 'Badi Hüttwilersee', stat: 'Wettkampfzentrum', link: '#wettkampfzentrum', target: '' },
    { name: 'Oft gestellte Frage', stat: 'FAQ', link: '#faq', target: '' },
    { name: 'Wettkampfbestimmungen', stat: 'Reglement', link: '/dokumente/2023_reglement.pdf', target: '_blank' },
    { name: 'Fotos & Videos', stat: 'Impressionen', link: 'https://drive.google.com/drive/folders/1wfxXZt8hcUzo9JpDgFD5U7RLS0FC41lE?usp=drive_link', target: '_blank' },
    { name: 'Hindernisse und Strecke', stat: 'Reitparcours', link: '#reitparcours', target: '' },
    { name: 'Team vervollständigen', stat: 'Teambörse', link: 'https://teams.dreiseenstafette.ch', target: '_blank' },
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

            <div className="content-wide">
                <div className="relative w-full h-60 sm:h-80 md:h-[30rem]">
                    <Image
                        objectFit="cover"
                        objectPosition={"center"}
                        layout={'fill'}
                        className="image"
                        src={'/fotos/slider/35.jpg'}
                        alt="People working on laptops"
                    />
                </div>
            </div>

            <div className="content">
                <h3 className="h4">Übersicht</h3>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:mt-8">
                    {quicklinks.map((item) => (
                        <Link href={item.link} target={item.target}>
                            <div className="relative col-span-1 bg-gray-50 hover:bg-gray-100 py-8 px-8 h-full rounded-3xl group">
                                <ArrowUpRightIcon
                                    className="h-5 w-5 absolute top-4 right-4 group-hover:visible text-gray-300 group-hover:text-blue-500"
                                    aria-hidden="true"
                                />

                                <div className="grid grid-cols-1">
                                    <div className="col-span-1 text-base text-gray-900">{item.name}</div>

                                    <div className="flex justify-between items-baseline">
                                        <div className="flex items-baseline text-2xl font-semibold text-blue-600">
                                            {item.stat}
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                <Link href="/dokumente/2020_wechselzone.png" target='_blank'>
                    <div className="group relative inline-block image">
                        <div className='absolute text-black flex justify-center items-center top-0 left-0 right-0 bottom-0 invisible group-hover:visible z-10  group-hover:backdrop-blur-sm goup-hover:bg-white/30 image'>
                            <p className="">In neuem Fenster öffnen</p>
                            <ArrowUpRightIcon
                                className="ml-2 h-5 w-5"
                                aria-hidden="true"
                            />

                        </div>

                        <img className='image h-96 z-0' src="/dokumente/2020_wechselzone.png"></img>
                    </div>
                </Link>
            </div>

            <div className="content">
                <h3 className="h4" id="reitparcours">Reitparcours</h3>
                <p className="p">
                    Der Reiterparcours wird aus verschiedenen Gymkhana Hindernissen zusammensetzen, siehe Link unten. Ob Pony oder Pferd, ob Englisch- oder Westernreiten, es sind alle Willkommen und der Parcours kann von allen gemeistert werden. Wer noch kein Team hat, kann sich gerne bei der <a href={'https://teams.dreiseenstafette.ch'} target='_blank' className='underline underline-offset-2'>Teambörse</a> registrieren - es melden sich oft Teams an, welche noch Reiter:innen suchen.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:mt-8">
                    {reitparcour_links.map((item) => (
                        <Link href={item.link} target={item.target}>
                            <div className="relative col-span-1 bg-gray-50 hover:bg-gray-100 py-8 px-8 h-full rounded-3xl group">
                                <ArrowUpRightIcon
                                    className="h-5 w-5 absolute top-4 right-4 group-hover:visible text-gray-300 group-hover:text-blue-500"
                                    aria-hidden="true"
                                />

                                <div className="grid grid-cols-1">
                                    <div className="col-span-1 text-base text-gray-900">{item.name}</div>

                                    <div className="flex justify-between items-baseline">
                                        <div className="flex items-baseline text-2xl font-semibold text-blue-600">
                                            {item.stat}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>

            <div className="content" id="faq">
                <FAQ />
            </div>

        </Layout>
    )
}

export default Informationen;
