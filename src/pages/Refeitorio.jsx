import { useEffect, useState } from "react"
import CardFun from "./componentes/CardFuncionario"
import Styles from "../layout/Conteiner"
import Table from "./componentes/table"

import api from "../service/api";
import { ToastContainer, toast } from 'react-toastify';

function Refeitorio() {





    const [matricula, setmatricula] = useState("")

    async function btnConsulta() {
        try{
            const resposta = await api.get("/v2/funcionario/user/" + matricula, {
                headers: {
                 ["x-access-token"]:  `${localStorage.getItem("token")}` // Passa o token no header Authorization
                }
                
              });
              if(!!resposta.data){
                console.log("passei");
                    console.log("pois toma esse token" + localStorage.getItem("token"));
                    
                  const registraPassagem = await api.post("/v1/passagem/Registro", resposta.data, {
                headers: {
                 ["x-access-token"]:  `${localStorage.getItem("token")}` // Passa o token no header Authorization
                }

              })
              if(registraPassagem.status == 200){
                toast.info("Funcionario Registrado")
              
              }
              }
              
        }catch(erro){
            if(erro.status == 404) {
                toast.error("FUNCIONARIO NAO ENCONTRADO")
            }
            if(erro.status == 302){
                toast.info("Funcionario ja comeu")
            }
        }


    }





    return (
        <>
            <div className="bg-fundoF flex h-auto justify-center items-center flex-col ">

                <div className=" bg-cardB gap-5 md:w-f md:h-[350px] md:rounded-md	md:p-16  md:mt-16 shadow-2xl shadow-black text-red-50 flex justify-center items-center flex-col
            h-auto w-[400px] p-10 mt-6
            ">
                    <h1 className="text-4xl">Matricula</h1>
                    <div className="flex flex-col justify-center items-center gap-8">
                        <input type="number" onChange={(e) => setmatricula(e.target.value)} className="bg-transparent border-solid border-2 border-indigo-60 w-80 h-10 text-center rounded-lg

" max="6" />
                        <button onClick={btnConsulta} className="w-36  h-10 bg-green-700 rounded-3xl" >Consulta </button>
                    </div>
                </div>
                <Table matricula={matricula}></Table>
            </div>
        <ToastContainer></ToastContainer>

        </>

    )

}

export default Refeitorio