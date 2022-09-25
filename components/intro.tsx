const title = "Kategorien";
const text = "Far in the North of Norway, there is a fjord called Ssrden. For generations the Wenberg and the Øksheim families have lived on either side of this fjord, passing down precious knowledge of how to harvest the resources it provides in the best possible way.";
const image = "https://www.dreiseenstafette.ch/galerie/dss19/fotos/shd_0843.jpg"

export default function Intro() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-32">
        <h1 className="text-6xl max-w-4xl mb-12 leading-normal">{title}</h1>
        <h2 className="text-3xl max-w-4xl leading-normal">{text}</h2>
      </div>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 xl:px-24 mb-32">
        <img src={image} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-32">
        <h3 className="text-5xl mb-12">The two families joined forces long ago and for the past twenty years they have been working together to harvest the resources of the sea with both humility and respect.
        </h3>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-32">
        <div className="grid gap-32 grid-cols-1 md:grid-cols-2 content-center">
          <div className="hidden md:grid content-center">
            <img src={image} />
          </div>
          <div className="grid content-center">
            <h3 className="text-5xl mb-12">Triathlon</h3>
            <p className="text-base leading-normal">In the early 80s my father and his two brothers, placed the first homemade fish pen at the end of the fjord. With the help of a small rowboat and a small boathouse for the feed, they did everything by hand. The three brothers watched their little project closely and carefully, learned from nature and the fish, and understood better and better how to make sure the fish were healthy and grew strong</p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-blue-500 px-4 py-2 text-base text-blue-500 hover:bg-blue-500 hover:text-white"
              >
                Zu den Strecken
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-32">
        <div className="grid gap-32 grid-cols-1 md:grid-cols-2 content-center">
          <div className="grid content-center">
            <h3 className="text-5xl mb-12">Stafette</h3>
            <p className="text-base leading-normal">In the early 80s my father and his two brothers, placed the first homemade fish pen at the end of the fjord. With the help of a small rowboat and a small boathouse for the feed, they did everything by hand. The three brothers watched their little project closely and carefully, learned from nature and the fish, and understood better and better how to make sure the fish were healthy and grew strong</p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-blue-500 px-4 py-2 text-base text-blue-500 hover:bg-blue-500 hover:text-white"
              >
                Zu den Strecken
              </a>
            </div>
          </div>
          <div className="hidden md:grid content-center">
            <img src={image} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-32">
        <div className="grid gap-32 grid-cols-1 md:grid-cols-2 content-center">
          <div className="hidden md:grid content-center">
            <img src={image} />
          </div>
          <div className="grid content-center">
            <h3 className="text-5xl mb-12">Lauf</h3>
            <p className="text-base leading-normal">In the early 80s my father and his two brothers, placed the first homemade fish pen at the end of the fjord. With the help of a small rowboat and a small boathouse for the feed, they did everything by hand. The three brothers watched their little project closely and carefully, learned from nature and the fish, and understood better and better how to make sure the fish were healthy and grew strong</p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-blue-500 px-4 py-2 text-base text-blue-500 hover:bg-blue-500 hover:text-white"
              >
                Zu den Strecken
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
