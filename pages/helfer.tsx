import { LockClosedIcon } from '@heroicons/react/20/solid'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Example() {
    return (
        <Layout>

            <Head>
                <title>Dreiseenstafette - Helferbereich</title>
                <meta name="robots" content="noindex,nofollow" key="setindexing" />
            </Head>

            <div className="content">
                <div className="w-full max-w-md space-y-8 mx-auto">
                    <div>
                        <h1 className="h3 mt-6 text-center text-3xl text-gray-900">
                            Helferbereich
                        </h1>
                    </div>
                    <form className="mt-8 space-y-6" action="/api/helfer" method="post">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-3xl shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                    placeholder="Emailadresse"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                    placeholder="Passwort"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Eingeloggt bleiben
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link href="/kontakt#formular">
                                    <div className="font-medium text-blue-600 hover:text-blue-500">
                                        Passwort vergessen?
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-3xl border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
                                </span>
                                Anmelden
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

