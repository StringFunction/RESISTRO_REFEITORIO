import axios from "axios";


const api =  new axios.create({
    baseURL: "http://localhost:3000"
})
export default api