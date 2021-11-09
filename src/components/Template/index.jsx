import plaza from "../../images/plaza.png";
import frutas from "../../images/frutas.png";
import carnicos from "../../images/carnicos.png";
import restaurantes from "../../images/restaurantes.png";
import granos from "../../images/granos.png";
import variedades from "../../images/variedades.png";
import "./template.css";
export const Template = ({ children }) => {
  return (
    <main>
      <div className="banner">
        <div className="logo">
          <img src={plaza} alt="plazaLogo" />
        </div>
      </div>
      <div className="navbar nav-sections">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Nosotros
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Nuestra organizacion
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Manuales
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    ¿Quieres hacer parte de nuestro equipo?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="childrenContent"> {children}</div>
      <div className="products">
        <h2>Encuentra nuestros locales comerciales por categoría</h2>
        <div className="products_items">
          <div className="product_item">
            <div className="products_image">
              <img src={frutas} alt="frutas"></img>
            </div>
            <div className="products_name"> Frutas y verduras</div>
          </div>
          <div className="product_item">
            <div className="products_image">
              <img src={carnicos} alt="carnicos"></img>
            </div>
            <div className="products_name"> Cárnicos</div>
          </div>
          <div className="product_item">
            <div className="products_image">
              <img src={restaurantes} alt="restaurantes"></img>{" "}
            </div>
            <div className="products_name"> Restaurantes</div>
          </div>
          <div className="product_item">
            <div className="products_image">
              <img src={granos} alt="granos"></img>{" "}
            </div>
            <div className="products_name">Granos </div>
          </div>
          <div className="product_item">
            <div className="products_image">
              <img src={variedades} alt="variedades"></img>{" "}
            </div>
            <div className="products_name"> Variedades</div>
          </div>
        </div>
      </div>
    </main>
  );
};
