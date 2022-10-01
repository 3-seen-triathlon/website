import type { NextPage } from 'next'
import LayoutWithoutHeader from '../components/layoutwithoutheader';
import Team from '../components/team';

const Kontakt: NextPage = () => {
  return (
    <LayoutWithoutHeader>
      <div className="mt-10 md:mt-12">
        <Team />
      </div>
    </LayoutWithoutHeader>
  )
}

export default Kontakt;
