import PaginaDesenvolviment from "./componentes/paginaOff";
import useAppContext from "../hooks/UseAppContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Funcionario() {
    const navigate = useNavigate();
    const { isLogado } = useAppContext();

    // Mover a lógica de navegação para dentro do useEffect
    useEffect(() => {
        if (!isLogado) {
            navigate("/Login");
        }
    }, [isLogado, navigate]); // Adicione as dependências apropriadas

    // Renderiza a página se o usuário estiver logado
    if (!!isLogado) {
        return (
            <>
                <PaginaDesenvolviment infor="Funcionario"></PaginaDesenvolviment>
            </>
        );
    }

    // Caso contrário, retorna null até que o useEffect redirecione para a página de login
    return null;
}

export default Funcionario;
