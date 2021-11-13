import { Template } from "../Template";
import "./reglamento.css";

export const Reglamento = () => {
  const Contenido = () => {
    return (
      <div className="reglamento">
        <div
          className="row"
          style={{ width: "100%", justifyContent: "center" }}
        >
          <section className="information">
            <h2
              className="title_section"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "50px",
              }}
            >
              Misión
            </h2>
            <div className="item">
              <p>
                El mercado de Ciénaga de Oro está comprometido a brindarles
                oportunidades de empleo a los Orenses, así como un lugar
                agradable y seguro en donde puedan adquirir los elementos de la
                canasta básica alimenticia, ofreciendo productos de alta calidad
                traídos directamente del campo, conservando el medio ambiente a
                través de su cosecha, trabajando siempre con honestidad,
                responsabilidad y compromiso hacia el cliente.
              </p>
            </div>
          </section>
          <section className="information">
            <h2
              className="title_section"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "50px",
              }}
            >
              Visión
            </h2>
            <div className="item">
              <p>
                Consolidar el mercado de ciénaga de oro como un negocio concreto
                y planificado brindando seguridad y confianza a sus
                trabajadores, aprovechando al máximo la nueva infraestructura
                dotada. Insertar al mercado del municipio en la economía
                departamental a través de una administración comprometida y
                transparente.
              </p>
            </div>
          </section>

          <section className="information">
            <h2
              className="title_section"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "50px",
              }}
            >
              Nuestros valores
            </h2>
            <div className="item">
              <ul>
                <li className="item_list"> Responsabilidad </li> Nos
                responsabilizamos de que todos los clientes reciban productos de
                calidad, así mismo, de brindar un lugar seguro para garantizar
                la integridad de los clientes y trabajadores.
                <li className="item_list"> Honestidad </li> Nos comprometemos a
                ser transparentes con todos nuestros procesos, como lo es
                ofrecer precios justos a nuestros clientes sin tratar de tomar
                ventaja sobre ellos.
                <li className="item_list">Respeto </li> Respetamos tanto a
                nuestros empleados como a nuestros clientes, evitando cualquier
                situación que pudiera llevar a la ausencia de este importante
                valor.
                <li className="item_list"> Trabajo en equipo </li> Trabajamos en
                conjunto con sus colaboradores de manera que se logren
                garantizar los requerimientos que exigen los clientes en
                relación a sus productos y servicios:
                <li className="item_list"> Calidad </li> Estamos comprometidos a
                entregar productos de calidad a nuestros clientes por lo que
                nuestros colaboradores hacen uso de buenas prácticas en cada una
                de nuestras actividades.
                <li className="item_list"> Resolución de problemas </li>El
                mercado estará en constante búsqueda de mejoras que darán
                solución a posibles problemas, y adicionalmente capacitar a
                nuestros empleados para que en situaciones difíciles no se
                desesperen sino que entre todos logren brindar soluciones.
                <li className="item_list">Responsabilidad social </li>Somos
                conscientes del impacto que generan nuestras actividades en
                términos económicos, sociales y ambientales
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  };
  return (
    <Template>
      <Contenido />
    </Template>
  );
};
