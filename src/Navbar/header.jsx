import { Link } from "react-router-dom"
import { BsJustify } from "react-icons/bs";
import useAppContext from "../hooks/UseAppContext";
import { useEffect } from "react";



const btnMenu = () =>{
    const btn = document.getElementById("menu")
 
    
    if (btn.classList.contains("opacity-0")){    

        console.log("deu certo");
    
        
        btn.classList.remove("opacity-0")    
        btn.classList.add("opacity-100")    
        btn.classList.add("top-[100px]")
        
        
    }else{
        console.log('deu bomn ');
            btn.classList.add("opacity-0")    
            btn.classList.remove("top-[100px]")
            btn.classList.remove("opacity-100")
    }
    
 
}


function MenuNavegacao(){
 
    const {isLogado} = useAppContext()
  
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

        <div id="menu" className="md:h-full  md:bg-transparent md:w-80 md:flex md:justify-center md:items-center md:static md:opacity-100 opacity-0 absolute w-full 
            top-[-400px] transition-all ease-in duration-500  md:transition-none"
>
            <ul className="md:flex md:w-full md:h-28 md:items-center md:bg-transparent md:justify-around md:relative md:gap-0 md:flex-row md:pt-0
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

            </ul>
        </div>
    </div>
}
    </>
    )
}

export default MenuNavegacao