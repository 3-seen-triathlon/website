import { ClipboardDocumentIcon, TrophyIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'

const timeline = [
  {
    id: 1,
    text: '07:30',
    time: 'Öffnung Check-In',
    icon: ClipboardDocumentIcon,
    iconBackground: 'bg-emerald-400',
  },
  {
    id: 2,
    text: '08:00',
    time: 'Öffnung Bike Check-In',
    icon: ClipboardDocumentIcon,
    iconBackground: 'bg-emerald-400',
  },
  {
    id: 3,
    text: '10:00',
    time: 'Start Olympic Distance Men',
    icon: RocketLaunchIcon,
    iconBackground: 'bg-rose-400',
  },
  {
    id: 4,
    text: '10:05',
    time: 'Start Olympic Distance Women',
    icon: RocketLaunchIcon,
    iconBackground: 'bg-rose-400',
  },
  {
    id: 5,
    text: '10:15',
    time: 'Start Dreiseenstafette',
    icon: RocketLaunchIcon,
    iconBackground: 'bg-rose-400',
  },
  {
    id: 6,
    text: '10:30',
    time: 'Start Short Distance Men',
    icon: RocketLaunchIcon,
    iconBackground: 'bg-rose-400',
  },
  {
    id: 7,
    text: '10:35',
    time: 'Start Short Distance Women',
    icon: RocketLaunchIcon,
    iconBackground: 'bg-rose-400',
  },
  {
    id: 8,
    text: '13:30',
    time: 'Rangverkündigung Short Distance Triathlon',
    icon: TrophyIcon,
    iconBackground: 'bg-cyan-400',
  },
  {
    id: 9,
    text: '13:45',
    time: 'Rangverkündigung Dreiseenstafette',
    icon: TrophyIcon,
    iconBackground: 'bg-cyan-400',
  },
  {
    id: 10,
    text: '14:00',
    time: 'Rangverkündigung Olympic Distance Triathlon',
    icon: TrophyIcon,
    iconBackground: 'bg-cyan-400',
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Timeline() {
  return (
    <Container className="py-12 sm:py-16">
      <Subheading id='zeitplan'>Zeitplan</Subheading>
      <Heading as="h3" className="mt-2">
        Der Ablauf des 3ST
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Alle Events sind beim Wettkampfzentrum bei der Badi Hüttwilersee.
      </Lead>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            Bitte beachte, dass aus Sicherheitsgründen die Badi während dem Wettkampf nicht mit dem Auto auf der üblichen Zubringerstrasse erreicht oder verlassen werden darf.
          </p>
        </div>
      </div>

      <ul role="list" className="mt-12 max-w-2xl">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span aria-hidden="true" className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'flex size-8 items-center justify-center rounded-full ring-8 ring-white',
                    )}
                  >
                    <event.icon aria-hidden="true" className="size-5 text-white" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-start space-x-4 pt-1.5">
                  <p className="text-sm font-semibold text-gray-700">
                    {event.text} {' '}
                  </p>
                  <p className="text-sm font-normal text-gray-500">
                    {event.time}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Container >
  )
}
