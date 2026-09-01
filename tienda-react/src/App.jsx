
import { useState } from "react";
import ProductoCard from './components/ProductoCard';
import { productos as productosIniciales } from "./data/productos";
import FormularioProducto from "./components/FormularioProducto";
import './App.css';

function App() {

  // Estados
  const [productos, setProductos] = useState(productosIniciales);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  // Productos disponibles
  const disponibles = productos.filter(
    producto => producto.stock > 0
  );

  const eliminarProducto = (id) => {
    const nuevaLista = productos.filter(
      producto => producto.id !== id
    );
    setProductos(nuevaLista);
  };

  // Modificar stock
  const modificarStock = (id, cambio) => {
    const nuevosProductos = productos.map(producto => {
      if (producto.id === id) {
        return {
          ...producto,
          stock: Math.max(
            0,
            producto.stock + cambio
          )
        };
      }
      return producto;
    });

    setProductos(nuevosProductos);
  };

  // Productos agotados
  const productosAgotados = productos.filter(
    producto => producto.stock === 0
  );

  // Valor total del inventario
  const valorInventario = productos.reduce(
    (total, producto) =>
      total + producto.precio * producto.stock,
    0
  );

  // Filtrar productos
  const productosFiltrados = productos.filter(producto => {

    const coincideNombre =
      producto.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" ||
      producto.categoria === categoria;

    const coincideStock =
      !soloDisponibles ||
      producto.stock > 0;

    return (
      coincideNombre &&
      coincideCategoria &&
      coincideStock
    );
  });

  // Agregar descuento del 10% utilizando map()
  const productosConDescuento = productosFiltrados.map(producto => ({
    ...producto,
    precioConDescuento: producto.precio * 0.90
  }));

  // Ordenar de mayor precio a menor precio
  const productosOrdenados = [...productosConDescuento].sort(
    (a, b) => b.precioConDescuento - a.precioConDescuento
  );

  const agregarProducto = (nuevoProducto) => {
    setProductos([
      ...productos,
      nuevoProducto
    ]);
  };

  return (
    <main className="contenedor">

      

      <h1>Tienda tecnológica</h1>

      {/* Indicadores de inventario */}
      <section>

        <p>
          Productos registrados: {productos.length}
        </p>

        <p>
          Productos agotados: {productosAgotados.length}
        </p>

        <p>
          Valor total del inventario: ${valorInventario}
        </p>

      </section>

      {/* Filtro por categoría */}
      <select
        value={categoria}
        onChange={(evento) =>
          setCategoria(evento.target.value)
        }
      >
        <option value="Todas">
          Todas
        </option>

        <option value="Perifericos">
          Periféricos
        </option>

        <option value="Pantallas">
          Pantallas
        </option>

        <option value="Audio">
          Audio
        </option>

        <option value="Computadores">
          Computadores
        </option>

        <option value="Almacenamiento">
          Almacenamiento
        </option>

        <option value="Dispositivos">
          Dispositivos
        </option>
      </select>

      {/* Buscar producto */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(evento) => {
          setBusqueda(evento.target.value);
        }}
      />

      {/* Mostrar solo productos disponibles */}
      <label>
        <input
          type="checkbox"
          checked={soloDisponibles}
          onChange={(evento) =>
            setSoloDisponibles(evento.target.checked)
          }
        />

        Solo productos disponibles
      </label>

      

      <FormularioProducto
        onAgregar={agregarProducto}
      />

      <br />
      <br />

      {/* Productos */}
      <section className="productos">

        {productosOrdenados.map((producto) => (
          <ProductoCard
            key={producto.id}
            producto={producto}
            onEliminar={eliminarProducto}
            modificarStock={modificarStock}
          />
        ))}

      </section>

    </main>
  );
}

export default App;


// PREGUNTA

// ¿Por qué para eliminar usamos filter() y no find()? Escriban una respuesta de una sola frase en un comentario del código.


// RTA = Usamos filter() porque necesitamos crear una nueva lista sin el producto eliminado, mientras que find() solo devuelve un elemento.