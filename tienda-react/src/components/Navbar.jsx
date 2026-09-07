import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav class = "navbar">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/inventario">Inventario</NavLink>
      <NavLink to="/nuevo">Nuevo producto</NavLink>
      <NavLink to="/acerca">Acerca</NavLink>
    </nav>
    
  );
}

export default Navbar;
