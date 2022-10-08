import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';

const Error404: NextPage = () => {
  return (
    <Layout>
      <div className="content">
        <Image src='/gifs/oh-shit.gif' className="image" width={498} height={270} />
        <h1 className="h4 mt-8">
          Da ist etwas schief gelaufen
        </h1>
        <h2 className="p">
          Tut uns leid für die Umstände. Falls du das Gefühl hast, dass es ein Fehler auf unserer Seite ist kannst du uns gerne via <Link href="/kontakt"><span className="underline underline-offset-4 hover:text-blue-500">Kontaktformular</span></Link> benachrichtigen. Danke 🙇‍♂️
        </h2>

        <Link href="/">
          <div
            className="button">
            Zurück zur Startseite
            <ArrowSmallRightIcon className="ml-2 h-5 w-5 group-hover:text-white" />
          </div>
        </Link>
      </div>
    </Layout>
  )
}

export default Error404;
