import Link from 'next/link';

const partners = {
  main: [
    { name: 'test', image: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg', link: '#' },
  ],
  category: [
    { name: 'test', image: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg', link: '#' },
    { name: 'test', image: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg', link: '#' },
    { name: 'test', image: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg', link: '#' },
    { name: 'test', image: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg', link: '#' },
    { name: 'test', image: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg', link: '#' },
    { name: 'test', image: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg', link: '#' },
    { name: 'test', image: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg', link: '#' },
    { name: 'test', image: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg', link: '#' },
    { name: 'test', image: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg', link: '#' },
    { name: 'test', image: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg', link: '#' },
  ]
};

export default function Partners() {
  return (
    <>
      <div className="content">
        <h1 className="h1">Partner</h1>
        <h2 className="h2">
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
            <div className="col-span-1 flex justify-center bg-gray-50 hover:bg-gray-100 py-8 px-8 rounded-lg">
              <Link href={partner.link}>
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
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
        <div className="mt-6 grid grid-cols-4 gap-2 md:grid-cols-5 lg:mt-8">
          {partners.category.map(partner => (
            <div className="col-span-1 flex justify-center bg-gray-50 hover:bg-gray-100 py-8 px-8 rounded-lg">
              <Link href={partner.link}>
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
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
