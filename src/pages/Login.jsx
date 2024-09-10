
import { BsFillPersonFill } from "react-icons/bs";
import logo from "/public/img/download.png"
function Login(){
    return (
      
        <div className="w-full bg-slate-800 h-[650px] flex justify-center items-center ">
            <div className="md:w-[700px] md:bg-white md:p-8 md:h-[400px] flex justify-center items-center gap-10"> 
                <div className="md:w-48 md:h-48 md:border-solid md:border md:border-black md:flex md:justify-center md:items-center md:rounded-full md:bg-slate-300">
                    <BsFillPersonFill className="text-[150px]"></BsFillPersonFill>
                </div>

                <div className="flex  flex-col justify-center items-center">
                    <div>
                     <h1>Login</h1>
                    </div>
                    <form action="" method="post" className="flex flex-col">
                        <label htmlFor="">Matricula</label>
                        <input type="number" className="border-solid border border-black"/>
                        <label htmlFor="">Senha :</label>
                        <input type="password" className="border-solid border border-black"/>
                        <input type="submit" />
                    </form>
                </div>
            </div>
         
        </div>
       
    )
}

export default Login
