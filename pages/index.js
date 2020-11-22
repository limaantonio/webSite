import Head from 'next/head';
import Link from 'next/link';

import "../styles/main.css";

import Login from '../pages/signin';
import Input from '../components/Input';

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
                  href="#about"
                >
                 <span className="ml-2">Sobre</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=" py-2 flex items-center text-xl  leading-snug  text-green2 hover:opacity-75"
                  href="#contact"
                >
                 <span className="ml-2">Contato</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=" py-2 flex items-center text-xl leading-snug  text-green2 hover:opacity-75"
                  href="#faqs"
                >
                 <span className="ml-2">FAQS</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="py-2 flex items-center justify-center sm:ml-2 text-xl   leading-snug text-white hover:opacity-75 bg-green rounded-3xl w-24">
                  <span>ENTRAR</span>
                </a>
               
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

const About = () => {
  return(
    <div id="about" className="flex flex-col items-center">
    <div className="sm:flex sm:flex-row h-screen mt-20 sm:space-x-12">
      <div className="sm:w-5/12 sm:ml-8 mx-4">
        <h1 className="text-green text-3xl font-bold mb-6">SOBRE NÓS</h1>
        <p className="text-justify">Somos Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestiae dolore illo commodi, laudantium reprehenderit adipisci nulla maiores amet enim, voluptatibus deserunt ex sequi cupiditate ullam necessitatibus ipsam! Nisi, nostrum!</p>
      </div>
      <div className="sm:flex flex-col items-center mx-4 mt-4">
        <h1 className="text-3xl sm:w-8/12 text-white">Queremos contribuir no combate a COVID-19</h1>
        <img className="sm:w-9/12" src="./img.png" alt=""/>
      </div>
     
    </div>
     <div className="bg-green w-10/12">
     <h1 className="text-center text-white mt-8 font-bold">Mas como o SISMS funciona?</h1>
     <p className="text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus quis fuga aliquam delectus ex, excepturi recusandae magnam aperiam saepe quia, officia reiciendis quo ducimus sequi vel, in numquam aliquid!</p>
      <p className="text-white text-center mt-8">#todos_contra_o_COVID</p>
   </div>
   </div>
  )
}

const Contact = () => {
  return (
    <div id="contact" className="mt-24 sm:flex flex-row h-screen">
      <div className="w-1/2 sm:flex flex-col mx-8 sm:mx-20 ">
        <h1 className="text-3xl text-green font-bold mb-6">NOSSOS CONTATOS</h1>
        <div className="flex flex-row items-center space-x-2"> 
          <img className="bg-white rounded-full w-10 p-2" src="./mail.svg" alt=""/>
          <span>contato@sisms.com.br</span>
        </div>
      </div>
      <div className="sm:flex flex-row mx-8  mt-10 ">
      
        <form className="sm:flex w-full  flex-col items-center space-y-2">
        <h1 className="text-gree text-2xl text-green mb-4">ENTRE EM CONTATO</h1>
          <input className="border-2 border-green p-2 rounded-xl" placeholder="Seu nome *" type="text" name="" id=""/>
          <input className="border-2 border-green p-2 rounded-xl" placeholder="Seu e-mail *" type="text" name="" id=""/>
          <input className="border-2 border-green p-2 rounded-xl" placeholder="Assunto" type="text" name="" id=""/>
          <input className="border-2 border-green p-2 rounded-xl h-32 " placeholder="Sua mensagem" type="text" name="" id=""/>
          <button className="bg-green w-4/12  text-white rounded-3xl h-10 mt-6 ">Enviar</button>
        </form>
      </div>
    
    </div>
  )
}

const Faqs = () => {
  return (
    <div id="faqs" className="flex flex-col justify-center items-center p-2 space-y-4">
      <h1 className="text-green text-2xl font-bold">PERGUNTAS E RESPOSTAS</h1>
      <a href="#" className="bg-white rounded-3xl p-2 sm:w-8/12 w-full flex flex-row justify-center shadow-xs transition-all ">
        <h1 className="w-11/12">O que é a SISMS?</h1>
        <div className="">
          <img className="" src="./plus.svg" alt=""/> 
        </div>
      </a>
      <a href="#" className="bg-white rounded-3xl p-2 sm:w-8/12 w-full flex flex-row justify-center shadow-xs ">
        <h1 className="w-11/12">O que é a SISMS?</h1>
        <div className="">
          <img className="" src="./plus.svg" alt=""/> 
        </div>
      </a>
      <a href="#" className="bg-white rounded-3xl p-2 sm:w-8/12 w-full flex flex-row justify-center shadow-xs ">
        <h1 className="w-11/12">O que é a SISMS?</h1>
        <div className="">
          <img className="" src="./plus.svg" alt=""/> 
        </div>
      </a>
      <a href="#" className="bg-white rounded-3xl p-2 sm:w-8/12 w-full flex flex-row justify-center shadow-xs ">
        <h1 className="w-11/12">O que é a SISMS?</h1>
        <div className="">
          <img className="" src="./plus.svg" alt=""/> 
        </div>
      </a>

    </div>
  )
}

const Footer = () => {
  return(
    <div className="p-16 flex flex-row bg-green mt-10 space-x-4">
      <div className="flex w-1/2 flex-row  ">
        <ul className="flex flex-row space-x-2">
          <li>
            <a href="">
              <img className="bg-white rounded-full w-10 p-2" src="./facebook.svg" alt=""/>
            </a>
          </li>
          <li>
          <a href="">
              <img className="bg-white rounded-full w-10 p-2" src="./instagram.svg" alt=""/>
            </a>
          </li>
          <li>
            <a href="">
              <img className="bg-white rounded-full w-10 p-2" src="./mail.svg" alt=""/>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex w-1/2 flex-row justify-end ">
     
        <img className="w-24" src="./Logo.svg" alt=""/>
      </div>
    </div>
  )
}

const LandigPage = () => {
  return(
    <>
    <Nav/>
    <div className="flex   flex-col items-center justify-center h-screen text-3xl text-green">
      <h1 className="text-center absolute">Bem-vindos ao SISMS - Sistema de Monitoramento em Saúde</h1>
    </div>
   </>
  )
}

export default function Home() {
  return (
    <div  className="flex flex-col flex-1 bg-fixed"
    style={{ background: "url(./background.svg) no-repeat center/cover" }}>
      <Head>
        <title>SISMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandigPage/>
      <About/>
      <Contact/>
      <Faqs/>
      <Footer/>
     
    </div>
  )
}
