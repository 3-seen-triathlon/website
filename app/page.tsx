import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
import { Montserrat } from "next/font/google";
import Image from "next/image"

const inter = Montserrat({
    variable: '--font-inter',
    subsets: ['latin'],
})

export default function Home() {
    return (
        <main className={inter.variable + ' relative min-h-screen bg-gray-100'}>
            <div className="relative min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-end">
                <div className='absolute inset-0'>
                    <Image
                        className="w-full h-full object-cover"
                        src="/background.png"
                        alt="Sicht auf den Startplatz der Dreiseenstafette 2023"
                        width="0"
                        height="0"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 mix-blend-multiply bg-slate-200" />
                </div>
                <div className="relative md:absolute md:top-0 md:left-0 p-12">
                    <img className="h-8 md:h-12 w-auto" src="/dreiseenstafette_light.png" alt="Dreiseenstafette Logo" />
                </div>
            </div>
            <div className="p-12 md:p-32 grid grid-cols-1 space-y-12 md:space-y-32">
                <div className="text-center space-y-6 md:space-y-12 grid grid-cols-1 text-black">
                    <h2 className="md:text-xl font-normal pulse">17.08.2025</h2>
                    <h1 className="text-3xl md:text-5xl xl:text-7xl uppercase font-extrabold tracking-normal italic">Dreiseenstafette</h1>
                    <h3 className="md:text-xl font-normal">Die bewährte Dreiseenstafette, neu auferlegt.</h3>
                </div>
                <div>
                    <form action="/api/newsletter" method="post" className="mt-4 space-y-4 md:space-y-0 md:space-x-4 grid grid-cols-1 md:flex md:justify-center md:flex-nowrap">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Anmeldung Newsletter
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                className="rounded-md w-full min-w-0 appearance-none bg-transparent border-2 text-sm font-semibold border-gray-400 py-2 px-4 text-gray-700 placeholder-gray-500"
                                placeholder="Anmeldung Newsletter"
                            />
                        </div>
                        <button type="submit" className="rounded-md border-2 border-gray-400 text-sm font-semibold py-2 px-4 text-gray-500 flex align-center hover:bg-gray-200 transition-all">
                            <ArrowSmallRightIcon className="mr-2 h-5 w-5 group-hover:text-white" />
                            Anmelden
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
