import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";
import Layout from "../components/layout";
import Image from "next/legacy/image";

const Hue: NextPage = () => {
    return (
        <Layout>
            <div className="content">
                <h1 className="h1">S'schnellste Rössli Hü</h1>
            </div>

            <div className="content-wide">
                <div className="relative w-full h-60 sm:h-80 md:h-[30rem]">
                    <Image
                        objectFit="cover"
                        objectPosition={"center"}
                        layout={'fill'}
                        className="image"
                        src={'/fotos/slider/17.jpg'}
                        alt="People working on laptops"
                    />
                </div>
            </div>

            <div className="content">
                <h3 className="h4">Allgemeine Infos</h3>
                <p className="p">
                    Für unsere jüngsten Dorfbewohner bis max. 5 Jahre gibt es im 2023 die Möglichkeit mit einem "Rössli" die Kurzstrecke von 50 Metern huckepack zu bestreiten.
                    Als Rössli geeignet sind Mami, Papi, Götti und Gotti, Onkel und Tanten, Nachbar, Geschwister, etc. mit Mindestalter 16 Jahre.
                    Frauen und Männer werden getrennt gewertet. Die Läufer dürfen für verschiedene reitende Kinder mehrfach starten.
                    Anmeldung via untenstehendem Anmeldetalon.
                    Für diese Kategorie finden keine Finalläufe statt.
                </p>
            </div>

            <div className="content">
                <h3 className="h4">Anmeldung</h3>
                <form
                    action="/api/roessli-hue"
                    method="post"
                >
                    <div className="mt-5 md:col-span-2 md:mt-0 width">
                        <div className="grid grid-cols-6 gap-6 mb-6">
                            <div className="col-span-6">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Angaben Rössli</h2>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="vorname_roessli" className="block text-sm font-medium text-gray-700">
                                    Vorname
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="vorname_roessli"
                                    id="vorname_roessli"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="nachname_roessli" className="block text-sm font-medium text-gray-700">
                                    Nachname
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="nachname_roessli"
                                    id="nachname_roessli"
                                    autoComplete="family-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="geschlecht_roessli" className="block text-sm font-medium text-gray-700">
                                    Geschlecht
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="geschlecht_roessli"
                                    id="geschlecht_roessli"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-6 gap-6 mb-6">
                            <div className="col-span-6">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Angaben Reiter:in</h2>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="vorname_reiter" className="block text-sm font-medium text-gray-700">
                                    Vorname
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="vorname_reiter"
                                    id="vorname_reiter"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="nachname_reiter" className="block text-sm font-medium text-gray-700">
                                    Nachname
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="nachname_reiter"
                                    id="nachname_reiter"
                                    autoComplete="family-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="geschlecht_reiter" className="block text-sm font-medium text-gray-700">
                                    Geschlecht
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="geschlecht_reiter"
                                    id="geschlecht_reiter"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>


                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Allgemeine Angaben</h2>
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
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <button type="submit" className="button-inverse group">
                            <ArrowSmallRightIcon className="mr-2 h-5 w-5 group-hover:text-white" />
                            Anmelden
                        </button>
                    </div>
                </form>
            </div>

        </Layout>
    )
}

export default Hue;
