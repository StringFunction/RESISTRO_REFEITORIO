import { Link, Outlet } from "react-router-dom"
import { BsJustify } from "react-icons/bs";
import useAppContext from "../hooks/UseAppContext";
import { FaRegUserCircle } from "react-icons/fa";
import logo_carmais from "/img/carmais-logo.png"

import { IoMdCloseCircleOutline } from "react-icons/io";



// LEMBRAR DE DESCOMENTAR O MENU DE NAVEGACAO
// ADD H-400PX NO MENU UL

function MenuNavegacao() {

    const { isLogado, deslogar, usuario, matricula,nivel } = useAppContext()
    const sair = () => {
        deslogar()


    }
    const btnFechar = () => {
        const user = document.getElementById("user")
        user.classList.remove("md:top-[0px]")
    }

    const btnUser = () => {
        const user = document.getElementById("user")
        user.classList.add("md:top-[0px]")

    }
    const btnMenu = () => {
        const btn = document.getElementById("menu")
        if (btn.classList.contains("opacity-0")) {
            btn.classList.remove("opacity-0")
            btn.classList.add("opacity-100")
            btn.classList.add("top-[110px]")


        } else {

            btn.classList.add("opacity-0")
            btn.classList.remove("top-[110px]")
            btn.classList.remove("opacity-100")
        }


    }




    return (
        <>
            {isLogado
                &&
                <div className="md:flex md:justify-between md:items-center bg-menu md:h-28 md:px-2 md: text-zinc-300 md:relative ">
                    <div className=" flex self-center  md:w-[400px] w-[350px]">
                        <Link to="/Home"><img src={logo_carmais} alt="" /></Link>
                    </div>

                    <div id="menuBar">
                        <BsJustify onClick={btnMenu} className="md:hidden text-5xl absolute right-5 flex justify-center items-center top-9 hover:cursor-pointer z-[100]"></BsJustify>
                    </div>

                    <div id="menu" className="md:h-full md:w-[500px] md:flex md:justify-center  md:items-center md:static md:opacity-100 opacity-0 absolute w-full 
                        top-[-600px] transition-all ease-in duration-500  md:transition-none z-50">
                            
                        <ul className="md:flex md:w-full md:h-28 md:items-center md:bg-transparent md:justify-end md:relative md:gap-0 md:flex-row md:pt-0 
                          flex  flex-col bg-gray-900 w-full   pt-10 text-slate-300 h-[400px]   ">
                            { [2,3].includes(nivel) && 
                               <>
                               <li className="md:hover:bg-slate-500 md:w-2/4 md:h-full md:flex md:items-center md:justify-center duration-200 hover:cursor-pointer hover:bg-blue-400 md:hover:text-white w-full text-center h-full flex items-center justify-center text-2xl tracking-widest">
                                 <Link to="/Funcionario" onClick={btnMenu}>Funcionario</Link>
                               </li>
                               <li className="md:hover:bg-slate-500 md:w-2/4 md:h-full md:flex md:items-center md:justify-center duration-200 hover:cursor-pointer hover:bg-blue-400 hover:text-white w-full text-center h-full flex items-center justify-center text-2xl tracking-widest">
                                 <Link to="/Refeitorio" onClick={btnMenu}>Refeitorio</Link>
                               </li>
                               { nivel == 3 && <li className="md:hover:bg-slate-500 md:w-2/4 md:h-full md:flex md:items-center md:justify-center duration-200 hover:cursor-pointer hover:bg-blue-400 hover:text-white w-full text-center h-full flex items-center justify-center text-2xl tracking-widest">
                                 <Link to="/usuario" onClick={btnMenu}>Usuario</Link>
                               </li>}
                             </>
                            }
                            <li className="ml-3" onClick={btnUser}>
                                <FaRegUserCircle className="md:text-[50px] md:flex md:hover:text-white md:hover:cursor-pointer hidden "></FaRegUserCircle>
                            </li>

                        </ul>

                        <div id="user" className="absolute md:right-2 md:text-white backdrop-blur-sm  md:-top-[400px] md:flex md:-bottom-52 md:bg-transparent md:border md:backdrop: md:w-[400px] md:h-[210px]  md:flex-col md:justify-center md:items-center tracking-[2px]  md:p-3 z-10 md:gap-3 md:duration-300
                                bg-black	w-full h-[300px] flex flex-col justify-center items-center text-zinc-300 gap-6
            
            ">
                            <div id="fechar" onClick={btnFechar} className="md:absolute md:flex md:top-0 md:right-0 md:p-5 md:cursor-pointer hidden"><IoMdCloseCircleOutline className="text-[30px]"></IoMdCloseCircleOutline></div>
                            <FaRegUserCircle className="md:flex  text-[90px]"></FaRegUserCircle>
                            <p>Matricula : {matricula ? matricula : "carregando..."}</p>
                            <p>Nome : {usuario ? usuario : "carregando..."}</p>
                            <button onClick={sair} className="md:border md:p-2 md:w-[70px] md:rounded-2xl md:hover:bg-slate-500 md:duration-200 md:hover:cursor-pointer text-center
                
                ">sair</button>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default MenuNavegacao