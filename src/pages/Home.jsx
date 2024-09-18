import PaginaDesenvolviment from "./componentes/paginaOff"
import useAppContext from "../hooks/UseAppContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
function Home(){
    const navigate = useNavigate()
    const {isLogado} = useAppContext()



   
    
    return (
        <>
             <PaginaDesenvolviment infor="HOME"></PaginaDesenvolviment> 
        
        </>
    )


}

export default Home