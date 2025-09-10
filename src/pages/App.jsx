//Imports de los componentes de React
import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio.jsx";
import Register from './Register.jsx'
import Navbar from "../components/Navbar.jsx"; 
import Login from './Login.jsx'
import '../css/App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="w-full px-4 py-6 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/inicio" element={<Inicio/>} />
          <Route path="/registro" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App