import { Children, createContext, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode"
import api from "../service/api";


const Contextapp = createContext()

const ProviderApp = ({children}) => {

  const [isLogado, setlogado] = useState(false)
  const [usuario, setusuario] = useState(null)
  const [matricula, setmatricula] = useState(null)
  const [nivel, setnivel] = useState(null)

    useEffect(() =>{
        const loadingStoreData = async () => {
            console.log("Verificando");
            
            const StoreLocalToken = await localStorage.getItem("token")
            const tokenDecodicador = await jwtDecode(localStorage.getItem("token"))
            setmatricula(tokenDecodicador.matricula)
            setusuario(tokenDecodicador.nome)

            if (StoreLocalToken) return setlogado(true)
        } 
    loadingStoreData()
    }, [])
   
    async function autenticacao(dados){

        
        
      try{
        const resposta = await api.post("/Login", dados)
        console.log(resposta);
        
        const token = resposta.data.token
        localStorage.setItem("token", token)
        const tokenDecodicador = await jwtDecode(localStorage.getItem("token"))
        setmatricula(tokenDecodicador.matricula)
        setusuario(tokenDecodicador.nome)
        setlogado(true)
        return(resposta)
        
      } catch(erro) {
        console.log(erro);
        
        return false
      }
  
    }
    const deslogar = () =>{
        localStorage.removeItem("token")
        setlogado(false)
    }

    return (
    <Contextapp.Provider value={{
        usuario, 
        matricula,
        autenticacao,
        isLogado,
        setlogado,
        deslogar}}>
        {children}
    </Contextapp.Provider>
    )



}

export  {Contextapp, ProviderApp}


