import { Link , Outlet} from "react-router-dom"
import { BsJustify } from "react-icons/bs";
import useAppContext from "../hooks/UseAppContext";
import { useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";





function MenuNavegacao(){
    
    const {isLogado, deslogar, usuario,matricula} = useAppContext()
    const sair = () =>{
        deslogar()
       

    }
    const btnFechar = ()=>{
        const user = document.getElementById("user")
        user.classList.remove("md:top-[0px]")
    }
    
    const btnUser = () => {
        const user = document.getElementById("user")
        user.classList.add("md:top-[0px]")

}
const btnMenu = () =>{
    const btn = document.getElementById("menu")
    if (btn.classList.contains("opacity-0")){    
        btn.classList.remove("opacity-0")    
        btn.classList.add("opacity-100")    
        btn.classList.add("top-[100px]")
        
        
    }else{
     
            btn.classList.add("opacity-0")    
            btn.classList.remove("top-[100px]")
            btn.classList.remove("opacity-100")
    }
    
 
}   

 
   
  
    return (
    <>
    {isLogado
     &&
    <div className="
    md:flex
    md:justify-between
    md:items-center
    bg-menu
    md:h-28
    md:px-2
    md: text-zinc-300 
    md:relative
 
    
        
    ">
        <div className="md:text-3xl	md:mr-1 md:pl-6	 p-9 text-4xl text-center">
            <h1><Link to="/Home">Grupo Carmais</Link></h1>
        </div>
        <div id="menuBar">
            <BsJustify onClick={btnMenu} className="md:hidden text-5xl absolute right-5 flex justify-center items-center top-9 hover:cursor-pointer"></BsJustify>
        </div>

        <div id="menu" className="md:h-full    md:w-[500px] md:flex md:justify-center md:items-center md:static md:opacity-100 opacity-0 absolute w-full 
            top-[-400px] transition-all ease-in duration-500  md:transition-none"
>
            <ul className="md:flex md:w-full md:h-28 md:items-center md:bg-transparent md:justify-around md:relative md:gap-0 md:flex-row md:pt-0 md:p-2
                          flex  flex-col bg-white w-full   pt-10 text-slate-300  h-[400px]  ">

                <li className="md:hover:bg-slate-500 md:w-2/4 md:h-full md:flex md:items-center md:justify-center duration-200 hover:cursor-pointer
               hover:bg-blue-400 md:hover:text-white w-full text-center h-full flex items-center justify-center text-2xl  tracking-widest
                ">
                <Link to="/Funcionario" onClick={btnMenu}>Funcionario</Link>
                </li>
          
                <li className="md:hover:bg-slate-500 md:w-2/4 md:h-full md:flex md:items-center md:justify-center duration-200 hover:cursor-pointer
               hover:bg-blue-400 hover:text-white w-full text-center h-full flex items-center justify-center text-2xl tracking-widest
                ">
                <Link to="/Refeitorio" onClick={btnMenu}>Refeitorio</Link>
                </li>
                <li className="ml-3" onClick={btnUser}>
                    <FaRegUserCircle  className="md:text-[50px] md:flex md:hover:text-white md:hover:cursor-pointer "></FaRegUserCircle>
                </li>

            </ul>

            <div id="user" className="absolute md:right-2 md:backdrop-blur-sm  md:-top-[400px] md:flex md:-bottom-52 md:border md:backdrop: md:w-[400px] md:h-[210px]  md:flex-col md:justify-center md:items-center tracking-[2px]  md:p-3 z-10 md:gap-3 md:duration-300">
                <div id="fechar" onClick={btnFechar} className="absolute top-0 right-0 p-5 md:cursor-pointer"><IoMdCloseCircleOutline className="text-[30px]"></IoMdCloseCircleOutline></div>
                <FaRegUserCircle className="text-[90px]"></FaRegUserCircle>
                <p>Matricula : {matricula ? matricula : "carregando..." }</p>
                <p>Nome : {usuario ? usuario : "carregando..." }</p>
                <button onClick={sair} className="md:border md:p-2 md:w-[70px] md:rounded-2xl md:hover:bg-slate-500 md:duration-200 md:hover:cursor-pointer text-center">sair</button>
            </div>
        </div>
    </div>
}

    </>
    )
}

export default MenuNavegacao