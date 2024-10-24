import { Contextapp } from "../context/ContextAuth";
import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";


function PrivateRota(){

  const isLogado = localStorage.getItem("token")
  const {nivel} = useContext(Contextapp)
  console.log("aqui estou mais um" + nivel);
  
  
  if (!!isLogado) {
    if (nivel == 3){
      return <Outlet></Outlet>
    } else {
      <Navigate to="/Login"></Navigate>
    }
  }

  return !!isLogado ? <Outlet /> : <Navigate to="/Login"></Navigate>

}

export default PrivateRota