import Image from 'next/image';

const title = "Kategorien";
const text = "Far in the North of Norway, there is a fjord called Ssrden. For generations the Wenberg and the Øksheim families have lived on either side of this fjord, passing down precious knowledge of how to harvest the resources it provides in the best possible way.";
const image = "https://www.dreiseenstafette.ch/galerie/dss19/fotos/shd_0843.jpg"

export default function Intro() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-24">
        <h1 className="text-6xl max-w-4xl mb-12 leading-normal">{title}</h1>
        <h2 className="text-3xl max-w-4xl leading-normal">{text}</h2>
      </div>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 xl:px-24 mb-24">
        <img src={image} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-24">
        <h3 className="text-5xl mb-12">Triathlon</h3>
        <p className="text-base leading-normal">In the early 80s my father and his two brothers, placed the first homemade fish pen at the end of the fjord. With the help of a small rowboat and a small boathouse for the feed, they did everything by hand. The three brothers watched their little project closely and carefully, learned from nature and the fish, and understood better and better how to make sure the fish were healthy and grew strong</p>
      </div>
    </>
  )
}
