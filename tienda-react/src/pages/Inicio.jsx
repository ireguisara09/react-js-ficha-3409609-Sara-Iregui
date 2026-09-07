import { Link } from "react-router-dom";

function Inicio() {
  return (
    <section className="inicio">

      {/* Presentación */}
      <div className="inicio-hero">
        <div className="inicio-contenido">
          <span className="inicio-etiqueta">TECNOLOGÍA A TU ALCANCE</span>

          <h1>
            Todo lo que necesitas para tu
            <span> mundo digital</span>
          </h1>

          <p>
            Encuentra computadores, periféricos, accesorios y más
            productos tecnológicos para complementar tu experiencia.
          </p>

          <div className="inicio-botones">
            <Link to="/inventario" className="btn-principal">
              Ver productos
            </Link>

            <Link to="/acerca" className="btn-secundario">
              Conócenos
            </Link>
          </div>
        </div>

        <div className="inicio-icono">
          💻
        </div>
      </div>

      {/* Categorías */}
      <div className="inicio-seccion">
        <h2>Explora nuestras categorías</h2>

        <div className="categorias-inicio">

          <div className="categoria-inicio">
            <span>💻</span>
            <h3>Computadores</h3>
            <p>Equipos para estudio, trabajo y entretenimiento.</p>
          </div>

          <div className="categoria-inicio">
            <span>🖱️</span>
            <h3>Periféricos</h3>
            <p>Mouse, teclados y accesorios para tu equipo.</p>
          </div>

          <div className="categoria-inicio">
            <span>🎧</span>
            <h3>Audio</h3>
            <p>Audífonos y dispositivos para disfrutar tu contenido.</p>
          </div>

          <div className="categoria-inicio">
            <span>🖥️</span>
            <h3>Monitores</h3>
            <p>Pantallas para mejorar tu experiencia visual.</p>
          </div>

        </div>
      </div>

      {/* Beneficios */}
      <div className="beneficios">

        <div className="beneficio">
          <span>🚀</span>
          <div>
            <h3>Productos tecnológicos</h3>
            <p>Encuentra diferentes opciones en un solo lugar.</p>
          </div>
        </div>

        <div className="beneficio">
          <span>💰</span>
          <div>
            <h3>Precios competitivos</h3>
            <p>Opciones pensadas para diferentes presupuestos.</p>
          </div>
        </div>

        <div className="beneficio">
          <span>✨</span>
          <div>
            <h3>Experiencia sencilla</h3>
            <p>Navega, consulta y encuentra tus productos fácilmente.</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Inicio;
