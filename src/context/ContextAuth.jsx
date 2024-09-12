import { Children, createContext, useState } from "react";
import {jwtDecode} from "jwt-decode"
import api from "../service/api";


const Contextapp = createContext()

const ProviderApp = ({children}) => {
    const [isLogado, setlogado] = useState(false)
    const [usuario, setusuario] = useState(null)

    async function autenticacao(dados){

        try{
        const response =  await api.post("Login/user", dados)
        if (response.data.erro){
            return false   
        };

        console.log(response.data);
        setlogado(true)
        return (response.data)
     
    } catch (erro) {
        return (erro)
        
      }

    }


    return (
    <Contextapp.Provider value={{usuario, autenticacao,isLogado}}>
        {children}
    </Contextapp.Provider>
    )



}

export  {Contextapp, ProviderApp}


