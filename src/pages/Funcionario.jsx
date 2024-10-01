
import { useEffect, useState } from "react";
import useAppContext from "../hooks/UseAppContext";
import { BsFillPersonFill, BsArrowClockwise } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";

import api from "../service/api";



 function Funcionario() {
    const [funcionario, setfuncionario] = useState([])
    const [status,setstatus] = useState("Todos")
    const [Matricula_Nome,setMatricua_Nome] = useState("")
    const [Emrpesa,setEmpresa] = useState("Todos")
    const [DadosAtualiza, setAt] = useState({
        nome : "",
        matricula : ""
    })
    const [isSpin, setSpin] = useState(false)
    const CardFuncionario = document.getElementById("CardFuncionario")
    const {deslogar} = useAppContext()
    useEffect(()=>{
        async function consulta(){
                try{    
                    setSpin(true)
                        const resposta = await api.get("/v1/funcionario" ,  {
                            headers: {
                                ["x-access-token"]:  `${localStorage.getItem("token")}` // Passa o token no header Authorization
                               }
                        })
                        setfuncionario(resposta.data) 
                    setSpin(false)   
                    }catch(erro){
                            if (erro.status == 498) {
                                alert("Sessao Expirada")
                                deslogar()
                                return 
                            }
                        }
                    }
                    consulta()
                   
                },[])
                console.log("conde " + DadosAtualiza.matricula);
 ;
    function btnAtualizar (id){
        const infor = funcionario[id];
        setAt(infor)
        CardFuncionario.classList.remove("hidden")
    }
    function closeCard() {

        CardFuncionario.classList.add("hidden") 
    }
    const filtrar = () => {
        return funcionario.filter((e) => {
          const matchesMatriculaNome = e.matricula.includes(Matricula_Nome) || e.nome.toLowerCase().includes(Matricula_Nome.toLowerCase());
          const matchesEmpresa = Emrpesa === 'Todos' || e.empresa === Emrpesa
          const matchesStatus = status === 'Todos' || e.status === status
          return matchesMatriculaNome && matchesEmpresa && matchesStatus;
        });
      };



    // Renderiza a página se o usuário estiver logado

        return (
            <>
                
                <div className="bg-fundoF flex h-[600px] justify-center items-center flex-col">

                    <div id="Pesquisa" className="border md:w-[900px] md:h-[100px] md:flex md:flex-row gap-3 p-5 md:justify-center md:items-center md:-mt-11 tracking-[1px] flex-col w-[400px] -mt-28" >
                        <label className="text-[17px] text-white md:h-11 flex items-end" htmlFor="Matricula">Matricula ou Nome</label>
                        <input type="text" placeholder="matricula ou nome" onChange={(e) => setMatricua_Nome(e.target.value)} className="md:h-[40px]  text-center bg-transparent border-b-[1px] text-white "/>
                        <label className="text-[20px] text-white md:h-11 flex items-end" htmlFor="">Empresa</label>
                        <select name="" id="" value={Emrpesa} onChange={(e) => setEmpresa(e.target.value)}className="md:h-[40px] bg-transparent border-b-[1px] text-white text-center">
                            <option className="text-black" value="Todos">Todos</option>
                            <option className="text-black" value="CDA">CDA</option>
                            <option className="text-black" value="VOUGA">VOUGA</option>
                            <option className="text-black" value="NOSSCAUCAIA">NOSSAMOTO CAUCAIA</option>
                            <option className="text-black" value="NOSSSIQUEIRA">NOSSAMOTO SIQUEIRA</option>
                            <option className="text-black" value="NOSSMATRIZ">NOSSOMOTO MATRIZ</option>
                            <option className="text-black" value="NOSSBATURITE">NOSSOMOTO BATURITE</option>
                        </select>
                        <label className="text-[20px] text-white md:h-11 flex items-end" htmlFor="">Status</label>
                        <select name="Status" id="" value={status} onChange={(e) => setstatus(e.target.value)} className="md:h-[40px] bg-transparent border-b-[1px] text-center text-white">
                            <option className="text-black" value="Todos">Todos</option>
                            <option className="text-black" value="Ativo">Ativo</option>
                            <option className="text-black" value="Nao">Nao Ativo</option>
                        </select>
                       
                    </div>

                    <div id="CardFuncionario" className="md:w-[450px] md:h-[450px] md:border md:p-5  md:-mt-[100px] flex flex-col justify-center items-center gap-2 absolute z-10 bg-cardB md:text-white
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
                            <form action="" className="flex flex-col gap-2 "> 
                                <label htmlFor="opt">Optante pelo Refeitorio</label>
                                <select name="" id="" className="bg-transparent border-b-2 ">
                                    <option value="Sim" className="text-black">Sim</option>
                                    <option value="Nao" className="text-black">Nao</option>
                                </select>
                                <input type="submit" value="Atualiza" className="border md:p-2 bg-green-600 rounded-2xl p-3"  />
                            </form>
                        </div>

                      

                        


                    </div>

                    <div className="overflow-scroll bg-cardB gap-5 md:w-f md:h-[350px] md:p-0 md:rounded-md shadow-2xl shadow-black text-red-50 flex flex-col
                    h-[250px] w-[400px] mt-6">

                {!!isSpin ? <div className="flex justify-center items-center  h-96 animate-spin"><BsArrowClockwise className="text-[110px]" ></BsArrowClockwise></div> :
                <table className=" md:w-full rounded-t-md  text-center text-white w-auto text-xs h-56 ">
                    <thead className="text-white bg-teal-500 rounded-t-md h-16 sticky top-0 p-12 md:w-auto">
                <tr>
                    <th>MATRICULA</th>
                    <th>NOME</th>
                    <th>EMPRESA</th>
                    <th>STATUS</th>
                    <th colSpan="2">OPCOES</th>
                </tr>
            </thead>
            <tbody className="">
            {
              
                
              filtrar().map((e, index) => (
                <tr key={index}  className={e.status !== 'ativo' ? 'text-red-700 md:text-[20px]' : "md:text-[20px]  "}>
                  <td>{e.matricula}</td>
                  <td>{e.nome}</td>
                  <td>{e.status}</td>
                  <th>ativo</th>
                  <th  className="flex md:items-center md:justify-center md:gap-2">
                    <button onClick={() => btnAtualizar(index)} className="border p-4">Atualizar</button>
                  </th>
                  <th>


                    <button onClick={console.log("ola mundo")} className="border p-4" >Excluir</button>
                  </th>
                  
                </tr>
              ))
            }
                

            </tbody>
            </table> 

}
                        


                    </div>

                </div>
            </>
        );
    

    // Caso contrário, retorna null até que o useEffect redirecione para a página de login
    
}

export default Funcionario;
