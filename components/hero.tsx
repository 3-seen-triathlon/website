import Image from 'next/image';

interface HeroProps {
  img: string;
  title: string;
  description: string;
}

export default function Hero({ img, title, description }: HeroProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 block overflow-hidden">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className="absolute w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://www.dreiseenstafette.ch/video/aftermovie2021.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* <Image */}
        {/*   layout="fill" */}
        {/*   objectFit="cover" */}
        {/*   src={img} */}
        {/*   alt="Eulachhallen Winterthur" */}
        {/* /> */}
        <div className="absolute inset-0 bg-gray-300 mix-blend-multiply" />
      </div>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-24 lg:px-8 z-10 h-screen pt-42 md:py-24">
        <div className="h-full flex justify-start content-center items-center">
          <h2 className="relative text-6xl text-gray-100 md:col-span-2 mt-72">
            {title}
          </h2>
        </div>
      </div>
    </div>
  )
}
