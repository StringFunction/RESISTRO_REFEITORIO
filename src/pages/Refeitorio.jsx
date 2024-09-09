import { useState } from "react"
import CardFun from "./componentes/CardFuncionario"
import Styles from "../layout/Conteiner"
import Table from "./componentes/table"
function Refeitorio() {


 
    

    return (
        <>
        <div className="bg-fundoF flex h-auto justify-center items-center flex-col "> 
            
            <div className=" bg-cardB gap-5 md:w-f md:h-[350px] md:rounded-md	md:p-16  md:mt-16 shadow-2xl shadow-black text-red-50 flex justify-center items-center flex-col
            h-auto w-[400px] p-10 mt-6
            ">
                <h1 className="text-4xl">Matricula </h1>
                <div className="flex flex-col justify-center items-center gap-8">
                <input type="number" className="bg-transparent border-solid border-2 border-indigo-60 w-80 h-10 text-center rounded-lg

" max="6"/>
                <button className="w-36  h-10 bg-green-700 rounded-3xl" >Consulta </button>
                </div>            
            </div>
            <Table></Table>
        </div>
        
        
        </>

    )
}

export default Refeitorio