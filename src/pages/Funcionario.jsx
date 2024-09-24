import PaginaDesenvolviment from "./componentes/paginaOff";
import useAppContext from "../hooks/UseAppContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../service/api";


 function Funcionario() {
    const [funcionario, setfuncionario] = useState([])
    console.log(localStorage.getItem("token"));
    
    useEffect(()=>{
        async function consulta(){
                console.log("banco de teste");
                
                try{
                    
                        const resposta = await api.get("/v1/funcionario" ,  {
                            headers: {
                                ["x-access-token"]:  `${localStorage.getItem("token")}` // Passa o token no header Authorization
                               }
                        })
                        setfuncionario(resposta.data)
                        console.log(resposta);
                        
                      
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
                    <div id="Pesquisa" className="md:border md:w-[900px] md:h-[100px] md:flex md:flex-row md:gap-3 md:p-5 justify-center items-center tracking-[1px]" >
                        <label className="text-[15px] text-white" htmlFor="Matricula">Matricula ou Nome</label>
                        <input type="text" placeholder="matricula ou nome" className="md:h-[40px]  bg-transparent border-b-[1px] "/>
                        <label className="text-[20px] text-white" htmlFor="">Empresa</label>
                        <select name="" id="" className="md:h-[40px] bg-transparent border-b-[1px] text-white">
                            <option className="text-black" value="CDA">CDA</option>
                            <option className="text-black" value="VOUGA">VOUGA</option>
                            <option className="text-black" value="NOSSCAUCAIA">NOSSAMOTO CAUCAIA</option>
                            <option className="text-black" value="NOSSSIQUEIRA">NOSSAMOTO SIQUEIRA</option>
                            <option className="text-black" value="NOSSMATRIZ">NOSSOMOTO MATRIZ</option>
                            <option className="text-black" value="NOSSBATURITE">NOSSOMOTO BATURITE</option>
                        </select>
                        <label className="text-[20px] text-white" htmlFor="">Status</label>
                        <select name="Status" id="" className="md:h-[40px] bg-transparent border-b-[1px] text-white">
                            <option className="text-black" value="Ativo">Ativo</option>
                            <option className="text-black" value="Nao">Nao Ativo</option>
                        </select>
                        <button className="bg-green-600 p-2">Buscar</button>
                    </div>

                    <div className="overflow-auto bg-cardB gap-5 md:w-f md:h-[350px] md:p-0 md:rounded-md shadow-2xl shadow-black text-red-50 flex flex-col
                    h-auto w-[400px] p-10 mt-6">
                        <table className=" md:w-full rounded-t-md  text-center text-white w-auto text-xs ">
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
              
                
              funcionario.map((e, index) => (
                <tr key={index}  className={e.status !== 'ativo' ? 'text-red-700 text-[20px]' : "text-[20px]"}>
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
