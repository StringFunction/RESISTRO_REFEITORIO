 import api from "./api";


 async function autenticacao(dados){
   console.log(dados.matricula);
    try{
    const response = await api.post("/Login/user", dados)
    return response
    } catch {
      return false
    }



 }

 export default autenticacao