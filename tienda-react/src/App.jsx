import { Routes, Route } from "react-router";

import Inicio from "./pages/Inicio";
import Inventario from "./pages/Inventario";
import NuevoProducto from "./pages/NuevoProducto";
import Acerca from "./pages/Acerca";
import NoEncontrado from "./pages/NoEncontrado";

import Navbar from "./components/Navbar";
import "../src/index.css";
import "../src/App.css";

function App() {
  return (
    <main className="contenedor">

      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/nuevo" element={<NuevoProducto />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>

    </main>
  );
}

export default App;
