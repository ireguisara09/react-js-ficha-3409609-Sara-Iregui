import { useParams } from "react-router-dom";

function DetalleProducto({ productos }) {
  const { id } = useParams();

  const producto = productos.find(
    (producto) => producto.id === Number(id)
  );

  if (!producto) {
    return (
      <section>
        <h1>Producto no encontrado</h1>
        <p>No existe un producto con el ID {id}.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>{producto.nombre}</h1>

      <img
        src={producto.imagen}
        alt={producto.nombre}
        width="300"
      />

      <p>Categoría: {producto.categoria}</p>
      <p>Precio: ${producto.precio.toLocaleString("es-CO")}</p>
      <p>Stock: {producto.stock}</p>
      <p>Estado: {producto.stock > 0 ? "Disponible" : "Agotado"}</p>
    </section>
  );
}

export default DetalleProducto;
