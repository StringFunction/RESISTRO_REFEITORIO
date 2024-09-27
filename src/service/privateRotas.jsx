import { Contextapp } from "../context/ContextAuth";
import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";


function PrivateRota(){

  const isLogado = localStorage.getItem("token")
  console.log("aqui estou mais um" + isLogado);
  
  


  return !!isLogado ? <Outlet /> : <Navigate to="/Login"></Navigate>

}

export default PrivateRota