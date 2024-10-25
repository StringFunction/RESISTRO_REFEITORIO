import { Contextapp } from "../context/ContextAuth";
import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function PrivateRota(){
  
  const isLogado = localStorage.getItem("token")
  const {nivel} = useContext(Contextapp)
  console.log("aqui estou mais um" + nivel);
  
  if (!!isLogado) {
    const dados = jwtDecode(isLogado);
    

    if (dados.nivel !== 3) {
        alert("ola mundo");
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

export default PrivateRota