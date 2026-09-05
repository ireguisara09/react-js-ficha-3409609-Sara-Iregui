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


  useEffect(() => {
    localStorage.setItem(
      "inventario",
      JSON.stringify(productos)
    );
  }, [productos]);

  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  // null significa que en este momento no hay ningún producto en modo edición
  const [productoEditando, setProductoEditando] = useState(null);

  const disponibles = productos.filter((producto) => producto.stock > 0);

  const eliminarProducto = (id) => {
    const nuevaLista = productos.filter((producto) => producto.id !== id);
    setProductos(nuevaLista);
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

  // Guarda el producto seleccionado en el estado, activando el modo edición
  const editarProducto = (producto) => {
    setProductoEditando(producto);
  };

  // Reemplaza el producto editado dentro del arreglo y sale del modo edición
  const actualizarProducto = (actualizado) => {
    const nuevaLista = productos.map((producto) =>
      producto.id === actualizado.id
        ? actualizado
        : producto
    );

    setProductos(nuevaLista);
    setProductoEditando(null);
  };


  const productosAgotados = productos.filter(
    (producto) => producto.stock === 0,
  );


  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0,
  );

  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" || producto.categoria === categoria;

    const coincideStock = !soloDisponibles || producto.stock > 0;

    return coincideNombre && coincideCategoria && coincideStock;
  });


  const productosConDescuento = productosFiltrados.map((producto) => ({
    ...producto,
    precioConDescuento: producto.precio * 0.9,
  }));


  const productosOrdenados = [...productosConDescuento].sort(
    (a, b) => b.precioConDescuento - a.precioConDescuento,
  );

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };


  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
  };

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>


      <section className="indicadores">
        <p>Productos registrados: {productos.length}</p>

        <p>Productos agotados: {productosAgotados.length}</p>

        <p>Valor total del inventario: ${valorInventario}</p>
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


        <label className="checkbox-disponibles">
          <input
            type="checkbox"
            checked={soloDisponibles}
            onChange={(evento) => setSoloDisponibles(evento.target.checked)}
          />
          Solo productos disponibles
        </label>


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
          />
        ))}
      </section>
    </main>
  );
}

export default App;