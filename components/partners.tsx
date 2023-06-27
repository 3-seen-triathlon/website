import Link from 'next/link';
import Image from "next/legacy/image";

const partners = [
    {
        name: 'Hauptsponsoren',
        cols: 1,
        partners: [
            { name: 'Raiffeisen', image: '/logo/dss23/raiffeisen_seeruecken.png', link: 'https://www.raiffeisen.ch/seeruecken/de.html' },
            { name: 'die Mobiliar', image: '/logo/dss23/die_mobiliar_generalagentur_frauenfeld.png', link: 'https://www.mobiliar.ch/frauenfeld' },
        ],
    },
    {
        name: 'Kategoriensponsoren',
        cols: 2,
        partners: [
            { name: 'Schreinerei Bantli', image: '/logo/dss19/bantli.png', link: 'https://bantli.com' },
            { name: "Moro's Zweirad", image: '/logo/dss21/moros_zweirad_gmbh.png', link: 'https://moros-zweirad.ch' },
            { name: 'EWE Elektro AG', image: '/logo/dss19/ewe.png', link: 'https://www.ewe-elektro.ch' },
            { name: 'Bikelounge', image: '/logo/dss22/logo_bikelounge.png', link: 'https://bikelounge.ch' },
            { name: 'Volg Hüttwilen', image: '/logo/dss19/volg.png', link: 'https://volg.ch' },
            { name: 'Landi Hüttwilen', image: '/logo/dss23/landi.png', link: 'http://landiseebachtal.ch' },
            { name: 'Levis Dorfmetzg Hüttwilen', image: '/logo/dss19/levi.png', link: 'https://levisdorfmetzg.ch' },
            { name: 'Mosteria', image: '/logo/dss19/mosteria.png', link: 'https://mosteria.ch' },
            { name: 'TDS', image: '/logo/dss23/tds-rad.png', link: 'https://www.tds-rad.ch' },
        ],
    },
    {
        name: 'Suppliers',
        cols: 3,
        partners: [
            { name: 'Fahnencenter Weinfelden', image: '/logo/dss23/fahnencenter.png', link: 'https://www.fahnen-center.ch' },
            { name: 'DermaPlast Active', image: '/logo/dss22/logo_dermaplast.png', link: 'https://www.dermaplastactive.ch' },
            { name: 'Focus Water', image: '/logo/dss22/logo_focus_water.png', link: 'https://focuswater.ch' },
            { name: 'Saucony', image: '/logo/dss22/logo_saucony.png', link: 'https://saucony.ch' },
            { name: 'Beda Beck', image: '/logo/dss22/logo_beda_beck.png', link: 'https://bedabeck.ch' },
            { name: 'Swisslos', image: '/logo/dss21/swisslos.png', link: 'https://swisslos.ch' },
            { name: 'Nüssli', image: '/logo/dss19/nussli.png', link: 'https://nussli.com' },
            { name: 'Imhof Transport - Logistik', image: '/logo/dss19/imhof.png', link: 'https://tit-imhof.ch' },
            { name: 'Zaunteam', image: '/logo/dss19/zaunteam.png', link: 'https://zaunteam.ch' },
            { name: 'Familia Müsli', image: '/logo/dss19/bio_familia.png', link: 'https://bio-familia.com' },
            { name: 'Sponser Sport Food', image: '/logo/dss19/sponser.png', link: 'https://sponser.ch' },
            { name: 'Biomed', image: '/logo/dss23/biomed.png', link: 'https://www.magnesium-biomed.ch/de/home' },
            { name: 'Wheycation', image: '/logo/dss23/wheycation.png', link: 'https://wheycation.com/en/' },
        ],
    },
    {
        name: 'Partners',
        cols: 3,
        partners: [
            { name: 'Regiosport Kollektiv', image: '/logo/dss22/logo_regiosportkollektiv.png', link: 'https://www.regiosportkollektiv.ch' },
        ],
    },
    {
        name: 'Partnerevents',
        cols: 3,
        partners: [
            { name: 'Zürcher Unterlandstafette', image: '/logo/dss19/unterlandstafette.png', link: 'http://unterlandstafette.ch' },
            { name: 'Schaffhauser Triathlon', image: '/logo/dss19/schaffhauser_triathlon.png', link: 'http://schaffhauser-triathlon.ch' },
        ],
    },
];

export default function Partners() {
    return (
        <>
            <div className="content">
                <h1 className="h1">Partner</h1>
                <h2 className="h2">
                    Ein herzliches Dankeschön an unsere Partner, die uns unterstützen und die Durchführung der DSS überhaupt erst ermöglichen!
                </h2>
            </div>

            {partners.map(partnerType => (
                <div className="content">
                    <div className="flex justify-center">
                        <h2 className="h4">
                            {partnerType.name}
                        </h2>
                    </div>
                    <div className={'mt-6 grid grid-cols-' + partnerType.cols + ' gap-2 md:grid-cols-' + partnerType.cols + ' lg:mt-8'}>
                        {partnerType.partners.map(partner => (
                            <div className="col-span-1 relative flex justify-center bg-gray-50 hover:bg-gray-100 p-1 sm:p-2 rounded-lg">
                                <div className="relative w-full h-24 md:h-32">
                                    <Link href={partner.link} target='_blank'>
                                        <Image
                                            className='select-none'
                                            objectPosition={'center'}
                                            objectFit={'contain'}
                                            layout={'fill'}
                                            src={partner.image}
                                            alt={partner.name}
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}
