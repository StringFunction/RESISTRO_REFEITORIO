
import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAppContext from "../hooks/UseAppContext";
import { Navigate, useNavigate } from "react-router-dom";
import logo_carmais from "/img/carmais-logo.png"


function Login(){
const [matricula , setmatricula] = useState("")
const [senha , setsenha] = useState("")
const [is , setis] = useState(false)
const { autenticacao, isLogado } = useAppContext()
const navigate = useNavigate()
const [spin , setspin] = useState(false)
const entrar = async (e) =>{
    e.preventDefault()
    setis(false)

    if (![...e.target.querySelectorAll('input')].every(input => input.value)) {

        e.target.querySelectorAll('input').forEach(input => {
            if (!input.value) {
                input.classList.add("border-red-800");
            }
        });
    
        toast.warning("Preencha os Campos");
        return 
    }
    // console.log(dados);


    
    const dados = { matricula,senha }
   
    setspin(true)
    const response = await autenticacao(dados)
 
    
    setspin(false)
    e.target.matricula.value = ""
    e.target.senha.value = ""
    
   
    
    if (response == "AxiosError: Network Error"){

       toast.error("ERRO SERVIDOR")
          
    }
    if (response) {
        navigate("/")
        
    
        
    }else{
        toast.error("Usuario ou Senha incorreta ")
        
    }
    
    
    
}
 ;
    
    if (isLogado) return <Navigate to="/Home"></Navigate> 

    return (
      
        <div className="w-full  flex justify-center items-center bg-[url('/public/img/fundo_login.jpg')] bg-cover bg-center h-[900px] ">
            
            <div className="md:w-[780px] md:bg-transparent text-white md:p-0 md:h-[450px] md:flex md:justify-center md:flex-row md:items-center md:gap-20 md:relative  md:-top-20 md:rounded-3xl shadow-[0px_14px_28px_rgba(0,0,0,0.25),0px_10px_10px_rgba(0,0,0,0.22)] md:shadow-black md:backdrop-blur-sm	
            flex flex-col justify-center items-center w-[400px] rounded-t-3xl gap-5 p-6 -mt-12 h-[700px]
            "> 
                <div className="md:w-[50%] md:h-full   md:relative md:top-1 md:bg-black md:flex md:justify-center md:items-center">
                    <div className="md:w-48 md:h-48 md:border-solid md:border md:border-white md:rounded-full md:flex md:justify-center md:items-center">

                    <BsFillPersonFill className="text-[150px] md:text-white md:border-none md:p-0 border rounded-full p-5"></BsFillPersonFill>

                    </div>
                </div>

                <div id="FORMULARIO" className="flex  flex-col justify-center items-center gap-2  md:h-[450px]">
                    <div>
                        <img src={logo_carmais} alt="logo-empresa" className="w-[400px]" />
                    </div>
                    <form onSubmit={entrar} className="flex flex-col tracking-widest 	">
                        <label htmlFor="">Matricula</label>
                        <input type="number" disabled={is} onChange={(e) => {if(e.target.value.length == 6){setmatricula(e.target.value)
                            setis(true)}}} onClick={(e) => e.target.classList.remove('border-red-800')} name="matricula"className="border-solid border  bg-transparent    h-10 w-[250px] rounded-2xl mt-4 text-center" placeholder="Digite Matricula" max="999999"/>
                        <label htmlFor="" className="mt-1">Senha :</label>
                        <input type="password" name="senha" onChange={(e) => {setsenha(e.target.value)}} onClick={(e) => e.target.classList.remove('border-red-800')} className="border-solid border  bg-transparent  h-10 w-[250px] rounded-2xl mt-4 text-center" placeholder="Digite Senha"/>
                        {spin ?
                       <div className="p-5  gap-4 absolute mt-[160px] flex  justify-center items-center">
                        <div className=" animate-spin p-4 h-10 w-10 border-solid  border-4 rounded-full border-t-transparent"></div>
                        <p>Carregando...</p>
                       </div>
                       :
                         <input type="submit" className="mt-10 border p-4    rounded-2xl text-lg cursor-pointer hover:bg-green-400 hover:text-black duration-200 " value="Entra"/> 
                        }
                    </form>
                    
                </div>
            </div>
            
            <ToastContainer></ToastContainer>
        </div>
       
    )
}

export default Login
