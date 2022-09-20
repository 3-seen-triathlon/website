import Link from "next/link";

interface AttendProps {
  title: string;
  description: string;
  items: Item[];
}

interface Item {
  imageUrl: string;
  name: string;
  description: string;
  url: string;
}

export default function Attend({ title, description, items }: AttendProps) {
  return (
    <div className="mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="pb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-100 md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-md text-gray-100 sm:mt-4 md:col-span-2 text-left">
          {description}
        </p>
      </div>

      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((type) => (
          <Link href={type.url}>
            <li
              key={type.name}
              className="col-span-1 flex flex-col rounded-lg text-center shadow text-white bg-gray-900 hover:bg-gradient-to-tr hover:from-ecw-blue-900 hover:to-ecw-yellow-900 hover:shadow-xl hover:shadow-blue-900/50 transition transition-all"
            >
              <div className="flex flex-1 flex-col p-8">
                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={type.imageUrl} alt="" />
                <h3 className="mt-6 text-xl font-bold text-white">{type.name}</h3>
                <p className="mt-6 text-sm font-medium text-gray-100 text-left">{type.description}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
