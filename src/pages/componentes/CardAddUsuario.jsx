import React from "react"
import { useState, useRef } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import api from "../../service/api";
import {  toast } from "react-toastify";
import { BsArrowClockwise } from "react-icons/bs";


function AddUsurio({fechar,atualiza}){
    const [matriula,setmatricula] = useState("")
    const [nome,setNome] = useState("")
    const [empresa,setEmpresa] = useState("")
    const [setor,setSetor] = useState("")
    const [cargo,setCargo] = useState("")
    const [senha, setSenha] = useState("")
    const [nivel, setnivel] = useState("1")
    const CardAddFuncionarioRef = useRef(null)
    const [spin,setSpin] = useState(false)
    const CardAddFuncionario = document.getElementById("CardAddFuncionari")
    
    
    function FecharCard(params) {
        if (params.target === CardAddFuncionarioRef.current) {
            fechar(false)
        }  
    }
    async function cadastra(e){
        setSpin(true)
        e.preventDefault()
        const dados = {
            matricula : matriula,
            nome : nome,
            senha : senha,
            nivel : nivel,
            empresa : empresa,
            setor : setor,
            cargo : cargo,

        }
        console.log(dados);
        
        try{    
            const resultado = await api.post("/v2/usuario", dados, {
                headers: { "x-access-token": `${localStorage.getItem("token")}` }
            });
            console.log(resultado);
            
            if(resultado.status == 200){
                console.log("aqui dentro do resultado");
                
                toast.success("Usuario Cadastrado!!!!")
                atualiza(true)

            }
            

        }catch (erro){
            if(erro.status == 404){
                toast.info("Matricula ja cadastrada")
            }

        }finally {
            setSpin(false)
            
        }
        
    }
    
    const ListaEmpresa = ["NOSSAMOTO CAUCAIA","NOSSAMOTO SIQUIERA","NOSSAMOTO BUTURITE","NOSSAMOTO MATRIZ", "NOVALUZ SD","NOVALUZ WS",'NOVALUZ SUL',"NOVALUZ BS","JANGADA AUTOMOTIVE","JANGADA VEICULOS","VOUGA","CDA"]
    return(
        <>
            <div ref={CardAddFuncionarioRef} onClick={(e) => {FecharCard(e)}} className="w-[100%] flex justify-center bg-transparent backdrop-blur-md  bg-black absolute z-10 h-[600px]">
                <div className="shadow-2xl shadow-blue-500/20 text-white  relative md:w-[450px] md:h-[600px] bg-cardB z-10  md:p-5 md:pt-5 md:-top-[50px] rounded-2xl flex flex-col p-5">
                    <div id="Fechar-card" className=" flex  justify-end z-20 text-[30px] hover:cursor-pointer" > <IoMdCloseCircleOutline onClick={() => fechar(false)
                    }></IoMdCloseCircleOutline> </div>
                    <div id="titutlo" className="flex justify-center text-[20px] font-bold uppercase"><p>Cadastro de Usuario Sistema</p></div>

                    <div id="FormularioCadastro">
                        <form onSubmit={(e) => cadastra(e)} className="flex flex-col gap-2  md:items-center md:justify-center">
                            <label htmlFor="">Matricula : </label>
                            <input placeholder="Matricula :" className="border-b-2  bg-transparent" onChange={(e) => setmatricula(e.target.value)} type="text"/>
                            <label htmlFor="">Nome : </label>
                            <input placeholder="Nome :" className="border-b-2  bg-transparent"  onChange={(e) => setNome(e.target.value)} type="text" />
                            <label htmlFor="">Empresa : </label>
                            <select name="" id="" className="border-b-2  bg-transparent  text-white" value={empresa}  onChange={(e) => setEmpresa(e.target.value)}>
                                {ListaEmpresa.map((Empresa, index) => {return <option className="text-black " value={Empresa} key={index}>{Empresa}</option>})}
                            </select>
                            <label htmlFor="Cargo : ">Setor : </label>
                            <input placeholder="Setor :" className="border-b-2  bg-transparent" type="text"  onChange={(e) => setSetor(e.target.value)}/>
                            <label htmlFor="Cargo : ">Cargo : </label>
                            <input placeholder="Cargo :" className="border-b-2  bg-transparent" type="text"  onChange={(e) => setCargo(e.target.value)} />
                            <label htmlFor="Senha">Senha :</label>
                            <input placeholder="Senha :" type="text" className="border-b-2  bg-transparent" onChange={(e)=> {setSenha(e.target.value)}} />
                            <label htmlFor="">Nivel de Acesso : </label>
                            <select name="" id="" className="border-b-2 bg-transparent list-none w-[180px]" value={nivel}  onChange={(e) => setnivel(e.target.value)}>
                                <option value="1" className=" text-black ">Nivel 1</option>
                                <option value="2" className=" text-black">Nivel 2</option>
                                <option value="3" className=" text-black">Nivel 3</option>
                            </select>
                            {spin ? 
                             <div className="animate-spin"><BsArrowClockwise className="text-[40px]"></BsArrowClockwise></div>
                            : <input type="submit" value="Cadastra"  className="bg-green-700  rounded-2xl w-24 h-10 self-center"/>
                            }   
                        </form>
                    </div>
                </div>
            </div>
       

        </>
    )

}

export default AddUsurio