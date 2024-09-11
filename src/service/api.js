import axios from "axios";


const api =  new axios.create({
    baseURL: "http://localhost:10000"
})
export default api