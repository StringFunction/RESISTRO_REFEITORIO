import { Contextapp } from "../context/ContextAuth";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";


function PrivateRota(){
  const {isLogado} = useContext(Contextapp)
  console.log("aqui estou mais um");
  
  


  return isLogado ? <Outlet /> : <Navigate to="/Login"></Navigate>

}

export default PrivateRota