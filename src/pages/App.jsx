//Imports de los componentes de React
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {


  return (
    <>
      <Routes>
          <Route path="/Inicio.jsx" element={<Inicio/>} />
      </Routes>
    </>
  )
}

export default App
