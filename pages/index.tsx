import type { NextPage } from 'next'
import Attend from '../components/attend'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Numbers from '../components/numbers'
import Speakers from '../components/speakers'

const numbers = [
  {
    text: "something",
    number: 1234
  },
  {
    text: "something else",
    number: 123
  }
]

const types = [
  {
    name: 'Founders',
    description: 'Get funding, recruit Europe\'s top talents, acquire new customers!',
    imageUrl: 'https://www.startsummit.ch/hubfs/Websites/START_Summit/Isometrics/Meet%20investor.svg',
    url: "/why-attend"
  },
  {
    name: 'Investors',
    description: 'Meet fellow investors, tomorrow’s unicorns,  and recruit talents!',
    imageUrl: 'https://www.startsummit.ch/hs-fs/hubfs/b2match/localPartners/Invest+new+ideas.png?width=152&height=150&name=Invest+new+ideas.png',
    url: "/why-attend"
  },
  {
    name: 'Students',
    description: 'Score an internship, meet your co-founder or simply get inspired!',
    imageUrl: 'https://www.startsummit.ch/hubfs/Websites/START_Summit/Isometrics/Masterclasses%20smaller.svg',
    url: "/why-attend"
  },
  {
    name: 'Corporates',
    description: 'Meet other leading players, innovative startups, and empower young minds!',
    imageUrl: 'https://www.startsummit.ch/hubfs/Websites/START_Summit/Isometrics/Workshops%20(1).svg',
    url: "/why-attend"
  },
]

const Home: NextPage = () => {
  return (
    <Layout>
      <Numbers numbers={numbers} />
      <Attend
        title="Why attend?"
        description=""
        items={types}
      />
      <Speakers />
    </Layout>
  )
}

export default Home;
