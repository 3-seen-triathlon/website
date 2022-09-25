import Link from 'next/link';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const logo = "/logo/dss_logo_light.png";

const menuItems = [
  { name: "Kategorien", link: "/kategorien" },
  { name: "Informationen", link: "#" },
  { name: "Partner", link: "#" },
  { name: "Kontakt", link: "#" },
];

export default function Navigation({ children }: any) {
  return (
    <>
      <div className="z-10">
        <Popover className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between py-16 px-6 md:justify-start align-baseline md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <div>
                    <img
                      className="h-4 md:h-6 w-auto"
                      src={logo}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-200">
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden space-x-2 lg:space-x-5 xl:space-x-10 md:flex md:justify-end md:items-baseline">
                {menuItems.map(item => (
                  <a href={item.link} className="text-base text-gray-200 hover:text-gray-200">
                    {item.name}
                  </a>
                ))}
                <a
                  href="#"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border-2 border-blue-500 px-4 py-2 text-base text-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  Anmelden
                </a>
              </div>
            </div>
          </div>


          <div className="absolute inset-0 block overflow-hidden -z-10">
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              className="absolute w-auto min-w-full min-h-full max-w-none"
            >
              <source
                src="https://www.dreiseenstafette.ch/video/aftermovie2021.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gray-300 mix-blend-multiply" />
          </div>
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-24 lg:px-8 z-10 h-screen pt-42 md:py-24">
            <div className="h-full flex justify-start content-center items-center">
              <h2 className="max-w-4xl relative text-6xl text-gray-100 md:col-span-2 leading-normal">
                Der schönste Triathlon im Thurgau
              </h2>
            </div>
          </div>



          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel focus className="fixed bottom-0 left-0 right-0 bg-blue-500 z-10 inset-x-0 top-0 transform transition md:hidden">
              <div className="mx-auto max-w-7xl px-6 h-full py-16">
                <div className="grid content-between h-full">
                  <div className="flex items-center justify-between px-6 align-baseline">
                    <div>
                      <Link href="/">
                        <div>
                          <img
                            className="h-4 w-auto"
                            src={logo}
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md text-white ">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mx-auto text-center">
                    <nav className="grid gap-y-8">
                      {menuItems.map(item => (
                        <a href={item.link} className="text-3xl text-gray-200 hover:text-gray-200">
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="space-y-6 py-6 px-5 text-center">
                    <a
                      href="#"
                      className="ml-3 xl:ml-6 inline-flex items-center justify-center whitespace-nowrap rounded-md border-2 border-white px-4 py-2 text-base text-white hover:bg-white hover:text-blue-500"
                    >
                      Anmelden
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>

        </Popover>
      </div>

      <main className="bg-white">
        {children}
      </main>
    </>
  )
}

