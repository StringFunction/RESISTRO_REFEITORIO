import MenuNavegacao from "./Navbar/header"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Funcionario from "./pages/Funcionario"
import Refeitorio from "./pages/Refeitorio"
import Home from "./pages/Home"
import Footer from "./Navbar/footer"
import Container from "./layout/Conteiner"
import Login from "./pages/Login"
import Usuario from "./pages/Usuario"

import {PrivateRota,RotaRefeitorio } from "./service/privateRotas"
import TelaCadFrequen from "./pages/TelaCadFrequentador"
import useAppContext from "./hooks/UseAppContext";
import { jwtDecode } from "jwt-decode"
function App() {
  const { nivel } = useAppContext()
  console.log("Nivel dentro do app  " + nivel );
  // const dados = jwtDecode(localStorage.getItem("token"))

  

  return (
    <>
    
    <BrowserRouter>
    <MenuNavegacao />
    <Container>
    <Routes>
      <Route path="/" element={<PrivateRota></PrivateRota>}>
            <Route index element={<Navigate to={nivel == 3 ? "/Home" : "/Refeitorio"}  />} />
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/Funcionario" element={<Funcionario></Funcionario>}></Route>
      </Route>
      <Route path="/Refeitorio" element={<RotaRefeitorio></RotaRefeitorio>}>
                <Route index element={<Refeitorio></Refeitorio>}></Route>
      </Route>
      
      <Route path="/Usuario" element={<Usuario></Usuario>}></Route>
      <Route path="/Fre" element={<TelaCadFrequen></TelaCadFrequen>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
    </Routes>
    
    </Container>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
