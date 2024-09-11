import { Children, createContext } from "react";
import decode from "jwt-decode"


const authContent = createContext()

export const AuthProvider = ({children}) => {
    async function autenticacao(dados){
        const response =  await api.post("Login/user", dados)

        if (response.data.erro) return (false);

        

     
     
     
      }



    return <authContent.Provider>
        {children}
    </authContent.Provider>
}