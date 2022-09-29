const image = "/event/schwimmausstieg.jpg";

export default function Intro() {
  return (
    <>
      <div className="content">
        <h1 className="h1">Kategorien</h1>
        <h2 className="h2 width">
          Mit den insgesamt 6 Kategorien kommen an der DSS alle auf ihre Kosten. Gemeinsam haben sie den Start und das Ziel, welche bei der Badi am schönen Hüttwilersee sind.
        </h2>
      </div>

      <div className="content">
        <img src={image} />
      </div>

      <div className="content">
        <h3 className="h3">
          Bist du bereit für einen einzigartigen Event im schönen Seebachtal?
        </h3>
      </div>

      <div className="content grid sm:grid-cols-2 gap-12 md:gap-24 mb-12 md:mb-32">
        <div className="grid content-start">
          <h4 className="h4">Triathlon</h4>
          <p className="p">
            Den Triathlon gibt es in 2 Variationen; Olympic und Short Distance.
            Die Strecken unterscheiden sich darin, dass Olympic Distance zwei Runden schwimmt - mit einem kurzen Landgang dazwischen.
            Auch bei der Radstrecke bewältigen sie zwei Runden.
          </p>
          <div className="">
            <a href="#" className="button">
              Mehr Infos
            </a>
          </div>
        </div>

        <div className="grid content-start">
          <h4 className="h4">Stafette</h4>
          <p className="p">
            Die Stafette ist der Namensgeber von der DSS.
            1945 hat sie das erste Mal stattgefunden und ist damit die älteste, noch durchgeführte Stafette der Schweiz!
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

        <div className="grid content-start">
          <h4 className="h4">Die schnellste Seebachtaler:inne</h4>
          <p className="p">
            Seit 2022 ist das <a href="https://visanasprint.ch/de/" className="link" target="_blank">Visana Sprint Format</a> auch an der DSS anzutreffen.
            Dabei rennen Kids zwischen 60 und 100m um die Wette und küren so den/die schnelleste Seebachtaler:in.
          </p>
          <div className="">
            <a href="#" className="button">
              Mehr Infos
            </a>
          </div>
        </div>

        <div className="grid content-start">
          <h4 className="h4">Lauf</h4>
          <p className="p">
            Der Dreiseenlauf führt die Läufer:innen auf Wanderwegen rund um den Nussbaumer- und Hütwillersee.
          </p>
          <div className="">
            <a href="#" className="button">
              Mehr Infos
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
