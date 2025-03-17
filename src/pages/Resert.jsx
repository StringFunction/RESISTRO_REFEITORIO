import React, { useEffect, useRef } from "react";
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
    const [Spin, setSpin] = useState(true)
    const [ValidadeToken, setValidadeToke] = useState(true)
    const {token} = useParams() 
    console.log(token);
    
    useEffect(() => {

        async function atualizar(){
            console.log("Ola mundo");
            
            setSpin(false)
            setValidadeToke(false)
        }
        setTimeout(atualizar, 10000);

    }, [])

function Enviar (e){
    e.preventDefault()
    if (senha1 !== senha){
        idSenha.current.classList.add("border-red-700")
        idSenhaC.current.classList.add("border-red-700")
        
        return toast.info("Senha n correspondem")
    } 

}



    return <>
  

        <div  className="bg-[url('/public/img/fundo_login.jpg')] bg-cover bg-center md:h-[900px] h-[100vh] flex justify-center relative font-boa2">
        { Spin ?
         <div id="card" className="bg-transparent md:h-[160vh] h-[100vh] w-full absolute z-10 backdrop-blur-sm justify-center flex ">
            <div className="w-[100px] h-[100px] border-[10px] relative md:top-[250px] top-[400px] rounded-full border-t-transparent animate-spin"></div>
         </div>
         :
           ValidadeToken ? 
         <div>
                <div id="INFOR" className="text-white flex flex-col justify-center items-center relative md:top-[130px] top-[300px] gap-10 rounded-3xl border-[1px] md:p-6 p-3 backdrop-blur-md md:h-[300px] w-[400px] md:w-[600px] tracking-[3px]">
                    <p className="text-[30px]">TOKEN INVALIDO!</p>
                    <p className="text-center">Clique no botão abaixo para gerar um novo token e continuar.</p>
                    <div className="border-[2px] md:p-6 p-3 rounded-2xl hover:cursor-pointer hover:bg-green-600 hover:text-black duration-700"><Link to='/EsqueceuSenha'>Click Aqui</Link></div>
                </div>

            </div>
            :
            <div className="flex-col flex text-white mt-[50px] items-center gap-7">
                <div>
                         <div className="md:text-[40px] md:tracking-[5px] text-wrap text-[20px]"><p>Alterar senha para {nome}</p></div>

                </div>
                <div className="border md:w-[300px] w-[250px] md:h-[450px] h-[510px] rounded-3xl flex flex-col md:justify-center justify-center items-center md:gap-9 gap-[90px] backdrop-blur-sm tracking-[1px] p-5">
                    <form onSubmit={Enviar} className="md:flex md:flex-col md:gap-4 md:tracking-[5px] md:justify-center md:items-center">
                        <label htmlFor="" className="p-2">NOVA SENHA</label>
                        <input ref={idSenha} onClick={(e) => {idSenha.current.classList.remove("border-red-700")}} onChange={(e) => {setsenha(e.target.value)}} type="password"  className="  bg-transparent border  rounded-[20px] w-[200px] h-7 text-center text-white p-5"/>
                        <label htmlFor="" className="p-2">CONFIRME SENHA:</label>
                        <input ref={idSenhaC} onChange={(e) => {setsenha1(e.target.value)}} onClick={(e) => {idSenhaC.current.classList.remove("border-red-700")}} type="password" className="bg-transparent border rounded-[20px] w-[200px] h-7 text-center text-white p-5"/>
                        <input type="submit" value="Enviar" className="border relative w-[200px] rounded-[20px] mt-3 p-2 hover:cursor-pointer hover:bg-green-500 duration-500" />

                    </form>
                    <h2 className="flex justify-center items-center">Certifique-se de que tenha pelo menos 15 caracteres OU pelo menos 8 caracteres, incluindo um número e uma letra minúscula </h2>
                </div>
                
            </div>
}
        </div>

        <ToastContainer></ToastContainer>
    </>

}
export default ResertSenha