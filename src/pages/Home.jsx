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
import { Bar,Pie } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const d = {
    labels: ['NOSSAMOTO SIQUEIRA', 'NOSSAMOTO MATRIZ', 'NOSSAMOTO CAUCAIA', 'NOVALUZ WS', 'NOVALUZ SD'],
    datasets: [
      {
        label: 'FUNCIONARIOS POR EMPRESA',
        data: [12, 19, 3, 5, 2],
        backgroundColor: ["black","red","blue"],
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
        <div id="Container" className=" h-[750px] bg-slate-800 p-3 flex flex-col flex-wrap gap-2">

            <div className="w-[700px] bg-slate-700 rounded-xl">

            <Bar data={d}></Bar>

            </div>
            <div className="w-[700px] bg-slate-700 rounded-xl">

            <Bar data={d}></Bar>

            </div>
            <div className="w-[700px] bg-slate-700 rounded-xl">

            <Bar data={d}></Bar>

            </div>
            <div className="w-[700px] bg-slate-700 rounded-xl">

            <Bar data={d}></Bar>

            </div>




        </div>
        
        
        </>
    )


}

export default Home