import React from "react";
import { useRef } from "react";



function btnConfirma({fechar,ExcluirUsuario,index}) {
    const Fundo = useRef(null)
    function Fechar(params) {
        if (params.target == Fundo.current){
            fechar(false)
            
        }
        
    }
    return (


        <>
        
        
        <div ref={Fundo} onClick={(e) => Fechar(e)} className="w-full h-[700px] bg-black/50 absolute flex justify-center items-center z-40 text-white">

        
            <div className="w-[300px] bg-slate-800 h-[150px] rounded-3xl flex flex-col justify-center items-center gap-3 relative -top-[90px]" >
                <p className="text-[20px]">Deseja Excluir Usuario</p>
                <div className="w-full flex justify-center gap-4">
                    <button className=" w-[100px] h-[40px] bg-green-800 rounded-2xl" >Não</button>
                    <button className=" w-[100px] h-[40px] bg-red-800 rounded-2xl">Sim</button>
                </div>
            </div>            
            
            
        </div>
        
        </>
    )
    
}



export default btnConfirma