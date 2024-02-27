import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
import { Montserrat } from "next/font/google";
import Image from "next/image"

const inter = Montserrat({
    variable: '--font-inter',
    subsets: ['latin'],
})

export default function Home() {
    return (
        <main className={inter.variable + ' relative'}>
            <div className="relative min-h-screen flex flex-col items-center justify-between p-8 md:p-32">
                <div className='absolute inset-0'>
                    <Image
                        className="w-full h-full object-cover"
                        src="/background.png"
                        alt="Sicht auf den Startplatz der Dreiseenstafette 2023"
                        width="0"
                        height="0"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 mix-blend-multiply bg-slate-500" />
                </div>
                <div className="relative md:absolute top-0 left-0 p-12">
                    <img className="h-8 md:h-12 w-auto" src="/dreiseenstafette_light.png" alt="Dreiseenstafette Logo" />
                </div>
                <div className="absolute top-0 right-0 left-0 bottom-0 flex mx-auto items-center justify-center p-12">
                    <div className="text-center space-y-6 md:space-y-12 grid grid-cols-1">
                        <h2 className="md:text-xl font-normal pulse">17.08.2025</h2>
                        <h1 className="text-2xl md:text-7xl uppercase font-extrabold tracking-normal italic">Dreiseenstafette</h1>
                        <h3 className="md:text-xl font-normal">Die bewährte Dreiseenstafette, neu auferlegt.</h3>
                        <form action="/api/newsletter" method="post" className="mt-4 space-y-4 md:space-y-0 md:space-x-4 grid grid-cols-1 md:flex md:justify-center md:flex-nowrap">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    required
                                    className="rounded-md w-full min-w-0 appearance-none bg-transparent border text-sm font-semibold border-gray-300 py-2 px-4 text-gray-300 placeholder-gray-300"
                                    placeholder="Deine Mailadresse"
                                />
                            </div>
                            <button type="submit" className="rounded-md border border-gray-300 text-sm font-semibold py-2 px-4 text-gray-200 flex align-center hover:bg-slate-900 transition-all">
                                <ArrowSmallRightIcon className="mr-2 h-5 w-5 group-hover:text-white" />
                                Anmelden
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
