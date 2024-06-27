import React from 'react';
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <h1 className="h1">Estoy practicando la libreria de react</h1>
        <div className="contenedor-card">
          <Card titulo={"un titulo para una carta"} sub={"un subtitulo de una card"} texto={"un largo parrafo para una carta"} />
          <Card titulo={"budismo para principiantes"} sub={"author: lamma yeshe"} texto={"No hace mucho, Occidente prácticamente desconocía el budismo. En la década de los cincuenta y los sesenta, por ejemplo, podrías haberte pasado la vida entera sin apenas oírlo mencionar"} />
          <Card titulo={"cuando ya no quedan chocolates"} sub={"author: Rey David"  } />
          <Card titulo={"cuarta carta"} sub={"subtitulo"} texto={"contenido de la cuarta carta"} />
          <Card titulo={"quinta carta"} sub={"subtitulo"} texto={"contenido de la quinta carta"} />
        </div>
      </div>
    </>
  );
}

export default App;
