import { Template } from "../Template";
import carta from "../../documentos/CartaInteres.docx";
import "./equipo.css";

export const Equipo = () => {
  const Contenido = () => {
    return (
      <div className="reglamento">
        <div
          className="row"
          style={{ width: "100%", justifyContent: "center" }}
        >
          <section className="information">
            <h1 className="item">
              Si quieres hacer parte de nuestra organización debes realizar los
              siguientes pasos:
            </h1>
            <div className="item item--step">
              <h2
                className="title_section"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "50px",
                  position: "relative",
                  top: "17px",
                  marginRight: "26px",
                }}
              >
                1
              </h2>
              <p className="item-text">
                Debes diligenciar la carta de interés mostrada a continuación,
                en donde se expresa tu deseo de querer hacer parte de nuestro
                mercado municipal. <br />
                <a href={carta} download>
                  Carta de interés
                </a>
              </p>
            </div>

            <div className="item item--step">
              <h2
                className="title_section"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "50px",
                  position: "relative",
                  top: "17px",
                  marginRight: "26px",
                }}
              >
                2
              </h2>
              <p className="item-text">
                Luego, debes enviar la carta de interés totalmente diligenciada
                a nuestro correo electrónico{" "}
                <a href="mailto:mercadocienagadeoro@gmail.com">
                  mercadocienagadeoro@gmail.com
                </a>
                , o puedes llevarla a las oficinas de la alcaldía de Ciénaga de
                Oro.
              </p>
            </div>
            <div className="item item--step">
              <h2
                className="title_section"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "50px",
                  position: "relative",
                  top: "17px",
                  marginRight: "26px",
                }}
              >
                3
              </h2>
              <p className="item-text">
                Dependiendo tu forma de envío, el encargado del mercado
                municipal te hará entrega de un formulario solicitando
                información más detallada. Si enviaste la carta de interés
                mediante correo electrónico, en un lapso de 1-2 días hábiles se
                te hará llegar a tu email un formulario donde debes contestar
                esa información más detallada. Por el contrario, si hiciste
                entrega de la carta de interés presencialmente, se te brindará
                dentro de 1-2 días hábiles el mismo formulario en versión
                física.
              </p>
            </div>
            <div className="item item--step">
              <h2
                className="title_section"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "50px",
                  position: "relative",
                  top: "17px",
                  marginRight: "26px",
                }}
              >
                4
              </h2>
              <p className="item-text">
                Por último, solo debes esperar a la aprobación para hacer parte
                de nuestro mercado municipal. Esta aprobación llegará vía email
                o puedes consultar en las oficinas de la alcaldía dentro de 5-6
                días después de la entrega del formulario.
              </p>
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
