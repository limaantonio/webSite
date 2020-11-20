import Head from 'next/head';
import Link from 'next/link';

import "../../styles/main.css";

import Input from '../../components/Input';
const Login = () => {
  return (
    <div className="h-auto sm:flex w-full "
    style={{ background: "url(./background.svg) no-repeat center/cover" }}>
        <div className="sm:flex sm:flex-col hidden  items-end p-2 sm:w-1/2 w-full min-h-screen justify-center ">
        <div className=" flex flex-col justify-end items-end">
         
          <img className="w-10/12" src="./Logo.svg" alt=""/>
        </div>
       
      </div>
      <div className="flex flex-col  items-center sm:w-1/2 w-full h-screen justify-center  ">
    
        <form className="flex flex-col items-center    w-10/12">
          <Input name={"Usuário"}/>
          <Input name={"Senha"}/>
          <button className="bg-green w-4/12 text-white rounded-3xl h-10 mt-6 ">Entrar</button>
          <div className="flex flex-col mt-8">
            <Link className="text-green" href="">Esqueceu a senha?</Link>
            <Link className="text-green" href="/signup">Crie sua conta</Link>
          </div>
          </form>
        </div>
    </div>
  );
}

export default Login;