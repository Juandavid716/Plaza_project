import { Template } from "../Template";
import "./nosotros.css";

export const Nosotros = () => {
  const Reglamento = () => {
    return (
      <div className="reglamento">
        <div
          className="row"
          style={{ width: "100%", justifyContent: "center" }}
        >
          <h2
            className="title_section"
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "50px",
            }}
          >
            Nosotros
          </h2>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Misión y visión</h5>
                <p className="card-text">
                  Conoce la misión y visión de nuestra empresa.{" "}
                  <span className="easterEgg">
                    Mason Mount is not in my books
                  </span>
                </p>
                <a
                  href="/nosotros/mision"
                  className="btn btn-primary button-orange"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Valores y creencias</h5>
                <p className="card-text">
                  Conoce los valores y creencias de nuestra empresa.
                </p>
                <a
                  href="/nosotros/mision"
                  className="btn btn-primary button-orange"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Politicas y normas</h5>
                <p className="card-text">
                  Conoce las politicas y normas de nuestra empresa.
                </p>
                <a
                  href="/nosotros/mision"
                  className="btn btn-primary button-orange"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Template>
      <Reglamento />
    </Template>
  );
};
