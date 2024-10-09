import MenuNavegacao from "./Navbar/header"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Funcionario from "./pages/Funcionario"
import Refeitorio from "./pages/Refeitorio"
import Home from "./pages/Home"
import Footer from "./Navbar/footer"
import Container from "./layout/Conteiner"
import Login from "./pages/Login"
import PrivateRota from "./service/privateRotas"
function App() {
  

  return (
    <>
    <BrowserRouter>
    <MenuNavegacao />
    <Container>
    <Routes>

      <Route path="/" element={<PrivateRota></PrivateRota>}>
            <Route index element={<Navigate to="/Refeitorio" replace />} />
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/Funcionario" element={<Funcionario></Funcionario>}></Route>
            <Route path="/Refeitorio" element={<Refeitorio></Refeitorio>}></Route>
      </Route>
      







      <Route path="/Login" element={<Login></Login>}></Route>
    </Routes>
    
    </Container>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
