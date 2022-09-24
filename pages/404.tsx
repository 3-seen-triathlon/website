import type { NextPage } from 'next';
import Layout from '../components/layout';
import Image from 'next/image';
import Link from 'next/link';

const Error404: NextPage = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl pb-12 pt-6 px-4 sm:px-6 lg:py-24 lg:px-8 z-10 text-center">
        <div className="mt-12">
          <Image src='/gifs/oh-shit.gif' className="rounded" width={498} height={270} />
          <div className="mt-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-100 md:text-4xl">
              Da ist etwas schief gelaufen 👀
            </h2>
            <p className="mt-3 text-xl text-gray-100 sm:mt-4 col-span-2 mb-12 text-left">
              Tut uns leid für die Umstände. Falls Du das Gefühl hast, dass es ein Fehler auf unserer Seite ist kannst du uns gerne via <Link href="/kontakt"><span className="underline underline-offset-4 hover:text-green-400">Kontaktformular</span></Link> benachrichtigen. Danke 🙇‍♂️
            </p>

          </div>
          <Link
            href="/"
          >
            <div
              className="px-10 text-white py-3 text-center font-bold bg-gradient-to-tr from-green-400 to-blue-500 hover:underline hover:underline-offset-4 transition transition-all hover:bg-gradient-to-r rounded-md inline-block">
              Zurück zur Startseite
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Error404;
