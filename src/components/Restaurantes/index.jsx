import restaurantes from "../../images/restaurantes.png";
import { Template } from "../Template";
import locales from "../../lib/locales.json";
export const Restaurantes = () => {
  const Locales = () => {
    return (
      <div className="locales">
        <div className="frutas_image">
          <img src={restaurantes} alt="carnicos"></img>
        </div>
        <div className="container_alimento">
          <h2 className="title_section"> Restaurantes </h2>
          <div className="cards">
            {locales.Restaurantes.map((item) => {
              return (
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Local {item.numeroLocal}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Encargado(s)
                    </h6>
                    <p className="card-text">{item.encargados.join(" , ")}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <h2 className="title_section"> Fritos </h2>
          <div className="cards">
            {locales.Fritos.map((item) => {
              return (
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Local {item.numeroLocal}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Encargado(s)
                    </h6>
                    <p className="card-text">{item.encargados.join(" , ")}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <h2 className="title_section"> Jugos </h2>
          <div className="cards">
            {locales.Jugos.map((item) => {
              return (
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Local {item.numeroLocal}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Encargado(s)
                    </h6>
                    <p className="card-text">{item.encargados.join(" , ")}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  return (
    <Template>
      <Locales />
    </Template>
  );
};
