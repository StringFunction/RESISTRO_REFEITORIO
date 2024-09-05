import MenuNavegacao from "./Navbar/header"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Funcionario from "./pages/Funcionario"
import Refeitorio from "./pages/Refeitorio"
import Home from "./pages/Home"
import Footer from "./Navbar/footer"
import Container from "./layout/Conteiner"
function App() {
  

  return (
    <>
    <BrowserRouter>
    <MenuNavegacao />
    <Container>
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />}></Route>
      <Route path="/Home" element={<Home></Home>}></Route>
      <Route path="/Funcionario" element={<Funcionario></Funcionario>}></Route>
      <Route path="/Refeitorio" element={<Refeitorio></Refeitorio>}></Route>
    </Routes>
    </Container>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
