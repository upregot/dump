import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Deudores from "./components/Deudores";
import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/api/Inicio" element={<Inicio/>}></Route>
        <Route path="/api/deudores" element={<Deudores/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App