import type { NextPage } from 'next';
import Layout from '../components/layout';
import Image from 'next/image';
import Link from 'next/link';

const announcements = [
  {
    id: 1,
    title: 'Grab a beer and try again later',
    preview: 'Enjoy a good drink, relax and take a walk. Maybe the link you used will work afterwards 😊',
    link: '/'
  },
  {
    id: 2,
    title: 'Reach out to us',
    preview:
      'In urgent cases, please do not hesitate to contact us! We are here for you 👀',
    link: 'mailto:info@startup-nights.ch'
  },
]


const Error404: NextPage = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl pb-12 pt-6 px-4 sm:px-6 lg:py-24 lg:px-8 z-10 text-center">
        <Image src='/gifs/oh-shit.gif' className="rounded" width={498} height={270} />
        <div className="mt-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 md:text-4xl">
            Something went terribly wrong
          </h2>
          <p className="mt-3 text-xl text-gray-100 sm:mt-4 col-span-2 mb-12 text-left">
            We apologize for the inconvenience. Please let us know if you think this is something that should work or if you need some help. You can reach us at <code className="text-sm bg-gray-800 py-1 px-2 rounded-md hover:underline hover:underline-offset-4"><a href="mailto:info@startup-nights.ch">info@startup-nights.ch</a></code>.
          </p>

        </div>
        <Link
          href="/"
        >
          <div
            className="px-10 text-white py-3 text-center font-bold bg-gradient-to-tr from-green-400 to-blue-500 hover:underline hover:underline-offset-4 transition transition-all hover:bg-gradient-to-r rounded-md inline-block">
            Go back to the landing page
          </div>
        </Link>

      </div>
    </Layout>
  )
}

export default Error404;
