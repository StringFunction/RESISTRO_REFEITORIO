import { useEffect, useState } from "react"
import api from "../../service/api"

function table({mt}){
    const [passagens, setpassagnes] = useState("")
    const [isLodinng, setLoding] = useState(false)

    console.log("matricula do safado" + passagens);
    
   async function FINALIZAR(){
    setLoding(true)
    try {
      const resposta = await api.delete("/v1/passagem/Registro", {
        headers: {
         ["x-access-token"]:  `${localStorage.getItem("token")}` // Passa o token no header Authorization
        }
      });
      setpassagnes(resposta.data)
      setpassagnes("")
    } catch (error) {
      console.error(error);
    }
    setLoding(false)

    }

    useEffect(() => {
        async function dados(){
          console.log("boiiiiiiiiiiiii");
          
            try {
                const resposta = await api.get("/v1/passagem/Registro", {
                  headers: {
                   ["x-access-token"]:  `${localStorage.getItem("token")}` // Passa o token no header Authorization
                  }
                });
                setpassagnes(resposta.data)
                console.log("conde do forro maquina" + passagens);
                
              } catch (error) {
                console.error(error);
              }
        }
      dados()
    },[mt])
    console.log(passagens);
    
    return (
        <>
        
        <div className="w-full p-14 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <p className="text-5xl text-cyan-500">Historicos de Registro</p>
                <p className="text-white">Aqui você irá visualizar as suas últimas solicitações registradas no sistema</p>
            </div>

        <div className="overflow-auto md:h-40 md:w-full rounded-t-md w-full h-40 flex justify-center shadow-2xl shadow-black

    ">
      {passagens.length > 0  ?
        <table className=" md:w-full rounded-t-md  text-center text-white w-auto text-xs ">
            <thead className="text-white bg-teal-500 rounded-t-md h-16 sticky top-0 p-12 md:w-auto">
                <tr>
                    <th>MATRICULA</th>
                    <th>NOME</th>
                    <th>SETOR</th>
                    <th>CARGO</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody className="md:text-[20px]">
            {!!passagens && 
      passagens.map((e, index) => (
        <tr key={index}>
          <td>{e.matricula}</td>
          <td>{e.nome}</td>
          <td>{e.setor}</td>
          <td>{e.cargo}</td>
          <td>{e.status}</td>
        </tr>
      ))
    }
            
            </tbody>
        </table>
        : <h1>Sem dados ....</h1>

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