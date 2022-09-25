import type { NextPage } from 'next'
import Intro from '../components/intro';
import LayoutWithoutHeader from '../components/layoutwithoutheader';

const Kategorien: NextPage = () => {
  return (
    <LayoutWithoutHeader>
      <Intro />
    </LayoutWithoutHeader>
  )
}

export default Kategorien;
