import React from 'react';

import { useEffect, useState } from "react"
import api from "../../service/api"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify"




function table({mt,setmt}){

  const [isLodinng, setLoding] = useState(false)
  const [passagens, setpassagnes] = useState([])
  const [isatualiza, setisatualiza] = useState(false)
  
  async function FINALIZAR(){
    setLoding(true)
    setisatualiza(true)
    try {
      const resposta = await api.post("/v2/passagem/finalizar", "mundo", {
        headers: {
         ["x-access-token"]:  `${localStorage.getItem("token")}` // Passa o token no header Authorization
        }
      });
      toast.success("Registro Finalizado")
      
      setpassagnes(resposta.data)
      console.log("vericando que tipo de respostem " + passagens);
      setpassagnes("")
    } catch (error) {
      if(error.status == 404) return toast.info("SEM REGISTRO")
    } finally{
      setLoding(false)
    setisatualiza(false)
  }
    
  

    }
    
    useEffect(() => {
        async function dados(){
          setisatualiza(true)
          
            try {
                const respostaa = await api.get("/v2/passagem", {
                  headers: {
                   ["x-access-token"]:  `${localStorage.getItem("token")}` 
                  }
                });
                setpassagnes(respostaa.data)
              } catch (error) {
                console.error(error);
              }
              setisatualiza(false)
              setmt("")
           
        }
        dados(); // Aguarda 6 segundos antes de executar

        // Limpeza para evitar problemas com múltiplos timeouts quando a dependência [tnc] muda
    
    },[mt])
  
    {
      console.log(passagens);
      
      // passagens.map((e,inedx) => {
      //   console.log(e.Funcionario);
        
      // })
    }
    
    return (
        <>
        
        <div className="w-full p-14 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <p className="text-5xl text-cyan-500">Historicos de Registro</p>
                <p className="text-white">Aqui você irá visualizar as suas últimas solicitações registradas no sistema</p>
            </div>

        <div className="overflow-auto md:h-40 md:w-full rounded-t-md w-full h-40 flex justify-center shadow-2xl shadow-black">
      {isatualiza ? <div className="w-[200px]  flex items-center justify-center">
        <div className="w-[100px] h-[100px] border-[5px] rounded-full border-t-transparent animate-spin"></div>
      </div> 
        
      :
   
      
      passagens.length > 0  ?
        <table className=" md:w-full rounded-t-md  text-center text-white w-auto text-xs ">
            <thead className="text-white bg-teal-500 rounded-t-md h-16 sticky top-0 p-12 md:w-auto">
                <tr>
                    <th>MATRICULA</th>
                    <th>NOME</th>
                    <th>EMPRESA</th>
                    <th>OPTANTE</th>
                </tr>
            </thead>
            <tbody className="md:text-[20px]">
            {
              passagens.map((e, index) => (
                <tr key={index}  className={e.Funcionario.Optante ? '' : "text-red-700"}>
                  <td>{e.Funcionario.matricula}</td>
                  <td>{e.Funcionario.nome}</td>
                  <td>{e.Funcionario.empresa}</td>
                  <td>{e.Funcionario.Optante ? "Sim" : "Nao"}</td>
                </tr>
              ))
            }
            
            </tbody>
        </table>
        : <h1 className="text-[30px] flex items-center text-white">Sem registro ....</h1>

}

        </div>
          
        {isLodinng ?         
                        <div className="w-36  h-10 flex justify-center items-center">
                            <div className="w-10 h-10 border-white border-[10px] rounded-full border-t-transparent animate-spin"></div>
                        </div>
                        :
                        <button onClick={FINALIZAR} className="w-36  h-10 bg-green-700 rounded-3xl" >Finalizar</button>
}
        </div>

        
        </>
    )
}

export default table