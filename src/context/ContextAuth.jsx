import { Children, createContext, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode"
import api from "../service/api";


const Contextapp = createContext()

const ProviderApp = ({children}) => {

  const [isLogado, setlogado] = useState(false)
  const [usuario, setusuario] = useState(null)
    useEffect(() =>{
      if(localStorage.getItem("token")){
        setlogado(true)
      }
    }, [])

    async function autenticacao(dados){

        
        
      try{
        const resposta = await api.post("/Loginbd", dados)
        console.log(resposta);
        
        const token = resposta.data.token
        localStorage.setItem("token", token)
        setlogado(localStorage.getItem("token"))
        return(resposta)
        
      } catch(erro) {
        console.log(erro);
        
        return false
      }
  
    }


    return (
    <Contextapp.Provider value={{usuario, autenticacao,isLogado,setlogado}}>
        {children}
    </Contextapp.Provider>
    )



}

export  {Contextapp, ProviderApp}


