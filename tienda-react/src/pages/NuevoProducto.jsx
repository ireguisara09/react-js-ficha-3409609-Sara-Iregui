// pages/NuevoProducto.jsx
import { useNavigate } from "react-router";
import FormularioProducto from "../components/FormularioProducto";

function NuevoProducto({ agregarProducto }) {
  const navigate = useNavigate();

  const manejarAgregar = (nuevoProducto) => {
    agregarProducto(nuevoProducto);
    navigate("/inventario");
  };

  return (
    <section>
      <h1>Nuevo producto</h1>

      <FormularioProducto onAgregar={manejarAgregar} />
    </section>
  );
}

export default NuevoProducto;