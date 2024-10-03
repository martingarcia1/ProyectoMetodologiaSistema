import { useState } from "react";
import NavBar from "./components/shared/NavBar.jsx"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/shared/Vistas/Home.jsx'
import Nutricionista from './components/shared/Vistas/Nutricionista.jsx'
import Tienda from './components/shared/Vistas/Tienda.jsx'
import Carrito from "./components/shared/Vistas/Carrito.jsx";
import Menu from "./components/shared/Vistas/Menu.jsx";
import ArmarBowl from "./components/shared/Vistas/ArmarBowl.jsx";

function App() {

  return (
    <div id="Controlador_abuelo_Router">
      <Router>
        <NavBar/>
        <div id="Controlador_padre_Routes">
          <Routes>
            <Route path="/menu" element={<Menu/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/nutricionista" element={<Nutricionista />} />
            <Route path="/armarBowl"element={<ArmarBowl/>} />
          </Routes>
        </div>
      </Router>

    </div>
  )
}

export default App