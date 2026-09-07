import { Link } from "react-router-dom";

function NoEncontrado() {
  return (
    <section>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>La página que buscas no existe.</p>

      <Link to="/">
        Volver a Inicio
      </Link>
    </section>
  );
}

export default NoEncontrado;
