import { useState } from "react"
import CardFun from "./componentes/CardFuncionario"
import Styles from "../layout/Conteiner"
import Table from "./componentes/table"
function Refeitorio() {
const [matricula, setMatricula] = useState("")
const [resultado, setS] = useState("")
const dados = [
    {"matricula" : "123", "nome" : "clecio"},
    {"matricula" : "456", "nome" : "silva"},
    {"matricula" : "789", "nome" : "lima"},
    
]

 
    

    return (
        <>
        <div className="bg-fundoF flex h-q justify-center items-center flex-col"> 
            <div className=" bg-cardB gap-5 w-f h-96 rounded-md	mt-12 shadow-2xl shadow-black text-red-50 flex justify-center items-center flex-col">
                <h1 className="text-4xl">Matricula </h1>
                <div className="flex flex-col justify-center items-center gap-8">
                <input type="text" className="bg-transparent border-solid border-2 border-indigo-60 w-80 h-10 text-center"/>
                <button className="w-36  h-10 bg-green-700" >Consulta </button>
                </div>            
            </div>
            <Table></Table>
        </div>
        
        
        </>
    )
}

export default Refeitorio