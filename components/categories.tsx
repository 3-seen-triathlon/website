import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"

const posts = [
  {
    title: 'Triathlon',
    href: '/triathlon',
    description: 'Entdecke das Seebachtal aus 3 verschiedenen Perspektiven.',
    imageUrl: '/fotos/triathlon.jpg',
  },
  {
    title: 'Stafette',
    href: '/stafette',
    description: 'Schwimmen, Radfahren, Biken, Laufen und optional noch Reiten (bei der Stafette kurz).',
    imageUrl: '/fotos/stafette.jpg',
  },
  {
    title: 'Lauf',
    href: '/lauf',
    description: 'Der Lauf führt Dich um den Hüttwiler- und Nussbaumersee.',
    imageUrl: '/fotos/lauf.jpg',
  },
  {
    title: 'Diä schnellste Seebachtaler:inne',
    href: '/seebachtaler',
    description: 'Das Visana Format findet neu auch an der Dreiseenstafette statt.',
    imageUrl: '/fotos/seebachtaler.jpg',
  },
]

export default function Categories() {
  return (
    <div className="content">
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2 lg:mt-8">
        {posts.map((post) => (
          <Link href={post.href}>
            <div key={post.title} className="relative flex flex-col overflow-hidden rounded-lg hover:cursor-pointer group transition-all">
              <div className="absolute inset-0">
                <div className="h-full w-full object-cover">
                  <Image
                    objectPosition={'center'}
                    objectFit={'cover'}
                    layout={'fill'}
                    src={post.imageUrl}
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-gray-300 group-hover:bg-gray-400 mix-blend-multiply" />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between px-12 py-32 z-10">
                <div className="flex-1">
                  <div className="mt-2 block text-center">
                    <p className="h3 text-white">{post.title}</p>
                    <p className="p text-white">{post.description}</p>
                    <Link href={post.href}>
                      <a className="link text-white">
                        Mehr Infos <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
