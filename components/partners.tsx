import Link from 'next/link';

const partners = {
  main: [
    { name: 'Raiffeisen', image: '/logo/dss19/raiffeisen.png', link: 'https://raiffeisen.ch' },
  ],
  category: [
    { name: 'Schreinerei Bantli', image: '/logo/dss19/bantli.png', link: 'https://bantli.com' },
    { name: 'Amsler Bikes & Parts', image: '/logo/dss21/amsler.png', link: 'https://moros-zweirad.ch' },
    { name: "Moro's Zweirad", image: '/logo/dss21/moros_zweirad_gmbh.png', link: 'https://moros-zweirad.ch' },
    { name: 'Siro Sport', image: '/logo/dss22/logo_intersport_siro.svg', link: 'https://sirosport.ch' },
    { name: 'EWE Elektro AG', image: '/logo/dss19/ewe.png', link: 'https://www.ewe-elektro.ch' },
    { name: 'Bikelounge', image: '/logo/dss22/logo_bikelounge.png', link: 'https://bikelounge.ch' },
    { name: 'Volg Hüttwilen', image: '/logo/dss19/volg.png', link: 'https://volg.ch' },
    { name: 'Landi Hüttwilen', image: '/logo/dss19/landi.png', link: 'https://landihuettwilen.ch' },
    { name: 'Levis Dorfmetzg Hüttwilen', image: '/logo/dss19/levi.png', link: 'https://levisdorfmetzg.ch' },
    { name: 'Mosteria', image: '/logo/dss19/mosteria.png', link: 'https://mosteria.ch' },
  ],
  suppliers: [
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
    { name: 'Bschüssig Teigwaren', image: '/logo/dss19/bschuessig.png', link: 'https://bschüssig.ch' },
  ],
};

export default function Partners() {
  return (
    <>
      <div className="content">
        <h1 className="h1">Partner</h1>
        <h2 className="h2 width">
          Ein herzliches Dankeschön an unsere Partner, die uns unterstützen und die Durchführung der DSS überhaupt erst ermöglichen!
        </h2>
      </div>

      <div className="content">
        <div className="flex justify-center">
          <h2 className="h4">
            Hauptsponsor
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-1 lg:mt-8">
          {partners.main.map(partner => (
            <div className="col-span-1 flex justify-center bg-gray-50 hover:bg-gray-100 p-4 sm:p-5 rounded-lg">
              <Link href={partner.link}>
                <img
                  className="max-h-24 max-w-24"
                  src={partner.image}
                  alt={partner.name}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="content">
        <div className="flex justify-center">
          <h2 className="h4">
            Kategoriensponsoren
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8">
          {partners.category.map(partner => (
            <div className="col-span-1 flex justify-center bg-gray-50 hover:bg-gray-100 p-3 sm:p-4 rounded-lg">
              <Link href={partner.link}>
                <img
                  className="max-h-24 max-w-24"
                  src={partner.image}
                  alt={partner.name}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="content">
        <div className="flex justify-center">
          <h2 className="h4">
            Suppliers
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2 md:grid-cols-5 lg:mt-8">
          {partners.suppliers.map(partner => (
            <div className="col-span-1 flex justify-center bg-gray-50 hover:bg-gray-100 p-2 sm:p-3 rounded-lg">
              <Link href={partner.link}>
                <img
                  className="max-h-20 max-w-20"
                  src={partner.image}
                  alt={partner.name}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
