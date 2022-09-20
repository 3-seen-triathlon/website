import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Kategorien', href: '#' },
  { name: 'Partner', href: '#' },
  { name: 'FAQ', href: '#' },
]

const signupLink = "https://secure.datasport.com/?dss22";

export default function Navigation({ children }: any) {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <div className="fixed pt-6 top-0 left-0 right-0 bg-black/90 z-10 backdrop-blur-sm">
          <Popover>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-6">
              <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <Link href="/">
                      <div>
                        <span className="sr-only">Startup Nights</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="/logo/dss_white.png"
                          alt="Startup Nights Logo"
                        />
                      </div>
                    </Link>
                    <div className="flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 border-2 border-transparent hover:text-ecw-blue-600 hover:border-ecw-blue-600">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:space-x-5 lg:space-x-10">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} >
                      <div className="font-medium text-gray-200 hover:text-ecw-blue-600 hover:underline hover:underline-offset-4">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
                  <span className="inline-flex rounded-md shadow">
                    <a
                      href={signupLink} target="_blank"
                      className="inline-flex items-center rounded-md px-4 py-2 text-base font-bold text-white hover:underline hover:underline-offset-4 gradient-background"
                    >
                      Anmelden
                    </a>
                  </span>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-gray-900/90 shadow-md ring-1 ring-black ring-opacity-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <Link href="/">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="/logo/dss_white.png"
                          alt=""
                        />
                      </div>
                    </Link>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 border-2 border-transparent p-2 text-gray-200 hover:text-ecw-blue-600 hover:border-ecw-blue-600">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}
                      >
                        <div className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-800 hover:text-ecw-blue-600 hover:underline hover:underline-offset-4">
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <a
                    href={signupLink} target="_blank"
                    className="block w-full px-5 text-white py-3 text-center font-bold gradient-background hover:underline hover:underline-offset-4"
                  >
                    Anmelden
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>

        <main className="">
          {children}
        </main>
      </div >
    </div >
  )
}

