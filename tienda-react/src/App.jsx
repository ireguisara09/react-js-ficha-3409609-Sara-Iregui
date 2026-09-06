import { useState, useEffect } from "react";
import ProductoCard from "./components/ProductoCard";
import { productos as productosIniciales } from "./data/productos";
import FormularioProducto from "./components/FormularioProducto";
import "./App.css";

function App() {

  const obtenerProductosIniciales = () => {
    const guardados = localStorage.getItem("inventario");

    if (guardados) {
      return JSON.parse(guardados);
    }

    return productosIniciales;
  };

  const [productos, setProductos] = useState(obtenerProductosIniciales);

  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "inventario",
      JSON.stringify(productos)
    );
  }, [productos]);

  const mostrarMensaje = (texto) => {
  setMensaje(texto);
  setTimeout(() => setMensaje(""), 3000);
};

  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [filtroEstado, setFiltroEstado] = useState("Todos");
  const [orden, setOrden] = useState("nombre-asc");
  const [productoEditando, setProductoEditando] = useState(null);

  const disponibles = productos.filter((producto) => producto.stock > 0);

const eliminarProducto = (id) => {
  if (!window.confirm("¿Seguro que quieres eliminar este producto?")) return;

  const nuevaLista = productos.filter((producto) => producto.id !== id);
  setProductos(nuevaLista);
  mostrarMensaje("Producto eliminado.");
};

  const modificarStock = (id, cambio) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id) {
        return {
          ...producto,
          stock: Math.max(0, producto.stock + cambio),
        };
      }
      return producto;
    });

    setProductos(nuevosProductos);
  };

  const editarProducto = (producto) => {
    setProductoEditando(producto);
  };

const actualizarProducto = (actualizado) => {
  const nuevaLista = productos.map((producto) =>
    producto.id === actualizado.id
      ? actualizado
      : producto
  );

  setProductos(nuevaLista);
  setProductoEditando(null);
  mostrarMensaje("Producto actualizado correctamente.");
};

  const productosAgotados = productos.filter(
    (producto) => producto.stock === 0,
  );

  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0,
  );

  const precioPromedio = productos.length > 0
  ? (productos.reduce((suma, p) => suma + p.precio, 0) / productos.length).toFixed(2)
  : 0;

  const productoMasCaro = productos.length > 0
  ? productos.reduce((max, p) => (p.precio > max.precio ? p : max), productos[0])
  : null;

  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" || producto.categoria === categoria;

    const coincideEstado =
      filtroEstado === "Todos" ||
      (filtroEstado === "Disponibles" && producto.stock > 0) ||
      (filtroEstado === "Agotados" && producto.stock === 0);

    return coincideNombre && coincideCategoria && coincideEstado;
  });
  useEffect(() => {
  if (busqueda && productosFiltrados.length === 0) {
    setMensaje("No se encontraron productos.");
  }
}, [busqueda, productosFiltrados.length]);

  const productosConDescuento = productosFiltrados.map((producto) => ({
    ...producto,
    precioConDescuento: producto.precio * 0.9,
  }));

  const productosOrdenados = [...productosConDescuento].sort((a, b) => {
    switch (orden) {
      case "nombre-asc":
        return a.nombre.localeCompare(b.nombre);
      case "precio-asc":
        return a.precio - b.precio;
      case "precio-desc":
        return b.precio - a.precio;
      case "stock-asc":
        return a.stock - b.stock;
      case "stock-desc":
        return b.stock - a.stock;
      default:
        return 0;
    }
  });

const agregarProducto = (nuevoProducto) => {
  setProductos([...productos, nuevoProducto]);
  mostrarMensaje("Producto agregado correctamente.");
};

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setFiltroEstado("Todos");
    setOrden("nombre-asc");
  };

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      {mensaje && <p className="mensaje-estado">{mensaje}</p>}

      <section className="indicadores">
        <p>Productos registrados: {productos.length}</p>

        <p>Productos agotados: {productosAgotados.length}</p>

        <p>Valor total del inventario: ${valorInventario}</p>

        <section className="indicadores">
        <p>Productos registrados: {productos.length}</p>

       <p>Productos agotados: {productosAgotados.length}</p>

      <p>Valor total del inventario: ${valorInventario}</p>

       <p>Precio promedio: ${precioPromedio}</p>

  {productoMasCaro && (
    <p>Producto más costoso: {productoMasCaro.nombre} (${productoMasCaro.precio})</p>
  )}
</section>

      </section>

      <section className="filtros">
        <select
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
        >
          <option value="Todas">Todas</option>

          <option value="Perifericos">Periféricos</option>

          <option value="Pantallas">Pantallas</option>

          <option value="Audio">Audio</option>

          <option value="Computadores">Computadores</option>

          <option value="Almacenamiento">Almacenamiento</option>

          <option value="Dispositivos">Dispositivos</option>
        </select>

        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(evento) => {
            setBusqueda(evento.target.value);
          }}
        />

        <select
          value={filtroEstado}
          onChange={(evento) => setFiltroEstado(evento.target.value)}
        >
          <option value="Todos">Todos</option>
          <option value="Disponibles">Disponibles</option>
          <option value="Agotados">Agotados</option>
        </select>

        <select
          value={orden}
          onChange={(evento) => setOrden(evento.target.value)}
        >
          <option value="nombre-asc">Nombre A-Z</option>
          <option value="precio-asc">Precio menor a mayor</option>
          <option value="precio-desc">Precio mayor a menor</option>
          <option value="stock-asc">Stock menor a mayor</option>
          <option value="stock-desc">Stock mayor a menor</option>
        </select>

        <button onClick={limpiarFiltros}>Limpiar filtros</button>

        <p>Productos encontrados: {productosFiltrados.length}</p>
      </section>
      <br></br>

      <FormularioProducto
        onAgregar={agregarProducto}
        onActualizar={actualizarProducto}
        productoEditando={productoEditando}
      />
      <br></br>

      <section className="productos">
        {productosOrdenados.map((producto) => (
<ProductoCard
  key={producto.id}
  producto={producto}
  onEliminar={eliminarProducto}
  modificarStock={modificarStock}
  onEditar={editarProducto}
  mostrarMensaje={mostrarMensaje}
/>
        ))}
      </section>
    </main>
  );
}

export default App;