import type { NextPage } from 'next'
import LayoutWithoutHeader from '../components/layoutwithoutheader';
import Partners from '../components/partners';

const Partner: NextPage = () => {
  return (
    <LayoutWithoutHeader>
      <Partners />
    </LayoutWithoutHeader>
  )
}

export default Partner;
