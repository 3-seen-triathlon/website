import Image from 'next/image';

interface HeroWithNumbersProps {
  img: string;
  title: string;
  numbers: Number[];
}

interface Number {
  text: string;
  number: number;
}

export default function HeroWithNumbers({ img, title, numbers }: HeroWithNumbersProps) {
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
        <div className="relative text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-100 md:text-5xl">
            {title}
          </h2>
        </div>

        <dl className="relative mt-24 text-center sm:mx-auto sm:max-w-3xl sm:gap-8 flex justify-center flex-wrap">
          {numbers.map(number => (
            <div key={number.text} className="flex flex-col mx-10">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-100">{number.text}</dt>
              <dd id="delivery" className="order-1 text-5xl font-bold tracking-tight text-white">{number.number}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
