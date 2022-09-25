const image = "https://www.dreiseenstafette.ch/galerie/dss19/fotos/shd_0843.jpg"

export default function Intro() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-32">
        <h1 className="h1">Kategorien</h1>
        <h2 className="h2">
          Mit den insgesamt 6 Kategorien kommen an der DSS alle auf ihre Kosten. Gemeinsam haben sie den Start und das Ziel, welche bei der Badi am schönen Hüttwilersee sind.
        </h2>
      </div>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 xl:px-24 mb-32">
        <img src={image} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-32">
        <h3 className="h3-wide">
          Durch die unterschiedlichen Disziplinen gewinnt man verschiedene Einblicke in das abwechslungsreiche Naturschutzgebiet vom Seebachtal.
        </h3>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-32">
        <div className="grid gap-32 grid-cols-1 md:grid-cols-2 content-center">
          <div className="hidden md:grid content-center">
            <img src={image} />
          </div>
          <div className="grid content-center">
            <h3 className="h3">Triathlon</h3>
            <p className="p">
              Den Triathlon gibt es in 2 Variationen; olympic und short distance. Der grösste Unterschied ist die Velostrecke, die bei der Olympic Distance 2 Runden dauert.
            </p>
            <div className="">
              <a href="#" className="button">
                Mehr Infos
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-32">
        <div className="grid gap-32 grid-cols-1 md:grid-cols-2 content-center">
          <div className="grid content-center">
            <h3 className="h3">Stafette</h3>
            <p className="p">
              Die Stafette ist der Namensgeber für den Event. 1945 hat sie das erste Mal stattgefunden und ist damit die älteste, noch durchgeführte Stafette der Schweiz.
              Die Disziplinen sind Schwimmen, Velofahren, Laufen, Biken und (optional) Reiten.
              Es gibt aktuell 3 Subkategorien:
            </p>
            <ul className="list-disc list-inside">
              <li>Stafette kurz</li>
              <li>Stafette kurz mit Reiter</li>
              <li>Stafette lang</li>
            </ul>
            <div className="mt-8">
              <a href="#" className="button">
                Mehr Infos
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
            <h3 className="h3">Lauf</h3>
            <p className="p">In the early 80s my father and his two brothers, placed the first homemade fish pen at the end of the fjord. With the help of a small rowboat and a small boathouse for the feed, they did everything by hand. The three brothers watched their little project closely and carefully, learned from nature and the fish, and understood better and better how to make sure the fish were healthy and grew strong</p>
            <div className="">
              <a href="#" className="button">
                Mehr Infos
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-32">
        <div className="grid gap-32 grid-cols-1 md:grid-cols-2 content-center">
          <div className="grid content-center">
            <h3 className="h3">Die schnellste Seebachtaler:inne</h3>
            <p className="p">In the early 80s my father and his two brothers, placed the first homemade fish pen at the end of the fjord. With the help of a small rowboat and a small boathouse for the feed, they did everything by hand. The three brothers watched their little project closely and carefully, learned from nature and the fish, and understood better and better how to make sure the fish were healthy and grew strong</p>
            <div className="">
              <a href="#" className="button">
                Mehr Infos
              </a>
            </div>
          </div>
          <div className="hidden md:grid content-center">
            <img src={image} />
          </div>
        </div>
      </div>

    </>
  )
}
