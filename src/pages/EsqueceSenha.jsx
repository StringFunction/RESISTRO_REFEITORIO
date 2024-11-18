import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { GoPasskeyFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function EsqueceuSenha(){
    const [matricula, setMatricula] = useState()
    const [email, setEmail] = useState()
    function Envia(e){
        e.preventDefault()
        console.log("matricula " + matricula);
        console.log("email " + email);
        
    }



    return (
        <>
        <div id="Container" className="bg-[url('/public/img/fundo_login.jpg')] bg-cover bg-center h-[900px] flex justify-center relative">
            <div className="border w-[400px] h-[600px] relative top-5 text-white flex flex-col  justify-center items-center gap-3 rounded-2xl bg-black/50 backdrop-blur">
                    <div className="">
                        <GoPasskeyFill  className="text-[150px] border rounded-full p-5 text-black"></GoPasskeyFill>
                    </div>



                    <div id="texto" className="flex flex-col justify-center items-center ">
                        <h1 className="text-[30px]">Problemas para Entra ? </h1>
                        <h2 className="text-center">Insira sua Matricula e seu Email, enviaremos um  link para voce voltar a acessar a sua conta</h2>
                    </div>
                    <div id="formualario">
                        <form onSubmit={Envia} action="" className="flex flex-col gap-6">
                            
                            <input className="bg-transparent border-b-2 w-[250px]  h-9" type="text" placeholder="Digite sua matricula" onChange={(e) => setMatricula(e.target.value)} />

                            <input className="bg-transparent border-b-2 w-[250px]  h-9" type="text" placeholder="Digite sue Email" onChange={(e) => setEmail(e.target.value)} />
                            <input type="submit" value="Enviar"/>
                        </form>
                    </div>
                    <div className=""><Link to="/Login">Volta ao Login</Link></div>
 

            </div>
        </div>        
        </>
    )
}