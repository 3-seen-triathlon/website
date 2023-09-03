import type { NextPage } from 'next'
import Layout from '../components/layout';

const Impressum: NextPage = () => {
    return (
        <Layout>
            <div className="content">
                <h2 className="h3">
                    Impressum
                </h2>

                <p>Dreiseenstafette - Ein Event vom <a href="https://tvhuettwilen.ch/" className='font-bold underline underline-offset-4'>TV Hüttwilen</a></p>
                <p><a href="mailto:info@dreiseenstafette.ch" className="link">info@dreiseenstafette.ch</a></p>
            </div>
        </Layout>
    )
}

export default Impressum;
