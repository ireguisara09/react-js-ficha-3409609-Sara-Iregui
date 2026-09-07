function Acerca() {
  return (
    <section className="acerca">

      {/* Encabezado */}
      <div className="acerca-header">
        <span className="acerca-etiqueta">SOBRE NOSOTROS</span>

        <h1>
          Tecnología pensada para
          <span> ti</span>
        </h1>

        <p>
          Somos una tienda tecnológica enfocada en ofrecer productos
          y accesorios para facilitar el estudio, el trabajo y el
          entretenimiento digital.
        </p>
      </div>

      {/* Información principal */}
      <div className="acerca-contenido">

        <div className="acerca-card">
          <span className="acerca-icono">🎯</span>

          <h2>Nuestra misión</h2>

          <p>
            Brindar una experiencia sencilla para que nuestros usuarios
            puedan conocer, consultar y encontrar productos tecnológicos
            de acuerdo con sus necesidades.
          </p>
        </div>

        <div className="acerca-card">
          <span className="acerca-icono">💡</span>

          <h2>Nuestra visión</h2>

          <p>
            Construir una tienda tecnológica moderna, intuitiva y fácil
            de utilizar, incorporando herramientas digitales que mejoren
            la experiencia de compra.
          </p>
        </div>

        <div className="acerca-card">
          <span className="acerca-icono">⚙️</span>

          <h2>¿Qué ofrecemos?</h2>

          <p>
            Contamos con diferentes categorías de productos tecnológicos,
            información de precios, disponibilidad, descuentos y control
            de inventario.
          </p>
        </div>

      </div>

      {/* Tecnología */}
      <div className="acerca-tecnologia">

        <h2>Desarrollada con tecnología web</h2>

        <p>
          Este proyecto fue desarrollado utilizando React y JavaScript,
          aplicando conceptos de componentes, rutas, estados, arreglos,
          funciones y manejo de información.
        </p>

        <div className="tecnologias">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Vite</span>
        </div>

      </div>

    </section>
  );
}

export default Acerca;
