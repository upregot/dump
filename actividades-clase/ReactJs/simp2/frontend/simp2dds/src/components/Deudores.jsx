import React from "react";
import DeudoresListado from "./DeudoresListado";
import RegistroDeudores from "./RegistroDeudores";
function Deudores() {
  return (
    <div className="container-fluid">
      <h1>Deudores</h1>
      <DeudoresListado />
      <RegistroDeudores />
    </div>
  );    
}
export default Deudores;
