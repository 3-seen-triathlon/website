'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { Link } from './link'
import { Logo } from './logo'
import clsx from 'clsx'

const links: any[] = [
  // { href: '/pricing', label: 'Pricing' },
  // { href: '/about', label: 'Über uns' },
  // { href: '/blog', label: 'Blog' },
  // { href: '/login', label: 'Login' },
]

function DesktopNav({
  variant = 'dark',
}) {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <div key={href} className="relative flex">
          <Link
            href={href}
            className={clsx(
              "flex items-center px-4 py-3 text-base font-medium bg-blend-multiply data-[hover]:bg-black/[2.5%]",
              variant === 'dark' ? 'text-gray-950' : 'text-white'
            )}
          >
            {label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

function MobileNavButton({
  variant = 'dark',
}) {
  if (links.length === 0) {
    return (
      <></>
    )
  }

  return (
    <DisclosureButton
      className={clsx(
        "flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden",
        variant === 'dark' ? '' : 'text-white'
      )}
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav({
  variant = 'dark',
}) {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <Link key={href} href={href} className={clsx(
            "text-base font-medium",
            variant === 'dark' ? 'text-gray-950' : 'text-white'
          )}>
            {label}
          </Link>
        ))}
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({
  variant = 'dark',
  banner
}: { banner?: React.ReactNode, variant?: string }) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <div className="relative flex justify-between">
        <div className="relative flex gap-6">
          <div className="py-3">
            <Link href="/" title="Home">
              <Logo variant={variant} className="w-48" />
            </Link>
          </div>
          {banner && (
            <div className="relative hidden items-center py-3 lg:flex">
              {banner}
            </div>
          )}
        </div>
        <DesktopNav variant={variant} />
        <MobileNavButton variant={variant} />
      </div>
      <MobileNav variant={variant} />
    </Disclosure>
  )
}
