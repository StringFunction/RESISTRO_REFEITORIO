
import { useEffect, useState } from "react";
import useAppContext from "../hooks/UseAppContext";
import { BsFillPersonFill, BsArrowClockwise } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import AddFuncionario from "./componentes/CardAddFuncionario";
import 'react-toastify/dist/ReactToastify.css';
import BtnConfirma from "./componentes/btnConfirma";




import api from "../service/api";



function Funcionario() {
    const [funcionario, setfuncionario] = useState([])
    const [status, setstatus] = useState("Todos")
    const [Matricula_Nome, setMatricua_Nome] = useState("")
    const [Emrpesa, setEmpresa] = useState("Todos")
    const [DadosAtualiza, setAt] = useState({nome: "",matricula: ""})
    const [IdUsuario, setIdUsuario] = useState(null)
    const [AAtualizaStatus, setAtualizaStatus] = useState("")
    const [isSpin, setSpin] = useState(false)
    const CardFuncionario = document.getElementById("CardFuncionario")
    const { deslogar } = useAppContext()
    const [atualizaTabela, setAtualizaTabela] = useState(false)
    const { nivel } = useAppContext()
    const [OpenCardFuncionario, setOpenCardFuncionario] = useState(false)
    const [OpenCardConfirmacao, setOpenCardConfirmacao] = useState(false)

   
    useEffect(() => {
        setSpin(true)
        async function consulta() {
            try {
                console.log("Requisao de chamada de funcionarios ");

                const resposta = await api.get("/v2/funcionario", {
                    headers: {
                        ["x-access-token"]: `${localStorage.getItem("token")}` // Passa o token no header Authorization
                    }
                })
                console.log(resposta)
                setfuncionario(resposta.data)
                setAtualizaTabela(false)
                setSpin(false)
            } catch (erro) {
                if (erro.status == 498) {
                    alert("Sessao Expirada")
                    deslogar()
                    return
                }
            }
        }
        consulta()

    }, [atualizaTabela])
    console.log("conde do pagina funcionario" + DadosAtualiza.matricula);

    function btnAtualizar(id) {
        const infor = funcionario[id];
        setIdUsuario(id)
        setAt(infor)
        CardFuncionario.classList.remove("hidden")

        CardFuncionario.classList.add("flex")
    }
    function closeCard() {
        console.log("ola mundo");
        console.log(CardFuncionario);
        
        CardFuncionario.classList.remove("flex")
        CardFuncionario.classList.add("hidden")

    }
    const filtrar = () => {
        console.log("resultado do status  " + status);
        
        return funcionario.filter((e) => {
            const matchesMatriculaNome = e.matricula.toString().includes(Matricula_Nome) || e.nome.toLowerCase().includes(Matricula_Nome.toLowerCase());
            const matchesEmpresa = Emrpesa === 'Todos' || e.empresa.toString().includes(Emrpesa)
            const matchesStatus = status === 'Todos' || e.Optante.toString().includes(status)
            return matchesMatriculaNome && matchesEmpresa && matchesStatus;
        });
    };

    console.log(filtrar());
    
    async function atualizaStatus(e) {
        e.preventDefault()
        if (!AAtualizaStatus) return toast.info("Preencha os campo")
        const dados = {
            matricula: DadosAtualiza.matricula,
            Optante: AAtualizaStatus

        }
        console.log();

        try {
            setSpin(true);
            console.log("REQUISAO DE ATUALIZACAO");
        
            const resultado = await api.put(
                "/v2/funcionario", 
                 dados , // O corpo da requisição (data)
                { // As opções, incluindo headers
                    headers: {
                        "x-access-token": `${localStorage.getItem("token")}` // Passa o token no header
                    }
                }
            );
        
            if (resultado.status === 200) {
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
    async function ExcluirUsuario(matricula) {
        try {
            console.log(matricula);
            console.log(funcionario);
            
            
            setSpin(true)
            // const MatriculadaPesta = await funcionario[matricula].matricula;
            // console.log(MatriculadaPesta)
            const resposta = await api.delete("/v2/funcionario", {
                headers: { ["x-access-token"]: `${localStorage.getItem("token")}` }, data: {
                    matricula: matricula
                }
            })

            if (resposta.status == 200) {
                toast.success("Funcionario Excluido")
                setAtualizaTabela(true)
            }

        } catch (erro) {
            console.log(erro);

        }finally{
            setOpenCardConfirmacao(false)
            setSpin(false)
        }

    }
    function optante(params) {
        if(params == true){
          return ""
        } else if (params == "frequentador"){
          return "text-yellow-500"
        } else{
          return "text-red-400"
        }
        
      }
      function statuss(params) {
        if (params == true) {
          return "Sim"
  
          
        }else if(params == "frequentador"){
          return "frequentador"
        
      } else{
          return "Nao"
        }
    }
    
    // Renderiza a página se o usuário estiver logado
    
    return (
        <>

            <div className="bg-fundoF flex h-[700px] justify-center items-center flex-col pt-9">

                <div id="Pesquisa" className=" md:w-[900px] flex-wrap md:h-[110px] md:flex md:flex-row gap-3 p-5 md:justify-center md:items-center md:-mt-11 tracking-[1px] flex-col w-[400px] rounded-2xl shadow-2xl shadow-black" >
                    <label className="text-[17px] text-white md:h-11 flex items-end" htmlFor="Matricula">Matricula ou Nome</label>
                    <input type="text" placeholder="matricula ou nome" onChange={(e) => setMatricua_Nome(e.target.value)} className="md:h-[40px]  text-center bg-transparent border-b-[1px] text-white " />
                    <label className="text-[20px] text-white md:h-11 flex items-end" htmlFor="">Empresa</label>
                    <select name="" id="" value={Emrpesa} onChange={(e) => setEmpresa(e.target.value)} className="md:h-[40px] bg-transparent border-b-[1px] text-white text-center">
                        <option className="text-black" value="Todos">Todos</option>
                        {funcionario.map((e, index)=> <option className="text-black" key={index} value={e.empresa}>{e.empresa}</option>)}
                        {/* <option className="text-black" value="CDA">CDA</option>
                        <option className="text-black" value="VOUGA">VOUGA</option>
                        <option className="text-black" value="NOSSCAUCAIA">NOSSAMOTO CAUCAIA</option>
                        <option className="text-black" value="NOSSSIQUEIRA">NOSSAMOTO SIQUEIRA</option>
                        <option className="text-black" value="NOSSMATRIZ">NOSSOMOTO MATRIZ</option>
                        <option className="text-black" value="NOSSBATURITE">NOSSOMOTO BATURITE</option> */}
                    </select>
                    <label className="text-[20px] text-white md:h-11 flex items-end" htmlFor="">s</label>
                    <select name="Status" id="" value={status} onChange={(e) => setstatus(e.target.value)} className="md:h-[40px] bg-transparent border-b-[1px] text-center text-white">
                        <option className="text-black" value="Todos">Todos</option>
                        <option className="text-black" value="true">Ativo</option>
                        <option className="text-black" value="frequentado">Frequentador</option>
                        <option className="text-black" value="False">Nao Ativo</option>
                    </select>

                </div>
                {OpenCardFuncionario && <AddFuncionario fechar={setOpenCardFuncionario} atualiza={setAtualizaTabela}></AddFuncionario>}
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
                        <p>Empresa : maquina do sucesso</p>
                    </div>
                    <div className="">
                        <form action="" onSubmit={atualizaStatus} className="flex flex-col gap-2 ">
                            <label htmlFor="opt">Optante pelo Refeitorio</label>
                            <select name="" id="" onChange={(e) => setAtualizaStatus(e.target.value)} value={AAtualizaStatus} className="bg-transparent border-b-2 ">
                                <option value="true" className="text-black">Sim</option>
                                <option value="frequentado" className="text-black">Frequentador</option>
                                <option value="false" className="text-black">Nao</option>
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
                                    <th>Optante</th>
                                    <th colSpan="2">OPCOES</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {

                                filtrar().map((e, index) => (
                                    <tr key={index} className={optante(e.Optante)}>
                                        <td>{e.matricula}</td>
                                        <td>{e.nome}</td>
                                        <th>{e.empresa}</th>
                                        <th>{e.setor}</th>
                                        <th>{e.cargo}</th>
                                        <td>{statuss(e.Optante)}</td>
                                        <th className="">
                                            <button onClick={() => btnAtualizar(index)} className="border p-4">Atualizar</button>
                                        </th>
                                        <th>
                                            <button onClick={() => setOpenCardConfirmacao({
                                                matricula : e.matricula,
                                                nome : e.nome,
                                                index : index

                                            })} className="border p-4" >Excluir</button>
                                        </th>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    }

                </div>
                <div className="flex  md:w-[900px] w-[400px] justify-end">
                    <button className="text-white   shadow-2xl w-[150px] h-[50px] rounded-2xl shadow-black md:hover:h-[100px] md:hover:w-[160px] duration-500" onClick={() => setOpenCardFuncionario(true)}>Adicionar <br />Funcionario</button>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );


    // Caso contrário, retorna null até que o useEffect redirecione para a página de login

}

export default Funcionario;
