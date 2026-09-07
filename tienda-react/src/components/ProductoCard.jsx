
import { NavLink } from "react-router-dom";

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

  const disponible = stock > 0;

  const estado = disponible ? "Disponible" : "Agotado";

  const mostrarProducto = () => {
    mostrarMensaje(`Seleccionaste ${nombre}`);
  };

  const formatearPrecio = (precio) => {
    return precio.toLocaleString("es-CO");
  };

  return (
    <article className="producto-card">

      {/* Imagen */}
      <div className="producto-imagen-contenedor">
        <img
          className="producto-imagen"
          src={imagen}
          alt={nombre}
        />
      </div>

      {/* Categoría */}
      <span className="categoria">
        {categoria}
      </span>

      {/* Nombre */}
      <h2 className={disponible ? "producto-disponible" : "producto-agotado"}>
        {nombre}
      </h2>

      {/* Precios */}
      <div className="precios">

        <p className="precio-original">
          ${formatearPrecio(precio)}
        </p>

        <p className="precio-descuento">
          ${formatearPrecio(precioConDescuento)}
        </p>

      </div>

      {/* Estado */}
      <p className={disponible ? "disponible" : "agotado"}>
        ● {estado}
      </p>

      {/* Stock */}
      <div className="control-stock">

        <button
          className="boton-stock"
          onClick={() => modificarStock(producto.id, -1)}
          disabled={stock === 0}
        >
          −
        </button>

        <span>
          Stock: <strong>{stock}</strong>
        </span>

        <button
          className="boton-stock"
          onClick={() => modificarStock(producto.id, 1)}
        >
          +
        </button>

      </div>

      {/* Alerta de stock bajo */}
      {stock > 0 && stock <= 2 && (
        <span className="stock-bajo">
          ⚠️ Stock bajo
        </span>
      )}

      {/* Acciones principales */}
      <div className="acciones-principales">

        <button
          className="boton-ver"
          onClick={mostrarProducto}
          disabled={!disponible}
        >
          {disponible ? "Ver producto" : "Agotado"}
        </button>

        <NavLink
          className="boton-detalle"
          to={`/productos/${producto.id}`}
        >
          Ver detalle
        </NavLink>

      </div>

      {/* Acciones administrativas */}
      <div className="acciones-secundarias">

        <button
          className="boton-editar"
          onClick={() => onEditar(producto)}
        >
          Editar
        </button>

        <button
          className="boton-eliminar"
          onClick={() => onEliminar(producto.id)}
        >
          Eliminar
        </button>

      </div>

    </article>
  );
}

export default ProductoCard;
