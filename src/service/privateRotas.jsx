import { Contextapp } from "../context/ContextAuth";
import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


function PrivateRota(){
  const isLogado = localStorage.getItem("token")
  

  
  if (!!isLogado) {
    const dados = jwtDecode(isLogado);
    

    if (dados.nivel !== 3) {

       
        return <Navigate to="/Refeitorio"></Navigate>
    }

    return (
        <Outlet />
    );
} else {
    console.log("Token de acesso inválido");
    return <Navigate to="/Login" />;
}
  // return !!isLogado ? <Outlet /> : <Navigate to="/Login"></Navigate>

}

function RotaRefeitorio() {
  const isLogado = localStorage.getItem("token")
  console.log(isLogado);
  

   
  if (!!isLogado) { 
    return (
        <Outlet />
    );
} else {
    console.log("Token de acesso inválido");
    return <Navigate to="/Login" />;
}
  
}

export  {PrivateRota,RotaRefeitorio}