
import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import autenticacao from "../service/authService";



function Login(){
const [matricula , setmatricula] = useState("")
const [senha , setsenha] = useState("")
const [is , setis] = useState(false)
const entrar = async (e) =>{
    
    
    e.preventDefault()
    setis(false)

    if (!e.target.matricula.value || !e.target.senha.value){
        console.log();
        
        if (!e.target.matricula.value && !e.target.senha.value){
            console.log("aqui");
        //    e.target.querySelectorAll('input')[0].classList.add("md:border-red-800")
        //    e.target.querySelectorAll('input')[0].classList.add("md:border-red-800")
           
           e.target.querySelectorAll('input')[0].classList.add("border-red-800")
           e.target.querySelectorAll('input')[1].classList.add("border-red-800")
            toast.warning("CHUCHU MEGA ATOMICO NUCLEAR!")
        }
        return (console.log('ola mundo')
        )
    }
    // console.log(dados);

    e.target.matricula.value = ""
    e.target.senha.value = ""
    
    const dados = {
        matricula,
        senha
    }
    console.log(dados);
    
    const dado = await autenticacao(dados)
   
    
    if (dado){
        toast.info("deu bom")
        console.log(dado);
        
    }else{
        toast.error("Usuario ou Senha incorreta ")
    }
    
    
    
}
    return (
      
        <div className="w-full  flex justify-center items-center bg-[url('/public/img/fundo_login.jpg')] bg-cover bg-center h-[600px] ">
            <div className="md:w-[700px] md:bg-transparent text-white md:p-8 md:h-[400px] md:flex md:justify-center md:flex-row md:items-center md:gap-20 md:relative md:mt-4 md:-top-20 md:rounded-3xl md:shadow-[0px_14px_28px_rgba(0,0,0,0.25),0px_10px_10px_rgba(0,0,0,0.22)] md:shadow-black md:backdrop-blur-sm	border-white border
            flex flex-col justify-center items-center w-[400px] rounded-t-3xl gap-5 p-6 -mt-12
            "> 
                <div className="md:w-48 md:h-48 md:border-solid md:border md:border-white md:flex md:justify-center md:items-center md:rounded-full md:bg-transparent md:relative md:top-1">
                    <BsFillPersonFill className="text-[150px] md:text-white md:border-none md:p-0 border rounded-full p-5"></BsFillPersonFill>
                </div>

                <div className="flex  flex-col justify-center items-center gap-2">
                    <div>
                     <h1 className="md:text-[40px]">Login</h1>
                    </div>
                    <form onSubmit={entrar} className="flex flex-col tracking-widest 	">
                        <label htmlFor="">Matricula</label>
                        <input type="number" disabled={is} onChange={(e) => {if(e.target.value.length == 6){setmatricula(e.target.value)
                            setis(true)}}} onClick={(e) => e.target.classList.remove('border-red-800')} name="matricula"className="border-solid border  bg-transparent border-white m  h-10 w-[250px] rounded-2xl mt-4 text-center" placeholder="Digite Matricula" max="999999"/>
                        <label htmlFor="" className="mt-1">Senha :</label>
                        <input type="password" name="senha" onChange={(e) => {setsenha(e.target.value)}} onClick={(e) => e.target.classList.remove('border-red-800')} className="border-solid border  bg-transparent border-white h-10 w-[250px] rounded-2xl mt-4 text-center" placeholder="Digite Senha"/>
                        <input type="submit" className="mt-10 border p-4    rounded-2xl text-lg cursor-pointer hover:bg-green-400 hover:text-black duration-200 " value="Entra"/>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
       
    )
}

export default Login
