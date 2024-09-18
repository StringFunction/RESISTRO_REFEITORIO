import PaginaDesenvolviment from "./componentes/paginaOff";
import useAppContext from "../hooks/UseAppContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Funcionario() {
    const navigate = useNavigate();
    const { isLogado } = useAppContext();


    // Renderiza a página se o usuário estiver logado

        return (
            <>
                <PaginaDesenvolviment infor="Funcionario"></PaginaDesenvolviment>
            </>
        );
    

    // Caso contrário, retorna null até que o useEffect redirecione para a página de login
    
}

export default Funcionario;
