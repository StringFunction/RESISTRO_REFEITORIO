import axios from "axios";


const api =  new axios.create({
    baseURL: "https://back-end-registro-funcionario.onrender.com"
})
export default api