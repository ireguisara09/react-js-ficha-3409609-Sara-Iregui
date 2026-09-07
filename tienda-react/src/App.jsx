import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Inventario from "./pages/Inventario";
import NuevoProducto from "./pages/NuevoProducto";
import DetalleProducto from "./pages/DetalleProducto";
import Acerca from "./pages/Acerca";
import NoEncontrado from "./pages/NoEncontrado";

import Navbar from "./components/Navbar";
import { productos as productosIniciales } from "./data/productos";

import "../src/index.css";
import "../src/App.css";

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
    localStorage.setItem("inventario", JSON.stringify(productos));
  }, [productos]);

  const mostrarMensaje = (texto) => {
    setMensaje(texto);

    setTimeout(() => {
      setMensaje("");
    }, 3000);
  };

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
    mostrarMensaje("Producto agregado correctamente.");
  };

  const actualizarProducto = (actualizado) => {
    const nuevaLista = productos.map((producto) =>
      producto.id === actualizado.id ? actualizado : producto
    );

    setProductos(nuevaLista);
    mostrarMensaje("Producto actualizado correctamente.");
  };

  const eliminarProducto = (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este producto?")) {
      return;
    }

    const nuevaLista = productos.filter(
      (producto) => producto.id !== id
    );

    setProductos(nuevaLista);
    mostrarMensaje("Producto eliminado.");
  };

  const modificarStock = (id, cambio) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id) {
        return {
          ...producto,
          stock: Math.max(0, producto.stock + cambio)
        };
      }

      return producto;
    });

    setProductos(nuevosProductos);
  };

  return (
  <>
    <Navbar />

    {mensaje && (
      <div className="mensaje-exito">
        {mensaje}
      </div>
    )}

    <main className="contenedor">
      <Routes>

        <Route
          path="/"
          element={<Inicio />}
        />

        <Route
          path="/inventario"
          element={
            <Inventario
              productos={productos}
              eliminarProducto={eliminarProducto}
              modificarStock={modificarStock}
            />
          }
        />

        <Route
          path="/nuevo"
          element={
            <NuevoProducto
              agregarProducto={agregarProducto}
            />
          }
        />
         <Route
          path="/productos/:id"
          element={<DetalleProducto productos={productos} />}
        />
        <Route
          path="/acerca"
          element={<Acerca />}
        />

        <Route
          path="*"
          element={<NoEncontrado />}
        />

      </Routes>
    </main>
  </>
);
}

export default App;