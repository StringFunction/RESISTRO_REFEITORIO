import api from "./api";


 async function autenticacao(dados){
   console.log(dados.matricula);
    try{
    const response = await api.post("/Login/user", dados)
    const token = response.data.token
    localStorage.setItem("token", token)
    return true
    } catch {
      return false
    }



 }

 export default autenticacao