import type { NextPage } from 'next'
import LayoutWithoutHeader from '../components/layoutwithoutheader';
import Team from '../components/team';

const Kontakt: NextPage = () => {
  return (
    <LayoutWithoutHeader>
      <Team />
    </LayoutWithoutHeader>
  )
}

export default Kontakt;
