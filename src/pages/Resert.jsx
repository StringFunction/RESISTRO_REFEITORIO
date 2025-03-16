import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useFetcher, useParams } from "react-router-dom";

import { GoPasskeyFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../service/api";

function ResertSenha(){
    const [nome, setnome] = useState("CLECIO")
        
    const [senha, setsenha] = useState()
    const [senha1, setsenha1] = useState()
    const idSenha = useRef(null)
    const idSenhaC = useRef(null)

function Enviar (e){
    e.preventDefault()
    if (senha1 !== senha){
        idSenha.current.classList.add("border-red-700")
        idSenhaC.current.classList.add("border-red-700")
        
        return toast.info("Senha n correspondem")
    } 

}


    const {token} = useParams() 
    console.log(token);
    
    return <>
        <div  className="bg-[url('/public/img/fundo_login.jpg')] bg-cover bg-center md:h-[900px] flex justify-center relative font-boa2">
            
            
            
            <div className="flex-col flex text-white mt-[50px] items-center gap-7">
                <div>
                         <div className="text-[40px] tracking-[5px]"><p>Alterar senha para {nome}</p></div>

                </div>
                <div className="border md:w-[300px] md:h-[450px] rounded-3xl flex flex-col justify-center items-center gap-9 backdrop-blur-sm tracking-[1px] p-5">
                    <form onSubmit={Enviar} className="flex flex-col gap-4 tracking-[5px] justify-center items-center">
                        <label htmlFor="" className="p-2">NOVA SENHA</label>
                        <input ref={idSenha} onClick={(e) => {idSenha.current.classList.remove("border-red-700")}} onChange={(e) => {setsenha(e.target.value)}} type="password"  className="  bg-transparent border  rounded-[20px] w-[200px] h-7 text-center text-white p-5"/>
                        <label htmlFor="" className="p-2">CONFIRME SENHA:</label>
                        <input ref={idSenhaC} onChange={(e) => {setsenha1(e.target.value)}} onClick={(e) => {idSenhaC.current.classList.remove("border-red-700")}} type="password" className="bg-transparent border rounded-[20px] w-[200px] h-7 text-center text-white p-5"/>
                        <input type="submit" value="Enviar" className="border relative w-[200px] rounded-[20px] mt-3 p-2 hover:cursor-pointer hover:bg-green-500 duration-500" />

                    </form>
                    <h2 className="flex justify-center items-center">Certifique-se de que tenha pelo menos 15 caracteres OU pelo menos 8 caracteres, incluindo um número e uma letra minúscula </h2>
                </div>
                
            </div>
        </div>
        <ToastContainer></ToastContainer>
    </>

}
export default ResertSenha