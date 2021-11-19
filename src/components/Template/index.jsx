import plaza from "../../images/plaza.png";
import frutas from "../../images/frutas.png";
import carnicos from "../../images/carnicos.png";
import restaurantes from "../../images/restaurantes.png";
import granos from "../../images/granos.png";
import variedades from "../../images/variedades.png";
import { Link } from "react-router-dom";
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
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/nosotros">
                    Nosotros
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/nuestraorg">
                    Nuestra organizacion
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/manuales">
                    Manuales
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/equipo">
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
          <Link to="/categorias/frutas" className="product_item">
            <div className="products_image">
              <img src={frutas} alt="frutas"></img>
            </div>
            <div className="products_name"> Frutas y verduras</div>
          </Link>
          <Link to="/categorias/carnicos" className="product_item">
            <div className="products_image">
              <img src={carnicos} alt="carnicos"></img>
            </div>
            <div className="products_name"> Cárnicos</div>
          </Link>
          <Link to="/categorias/restaurantes" className="product_item">
            <div className="products_image">
              <img src={restaurantes} alt="restaurantes"></img>{" "}
            </div>
            <div className="products_name"> Restaurantes</div>
          </Link>
          <Link to="/categorias/granos" className="product_item">
            <div className="products_image">
              <img src={granos} alt="granos"></img>{" "}
            </div>
            <div className="products_name">Granos </div>
          </Link>
          <Link to="/categorias/variedades" className="product_item">
            <div className="products_image">
              <img src={variedades} alt="variedades"></img>{" "}
            </div>
            <div className="products_name"> Variedades</div>
          </Link>
        </div>
      </div>
      <footer>
        <div className="wrapper-content">
          <div className="ubication">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.0423823378032!2d-75.62619878521451!3d8.875646693627305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5bd5d9cbf211c5%3A0xc2a302338f8b0644!2sPublic%20Market%20Cienaga%20de%20Oro!5e0!3m2!1sen!2sco!4v1637298698868!5m2!1sen!2sco"
              style={{ border: 0 }}
              width="450"
              height="350"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact-info">
            <h2>Contactenos</h2>
            <hr />
            <ul>
              <li>mercadocienagadeoro@gmail.com</li>
              <li>Ciénaga de Oro, Cordoba</li>
            </ul>
            <ul>
              <li>Horarios: Lunes a viernes 5:00 AM - 4:00 pm</li>
              <li>Festivos: 6:00 am - 3:00 pm</li>
            </ul>
          </div>
          <div className="footer-nav">
            <h2>Contenido destacado</h2>
            <hr />
            <a aria-current="page" href="/">
              Inicio
            </a>

            <a href="/nosotros">Nosotros</a>

            <a href="/nuestraorg">Nuestra organizacion</a>

            <a href="/manuales">Manuales</a>

            <a href="/equipo">¿Quieres hacer parte de nuestro equipo?</a>
          </div>
        </div>
      </footer>
      <div style={{ height: "40px", backgroundColor: "#ee731a" }}></div>
    </main>
  );
};
