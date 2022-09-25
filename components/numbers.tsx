interface NumbersProps {
  numbers: Number[];
}

interface Number {
  text: string;
  number: number;
}

export default function Numbers({ numbers }: NumbersProps) {
  return (
    <div className="gradient-background">
      <div className="mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="">
          <h2 className="text-5xl tracking-tight text-white">
            Trusted by developers from over 80 planets
          </h2>
          <p className="mt-3 text-base text-white sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
          </p>
        </div>

        <dl className="relative mt-24 text-center sm:mx-auto sm:max-w-3xl sm:gap-8 flex justify-center flex-wrap">
          {numbers.map(number => (
            <div key={number.text} className="flex flex-col mx-10">
              <dt className="order-2 mt-2 text-base leading-6 text-gray-100">{number.text}</dt>
              <dd id="delivery" className="order-1 text-5xl text-white">{number.number}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
