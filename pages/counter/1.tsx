import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import Image from "next/legacy/image";
import Link from 'next/link';
import Layout from '../../components/layout';
import { useState } from 'react';
import { createClient } from "@vercel/kv";

type Views = {
    count: number
};

export const getServerSideProps: GetServerSideProps<{ views: Views; }> = async () => {
    const kv = createClient({
        url: process.env.KV_REST_API_URL || '',
        token: process.env.KV_REST_API_TOKEN || '',
    })
    const count = await kv.incr('counter1')
    const views: Views = {
        count: count
    }
    return { props: { views } };
};

export const Counter1 = ({ views }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <Layout>

            <Head>
                <title>Dreiseenstafette - Counter 1</title>
                <meta name="robots" content="noindex,nofollow" key="setindexing" />
            </Head>

            <div className="content grid grid-cols-1 gap-8 content-center lg:grid-cols-2">
                <div className="grid content-center">
                    <div>
                        <Image src='/gifs/oh-shit.gif' className="image" width={498} height={270} alt='oh no' />
                    </div>
                </div>
                <div className="grid content-center">
                    <div>
                        <h1 className="h3">
                            Du hast den QR Code 1 mit {views.count} Ansichten gefunden!
                        </h1>

                        <p className="p">
                            Tut uns leid für die Umstände.
                            Falls du das Gefühl hast, dass es ein Fehler auf unserer Seite ist kannst du uns gerne via <Link href="/kontakt"><span className="underline underline-offset-4 hover:text-blue-500">Kontaktformular</span></Link> benachrichtigen. Danke 🙇‍♂️
                        </p>

                        <Link href="/">
                            <div
                                className="button">
                                Zurück zur Startseite
                                <ArrowSmallRightIcon className="ml-2 h-5 w-5 group-hover:text-white" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Counter1;
