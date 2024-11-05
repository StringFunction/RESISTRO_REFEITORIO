import PaginaDesenvolviment from "./componentes/paginaOff"
import useAppContext from "../hooks/UseAppContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const d = {
    labels: ['NOSSAMOTO SIQUEIRA', 'NOSSAMOTO MATRIZ', 'NOSSAMOTO CAUCAIA', 'NOVALUZ WS', 'NOVALUZ SD'],
    datasets: [
      {
        label: 'FUNCIONARIOS POR EMPRESA',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  }

function Home(){
    const navigate = useNavigate()
    const {isLogado} = useAppContext()


    
    return (
        <>
        <div id="Container" className=" h-[750px] bg-slate-800">

            <div className="w-[700px]">

            <Bar data={d}></Bar>

            </div>
     



        </div>
        
        
        </>
    )


}

export default Home