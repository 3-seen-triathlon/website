import Link from "next/link"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

const posts = [
    {
        title: 'Triathlon',
        href: '/triathlon',
        description: 'Entdecke das Seebachtal aus 3 verschiedenen Perspektiven.',
    },
    {
        title: 'Stafette',
        href: '/stafette',
        description: 'Schwimmen, Radfahren, Biken, Laufen und optional noch Reiten (bei der Stafette kurz).',
    },
    {
        title: 'Lauf',
        href: '/lauf',
        description: 'Der Lauf führt Dich um den Hüttwiler- und Nussbaumersee.',
    },
    {
        title: 'Diä schnellste Seebachtaler Chind',
        href: '/seebachtaler',
        description: 'Das Visana Format findet neu auch an der Dreiseenstafette statt.',
    },
    {
        title: "S'schnellste Rössli Hü",
        href: '/roessli-hue',
        description: 'Ein älteres Rössli mit jüngerem Reiter - die neue Plausch Kategorie an der DSS.',
    },
]

export default function Categories() {
    return (
        <div className="content">
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 lg:mt-8">
                {posts.map((post) => (
                    <Link href={post.href}>
                        <div key={post.title} className="relative flex flex-col overflow-hidden rounded-3xl h-full bg-gray-50 hover:cursor-pointer hover:bg-gray-100 group">
                            <ArrowUpRightIcon
                                className="h-5 w-5 absolute top-4 right-4 group-hover:visible text-gray-300 group-hover:text-blue-500"
                                aria-hidden="true"
                            />

                            <div className="flex flex-1 flex-col justify-between p-6">
                                <div className="flex-1">
                                    <div className="mt-2 block">
                                        <p className="h4 text-xl text-blue-600">{post.title}</p>
                                        <p className="p">{post.description}</p>
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
