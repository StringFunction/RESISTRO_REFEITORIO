import PaginaDesenvolviment from "./componentes/paginaOff"
import useAppContext from "../hooks/UseAppContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
function Home(){
    const navigate = useNavigate()
    const {isLogado} = useAppContext()

    // useEffect(() => {
    //     if (!isLogado) {
    //         navigate("/Login");
    //     }
    // }, [isLogado, navigate]);

    if(isLogado){
    
    return (
        <>
             <PaginaDesenvolviment infor="HOME"></PaginaDesenvolviment> 
        
        </>
    )
}else{
   return navigate("/Login");
}

}

export default Home