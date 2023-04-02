import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import type { NextPage } from 'next';
import Image from "next/legacy/image";
import Link from 'next/link';
import Layout from '../components/layout';
import { useRouter } from "next/router";
import Head from 'next/head';

const Success: NextPage = () => {
    const { query } = useRouter();

    return (
        <Layout>

            <Head>
                <title>Dreiseenstafette - Success</title>
                <meta name="robots" content="noindex,nofollow" key="setindexing" />
            </Head>

            <div className="content grid grid-cols-1 gap-8 content-center lg:grid-cols-2">
                <div className="grid content-center">
                    <div>
                        <Image src='/gifs/success.gif' className="image" width={480} height={400} alt='success' />
                    </div>
                </div>
                <div className="grid content-center">
                    <div>
                        <h1 className="h3">{query.titel}</h1>
                        <p className="p">{query.text}</p>

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
