import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import { useRouter } from "next/router";

const Success: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout>
      <div className="content grid grid-cols-1 gap-8 content-center lg:grid-cols-2">
        <div className="grid content-center">
          <div>
            <Image src='/gifs/success.gif' className="image" width={480} height={400} />
          </div>
        </div>
        <div className="grid content-center">
          <div>
            <h1 className="h3">Anmeldung erfolgreich 🥳</h1>
            <p className="p">
              Du ({query.vorname} {query.nachname}) bist für "Diä schnellste Seebachtaler:inne" angemeldet!
              Cool bist du dabei und wir freuen uns, dich an der DSS begrüssen zu können 😊
            </p>

            <Link href="/">
              <div
                className="button">
                Zur Startseite
                <ArrowSmallRightIcon className="ml-2 h-5 w-5 group-hover:text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Success;
