import React from "react";
import video from "../assets/video.mp4";
export default function TelaCadFrequen() {

    return (
        <>
            <div id="TelaFundo" className="flex justify-center items-center">
                <video src={video} autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover" ></video>

                <div id="cardFundoBlack" className="md:w-[450px] md:h-[550px] bg-black/50 absolute flex flex-col justify-center items-center top-3 tracking-[4px] backdrop-blur-sm
 rounded-2xl text-white h-[500px] ">
                <div id="tituto" className="md:text-[20px] relative md:-top-10 text-white uppercase text-center text-[15px] text-wrap w-[400px]">Cadastro Funcionario Frequentador</div>
                <div id="cardForm">
                    <form action="" className="flex flex-col ">
                        <label className="text-white text-[20px] mb-2 " htmlFor="">Matricula : </label>
                        <input className="bg-transparent border-b-2  mb-2" type="text" />
                        <label className="text-white text-[20px] mb-2 " htmlFor="">Nome : </label>
                        <input className="bg-transparent border-b-2  mb-2" type="text" />
                        <label className="text-white text-[20px] mb-2 " htmlFor="">Empresa</label>
                        <select name="" className="bg-transparent mb-3"id="">
                            <option value="" className="text-black">Tstes</option>
                            <option value="" className="text-black">Tstes</option>
                            <option value="" className="text-black">Tstes</option>
                            <option value="" className="text-black">Tstes</option>
                            <option value="" className="text-black">Tstes</option>
                            <option value="" className="text-black">Tstes</option>
                        </select>
                        <label className="text-white text-[20px] mb-2 " htmlFor="">Setor : </label>
                        <input className="bg-transparent border-b-2  mb-2" type="text" />
                        <label className="text-white text-[20px] mb-2 " htmlFor="">Cargo : </label> 
                        <input className="bg-transparent border-b-2  mb-2" type="text" />
                        <input className="bg-transparent border-b-2  mb-2 p-2 hover:cursor-pointer" type="submit" value="Cadastrar" />
                    </form>
                </div>
                
                
                </div>
            </div>
        
        </>
    )
    
}