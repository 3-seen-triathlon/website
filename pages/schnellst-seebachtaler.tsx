import type { NextPage } from 'next'
import LayoutWithoutHeader from '../components/layoutwithoutheader';
import Link from 'next/link';
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';

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
          Diä schnellste Seebachtaler:inne ist ein Format, bei dem Kinder und Jugendliche zwischen 4 und 13 Jahren im Ausscheidungsverfahren gegeneinander antreten.
          Die Distanzen sind je nach Alter entweder 40m (KiGa) oder 80m (PS/Sek).
          Zu gewinnen gibt es neben coolen Preisen auch die Teilnahme an am Thurgauer Final im Folgejahr!
        </p>
        <p className="p">
          Der Startgeldbeitrag beträgt 5.- CHF und wird bei der Abgabe der Startnummer eingezogen.
        </p>
        <p className="p">
          Mehr Informationen zum Format findest Du auf der Website von <a href="https://visanasprint.ch/de/" className="link" target="_blank">Visana Sprint</a>.
        </p>
      </div>

      <div className="content">
        <h3 className="h4">Anmeldung</h3>
        <form
          action="https://formspree.io/f/xqknoznj"
          method="POST"
        >
          <div className="mt-5 md:col-span-2 md:mt-0 width">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="vorname" className="block text-sm font-medium text-gray-700">
                  Vorname
                </label>
                <input
                  required
                  type="text"
                  name="vorname"
                  id="vorname"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="nachname" className="block text-sm font-medium text-gray-700">
                  Nachname
                </label>
                <input
                  required
                  type="text"
                  name="nachname"
                  id="nachname"
                  autoComplete="family-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="jahrgang" className="block text-sm font-medium text-gray-700">
                  Jahrgang
                </label>
                <input
                  required
                  type="number"
                  name="jahrgang"
                  id="jahrgang"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="wohnort" className="block text-sm font-medium text-gray-700">
                  Wohnort
                </label>
                <input
                  required
                  type="text"
                  name="wohnort"
                  id="wohnort"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="schule" className="block text-sm font-medium text-gray-700">
                  Schule
                </label>
                <input
                  required
                  type="text"
                  name="schule"
                  id="schule"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="klasse" className="block text-sm font-medium text-gray-700">
                  Klasse
                </label>
                <input
                  required
                  type="text"
                  name="klasse"
                  id="klasse"
                  autoComplete="address-level1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Emailadresse
                </label>
                <input
                  required
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="geschlecht" className="block text-sm font-medium text-gray-700">
                  Geschlecht
                </label>
                <input
                  required
                  type="text"
                  name="geschlecht"
                  id="geschlecht"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

            </div>
          </div>
          <div className="flex mt-6">
            <button type="submit" className="button group">
              <ArrowSmallRightIcon className="mr-2 h-5 w-5 group-hover:text-white" />
              Anmelden
            </button>
          </div>
        </form>
      </div>

      <div className="content">
        <h3 className="h4">Ranglisten</h3>
        <ul className="list-disc list-inside">
          <li><a href="https://www.dreiseenstafette.ch/documents/rangliste_seebachtaler.pdf" target="_blank"><span className="link">Austragung 2022</span></a></li>
        </ul>
      </div>
    </LayoutWithoutHeader>
  )
}

export default Lauf;
