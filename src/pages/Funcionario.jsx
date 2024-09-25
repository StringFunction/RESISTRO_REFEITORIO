import PaginaDesenvolviment from "./componentes/paginaOff";
import useAppContext from "../hooks/UseAppContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../service/api";


 function Funcionario() {
    const [funcionario, setfuncionario] = useState([])
    const [status,setstatus] = useState("Todos")
    const [Matricula_Nome,setMatricua_Nome] = useState("")
    const [Emrpesa,setEmpresa] = useState("Todos")
 ;
    const filtrar = () => {
      
        
        return funcionario.filter((e) => {
          const matchesMatriculaNome = e.matricula.includes(Matricula_Nome) || e.nome.toLowerCase().includes(Matricula_Nome.toLowerCase());
          const matchesEmpresa = Emrpesa === 'Todos' || e.empresa === Emrpesa
          const matchesStatus = status === 'Todos' || e.status === status
          return matchesMatriculaNome && matchesEmpresa && matchesStatus;
        });
      };


    useEffect(()=>{
        async function consulta(){
                
                
                try{
                    
                        const resposta = await api.get("/v1/funcionario" ,  {
                            headers: {
                                ["x-access-token"]:  `${localStorage.getItem("token")}` // Passa o token no header Authorization
                               }
                        })
                        setfuncionario(resposta.data)
                      
                        
                      
                    }catch(erro){
                            console.log("erro ao tenta");
                
                        }
                    }
                    consulta()
                
                },[])
    
   


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

                    <div className="overflow-scroll bg-cardB gap-5 md:w-f md:h-[350px] md:p-0 md:rounded-md shadow-2xl shadow-black text-red-50 flex flex-col
                    h-[250px] w-[400px] mt-6">
                <table className=" md:w-full rounded-t-md  text-center text-white w-auto text-xs h-56 ">
                    <thead className="text-white bg-teal-500 rounded-t-md h-16 sticky top-0 p-12 md:w-auto">
                <tr>
                    <th>MATRICULA</th>
                    <th>NOME</th>
                    <th>SETOR</th>
                    <th>CARGO</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
            {
              
                
              filtrar().map((e, index) => (
                <tr key={index}  className={e.status !== 'ativo' ? 'text-red-700 text-[20px]' : "text-[20px] mb-5 "}>
                  <td>{e.matricula}</td>
                  <td>{e.nome}</td>
                  <td>{e.setor}</td>
                  <td>{e.cargo}</td>
                  <td>{e.status}</td>
                </tr>
              ))
            }
                

            </tbody>
            </table>
                        


                    </div>

                </div>
            </>
        );
    

    // Caso contrário, retorna null até que o useEffect redirecione para a página de login
    
}

export default Funcionario;
