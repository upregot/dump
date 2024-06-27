import React, { useEffect, useState } from "react";
import serviciosDeudores from "../services/deudoresService";

const DeudoresListado = () => {
  const [deudores, setDeudores] = useState([]);

  useEffect(() => {
    const fetchDeudores = async () => {
      const data = await serviciosDeudores.getDeudores();
      if (data) {
        setDeudores(data.Items);
      }
    };

    fetchDeudores();
  }, []);

  const handleDelete = async (id) => {
    try {
      await serviciosDeudores.deleteDeudor(id);
      setDeudores(deudores.filter((deudor) => deudor.IdDeudor !== id));
    } catch (error) {
      console.error("Error al eliminar el deudor", error);
    }
  };

  return (
    <div className="container">
      <h1>Listado de Deudores</h1>
      <div className="deudores-listado">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Fecha Deuda</th>
              <th>Importe Adeudado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {deudores && deudores.length > 0 ? 
              deudores.map((deudor) => (
                <tr key={deudor.IdDeudor}>
                  <td>{deudor.IdDeudor}</td>
                  <td>{deudor.ApellidoYNombre}</td>
                  <td>{deudor.FechaDeuda}</td>
                  <td>{deudor.ImporteAdeudado}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(deudor.IdDeudor)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              )) : <tr><td colSpan="5">No hay deudores</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeudoresListado;
