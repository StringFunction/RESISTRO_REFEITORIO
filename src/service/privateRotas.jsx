import { Contextapp } from "../context/ContextAuth";
import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";


function PrivateRota(){

  const isLogado = localStorage.getItem("token")
  const {nivel} = useContext(Contextapp)
  console.log("aqui estou mais um" + nivel);
  
  


  return !!isLogado ? <Outlet /> : <Navigate to="/Login"></Navigate>

}

export default PrivateRota