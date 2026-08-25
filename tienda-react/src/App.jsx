import ProductoCard from './components/ProductoCard'; 
import { productos } from './data/productos'; 
import './App.css'; 
import { useState } from "react";
function App() { 
 const disponibles = productos.filter(producto => producto.stock > 0); 
 const hayAgotados = productos.some(producto => producto.stock === 0);
 const valorInventario = productos.reduce( 
 (total, producto) => total + producto.precio * producto.stock, 
 0 
 ); 
 const [busqueda, setBusqueda] = useState("");
 const productosFiltrados =
productos.filter(producto =>
producto.nombre
.toLowerCase()
.includes(
busqueda.toLowerCase()
)
);
 return ( 
 <main className="contenedor"> 
 <h1>Tienda tecnológica</h1> 
 <p>Productos disponibles: {disponibles.length}</p>
 <p>Productos agotados: {hayAgotados.toString()}</p> 
 <p>Valor total del inventario: ${valorInventario}</p> 
 <input
  type="text"
  placeholder="Buscar producto..."
  value={busqueda}
  onChange={(evento) => {
  setBusqueda(evento.target.value);
}}
/>
<br>
</br>
<br>
</br> 

 <section className="productos"> 
 {productosFiltrados.map(producto => (
<ProductoCard
key={producto.id}
producto={producto}
/>
))}

 </section> 
 </main> 
 ); 
} 
export default App; 
