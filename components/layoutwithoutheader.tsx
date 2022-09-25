import Head from "next/head";
import Footer from "../components/footer"
import NavigationWithoutHeader from "./navigationwithoutheader";

export default function LayoutWithoutHeader({ children }: any) {
  return (
    <>
      <Head>
        <title>Dreiseenstafette {new Date().getFullYear()}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationWithoutHeader>{children}</NavigationWithoutHeader>
        <Footer></Footer>
      </main>
    </>
  )
}
