import {
  CameraIcon,
  ChartBarIcon,
  ClipboardDocumentIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  PhoneIcon,
  Squares2X2Icon,
  TicketIcon,
  TrophyIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

export const categories = [
  {
    name: 'Triathlon',
    description: 'Short und Olympic Distance.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Stafette',
    description: 'Lang und kurz. Allenfalls auch mit Reiter.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Lauf',
    description: "10km Lauf rund um den Hütwiler- und Nussbaumersee.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Die schnellste Seebachtaler:inne',
    description: "Sprints und Qualifikation für den Visana Event.",
    href: '#',
    icon: Squares2X2Icon,
  },
]

export const callsToAction = [
  { name: 'Anmelden', href: '#', icon: TicketIcon },
  { name: 'Startlisten', href: '#', icon: DocumentChartBarIcon },
]

export const resources = [
  {
    name: 'Über uns',
    description: 'Die Geschichte der DSS und wer dahinter steckt.',
    href: '#',
    icon: UserGroupIcon,
  },
  {
    name: 'Impressionen',
    description: 'Bilder und Videos von vorherigen Events.',
    href: '#',
    icon: CameraIcon,
  },
  {
    name: 'Ranglisten',
    description: 'Ergebnisse von der letzten Austragung.',
    href: '#',
    icon: TrophyIcon,
  },
  {
    name: 'Kontakt',
    description: 'So könnt ihr uns erreichen.',
    href: '#',
    icon: PhoneIcon,
  },
  {
    name: 'Helferbereich',
    description: 'Infos und Pläne für den Event.',
    href: '#',
    icon: ClipboardDocumentIcon,
  },
]

