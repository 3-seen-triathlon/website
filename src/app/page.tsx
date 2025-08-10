import { ArrowLongRightIcon, ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { Heading, Lead, Subheading } from '@/components/text'
import { Video } from '@/components/video'
import type { Metadata } from 'next'
import Route from '@/components/route'
import Timeline from '@/components/timeline'
import NewsletterSignup from '@/components/newsletter'
import LogoCloudSimple from '@/components/logo-cloud-simple'
import Contact from '@/components/contact'
import Banner from '@/components/banner'

export const metadata: Metadata = {
  description:
    'Der 3-Seen-Triathlon organisiert einen coolen Triathlon im schönen Seebachtal im Kanton TG.',
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
            <span className="italic mr-2">Der Triathlon im schönen Seebachtal.</span> Ob Short oder Olympic Distance, solo oder als Team - melde dich noch heute für den coolen Wettkampf an!
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
              <ArrowDownTrayIcon className="size-5" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Team() {
  return (
    <Container className="py-12 sm:py-16">
      <Subheading>Mithelfen</Subheading>
      <Heading as="h3" className="mt-2">
        Werde Teil des 3-Seen-Triathlons!
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Für einen reibungslosen Ablauf vom Wettkampf brauchen wir dich!
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            Der 3-Seen-Triathlon lebt von der Gemeinschaft – und du kannst mittendrin statt nur dabei sein!
            Ob an der Velostrecke, in der Wechselzone oder bei der Verpflegung der Athleten – jede Aufgabe trägt dazu bei, diesen besonderen Event zu einem Erfolg zu machen.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Als Helfer bist du nicht nur Teil eines einzigartigen Sportereignisses, sondern unterstützt aktiv die Athleten auf ihrer Strecke.
            Dein Einsatz wird geschätzt: Du oder ein Verein deiner Wahl erhält einen fixen Betrag pro Einsatz – und natürlich sorgen wir auch für deine Verpflegung.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Sei dabei, erlebe die besondere Atmosphäre hautnah und werde ein wichtiger Teil des 3-Seen-Triathlons! Melde dich by <code className='bg-gray-50 rounded-md p-1 mx-1'>info @ 3-seen-triathlon.ch</code>
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

function Routes() {
  return (
    <Container className="py-12 sm:py-16">
      <Subheading id='strecken'>Die Strecken</Subheading>
      <Heading as="h3" className="mt-2">
        Erlebe das Seebachtal aus 3 unterschiedlichen Perspektiven
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Vom Naturschutzgebiet am See bis hin zum Ausblick vom Iselisberg bietet dir der Wettkampf eine abwechslungsreiche Landschaft.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            Auf der Karte sind die unterschiedlichen Strecken aufgezeichnet. Bei der Laufstrecke gibt es zwei Verpflegungsposten; sie sind mit schwarzen Punkten markiert.
          </p>
          <p className="text-sm/6 text-gray-600 mt-8">
            Die Strecken zwischen Short und Olympic Distance unterscheiden sind kaum; bei der Olympic Distance wird die Strecke aber <b>2x</b> absolviert. <span className='italic'>Die Rad- und Laufstrecke werden dabei im Uhrzeigersinn absolviert.</span>
          </p>
          <div className='mt-8'>
            <table className="table-auto text-sm/6 text-gray-600 w-full">
              <thead className='text-left'>
                <tr>
                  <th>Strecke</th>
                  <th>Short Distance</th>
                  <th>Olympic</th>
                </tr>
              </thead>
              <tbody className=''>
                <tr>
                  <td className='text-red-600 font-bold'>Schwimmen</td>
                  <td>0.5 km <span className="italic">(1 Lap)</span></td>
                  <td>1.5 km <span className="italic">(3 Laps)</span></td>
                </tr>
                <tr>
                  <td className='text-blue-600 font-bold'>Radfahren</td>
                  <td>22 km <span className="italic">(1 Lap)</span></td>
                  <td>44 km <span className="italic">(2 Laps)</span></td>
                </tr>
                <tr>
                  <td className='text-green-600 font-bold'>Laufen</td>
                  <td>5 km <span className="italic">(1 Lap)</span></td>
                  <td>10 km <span className="italic">(2 Laps)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex flex-wrap gap-4 mt-8'>
            <Button variant='red_outline' href='/2025/wettkampfreglement.pdf'>
              Wettkampfreglement
              <ArrowDownTrayIcon className="size-5" />
            </Button>

            <Button variant='red' href='/courses/swim.gpx'>
              Schwimmstrecke
              <ArrowDownTrayIcon className="size-5" />
            </Button>
            <Button variant='red' href='/courses/cycling.gpx'>
              Radstrecke
              <ArrowDownTrayIcon className="size-5" />
            </Button>
            <Button variant='red' href='/courses/run.gpx'>
              Laufstrecke
              <ArrowDownTrayIcon className="size-5" />
            </Button>
            <Button variant='red' href='/wettkampfzentrum.png'>
              Wettkampfzentrum
              <ArrowDownTrayIcon className="size-5" />
            </Button>

          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <Route />
        </div>
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <>
      <Banner />
      <div className="overflow-hidden">
        <Hero />
        <main>
          <Container className="pt-12 sm:pt-24">
            <LogoCloud />
          </Container>
          <Testimonials />
          <LogoCloudSimple />
          <Routes />
          <Timeline />
          <Team />
          <NewsletterSignup />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}
