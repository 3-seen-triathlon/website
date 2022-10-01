import type { NextPage } from 'next'
import FAQ from '../components/faq';
import LayoutWithoutHeader from '../components/layoutwithoutheader';

const image = "/event/ziel.jpg";

const Informationen: NextPage = () => {
  return (
    <LayoutWithoutHeader>
      <div className="content">
        <h1 className="h1">Informationen</h1>
        <h2 className="h2 width">
          Mit den insgesamt 6 Kategorien kommen an der DSS alle auf ihre Kosten. Gemeinsam haben sie den Start und das Ziel, welche bei der Badi am schönen Hüttwilersee sind.
        </h2>
      </div>

      <div className="content-wide">
        <img className="image" src={image} />
      </div>

      <div className="content">
        <FAQ />
      </div>

    </LayoutWithoutHeader>
  )
}

export default Informationen;
