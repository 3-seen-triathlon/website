import Link from 'next/link';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const logo = "/logo/dss_logo_dark_1.png";
const logo_light = "/logo/dss_logo_light_3.png";

const menuItems = [
  { name: "Kategorien", link: "/kategorien" },
  { name: "Informationen", link: "#" },
  { name: "Partner", link: "#" },
  { name: "Kontakt", link: "#" },
];

export default function NavigationWithoutHeader({ children }: any) {
  return (
    <>
      <div className="z-10">
        <Popover className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between py-16 px-6 align-baseline md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <div>
                    <img
                      className="h-8 md:h-10 w-auto"
                      src={logo}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-blue-500">
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden space-x-3 lg:space-x-5 xl:space-x-10 md:flex md:justify-end md:items-baseline">
                {menuItems.map(item => (
                  <a href={item.link} className="text-base text-blue-500">
                    {item.name}
                  </a>
                ))}
                <div>
                  <a href="#" className="button">
                    Anmelden
                  </a>
                </div>
              </div>
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
                            className="h-8 w-auto"
                            src={logo_light}
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
                        <a href={item.link} className="text-3xl text-gray-200">
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="space-y-6 py-6 px-5 text-center">
                    <a href="#" className="button-light">
                      Anmelden
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>

        </Popover>
      </div>

      <main className="bg-white md:mt-12">
        {children}
      </main>
    </>
  )
}

