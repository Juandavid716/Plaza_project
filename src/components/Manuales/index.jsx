import React from "react";
import { Template } from "../Template";
import manualAL from "../../documentos/ManualAL.pdf";
import manual1 from "../../images/manual1.PNG";
import "./manuales.css";
import { Link } from "react-router-dom";

export const Manuales = () => {
  const Contenido = () => {
    return (
      <div style={{ margin: "40px 0px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3
            className="title_section"
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "36px",
              marginLeft: 0,
              textAlign: "initial",
              marginTop: "40px",
            }}
          >
            Manuales
          </h3>
          <div className="manuales">
            <div className="col-sm-3">
              <Link to={manualAL} target="_blank" download>
                <img className="image_manual" src={manual1} alt="manual 1" />
              </Link>
            </div>
            <div className="col-sm-3">
              <Link to={manualAL} target="_blank" download>
                <img className="image_manual" src={manual1} alt="manual 1" />
              </Link>
            </div>
            <div className="col-sm-3">
              <Link to={manualAL} target="_blank" download>
                <img className="image_manual" src={manual1} alt="manual 1" />
              </Link>
            </div>
          </div>
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
