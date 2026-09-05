import { useState, useEffect } from "react";

function FormularioProducto({ onAgregar, onActualizar, productoEditando }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    categoria: "",
    precio: "",
    stock: ""
  });

  // Cada vez que productoEditando cambie (se hizo clic en "Editar"),
  // se copian sus datos al formulario para que aparezcan precargados
  useEffect(() => {
    if (productoEditando) {
      setFormulario({
        nombre: productoEditando.nombre,
        categoria: productoEditando.categoria,
        precio: productoEditando.precio,
        stock: productoEditando.stock
      });
    }
  }, [productoEditando]);

  const manejarCambio = (evento) => {
    setFormulario({
      ...formulario,
      [evento.target.name]: evento.target.value
    });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    if (
      formulario.nombre.trim() === "" ||
      formulario.categoria.trim() === "" ||
      Number(formulario.precio) <= 0 ||
      Number(formulario.stock) < 0
    ) {
      alert("Revisa los datos del producto");
      return;
    }

    if (productoEditando) {
      // Modo edición: se conserva el id original y se actualizan los demás campos
      const productoActualizado = {
        ...productoEditando,
        nombre: formulario.nombre,
        categoria: formulario.categoria,
        precio: Number(formulario.precio),
        stock: Number(formulario.stock)
      };

      onActualizar(productoActualizado);
    } else {
      // Modo agregar: se crea un producto nuevo con id único
      const nuevoProducto = {
        id: Date.now(),
        nombre: formulario.nombre,
        categoria: formulario.categoria,
        precio: Number(formulario.precio),
        stock: Number(formulario.stock)
      };

      onAgregar(nuevoProducto);
    }

    // Limpiar formulario (vuelve a estar vacío tanto al agregar como al terminar de editar)
    setFormulario({
      nombre: "",
      categoria: "",
      precio: "",
      stock: ""
    });
  };

  return (
    <form className="agregar-producto" onSubmit={manejarEnvio}>
      <h2>
        {productoEditando ? "Editar producto" : "Agregar producto"}
      </h2>

      <div className="campos-formulario">
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
          {productoEditando ? "Guardar cambios" : "Agregar producto"}
        </button>
      </div>
    </form>
  );
}

export default FormularioProducto;