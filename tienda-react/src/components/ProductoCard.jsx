function ProductoCard({
  producto,
  onEliminar,
  modificarStock,
  onEditar,
  mostrarMensaje
}) {
  const {
    imagen,
    nombre,
    precio,
    categoria,
    stock,
    precioConDescuento
  } = producto;

  const estado = stock > 0 ? "Disponible" : "Agotado";

  const color = stock > 0 ? "blue" : "red";

  const mostrarProducto = () => {
    mostrarMensaje(`Seleccionaste ${nombre}`);
  };

  const formatearPrecio = (precio) => {
    return precio.toLocaleString("es-CO");
  };

  return (
    <article className="producto-card">

      <img
        className="producto-imagen"
        src={imagen}
        alt={nombre}
      />

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
        Precio con descuento: $
        {formatearPrecio(precioConDescuento)}
      </p>

      <strong>
        {estado}
      </strong>

      <br />

      <button
        onClick={mostrarProducto}
        disabled={stock === 0}
      >
        {stock > 0 ? "Ver producto" : "Agotado"}
      </button>

      <button onClick={() => onEliminar(producto.id)}>
        Eliminar
      </button>

      {/* Botón para editar el producto */}
      <button onClick={() => onEditar(producto)}>
        Editar
      </button>

      <div>
        <button
          onClick={() => modificarStock(producto.id, -1)}
        >
          -
        </button>

        Stock: {stock}

        <button
          onClick={() => modificarStock(producto.id, 1)}
        >
          +
        </button>

        {stock > 0 && stock <= 2 && (
          <span className="stock-bajo">
            ⚠️ Stock bajo
          </span>
        )}
      </div>

    </article>
  );
}

export default ProductoCard;

