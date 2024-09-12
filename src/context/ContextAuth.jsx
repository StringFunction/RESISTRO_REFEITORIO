import { Children, createContext, useState } from "react";
import {jwtDecode} from "jwt-decode"
import api from "../service/api";


const Contextapp = createContext()

const ProviderApp = ({children}) => {
    const [isLogado, setlogado] = useState(false)
    const [usuario, setusuario] = useState(null)

    async function autenticacao(dados){

        console.log("aui");
        
        const response =  await api.post("Login/user", dados)
        console.log('passei');
        
        if (response.data.erro){
            console.log('ola mun');
            
            return (false)   
        };

        console.log(response.data);
        setlogado(true)
        return (response.data)
     
  
    }


    return (
    <Contextapp.Provider value={{usuario, autenticacao,isLogado,setlogado}}>
        {children}
    </Contextapp.Provider>
    )



}

export  {Contextapp, ProviderApp}


