import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const posts = [
  {
    title: 'Olympic und Short Distance Triathlon',
    href: '/triathlon',
    description:
      'Entdecke das Seebachtal aus 3 verschiedenen Perspektiven.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
  },
  {
    title: 'Nimm als Team an der Stafette teil',
    href: '/stafette',
    description:
      'Schwimmen, Radfahren, Biken, Laufen und optional noch Reiten (bei der Stafette kurz).',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
  },
  {
    title: 'Rundkurs um 2 der 3 Seen',
    href: '/lauf',
    description:
      'Der Lauf führt Dich um den Hüttwiler- und Nussbaumersee.',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
  },
  {
    title: 'Für die Kids: "Diä schnellste Seebachtaler:inne"',
    href: '/seebachtaler',
    description:
      'Das Visana Format findet neu auch an der Dreiseenstafette statt.',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
  },
]

export default function Categories() {
  return (
    <div className="content">
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 lg:mt-8">
        {posts.map((post) => (
          <Link href={post.href}>
            <div key={post.title} className="relative flex flex-col overflow-hidden rounded-lg bg-gray-50 hover:cursor-pointer hover:bg-gray-100 group">
              <ArrowUpRightIcon
                className="h-5 w-5 absolute top-2 right-2 group-hover:visible text-gray-300 group-hover:text-blue-500"
                aria-hidden="true"
              />

              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <div className="mt-2 block">
                    <p className="text-xl font-semibold text-blue-600">{post.title}</p>
                    <p className="mt-3 text-base text-gray-900">{post.description}</p>
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
