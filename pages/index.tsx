import type { NextPage } from 'next'
import Categories from '../components/categories';
import Layout from '../components/layout';
import RandomImage from '../components/RandomImage';

const Home: NextPage = () => {
  return (
    <Layout>

      <div className="content-wide">
        <RandomImage />
      </div>

      <div className="content">
        <h1 className="h2">
          Ein atemberaubender Triathlon, eine traditionsreiche Stafette und ein einzigartiger Lauf in familiärer Atmosphäre - das ist die Dreiseenstafette im Seebachtal.
        </h1>
      </div>

      <Categories />

    </Layout>
  )
}

export default Home;
