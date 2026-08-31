import { useState } from "react";
function FormularioProducto() {
const [formulario, setFormulario] = useState({
nombre: "",
categoria: "",
precio: "",
stock: ""
});
const manejarCambio = (evento) => {
setFormulario({
...formulario,
[evento.target.name]: evento.target.value
});
};
return (
<form>
<h2>Agregar producto</h2>
<input
type="text"
name="nombre"
placeholder="Nombre"
value={formulario.nombre}
onChange={manejarCambio}
/>
<input
type="text"
name="categoria"
placeholder="Categoría"
value={formulario.categoria}
onChange={manejarCambio}
/>
<input
type="number"
name="precio"
placeholder="Precio"
value={formulario.precio}
onChange={manejarCambio}
/>
<input
type="number"
name="stock"
placeholder="Stock"
value={formulario.stock}
onChange={manejarCambio}
/>
<button type="submit">
Agregar producto
</button>
</form>
);
}
export default FormularioProducto;