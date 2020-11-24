import Login from '../../pages/signin';
import Input from '../../components/Input';
import Nav from '../../components/Nav';

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
        <div className="flex flex-row items-center mt-4 space-x-2"> 
          <img className="w-10 " src="./whats.png"></img>
          <span>+55 88 9215698</span>    
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
      <a href="#" className="bg-white rounded-3xl p-2 sm:w-8/12 w-full flex flex-row justify-center shadow-xs 
        transition duration-500 ease-in-out bg-blue-600 hover:bg-gray transform hover:-translate-y-1 hover:scale-110
           ">
        <h1 className="w-11/12">O que é a SISMS?</h1>
        <div className="">
          <img className="transform transform-gpu scale-150 hover:rotate-45" src="./plus.svg" alt=""/> 
        
        </div>
      </a>
      <a href="#" className="bg-white rounded-3xl p-2 sm:w-8/12 w-full flex flex-row justify-center shadow-xs transition duration-500 ease-in-out bg-blue-600 hover:bg-gray transform hover:-translate-y-1 hover:scale-110   ">
        <h1 className="w-11/12">O que é a SISMS?</h1>
        <div className="">
          <img className="transform transform-gpu scale-150 hover:rotate-45" src="./plus.svg" alt=""/> 
        </div>
      </a>
      <a href="#" className="bg-white rounded-3xl p-2 sm:w-8/12 w-full flex flex-row justify-center shadow-xs transition duration-500 ease-in-out bg-blue-600 hover:bg-gray transform hover:-translate-y-1 hover:scale-110   ">
        <h1 className="w-11/12">O que é a SISMS?</h1>
        <div className="">
          <img className="transform transform-gpu scale-150 hover:rotate-45" src="./plus.svg" alt=""/> 
        </div>
      </a>
      <a href="#" className="bg-white rounded-3xl p-2 sm:w-8/12 w-full flex flex-row justify-center shadow-xs transition duration-500 ease-in-out bg-blue-600 hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-110  ">
        <h1 className="w-11/12">O que é a SISMS?</h1>
        <div className="transform transform-gpu scale-150 hover:rotate-45">
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
    <div className="flex   flex-col items-center justify-center h-screen text-3xl text-green  ">
      <h1 className="text-center mb-10 absolute">Bem-vindos ao SISMS - Sistema de Monitoramento em Saúde</h1>
      <div className=" w-11/12 h-60 mt-64 flex flex-col justify-end items-end ">
        <a href="https://wa.me/message/TR5VNKOMUBYSK1">
        <img className="w-16 " src="./whats.png" alt=""/>
        </a>
     
      </div>
     
    </div>
  
      <About/>
      <Contact/>
      <Faqs/>
      <Footer/>
   </>
  )
}

export default LandigPage;