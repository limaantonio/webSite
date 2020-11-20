import Head from 'next/head';

import "../styles/main.css";

import Input from '../components/Input';

const Login = () => {
  return (
    <div className="h-auto sm:flex w-full ">
        <div className="sm:flex sm:flex-col hidden  items-end p-2 sm:w-1/2 w-full min-h-screen justify-center ">
        <div className="p-4 flex flex-col justify-end items-end">
         
          <img src="./ilustration.svg" alt=""/>
        </div>
        <img className="w-8/12 mx-20" src="/ilustration.svg" alt=""/>
      </div>
      <div className="flex flex-col  items-center sm:w-1/2 w-full h-screen justify-center  ">
    
        <form className="flex flex-col items-center  my-10 w-10/12">
          <Input name={"Usuário"}/>
          <Input name={"Senha"}/>
          <button className="bg-green w-4/12 rounded-3xl h-10 mt-6 ">Entrar</button>
          <div className="flex flex-col mt-8">
            <a className="text-green" href="">Esqueceu a senha?</a>
            <a className="text-green" href="">Crie sua conta</a>
          </div>
          </form>
        </div>
    </div>
  );
}

export default function Home() {
  return (
    <div  className="flex flex-col flex-1"
    style={{ background: "url(./background.svg) no-repeat center/cover" }}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login/>
    </div>
  )
}
