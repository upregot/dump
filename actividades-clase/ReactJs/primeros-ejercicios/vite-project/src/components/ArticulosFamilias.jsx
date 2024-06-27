import arrayArticuloFamilia from "../datos-mock/articulosfamilias-mock.js";
const ArticulosFamilias = () => {
  const articulosFamilias = arrayArticuloFamilia;
  return (
    <div className="tituloPagina">
      <h1>Artículos Familias</h1>
      <p>Desde aquí podrá acceder a los artículos de las familias.</p>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th style={{ width: "40%" }}>IdArticuloFamilia</th>
              <th style={{ width: "60%" }}>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {articulosFamilias &&
              articulosFamilias.map((element) => (
                <tr key={element.IdArticuloFamilia}>
                  <td>{element.IdArticuloFamilia}</td>
                  <td>{element.Nombre}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ArticulosFamilias ;
