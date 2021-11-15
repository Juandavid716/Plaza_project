import { Template } from "../Template";

export const Valores = () => {
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
          <section className="information">
            <h2
              className="title_section"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "50px",
              }}
            >
              Nuestras creencias
            </h2>
            <div className="item">
              El mercado de ciénaga de oro, considera muchas convicciones como
              lo son, el apoyo al comercio local, pues la mayoría de sus
              productos provienen directamente de campesinos o comerciantes de
              la zona, también considera el impacto ambiental generado por las
              prácticas de las actividades del mercado y sus colaboradores tales
              como pesca, manejo de productos y manejo de residuos.
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
