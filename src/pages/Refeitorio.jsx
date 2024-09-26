import { useEffect, useState } from "react";

import Table from "./componentes/table";
import { Html5QrcodeScanner as qrcode } from "html5-qrcode";
import api from "../service/api";
import { ToastContainer, toast } from 'react-toastify';
import { BsQrCodeScan } from "react-icons/bs";
import useAppContext from "../hooks/UseAppContext";

function Refeitorio() {
    const { deslogar } = useAppContext();
    const [matricula, setmatricula] = useState(null);
    const [chcuchu, setchuchu] = useState(null);
    const [atualizar, setatualizar] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (matricula) {
            console.log("Matricula atualizada:", matricula);
            btnregistra();
            setchuchu("")
        }
    }, [chcuchu]);

    async function ScannnerCode() {
        const Scanner = new qrcode("reader", {
            qrbox: { width: 200, height: 200 },
            fps: 5,
        });

        Scanner.render(sucesso);

        function sucesso(result) {
           
            console.log("Resultado do Scanner:", result);
            setmatricula(result); // Atualiza o estado de forma assíncrona
            setchuchu(result)
            
        }
    }

    async function btnregistra() {
        if (isLoading) return; // Evita múltiplas execuções enquanto está carregando

        setLoading(true);
        try {
            const resposta = await api.get(`/v1/funcionario/${matricula}`, {
                headers: {
                    "x-access-token": `${localStorage.getItem("token")}`,
                },
            });

            if (!!resposta.data) {
                const registraPassagem = await api.post("/v1/passagem/Registro", resposta.data, {
                    headers: {
                        "x-access-token": `${localStorage.getItem("token")}`,
                    },
                });
                if (resposta.data.status !== "ativo") {
                    toast.info("Funcionário sem permissão");
                    setatualizar(matricula); // Atualiza a tabela
                    setLoading(false);
                    return;
                }


                if (registraPassagem.status === 200) {
                    toast.success("Funcionário registrado com sucesso");
                    setatualizar(matricula); // Atualiza a tabela
                }
            }
        } catch (erro) {
            handleApiError(erro);
        } finally {
            setLoading(false);
        }
    }

    function handleApiError(erro) {
        const status = erro.response ? erro.response.status : null;

        switch (status) {
            case 404:
                toast.error("Funcionário não encontrado");
                break;
            case 302:
                toast.info("Funcionário já comeu");
                break;
            case 498:
                toast.error("Sessão expirada");
                deslogar();
                break;
            default:
                toast.error("Erro no servidor ao registrar passagem");
                console.error("Erro no servidor:", erro);
        }
    }

    return (
        <>
            <div className="bg-fundoF flex h-auto justify-center items-center flex-col">
                <div className="bg-cardB gap-5 md:w-full md:h-[350px] md:rounded-md md:p-16 md:mt-16 shadow-2xl shadow-black text-red-50 flex justify-center items-center flex-col h-auto w-[400px] p-10 mt-6">
                    <h1 className="text-4xl">Matricula</h1>
                    <div id="reader" width="600px"></div>
                    <div className="flex flex-col justify-center items-center gap-8">
                        <div id="pesquisa" className="flex items-center">
                            <input
                                type="text"
                                id="matricula"
                                onChange={(e) => setmatricula(e.target.value)}
                                className="bg-transparent border-solid border-2 md:border-indigo-60 w-80 h-10 text-center md:rounded-lg rounded-l-lg"
                                maxLength="6"
                            />
                            <div id="scanner" className="border-solid border-2 h-10 flex items-center border-l-transparent md:hidden">
                                <button onClick={ScannnerCode}>
                                    <BsQrCodeScan className="text-[40px]" />
                                </button>
                            </div>
                        </div>

                        {isLoading ? (
                            <div className="w-36 h-10 flex justify-center items-center">
                                <div className="w-10 h-10 border-white border-[10px] rounded-full border-t-transparent animate-spin"></div>
                            </div>
                        ) : (
                            <button onClick={btnregistra} className="w-36 h-10 bg-green-700 rounded-3xl">
                                Registrar
                            </button>
                        )}
                    </div>
                </div>

                <Table mt={atualizar} setmt={setatualizar} />
            </div>
            <ToastContainer />
        </>
    );
}

export default Refeitorio;
