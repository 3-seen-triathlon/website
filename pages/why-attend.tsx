import type { NextPage } from 'next'
import HeroWithNumbers from '../components/herowithnumbers'
import Layout from '../components/layout'
import { Tab } from '@headlessui/react'
import Attend from '../components/attend'

const benefitsFounders = [
  {
    name: 'Founders',
    description: 'Get funding, recruit Europe\'s top talents, acquire new customers!',
    imageUrl: 'https://www.startsummit.ch/hubfs/Websites/START_Summit/Isometrics/Meet%20investor.svg',
    url: "/"
  },
  {
    name: 'Investors',
    description: 'Meet fellow investors, tomorrow’s unicorns,  and recruit talents!',
    imageUrl: 'https://www.startsummit.ch/hs-fs/hubfs/b2match/localPartners/Invest+new+ideas.png?width=152&height=150&name=Invest+new+ideas.png',
    url: "/"
  },
];

const numbersFounders = [
  {
    text: "Founders",
    number: 500
  },
  {
    text: "Investors",
    number: 300
  },
  {
    text: "Students",
    number: 1000
  }
];


const benefitsStudents = [
  {
    name: 'Students',
    description: 'Score an internship, meet your co-founder or simply get inspired!',
    imageUrl: 'https://www.startsummit.ch/hubfs/Websites/START_Summit/Isometrics/Masterclasses%20smaller.svg',
    url: "/"
  },
  {
    name: 'Corporates',
    description: 'Meet other leading players, innovative startups, and empower young minds!',
    imageUrl: 'https://www.startsummit.ch/hubfs/Websites/START_Summit/Isometrics/Workshops%20(1).svg',
    url: "/"
  },
];

const numbersStudents = [
  {
    text: "Students",
    number: 1000
  },
  {
    text: "Nations",
    number: 86
  }
];


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const WhyAttend: NextPage = () => {

  return (
    <Layout>
      <div className="">
        <Tab.Group>
          <Tab.List className="flex space-x-6 rounded-md p-1 w-full max-w-md px-2 pt-24 pb-6 mx-auto">
            <Tab
              className={({ selected }) =>
                classNames('w-full rounded-lg py-2.5 text-sm font-bold leading-5 text-white hover:underline hover:underline-offset-4',
                  selected ? 'bg-gradient-to-br from-ecw-yellow-600 to-ecw-blue-600' : 'text-blue-100 hover:bg-gray-900 hover:text-white')
              }
            >
              Founders
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames('w-full rounded-lg py-2.5 text-sm font-bold leading-5 text-white hover:underline hover:underline-offset-4',
                  selected ? 'bg-gradient-to-br from-ecw-yellow-600 to-ecw-blue-600' : 'hover:bg-gray-900 hover:text-white')
              }
            >
              Students
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <HeroWithNumbers
                img="/event/location/eulachhallen.jpg"
                title="Bring your venture to the next level"
                numbers={numbersFounders}
              />
              <Attend
                title="Founder benefits"
                description="START Summit 2022 provides unique industry and tech insights for startups in the early and late seed stage. Year after year we witness entrepreneurial minds challenging the world we live in. Challenge today, change tomorrow."
                items={benefitsFounders}
              />
            </Tab.Panel>

            <Tab.Panel>
              <HeroWithNumbers
                img="/event/location/eulachhallen.jpg"
                title="Experience an explosion of creative minds"
                numbers={numbersStudents}
              />
              <Attend
                title="Student benefits"
                description="START Summit 2022 is your opportunity to dive into the entrepreneurial world driven by technology. Meet like-minded students, Europe's most promising startups, corporates and get inspired!"
                items={benefitsStudents}
              />
            </Tab.Panel>

          </Tab.Panels>
        </Tab.Group>
      </div>
    </Layout>
  )
}

export default WhyAttend;
