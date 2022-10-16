import Link from "next/link"
import Image from "next/image"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

const posts = [
  {
    title: 'Triathlon',
    href: '/triathlon',
    description: 'Entdecke das Seebachtal aus 3 verschiedenen Perspektiven.',
    imageUrl: '/fotos/kategorien/triathlon.jpg',
  },
  {
    title: 'Stafette',
    href: '/stafette',
    description: 'Schwimmen, Radfahren, Biken, Laufen und optional noch Reiten (bei der Stafette kurz).',
    imageUrl: '/fotos/kategorien/stafette.jpg',
  },
  {
    title: 'Lauf',
    href: '/lauf',
    description: 'Der Lauf führt Dich um den Hüttwiler- und Nussbaumersee.',
    imageUrl: '/fotos/kategorien/lauf.jpg',
  },
  {
    title: 'Diä schnellste Seebachtaler:inne',
    href: '/seebachtaler',
    description: 'Das Visana Format findet neu auch an der Dreiseenstafette statt.',
    imageUrl: '/fotos/kategorien/seebachtaler.jpg',
  },
]

export default function Categories() {
  return (
    <div className="content-wide">
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:my-8">
        {posts.map((post) => (
          <Link href={post.href}>
            <div key={post.title} className="rounded-xl relative hover:cursor-pointer bg-white drop-shadow-xl h-72 md:h-96 border-2 border-gray-100">
              <div className="absolute top-20 left-0 right-0 bottom-0 rounded-xl">
                <Image
                  objectFit="cover"
                  objectPosition={"center"}
                  layout={'fill'}
                  className="w-full rounded-xl"
                  src={post.imageUrl}
                  alt="People working on laptops"
                />
              </div>

              <div className="px-6 py-9 md:px-8 md:py-12 w-full bg-white relative rounded-t-xl">
                <p className="h2-paddingless">{post.title}</p>

                <ArrowUpRightIcon
                  strokeWidth={2}
                  className="h-6 w-6 absolute top-8 right-8"
                  aria-hidden="true"
                />

              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
