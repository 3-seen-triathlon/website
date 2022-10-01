import type { NextPage } from 'next'
import LayoutWithoutHeader from '../components/layoutwithoutheader';
import Link from 'next/link';

const Lauf: NextPage = () => {
  return (
    <LayoutWithoutHeader>
      <div className="content">
        <h1 className="h1">Diä schnellste Seebachtaler:inne</h1>
        <h2 className="h2 width">
          Die jüngste Kategorie der DSS mit ihrem Debut im Jahr 2022.
        </h2>
      </div>

      <div className="content">
        <h3 className="h4">Infos</h3>
        <p className="p">
          Diä schnellste Seebachtaler:inne ist ein neues Format, bei dem Kinder und Jugendliche zwischen 4 und 13 Jahren im Ausscheidungsverfahren gegeneinander antreten.
          Die Distanzen sind je nach Alter entweder 40m oder 80m.
          Zu gewinnen gibt es neben coolen Preisen auch die Teilnahme an am Thurgauer Final im Jahr 2024!
        </p>
        <p className="p">
          Der Startgeldbeitrag beträgt 5.- CHF und wird bei der Abgabe der Startnummer eingezogen.
        </p>
        <p className="p">
          Mehr Informationen zum Format findet auf der Website von <a href="https://visanasprint.ch/de/" className="link" target="_blank">Visana Sprint</a>.
        </p>
      </div>

      <div className="content">
        <h3 className="h4">Ranglisten</h3>
        <ul className="list-disc list-inside">
          <li><Link href="#"><span className="link">Austragung 2022</span></Link></li>
        </ul>
      </div>
    </LayoutWithoutHeader>
  )
}

export default Lauf;
