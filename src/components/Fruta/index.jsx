import frutas from "../../images/frutas.png";
import { Template } from "../Template";
import "./fruta.css";
import locales from "../../lib/locales.json";
import { useEffect } from "react";

export const Fruta = () => {
  const Locales = () => {
    return (
      <div className="locales">
        <div className="frutas_image">
          <img src={frutas} alt="frutas"></img>
        </div>
        <div className="container_alimento">
          <h2 className="title_section"> Frutas y verduras </h2>
          <div className="cards">
            {locales.verduras.map((item) => {
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
