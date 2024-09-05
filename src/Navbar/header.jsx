import { Link } from "react-router-dom"


function MenuNavegacao(){
    return (
    <>
    <div className="flex justify-between items-center	bg-neutral-400 h-28	 px-2	 ">
        <div className="text-3xl	mr-1	">
            <h1><Link to="/Home">Grupo Carmais</Link></h1>
        </div>
        <div className=" w-1/4	 text-zinc-300	">
            <ul className="flex justify-around text-3xl">
                <li className="hover:text-black	 delay-150			"><Link to="/Funcionario">Funcionario</Link></li>
                <li className="hover:text-black	 delay-150			"><Link to="/Refeitorio">Refeitorio</Link></li>
            </ul>
        </div>
    </div>
    </>
    )
}

export default MenuNavegacao