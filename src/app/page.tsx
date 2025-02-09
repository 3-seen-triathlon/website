import { BentoCard } from '@/components/bento-card'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Keyboard } from '@/components/keyboard'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Lead, Subheading } from '@/components/text'
import { Video } from '@/components/video'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Die Dreiseenstafette organisiert einen coolen Triathlon im schönen Seebachtal im Kanton TG.',
}

function Hero() {
  return (
    <div className="relative rounded-4xl m-2 overflow-hidden">
      <Video className={'absolute inset-0 object-cover min-w-full min-h-full'} />
      <Container className="relative">
        <Navbar variant={'light'} />
        <div className="pb-12 pt-32 sm:pb-24 sm:pt-48 md:pb-32 md:pt-72">
          <h1 className="text-white font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            17. August 2025
          </h1>
          <p className="text-white mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Bock auf einen coolen Triathlon?
            Dann markier dir das Datum schon mal fett im Kalender!
          </p>
          <div className='flex flex-wrap gap-4 mt-8'>
            <Button variant='red' target='_blank' href='https://onreg.datasport.com/en/dreiseentriathlon-2025'>
              Anmelden
              <ArrowLongRightIcon className="size-5" />
            </Button>
            <Button
              variant='red_outline'
              target='_blank'
              href='https://www.datasport.com/live/startlist/?racenr=27893'
            >
              Startlisten
              <ArrowLongRightIcon className="size-5" />
            </Button>
            <Button
              variant='red_outline'
              target='_blank'
              href='/2025_08_17_dreiseenstafette.ics'
            >
              Kalendereintrag
              <ArrowLongRightIcon className="size-5" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Team() {
  return (
    <Container className="mb-32">
      <Subheading>Mithelfen</Subheading>
      <Heading as="h3" className="mt-2">
        Wir sind auf der Suche nach Helfern.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Für einen reibungslosen Ablauf vom Wettkampf brauchen wir dich!
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            Der 3-Seen-Triathlon kann nur dank fleissigen Helfern stattfinden. Ihr seid die heimlichen Stars!
            Die Aufgaben gehen von der Sicherung der Velostrecke über Kontrolle der Wechselzone bis hin zur Verpflegung der Athleten auf der Laufstrecke.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Als Dank für deinen Einsatz erhälst entweder du oder ein Verein deiner Wahl einen fixen Betrag pro Einsatz. Ausserdem sorgen wir für deine Verpflegung während dem Einsatz.
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="mailto:info@3-seen-triathlon.ch">
              Hilf mit!
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="/images/helfer.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-12">
          <LogoCloud />
        </Container>
      </main>
      <Testimonials />
      <Team />
      <Footer />
    </div>
  )
}
