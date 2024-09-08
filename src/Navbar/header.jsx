import { Link } from "react-router-dom"


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

        <div className="md:h-full  md:bg-transparent md:w-80 md:flex md:justify-center md:items-center md:relative"
>
            <ul className="md:flex md:w-full md:h-28 md:items-center md:bg-transparent md:justify-around md:relative md:gap-0 md:flex-row md:pt-0
                          flex  flex-col bg-white w-full justify-center  items-center  pt-10 text-black h-[400px] relative">

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