import Head from "next/head";
import Footer from "../components/footer"
import Navigation from "./navigation";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Dreiseenstafette {new Date().getFullYear()}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation>{children}</Navigation>
        <Footer></Footer>
      </main>
    </>
  )
}
