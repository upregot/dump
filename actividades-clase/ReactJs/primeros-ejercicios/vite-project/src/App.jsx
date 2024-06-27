import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ArticulosFamilias from "./components/ArticulosFamilias";
import "./App.css"; // Verifica que el archivo existe y tiene los estilos correctos

function App() {
  return (
    <div className="divBody">
      <h1>Artículos Familias</h1>
      <ArticulosFamilias />
    </div>
  );
}

export default App;
