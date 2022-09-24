import Link from 'next/link';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { callsToAction, categories, resources } from './data';


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ children }: any) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 bg-black/80 backdrop-blur-sm">
        <Popover className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <div>
                    <img
                      className="h-8 w-auto sm:h10"
                      src="/logo/dss_logo_light_3.png"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-200' : 'text-gray-400',
                          'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-200 '
                        )}
                      >
                        <span>Kategorien</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-200' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-200'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 ">
                          <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 bg-black/80 backdrop-blur-sm rounded-lg">
                            <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                              {categories.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-800/90"
                                >
                                  <item.icon className="h-6 w-6 flex-shrink-0 text-blue-500" aria-hidden="true" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-200">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="space-y-6 bg-black/30 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 flex justify-center">
                              {callsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 gradient-background-hover"
                                  >
                                    <item.icon className="h-6 w-6 flex-shrink-0 text-gray-200" aria-hidden="true" />
                                    <span className="ml-3 text-gray-200 font-bold">{item.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <a href="#" className="text-base font-medium text-gray-400 hover:text-gray-200">
                  Informationen
                </a>

                <a href="#" className="text-base font-medium text-gray-400 hover:text-gray-200">
                  Partner
                </a>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-200' : 'text-gray-400',
                          'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-200 '
                        )}
                      >
                        <span>Mehr</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-200' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-200'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 ">
                          <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 bg-black/80 backdrop-blur-sm rounded-lg">
                            <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-800/90"
                                >
                                  <item.icon className="h-6 w-6 flex-shrink-0 text-blue-500" aria-hidden="true" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-200">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

              </Popover.Group>
              <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                <a
                  href="#"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md  px-4 py-2 text-base font-bold text-white shadow-sm gradient-background"
                >
                  Anmelden
                </a>
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
            <Popover.Panel focus className="absolute bg-gray-900/90 z-10 backdrop-blur-sm inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
              <div className="divide-y-2 divide-gray-600 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link href="/">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src="/logo/dss_logo_light_6.png"
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {categories.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-800/90"
                        >
                          <item.icon className="h-6 w-6 flex-shrink-0 text-blue-500" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-gray-200">{item.name}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="space-y-6 py-6 px-5">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">

                    <a href="#" className="text-base font-medium text-gray-200 hover:text-gray-400">
                      Informationen
                    </a>

                    <a href="#" className="text-base font-medium text-gray-200 hover:text-gray-400">
                      Partner
                    </a>

                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-200 hover:text-gray-400"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div>
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md px-4 py-2 text-base font-bold text-white shadow-sm gradient-background"
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

      <main className="bg-black">
        {children}
      </main>

    </>
  )
}

