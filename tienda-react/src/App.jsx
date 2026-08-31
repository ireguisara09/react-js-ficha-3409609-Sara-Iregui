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

  // Verifica si existe al menos un producto agotado
  const hayAgotados = productos.some(
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
      <FormularioProducto 
      onAgregar={agregarProducto}/>
      <h1>Tienda tecnológica</h1>

      <p>
        Productos disponibles: {disponibles.length}
      </p>

      <p>
        Productos encontrados: {productosFiltrados.length}
      </p>

      <p>
        Productos agotados: {hayAgotados.toString()}
      </p>

      <p>
        Valor total del inventario: ${valorInventario}
      </p>

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

      <br />
      <br />

      {/* Productos */}
      <section className="productos">

{productosOrdenados.map((producto) => (
  <ProductoCard
    key={producto.id}
    producto={producto}
    onEliminar={eliminarProducto}
  />
))}

      </section>

    </main>
    
  );
}

export default App;