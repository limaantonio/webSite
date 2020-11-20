import Head from 'next/head';
import Link from 'next/link';

import "../styles/main.css";

import Login from '../pages/signin';

const Nav = ({fixed}) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return(
    <>
      <nav className="relative flex flex-wrap  items-center shadow-md  px-2 py-3 navbar-expand-lg  mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="#"
            >
              <img className="w-24" src="./Logo.svg" alt=""/>
            </a>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
               <svg class="fill-current  h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center  " +
              (navbarOpen ? " flex h-auto " : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none sm:space-x-2 lg:ml-auto">
              <li className="nav-item ">
                <a
                  className="py-2 flex items-center text-xl leading-snug text-green2 hover:opacity-75"
                  href="#"
                >
                 <span className="ml-2">Sobre</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=" py-2 flex items-center text-xl  leading-snug  text-green2 hover:opacity-75"
                  href="#"
                >
                 <span className="ml-2">Contato</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=" py-2 flex items-center text-xl leading-snug  text-green2 hover:opacity-75"
                  href="#"
                >
                 <span className="ml-2">FAQS</span>
                </a>
              </li>
              <li className="nav-item">
                <Link href="/signin" className="py-2 flex items-center justify-center sm:ml-2 text-xl   leading-snug text-white hover:opacity-75 bg-green rounded-3xl w-24">
                  <span>ENTRAR</span>
                </Link>
               
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

const LandigPage = () => {
  return(
    <>
    <Nav/>
    <div className="flex   flex-col items-center justify-center h-full text-3xl text-green">
      <h1 className="text-center absolute">Bem-vindos ao SISMS - Sistema de Monitoramento em Saúde</h1>
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
