import Head from 'next/head';
import "../styles/main.css";
import LandingPage from '../pages/home';

export default function Home() {
  return (
    <div  className="flex flex-col flex-1 bg-fixed"
    style={{ background: "url(./background.svg) no-repeat center/cover" }}>
      <Head>
        <title>SISMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage/> 
    </div>
  )
}
