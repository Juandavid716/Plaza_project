import { Template } from "../Template";
import "./politicas.css";
export const Politicas = () => {
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
              Políticas direccionadoras
            </h2>
            <div className="item">
              <ul className="politicas_ul">
                <li>
                  Ofrecer precios justos que causan atracción al consumidor.
                </li>
                <li>
                  Preservar el entorno ambiental y la seguridad de la comunidad
                  en todo trabajo.
                </li>
                <li>
                  Fomentar un espíritu laboral agradable para el buen
                  funcionamiento de la empresa.
                </li>
                <li> Ofrecer productos de alta calidad.</li>
                <li>
                  Facilitar soluciones a la comunidad teniendo en cuenta sus
                  quejas y reclamos.
                </li>
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
              Normas
            </h2>
            <div className="normas">
              <div className="col-sm-3">
                <div className="item">
                  <h3
                    className="title_section"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "28px",
                      marginLeft: 0,
                      textAlign: "initial",
                    }}
                  >
                    REGLAMENTO EXTERNO: Aplicado a los clientes.
                  </h3>
                  <h3
                    className="title_section"
                    style={{
                      fontSize: "28px",
                      marginLeft: 0,
                      textAlign: "initial",
                      marginTop: "40px",
                    }}
                  >
                    Derechos de los clientes
                  </h3>
                  <ul className="politicas_ul">
                    <li>
                      Presentar quejas o reclamos a la administración de forma
                      respetuosa.
                    </li>
                    <li>
                      Recibir un trato justo y agradable tanto de la
                      administración como de los empleados del mercado.
                    </li>
                    <li>Informar o denunciar algún tipo de abuso.</li>
                    <li>
                      Ser tratado con respeto por parte de los demás clientes.
                    </li>
                    <li>
                      Facilitar soluciones a la comunidad teniendo en cuenta sus
                      quejas y reclamos.
                    </li>
                  </ul>
                  <h3
                    className="title_section"
                    style={{
                      fontSize: "28px",
                      marginLeft: 0,
                      textAlign: "initial",
                      marginTop: "40px",
                    }}
                  >
                    Obligaciones de los clientes
                  </h3>
                  <ul className="politicas_ul">
                    <li>Pagar por el producto obtenido.</li>
                    <li>Tratar con respeto a los empleados.</li>
                    <li>
                      Cumplir con las normas de bioseguridad suministradas por
                      el establecimiento.
                    </li>
                    <li>Esperar su turno para comprar.</li>
                  </ul>
                  <h3
                    className="title_section"
                    style={{
                      fontSize: "28px",
                      marginLeft: 0,
                      textAlign: "initial",
                      marginTop: "40px",
                    }}
                  >
                    Prohibiciones de los clientes
                  </h3>

                  <ul className="politicas_ul">
                    <li>
                      Intentar entrar al mercado en horarios no laborables.
                    </li>
                    <li>Tomar algun articulo del mercado sin pagar</li>
                    <li>Tomar el turno de compra de otro cliente.</li>
                    <li>
                      Irrespetar la estructura o edificación del mercado.{" "}
                    </li>
                    <li>
                      Intentar vender en las instalaciones sin ser miembro del
                      grupo registrado desde administración.{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="item">
                  <h3
                    className="title_section"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "28px",
                      marginLeft: 0,
                      textAlign: "initial",
                    }}
                  >
                    REGLAMENTO INTERNO: Aplicado a los empleados.
                  </h3>
                  <h3
                    className="title_section"
                    style={{
                      fontSize: "28px",
                      marginLeft: 0,
                      textAlign: "initial",
                      marginTop: "40px",
                    }}
                  >
                    Derechos de los empleados.
                  </h3>
                  <ul className="politicas_ul">
                    <li>Contar con un horario de almuerzo </li>
                    <li>
                      Denunciar cualquier tipo de abuso por parte de la
                      administración o de sus colegas.
                    </li>
                    <li>Laborar exclusivamente bajo las horas estipuladas </li>
                    <li>Disponer responsablemente de su puesto asignado. </li>
                    <li>
                      Ser tratado con respeto por la administración, colegas y
                      clientes.{" "}
                    </li>
                  </ul>
                  <h3
                    className="title_section"
                    style={{
                      fontSize: "28px",
                      marginLeft: 0,
                      textAlign: "initial",
                      marginTop: "40px",
                    }}
                  >
                    Obligaciones de los empleados.
                  </h3>
                  <ul className="politicas_ul">
                    <li>Cumplir con su horario laboral</li>
                    <li>Cumplir las normas de bioseguridad</li>
                    <li>
                      Velar por el mantenimiento e higiene de su puesto de
                      trabajo
                    </li>
                    <li>
                      Tratar a los clientes, compañeros de trabajo y superiores
                      con respeto
                    </li>
                    <li>Respetar las instalaciones del mercado.</li>
                    <li>Pagar por daños sobre la infraestructura. </li>
                    <li>Reportar accidentes laborales. </li>
                  </ul>
                  <h3
                    className="title_section"
                    style={{
                      fontSize: "28px",
                      marginLeft: 0,
                      textAlign: "initial",
                      marginTop: "40px",
                    }}
                  >
                    Prohibiciones de los empleados.
                  </h3>

                  <ul className="politicas_ul">
                    <li>Consumir bebidas alcohólicas en horario laboral</li>
                    <li>
                      Obstruir los pasillos peatonales o de circulación y los
                      lugares de acceso a las instalaciones.
                    </li>
                    <li>
                      Atraer compradores por medio de gritos o con aparatos
                      amplificadores de sonido.{" "}
                    </li>
                    <li>
                      Incumplimiento de normas y/o manuales presentados por la
                      administración
                    </li>
                    <li>
                      Perturbar en alguna forma la disciplina y el orden
                      establecido.{" "}
                    </li>
                    <li>
                      Formar agrupaciones que actúan ilícitamente con fines
                      políticos, en contra de los principios que regulan el buen
                      funcionamiento del Mercado.
                    </li>
                  </ul>
                </div>
              </div>
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
