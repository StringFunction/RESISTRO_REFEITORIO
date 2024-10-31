import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import useAppContext from "../hooks/UseAppContext";
import api from "../service/api";
import { BsArrowClockwise } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import AddUsurio from "./componentes/CardAddUsuario";

export default function Usuario(){
    const [DadosUsuario, setDadosUsuario] = useState([])

    const [Matricula_Nome, setMatricua_Nome] = useState("")
    const [Emrpesa, setEmpresa] = useState("Todos")
    const [DadosAtualiza, setAt] = useState({})
    const [IdUsuario, setIdUsuario] = useState(null)
    const [AAtualizaStatus, setAtualizaStatus] = useState("")
    const [isSpin, setSpin] = useState(false)
    const CardFuncionario = document.getElementById("CardFuncionario")
    const { deslogar } = useAppContext()
    const [atualizaTabela, setAtualizaTabela] = useState(false)
    const { nivel } = useAppContext()
    const [OpenCardUsuario, setOpenCardUsuario] = useState(false)
    const [OpenCardConfirmacao, setOpenCardConfirmacao] = useState(false)

    useEffect(() => {
       async function buscarDados() {
        try {
            setSpin(true)
            const resposta = await api.get("/v2/usuario", {
                headers: {
                    ["x-access-token"]: `${localStorage.getItem("token")}` // Passa o token no header Authorization
                }
            }
             )

            setDadosUsuario(resposta.data)

        } catch(erro){
            if (erro.status == 498) {
                alert("Sessao Expirada")
                deslogar()
                return
                
            }

        } finally{
            setAtualizaTabela(false)
            setSpin(false)
        }
        
        
       }
       buscarDados()

    },[atualizaTabela])
    const filtrar = () => {
        console.log("resultado do status  " + status);
        
        return DadosUsuario.filter((e) => {
            const matchesMatriculaNome = e.matricula.toString().includes(Matricula_Nome) || e.nome.toLowerCase().includes(Matricula_Nome.toLowerCase());
            const matchesEmpresa = Emrpesa === 'Todos' || e.empresa.toString().includes(Emrpesa)
            return matchesMatriculaNome && matchesEmpresa 
        });
    };

    function closeCard (){
         
        CardFuncionario.classList.remove("flex")
        CardFuncionario.classList.add("hidden")

    }
    function btnAtualizar(id) {
        const infor = DadosUsuario[id];
        setAt(infor)
        CardFuncionario.classList.remove("hidden")

        CardFuncionario.classList.add("flex")
    }
    async function atualizaStatus(e) {
        e.preventDefault()
        if (!AAtualizaStatus) return toast.info("Preencha os campo")
        const dados = {
            matricula: DadosAtualiza.matricula,
            nivel : AAtualizaStatus
          

        }
        console.log();

        try {
            setSpin(true);
            console.log("REQUISAO DE ATUALIZACAO");
        
            const resultado = await api.put(
                "/v2/usuario", 
                 dados , // O corpo da requisição (data)
                { // As opções, incluindo headers
                    headers: {
                        "x-access-token": `${localStorage.getItem("token")}` // Passa o token no header
                    }
                }
            );
        
            if (resultado.status === 201) {
                toast.success("Informação atualizada");
                CardFuncionario.classList.add("hidden");
                setAtualizaTabela(true);
                
                return;
            }
            
        } catch (erro) {
            console.error("Erro na requisição:", erro);
        } finally {
            setSpin(false);
        }

    }

    return (
        <>

            <div className="bg-fundoF flex h-[700px] justify-center items-center flex-col pt-9">

                <div id="Pesquisa" className="border md:w-[900px] flex-wrap md:h-[110px] md:flex md:flex-row gap-3 p-5 md:justify-center md:items-center md:-mt-11 tracking-[1px] flex-col w-[400px]" >
                    <label className="text-[17px] text-white md:h-11 flex items-end" htmlFor="Matricula">Matricula ou Nome</label>
                    <input type="text" placeholder="matricula ou nome" onChange={(e) => setMatricua_Nome(e.target.value)} className="md:h-[40px]  text-center bg-transparent border-b-[1px] text-white " />
                    <label className="text-[20px] text-white md:h-11 flex items-end" htmlFor="">Empresa</label>
                    <select name="" id="" value={Emrpesa} onChange={(e) => setEmpresa(e.target.value)} className="md:h-[40px] bg-transparent border-b-[1px] text-white text-center">
                        <option className="text-black" value="Todos">Todos</option>
                        {/* {funcionario.map((e, index)=> <option className="text-black" key={index} value={e.empresa}>{e.empresa}</option>)} */}
                        <option className="text-black" value="CDA">CDA</option>
                        <option className="text-black" value="VOUGA">VOUGA</option>
                        <option className="text-black" value="NOSSCAUCAIA">NOSSAMOTO CAUCAIA</option>
                        <option className="text-black" value="NOSSSIQUEIRA">NOSSAMOTO SIQUEIRA</option>
                        <option className="text-black" value="NOSSMATRIZ">NOSSOMOTO MATRIZ</option>
                        <option className="text-black" value="NOSSBATURITE">NOSSOMOTO BATURITE</option>
                    </select>
                
                    <button className="text-white  bg-green-700 shadow-2xl w-[100px] h-[40px] rounded-2xl" onClick={() => setOpenCardUsuario(true)}>Usuario</button>

          
                 
                   
                </div>
                {OpenCardUsuario && <AddUsurio fechar={setOpenCardUsuario} atualiza={setAtualizaTabela}></AddUsurio>}
                {!!OpenCardConfirmacao && <BtnConfirma fechar={setOpenCardConfirmacao} excluir={ExcluirUsuario} index={OpenCardConfirmacao}></BtnConfirma>}
                
                

                <div id="CardFuncionario" className="md:w-[450px] md:h-[450px] md:border md:p-5  md:-mt-[100px]  flex-col justify-center items-center gap-2 absolute z-10 bg-cardB md:text-white
                    text-white w-[300px] h-[400px] rounded-2xl duration-500 hidden
                    ">
                    <div className="md:flex text-[30px]  md:left-[190px] md:top-[0px]  relative left-[100px] top-3 z-[100px]" onClick={closeCard}><IoMdCloseCircleOutline className="hover:cursor-pointer"></IoMdCloseCircleOutline></div>
                    <div id="titulo card" className="text-center">Atualizacao</div>
                    <div className="border rounded-full  md:p-1"><BsFillPersonFill className="md:text-[100px] md:text-white md:border-none md:p-0 border rounded-full p-5 text-white text-[100px]"></BsFillPersonFill></div>
                    <div id="Indeticacao" className="flex flex-col justify-center items-center">
                        <p>Matricula : {DadosAtualiza.matricula} </p>
                        <p>Nome : {DadosAtualiza.nome} </p>
                        <p>Empresa : {DadosAtualiza.empresa}</p>
                    </div>
                    <div className="">
                        <form action="" onSubmit={atualizaStatus} className="flex flex-col gap-2 ">
                            <label htmlFor="opt">Nivel de Acesso</label>
                            <select name="" id="" onChange={(e) => setAtualizaStatus(e.target.value)} value={AAtualizaStatus} className="bg-transparent border-b-2 ">
                                <option value="1" className="text-black">NIVEL 1</option>
                                <option value="2" className="text-black">NIVEL 2</option>
                                <option value="3" className="text-black">NIVEL 3</option>
                            </select>
                            {isSpin ?

                                <div className="flex justify-center animate-spin">
                                    <BsArrowClockwise className="text-[40px]"></BsArrowClockwise>
                                </div> :
                                <input type="submit" value="Atualiza" className="border md:p-2 bg-green-600 rounded-2xl p-3" />
                            }
                        </form>
                    </div>
                </div>

                <div className="overflow-scroll bg-cardB gap-5 md:w-f md:h-[350px] md:p-0 md:rounded-md shadow-2xl shadow-black text-red-50 flex flex-col
                    h-[250px] w-[400px] mt-6 mb-5">

                    {!!isSpin ? <div className="flex justify-center items-center  h-96 animate-spin"><BsArrowClockwise className="text-[110px]" ></BsArrowClockwise></div> :
                        <table className=" md:w-full rounded-t-md  text-center text-white w-auto md:text-xs h-56 p-16 ">
                            <thead className="text-white bg-teal-500 rounded-t-md h-16 sticky top-0 p-12 md:w-auto">
                                <tr>
                                    <th>MATRICULA</th>
                                    <th>NOME</th>
                                    <th>EMPRESA</th>
                                    <th>SETOR</th>
                                    <th>CARGO</th>
                                    <th>NIVEL</th>
                                    <th colSpan="2">OPCOES</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {

                                filtrar().map((e, index) => (
                                    <tr key={index}>
                                        <td>{e.matricula}</td>
                                        <td>{e.nome}</td>
                                        <th>{e.empresa}</th>
                                        <th>{e.setor}</th>
                                        <th>{e.cargo}</th>
                                        <th>{e.nivel}</th>
                                   
                                        <th className="">
                                            <button  className="border p-4" onClick={() => btnAtualizar(index)}>Atualizar</button>
                                        </th>
                                        <th>
                                            <button  className="border p-4" >Excluir</button>
                                        </th>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    }

                </div>
              
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
}
