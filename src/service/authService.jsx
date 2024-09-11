 import api from "./api";


 async function consulta(dados){
    const response = await api.get("/user", dados)
    return response
    



 }

 export default consulta