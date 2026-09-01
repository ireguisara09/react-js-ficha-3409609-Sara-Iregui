function ProductoCard({ producto, onEliminar, modificarStock }) {

  const {
    nombre,
    precio,
    categoria,
    stock,
    precioConDescuento
  } = producto;

  const estado =
    stock > 0
      ? "Disponible"
      : "Agotado";

  const color =
    stock > 0
      ? "blue"
      : "red";

  const mostrarProducto = () => {
    alert(`Seleccionaste ${nombre}`);
  };

  const formatearPrecio = precio => {
    return precio.toLocaleString("es-CO");
  };

  return (
    <article className="producto-card">

      <h2 style={{ color }}>
        {nombre}
      </h2>

      <p>
        Categoría: {categoria}
      </p>

      <p>
        Precio: ${formatearPrecio(precio)}
      </p>

      <p>
        Precio con descuento: ${formatearPrecio(precioConDescuento)}
      </p>


      <strong>
        {estado}
      </strong>

      <br />

      <button
        onClick={mostrarProducto}
        disabled={stock === 0}
      >
        {stock > 0
          ? "Ver producto"
          : "Agotado"}
      </button>

      <button onClick={() => onEliminar(producto.id)}>
        Eliminar
      </button>

      <div>
        <button onClick={() => modificarStock(producto.id, -1)}>
          [-]
        </button>

        Stock: {stock}

        <button onClick={() => modificarStock(producto.id, 1)}>
          [+]
        </button>
      </div>

    </article>
  );
}

export default ProductoCard;

