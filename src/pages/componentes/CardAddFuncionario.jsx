import React from "react"
import { IoMdCloseCircleOutline } from "react-icons/io";
const CardAddFuncionario = document.getElementById("CardAddFuncionari")
function AddFuncionario({fechar}){

    function FecharCard(params) {
        if (params.target == CardAddFuncionario) {
            console.log("ola mundo");
            
            
       
          
 
        }
       
        console.log(CardAddFuncionario);
        
        
    }
    const ListaEmpresa = ["NOSSAMOTO CAUCAIA","NOSSAMOTO SIQUIERA","NOSSAMOTO BUTURITE","NOSSAMOTO MATRIZ", "NOVALUZ SD","NOVALUZ WS",'NOVALUZ SUL',"NOVALUZ BS","JANGADA AUTOMOTIVE","JANGADA VEICULOS","VOUGA","CDA"]
    return(
        <>
            <div id="CardAddFuncionari" onClick={(e) => {FecharCard(e)}} className="w-[100%] flex justify-center bg-transparent backdrop-blur-md  bg-black absolute z-10 h-[600px]">
                <div className="shadow-2xl shadow-blue-500/20 text-white  relative md:w-[450px] md:h-[470px] bg-cardB z-10  md:p-5 md:pt-6 md:top-[40px] rounded-2xl flex flex-col p-5">
                    <div id="Fechar-card" className=" flex  justify-end z-20 text-[30px] hover:cursor-pointer" > <IoMdCloseCircleOutline onClick={() => fechar(false)
                    }></IoMdCloseCircleOutline> </div>
                    <div id="titutlo" className="flex justify-center text-[20px] font-bold uppercase"><p>Cadastro de Funcionario Refeitorio</p></div>

                    <div id="FormularioCadastro">
                        <form action="" className="flex flex-col gap-2  md:items-center md:justify-center">
                            <label htmlFor="">Matricula : </label>
                            <input className="border-b-2  bg-transparent" type="text"/>
                            <label htmlFor="">Nome : </label>
                            <input className="border-b-2  bg-transparent" type="text" />
                            <label htmlFor="">Empresa : </label>
                            <select name="" id="" className="border-b-2  bg-transparent  text-white">
                                {ListaEmpresa.map((Empresa, index) => {return <option className="text-black " value={Empresa} key={index}>{Empresa}</option>})}
                            </select>
                            <label htmlFor="Cargo : ">Cargo : </label>
                            <input className="border-b-2  bg-transparent" type="text" />
                            <label htmlFor="">Optante pelo refeitorio : </label>
                            <select name="" id="" className="border-b-2 bg-transparent list-none w-[180px]">
                                <option value="Sim" className=" text-black ">SIM</option>
                                <option value="NAO" className=" text-black">Nao</option>
                            </select>
                            <input type="submit" value="Cadastra"  className="bg-green-700  rounded-2xl w-24 h-10 self-center"/>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )

}

export default AddFuncionario