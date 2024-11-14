import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { GoPasskeyFill } from "react-icons/go";
import { Link } from "react-router-dom";
export default function EsqueceuSenha(){
    return (
        <>
        <div id="Container" className="bg-[url('/public/img/fundo_login.jpg')] bg-cover bg-center h-[900px] flex justify-center relative">
            <div className="border w-[400px] h-[600px] relative top-5 text-white flex flex-col  justify-center items-center gap-3">
                <div className="">
                    <GoPasskeyFill  className="text-[150px] border rounded-full p-5"></GoPasskeyFill>
                </div>



                <div id="texto" className="flex flex-col justify-center items-center ">
                    <h1 className="text-[30px]">Problemas para Entra ? </h1>
                    <h2 className="text-center">Insira sua Matricula e seu Email, enviaremos um  link para voce voltar a acessar a sua conta</h2>
                </div>
                <div id="formualario">
                    <form action="" className="flex flex-col gap-2">
                        
                        <input className="bg-transparent border-b-2 w-[250px]  h-9" type="text" placeholder="Digite sua matricula" />

                        <input className="bg-transparent border-b-2 w-[250px]  h-9" type="text" placeholder="Digite sue Email"/>
                        <input type="submit" value="Enviar"/>
                    </form>
                </div>
                <div className=""><Link>Volta ao Login</Link></div>
 

            </div>
        </div>        
        </>
    )
}