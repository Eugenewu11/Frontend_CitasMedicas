//Imports de los componentes de React
import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio.jsx";
import Register from './Register.jsx'
import '../css/App.css'

function App() {


  return (
    <>
      <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/inicio" element={<Inicio/>} />
          <Route path="/register" element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
