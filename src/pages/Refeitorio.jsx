import { useEffect, useState } from "react"
import CardFun from "./componentes/CardFuncionario"
import Styles from "../layout/Conteiner"
import Table from "./componentes/table"
import { Html5QrcodeScanner as qrcode } from "html5-qrcode";

import api from "../service/api";
import { ToastContainer, toast } from 'react-toastify';
import { BsQrCodeScan } from "react-icons/bs";
import useAppContext from "../hooks/UseAppContext";


const condedo = document.getElementById("matricula")

function Refeitorio() {
    const { deslogar } = useAppContext()
    const [matricula, setmatricula] = useState("")
    const [atualizar, setatualizar] = useState("")
    const [isLodinng, setLoding] = useState(false)
    async function ScannnerCode() {
        const Scanner = new qrcode("reader", {
            qrbox: {
                width: 200,
                height: 200
            },
            fps: 5
        })


        Scanner.render(sucesso)
        function sucesso(result) {
            setmatricula(matricula)
            btnregistra()

        }

    }
    async function btnregistra() {
        setLoding(true)
        try {
            const resposta = await api.get("/v1/funcionario/" + matricula, {
                headers: {
                    ["x-access-token"]: `${localStorage.getItem("token")}` // Passa o token no header Authorization
                }
            });
            if (!!resposta.data) {
                console.log("Registrando Passagem");
                const registraPassagem = await api.post("/v1/passagem/Registro", resposta.data, {
                    headers: {
                        ["x-access-token"]: `${localStorage.getItem("token")}` // Passa o token no header Authorization
                    }

                })
                if (resposta.data.status != "ativo") {
                    toast.info("Funcionario sem permissao")
                  


                }
                if (registraPassagem.status == 200) {
                    toast.info("Funcionario Registrado")
                    setatualizar(matricula)

                }
            }

        } catch (erro) {
            if (erro.status === 404) {
                toast.error("FUNCIONARIO NAO ENCONTRADO");
            } else if (erro.status === 302) {
                toast.info("Funcionario ja comeu");
            } else if (erro.status === 498) {
                toast.error("Sessao ja era");
                deslogar();
            } else {
                console.log(erro);
                
                toast.error("Erro no servidor na hora de resgistra passagem");
            }
        }
        setLoding(false)
    }




    return (
        <>
            <div className="bg-fundoF flex h-auto justify-center items-center flex-col ">

                <div className=" bg-cardB gap-5 md:w-f md:h-[350px] md:rounded-md	md:p-16  md:mt-16 shadow-2xl shadow-black text-red-50 flex justify-center items-center flex-col
            h-auto w-[400px] p-10 mt-6
            ">
                    <h1 className="text-4xl">Matricula</h1>
                    <div id="reader" width="600px"></div>
                    <div className="flex flex-col justify-center items-center gap-8">
                        <div id="pesquisa" className="flex items-center">
                            <input type="text" id="matricula" onChange={(e) => setmatricula(e.target.value)} className="bg-transparent border-solid border-2 md:border-indigo-60 w-80 h-10  text-center md:rounded-lg  rounded-l-lg" max="6" />
                            <div id="scanner" className="border-solid border-2 h-10 flex items-center border-l-transparent md:hidden">
                                <button onClick={ScannnerCode}><BsQrCodeScan className="text-[40px]"></BsQrCodeScan> </button>

                            </div>
                        </div>


                        {isLodinng ?
                            <div className="w-36  h-10 flex justify-center items-center">
                                <div className="w-10 h-10 border-white border-[10px] rounded-full border-t-transparent animate-spin"></div>
                            </div>
                            :
                            <button onClick={btnregistra} className="w-36  h-10 bg-green-700 rounded-3xl" >Registra</button>
                        }

                    </div>
                </div>


                <Table mt={atualizar}></Table>
            </div>
            <ToastContainer></ToastContainer>

        </>

    )

}

export default Refeitorio