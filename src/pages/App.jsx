//Imports de los componentes de React
import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio.jsx";
import Register from './Register.jsx'
import Sidebar from "../components/Sidebar.jsx";
import '../css/App.css'

function App() {
  return (
    <div className="flex min-h-screen">
      
      <Sidebar/>
      
      
      <div className="flex-1 lg:ml-8 mt-5">
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/inicio" element={<Inicio/>} />
          <Route path="/registro" element={<Register/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
