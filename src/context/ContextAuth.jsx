import { Children, createContext, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode"
import { Navigate } from "react-router-dom";
import api from "../service/api";


const Contextapp = createContext()

const ProviderApp = ({children}) => {

  const [isLogado, setlogado] = useState(false)
  const [usuario, setusuario] = useState(null)
  const [matricula, setmatricula] = useState(null)
  const [nivel, setnivel] = useState(null)

    useEffect(() =>{
        const loadingStoreData = async () => {
            const StoreLocalToken = localStorage.getItem("token")
            if(!!StoreLocalToken){
              console.log("vamos ver se eu to aui");
              
              const tokenDecodicador = jwtDecode(StoreLocalToken)
              setmatricula(tokenDecodicador.matricula)
              setusuario(tokenDecodicador.nome)
              setnivel(tokenDecodicador.nivel)
              setlogado(true)
          
            }
        } 
    loadingStoreData()
    }, [])
   
    async function autenticacao(dados){
      try{
        const resposta = await api.post("/v1/Login", dados)
        
        
        const token = resposta.data.token
        localStorage.setItem("token", token)
        const tokenDecodicador = await jwtDecode(localStorage.getItem("token"))
        setmatricula(tokenDecodicador.matricula)
        setusuario(tokenDecodicador.nome)
        setlogado(true)
        return(resposta)
        
      } catch(erro) {
       if(erro.status == 404){
        return false
       }
  
    }
  }
    const deslogar = () =>{
      
        localStorage.removeItem("token")
        setlogado(false)
        console.log("Saindo do Sistema");
        window.location.reload();
    }

    return (
    <Contextapp.Provider value={{
        usuario, 
        matricula,
        autenticacao,
        isLogado,
        nivel,
        setlogado,
        deslogar}}>
        {children}
    </Contextapp.Provider>
    )



}

export  {Contextapp, ProviderApp}


