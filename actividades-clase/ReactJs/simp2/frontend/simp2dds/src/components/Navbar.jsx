import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/api/inicio">
        Inicio
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/api/deudores" >
            Deudores
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
