// pages/NuevoProducto.jsx
import FormularioProducto from "../components/FormularioProducto";

function NuevoProducto({ agregarProducto }) {
  return (
    <section>
      <h1>Nuevo producto</h1>

      <FormularioProducto onAgregar={agregarProducto} />
    </section>
  );
}

export default NuevoProducto;