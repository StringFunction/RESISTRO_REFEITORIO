import React from "react";
import video from "../assets/video.mp4";
export default function TelaCadFrequen() {

    return (
        <>
            <div id="TelaFundo" className="flex justify-center items-center">
                <video src={video} autoPlay muted loop  ></video>

                <div id="cardFundoBlack" className="md:w-[800px] md:h-[700px] bg-black/50 absolute flex flex-col justify-center items-center ">
                <div id="tituto" className="">Cadastro Funcionario Frequentador</div>
                <div id="cardForm">
                    <form action="" className="flex flex-col">
                        <label htmlFor="">Matricula : </label>
                        <input type="text" />
                        <label htmlFor="">Nome : </label>
                        <input type="text" />
                        <label htmlFor="">Empresa</label>
                        <select name="" id="">
                            <option value="">Tstes</option>
                            <option value="">Tstes</option>
                            <option value="">Tstes</option>
                            <option value="">Tstes</option>
                            <option value="">Tstes</option>
                            <option value="">Tstes</option>
                        </select>
                        <label htmlFor="">Setor : </label>
                        <input type="text" />
                        <label htmlFor="">Cargo : </label> 
                        <input type="text" />
                    </form>
                </div>
                
                
                </div>
            </div>
        
        </>
    )
    
}