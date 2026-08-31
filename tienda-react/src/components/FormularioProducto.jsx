import { useState } from "react";

function FormularioProducto({ onAgregar }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    categoria: "",
    precio: "",
    stock: ""
  });

  const manejarCambio = (evento) => {
    setFormulario({
      ...formulario,
      [evento.target.name]: evento.target.value
    });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    const nuevoProducto = {
      id: Date.now(),
      nombre: formulario.nombre,
      categoria: formulario.categoria,
      precio: Number(formulario.precio),
      stock: Number(formulario.stock)
    };

    onAgregar(nuevoProducto);

    // Limpiar formulario
    setFormulario({
      nombre: "",
      categoria: "",
      precio: "",
      stock: ""
    });
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h2>Agregar producto</h2>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formulario.nombre}
        onChange={manejarCambio}
      />

      <input
        type="text"
        name="categoria"
        placeholder="Categoría"
        value={formulario.categoria}
        onChange={manejarCambio}
      />

      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={formulario.precio}
        onChange={manejarCambio}
      />

      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formulario.stock}
        onChange={manejarCambio}
      />

      <button type="submit">
        Agregar producto
      </button>
    </form>
  );
}

export default FormularioProducto;