import Image from 'next/image';

interface HeroProps {
  img: string;
  title: string;
  description: string;
}

export default function Hero({ img, title, description }: HeroProps) {
  return (
    <div className="relative py-12 md:py-24">
      <div className="absolute inset-0 block overflow-hidden">
        <Image
          layout="fill"
          objectFit="cover"
          src={img}
          alt="Eulachhallen Winterthur"
        />
        <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" />
      </div>
      <div className="mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:py-24 lg:px-8 z-10">
        <div className="relative md:grid md:grid-cols-3 md:gap-4">
          <h2 className="text-3xl font-semibold text-gray-100 md:text-4xl md:col-span-2">
            {title}
          </h2>
          <p className="mt-3 text-xl text-gray-100 sm:mt-4 md:col-span-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
