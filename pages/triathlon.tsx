import type { NextPage } from 'next'
import { ArrowTrendingUpIcon, ArrowUpRightIcon, IdentificationIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Image from "next/legacy/image";
import Infos, { InfoPoint, InfoPointCycling, InfoPointRun, InfoPointSwim } from '../components/infos';
import Layout from '../components/layout';

const statsShortDistance = [
    { name: 'Schwimmen', stat: '0.5 km', change: '0 m', link: 'https://connect.garmin.com/modern/course/29506834' },
    { name: 'Radfahren', stat: '20.64 km', change: '260 m', link: 'https://connect.garmin.com/modern/course/29504861' },
    { name: 'Laufen', stat: '6.2 km', change: '52m', link: 'https://connect.garmin.com/modern/course/29507069' },
]
const statsOlympicDistance = [
    { name: 'Schwimmen', stat: '1.5 km', change: '0 m', link: 'https://connect.garmin.com/modern/course/29506908' },
    { name: 'Radfahren', stat: '38.2 km', change: '500 m', link: 'https://connect.garmin.com/modern/course/29506670' },
    { name: 'Laufen', stat: '10.5 km', change: '100m', link: 'https://connect.garmin.com/modern/course/29507170' },
]


const infos: InfoPoint[] = [
    {
        name: 'Lizenz',
        icon: (props: any) => (<IdentificationIcon {...props} />),
        description: 'Für die Triathlon-Kategorien besteht keine Lizenzpflicht.'
    },
    {
        name: 'Start',
        icon: (props: any) => (<RocketLaunchIcon {...props} />),
        description: 'Bei den Triathlon-Kategorien gibt es jeweils einen Massenstart am Hüttwilersee.'
    },
    InfoPointSwim,
    InfoPointCycling,
    InfoPointRun,
]

const Triathlon: NextPage = () => {
    return (
        <Layout>
            <div className="content">
                <h1 className="h1">Triathlon</h1>
                <h2 className="h2 width">
                    Die abwechslungsreichste Disziplin an der DSS.
                    Athlet:innen entdecken das Seebachtal auf 3 verschiedene Arten.
                </h2>
            </div>

            <div className="content-wide">
                <div className="relative w-full h-60 sm:h-80 md:h-[30rem]">
                    <Image
                        objectFit="cover"
                        objectPosition={"center"}
                        layout={'fill'}
                        className="image"
                        src={'/fotos/slider/2.jpg'}
                        alt="People working on laptops"
                    />
                </div>
            </div>

            <div className="content">
                <h3 className="h4">Allgemeine Infos</h3>
                <p className="p">
                    Alle Kategorien starten im Wettkampfzentrum am Hüttwilersee.
                    Eine Karte vom Wettkampfzentrum und allgemeine Athleteninfos findest du unter <Link href="/informationen"><span className="link" >Informationen</span></Link>.
                </p>

                <Infos props={infos} />
            </div>

            <div className="content">
                <h3 className="h4">Strecken Short Distance</h3>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:mt-8">
                    {statsShortDistance.map((item) => (
                        <a href={item.link} target="_blank">
                            <div className="relative col-span-1 bg-gray-50 hover:bg-gray-100 py-8 px-8 rounded-3xl group">
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
                            <div className="relative col-span-1 bg-gray-50 hover:bg-gray-100 py-8 px-8 rounded-3xl group">
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

export default Triathlon;
