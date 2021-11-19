import React from "react";
import { Template } from "../Template";
import Manual1 from "../../documentos/Manual1.pdf";
import Manual2 from "../../documentos/Manual2.pdf";
import Manual3 from "../../documentos/Manual3.pdf";
import manual1 from "../../images/manual1.PNG";
import manual2 from "../../images/manual2.PNG";
import manual3 from "../../images/manual3.PNG";
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
            <div className="col-sm-3" style={{ marginTop: "20px" }}>
              <Link
                className="manualImage"
                to={Manual1}
                target="_blank"
                download
              >
                <img className="image_manual" src={manual1} alt="manual 1" />
              </Link>
            </div>
            <div className="col-sm-3" style={{ marginTop: "20px" }}>
              <Link
                className="manualImage"
                to={Manual2}
                target="_blank"
                download
              >
                <img className="image_manual" src={manual2} alt="manual 1" />
              </Link>
            </div>
            <div className="col-sm-3" style={{ marginTop: "20px" }}>
              <Link
                className="manualImage"
                to={Manual3}
                target="_blank"
                download
              >
                <img className="image_manual" src={manual3} alt="manual 1" />
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
