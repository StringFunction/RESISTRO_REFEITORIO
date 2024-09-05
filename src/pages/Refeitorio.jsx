import { useState } from "react"
import CardFun from "./componentes/CardFuncionario"
function Refeitorio() {
const [matricula, setMatricula] = useState("")
const [resultado, setS] = useState("")
const dados = [
    {"matricula" : "123", "nome" : "clecio"},
    {"matricula" : "456", "nome" : "silva"},
    {"matricula" : "789", "nome" : "lima"},
    
]

function MOSTRA(){
 const resulta = dados.find(dado => dado.matricula == matricula)

 if (resulta){
     setS(JSON.stringify(resulta)) 
     console.log(resulta);
    
 }else{
    setS("USUARIO N ENCONTRADO ");
    
 }
    
    
}
    return (
        <>
        <div className="flex  flex-col gap-9 items-center justify-center bg-gray-300 h-96">

            <h1 className="text-5xl">CONDO DO FORRO </h1>   
            <div className="flex flex-col gap-9"> 
                <input className="w-96 text-center h-12 rounded-lg border-none	"  id="nome"type="text" onChange={(e) => setMatricula(e.target.value)} placeholder="DIGITE MATRICULA DO FUNCIONARIO" />
                <button className="border-solid bg-lime-600 h-12" type="button" onClick={MOSTRA}>Consulta</button>
                <CardFun user = {resultado}/>
              
            </div>
            <div>
            </div>
        </div>
        </>
    )
}

export default Refeitorio