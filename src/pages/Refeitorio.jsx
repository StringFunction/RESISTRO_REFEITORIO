import { useState } from "react"
import CardFun from "./componentes/CardFuncionario"
function Refeitorio() {

    return (
    <>
    <div>
        <div>
            <input type="text"  placeholder="DIGITE MATRICULA"/>
            <button>Consulta</button>
        </div>
        <div>
        <table>
            <thead>
                <tr>
                    <td>NOME</td>
                    <td>SETOR</td>
                    <td>CARGO</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>francisc</td> 
                    <td>sei</td> 
                    <td>conde</td> 
                </tr>
            </tbody>
        </table>
        </div>

    </div>
    </>
    )
}

export default Refeitorio