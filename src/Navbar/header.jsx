import { Link } from "react-router-dom"
import { BsJustify } from "react-icons/bs";


const btnMenu = () =>{
    const btn = document.getElementById("menu")
 
    
    if (btn.classList.contains("opacity-0")){    

        console.log("deu certo");
    
            btn.classList.remove("opacity-0")
            btn.classList.add("opacity-100")
            
    }else{
        console.log('deu bomn ');
        btn.classList.remove("opacity-100")
        btn.classList.add("opacity-0")
    }
    
 
}


function MenuNavegacao(){
    return (
    <>

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
            <BsJustify onClick={btnMenu} className="md:hidden text-5xl absolute right-11 flex justify-center items-center top-9 hover:cursor-pointer"></BsJustify>
        </div>

        <div id="menu" className="md:h-full  md:bg-transparent md:w-80 md:flex md:justify-center md:items-center md:relative md:opacity-100 opacity-0  absolute w-full
            transition-all ease-in duration-500  md:transition-none"
>
            <ul className="md:flex md:w-full md:h-28 md:items-center md:bg-transparent md:justify-around md:relative md:gap-0 md:flex-row md:pt-0
                          flex  flex-col bg-white w-full   pt-10 text-black h-[400px]  ">

                <li className="md:hover:bg-slate-500 md:w-2/4 md:h-full md:flex md:items-center md:justify-center duration-200 hover:cursor-pointer
               hover:bg-blue-400 w-full text-center h-full flex items-center justify-center text-2xl  tracking-widest
                ">
                <Link to="/Funcionario">Funcionario</Link>
                </li>
          
                <li className="md:hover:bg-slate-500 md:w-2/4 md:h-full md:flex md:items-center md:justify-center duration-200 hover:cursor-pointer
               hover:bg-blue-400 w-full text-center h-full flex items-center justify-center text-2xl tracking-widest
                ">
                <Link to="/Refeitorio">Refeitorio</Link>
                </li>

            </ul>
        </div>
    </div>
    </>
    )
}

export default MenuNavegacao