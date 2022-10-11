import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import FormTopic from '../components/formtopic';
import Layout from '../components/layout';
import Team from '../components/team';

const Kontakt: NextPage = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(5);

  useEffect(() => {
    setA(Math.floor(Math.random() * 10));
    setB(Math.floor(Math.random() * 10));
  });

  return (
    <Layout>
      <div className="mt-10 md:mt-12">
        <Team />
      </div>

      <div className="content">
        <h2 className="h3">
          Kontakt
        </h2>
        <p className="p">
          Bei Anliegen oder Fragen kannst du gerne das Formular unten verwenden oder dich direkt über die Adresse <a href="mailto:info@dreiseenstafette.ch" className="link">info@dreiseenstafette.ch</a> mit uns in Kontakt setzen.
          Wir werden uns dann bald bei dir melden.
        </p>

        <form
          action="/api/kontakt"
          method="post"
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
                /> </div>

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
                <FormTopic />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="kommentar" className="block text-sm font-medium text-gray-700">
                  Deine Anfrage
                </label>
                <textarea
                  required
                  rows={4}
                  name="kommentar"
                  id="kommentar"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue={''}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="spamcheck" className="block text-sm font-medium text-gray-700">
                  Bist du ein Roboter? Bitte trage das Ergebnis der folgenden Rechnung ein: {a} + {b}.
                </label>
                <input
                  required
                  type="number"
                  name="spamcheck"
                  id="spamcheck"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

            </div>
          </div>
          <div className="flex mt-6">
            <button type="submit" className="button group">
              <ArrowSmallRightIcon className="mr-2 h-5 w-5 group-hover:text-white" />
              Absenden
            </button>
          </div>
          <div className="invisible">
            <input required type="number" name="spamcheck1" id="spamcheck1" value={a} />
            <input required type="number" name="spamcheck2" id="spamcheck2" value={b} />
          </div>
        </form>
      </div>

    </Layout>
  )
}

export default Kontakt;
