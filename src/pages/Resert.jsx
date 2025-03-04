import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useFetcher, useParams } from "react-router-dom";

import { GoPasskeyFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../service/api";


function ResertSenha(){
    const {token} = useParams()
    console.log(token);
    
    return <>
        <div  className="bg-[url('/public/img/fundo_login.jpg')] bg-cover bg-center h-[900px] flex justify-center relative font-boa2">
            <div className="flex-col flex text-white mt-[50px] items-center gap-7">
                <div>
                         <div className="text-[40px] tracking-[5px]"><p>Alterar senha para</p></div>

                </div>
                <div className="border w-[300px] h-[400px] rounded-3xl flex flex-col justify-center items-center gap-9 backdrop-blur-sm tracking-[1px] p-5">
                    <form action="" className="flex flex-col gap-4 tracking-[5px]">
                        <label htmlFor="">Senha</label>
                        <input type="password" className=" bg-transparent border rounded-[20px] w-[200px] h-7 text-white p-4"/>
                        <label htmlFor="">Confirme sua senha</label>
                        <input type="password" className="bg-transparent border rounded-[20px] w-[200px] h-7 text-white p-4"/>
                        <input type="submit" value="Enviar" className="border relative  rounded-[20px] mt-3 p-2 hover:cursor-pointer hover:bg-green-500 duration-500" />

                    </form>
                    <h2 className="flex justify-center items-center">Certifique-se de que tenha pelo menos 15 caracteres OU pelo menos 8 caracteres, incluindo um número e uma letra minúscula </h2>
                </div>
                
            </div>
        </div>
    </>

}
export default ResertSenha