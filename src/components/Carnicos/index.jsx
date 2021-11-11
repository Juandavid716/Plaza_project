import { Template } from "../Template";
import carnicos from "../../images/carnicos.png";
import locales from "../../lib/locales.json";

export const Carnicos = () => {
  const Locales = () => {
    return (
      <div className="locales">
        <div className="frutas_image">
          <img src={carnicos} alt="carnicos"></img>
        </div>
        <div className="container_alimento">
          <h2 className="title_section"> Pescado </h2>
          <div className="cards">
            {locales.Pescado.map((item) => {
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
          <h2 className="title_section"> Carne de res </h2>
          <div className="cards">
            {locales.CarneDeRes.map((item) => {
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
          <h2 className="title_section"> Carne de cerdo </h2>
          <div className="cards">
            {locales.CarneDeRes.map((item) => {
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
