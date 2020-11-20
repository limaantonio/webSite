import Head from 'next/head';
import Link from 'next/link';

import "../styles/main.css";

import Login from '../pages/signin';

const Nav = () => {
  return(
    <div className="flex flex-row items-center justify-center shadow-lg h-24 text-xl bg-blueLight text-green">
      <div className="sm:w-6/12">
         <img className="w-2/12" src="./Logo.svg" alt=""/>
      </div>
   
      <ul className="flex flex-row space-x-4 justify-center mx-4">
        <li >
          <Link href="">Home</Link>
        </li>
        <li>
          <Link href="">Sobre</Link>
        </li>
        <li>
          <Link href="">Contatos</Link>
        </li>
        <li>
          <Link href="">FAQs</Link>
        </li>
        <li>
          <div className="flex flex-row items-center justify-center bg-green h-10 text-white w-20 rounded-3xl hover:bg-green2">
           <Link href="./signin">Login</Link>
          </div>
          
        </li>
      </ul>
    </div>
  )
}

const LandigPage = () => {
  return(
    <>
    <Nav/>
    <div className="flex flex-col items-center justify-center h-full text-3xl text-green">
      <h1>Bem-vindos ao SISMS - Sistema de Monitoramento em Saúde</h1>
    </div>
   </>
  )
}

export default function Home() {
  return (
    <div  className="flex flex-col flex-1"
    style={{ background: "url(./background.svg) no-repeat center/cover" }}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandigPage/>
     
    </div>
  )
}
