import React from "react";
import video from "./../assets/video.mp4";
import { useState } from "react";


export default function TelaCadFrequen() {
    const empresas = [
        "CONTERRANEA MACAIBA",
        "CONTERRANEA MATRIZ",
        "CONTERRANEA MOSSORO",
        "JANGADA AUTOMOTIVE",
        "JANGADA VEICULOS",
        "NISSAN FILIAL",
        "NISSAN MATRIZ",
        "NOSSAMOTO BATURITE",
        "NOSSAMOTO CAUCAIA",
        "NOSSAMOTO MATRIZ",
        "NOSSAMOTO SIQUEIRA",
        "NOVA LUZ BS",
        "NOVA LUZ SD",
        "NOVA LUZ SUL",
        "NOVA LUZ WS",
        "SANNAUTO",
        "TERRALUZ SOLIMONT",
        "VOUGA"
    ];
    
    
    const [matricula, setMatricula] = useState("")
    const [nome, setNome] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [setor, setSetor] = useState("")
    const [cargo, setCargo] = useState("")
    
    function CadastroF(params) {
        params.preventDefault()
        console.log("NOME : " + nome);
        console.log("MATRICULA : " + matricula);
        console.log("EMPRESA : " + empresa);
        console.log("SETOR : " + setor);
        console.log("CARGO : " + cargo);
      
        
        
    }


    return (
        <>
            <div id="TelaFundo" className="flex justify-center items-center ">
                <div className="">

                <video src={video} autoPlay muted loop className="relative  w-[1500px] h-[760px] object-cover"></video>
                </div>

                <div id="cardFundoBlack" className="md:w-[450px] md:h-[550px] bg-black/50 absolute flex flex-col justify-center items-center md:top-10 tracking-[4px] backdrop-blur-md


 rounded-2xl text-white h-[500px] top-32 ">
                <div id="tituto" className="md:text-[20px] relative md:-top-3 text-white uppercase text-center text-[15px] text-wrap w-[400px]">Cadastro Funcionario Frequentador</div>
                <div id="cardForm">
                    <form onSubmit={CadastroF} className="flex flex-col ">
                        <label className="text-white text-[20px] mb-2 " htmlFor="">Matricula : </label>
                        <input className="bg-transparent border-b-2  mb-2" onChange={(e) => setMatricula(e.target.value)} type="text" />

                        <label className="text-white text-[20px] mb-2 " htmlFor="">Nome : </label>
                        <input className="bg-transparent border-b-2  mb-2"onChange={(e) => setNome(e.target.value)} type="text" />

                        <label className="text-white text-[20px] mb-2 " htmlFor="">Empresa : </label>
                        <select name="" className="bg-transparent mb-3 border-b-2 text-[20px]"id="" onChange={(e) => setEmpresa(e.target.value)} value={empresa}>
                            {empresas.map((empresa,index) =><option value={empresa} key={index} className="text-black">{empresa}</option>)}
                           
                        </select>
                        <label className="text-white text-[20px] mb-2 " htmlFor="">Setor : </label>
                        <input className="bg-transparent border-b-2  mb-2" type="text" onChange={(e) => setSetor(e.target.value)} />
                        <label className="text-white text-[20px] mb-2 " htmlFor="">Cargo : </label> 
                        <input className="bg-transparent border-b-2  mb-2" type="text" onChange={(e) => setCargo(e.target.value)}/>
                        <input className="bg-transparent border-b-2  mb-2 p-2 hover:cursor-pointer hover:tracking-[8px] duration-500 " type="submit" value="Cadastrar" />
                    </form>
                </div>
                
                
                </div>
            </div>
        
        </>
    )
    
}