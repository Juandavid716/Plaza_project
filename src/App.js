import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Fruta } from "./components/Fruta";
import { Carnicos } from "./components/Carnicos";
import { Restaurantes } from "./components/Restaurantes";
import { Variedades } from "./components/Variedades";
import { Granos } from "./components/Granos";
import { Inicio } from "./components/Inicio";
import { Nosotros } from "./components/Nosotros";
import { Reglamento } from "./components/Reglamento";
import { Valores } from "./components/Valores";
import { Politicas } from "./components/Politicas";
import { Organigrama } from "./components/Organigrama";
import { Manuales } from "./components/Manuales";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/categorias/frutas" element={<Fruta />} />
        <Route exact path="/categorias/carnicos" element={<Carnicos />} />
        <Route
          exact
          path="/categorias/restaurantes"
          element={<Restaurantes />}
        />
        <Route exact path="/categorias/variedades" element={<Variedades />} />
        <Route exact path="/categorias/granos" element={<Granos />} />
        <Route exact path="/nosotros" element={<Nosotros />} />
        <Route exact path="/nosotros/mision" element={<Reglamento />} />
        <Route exact path="/nosotros/valores" element={<Valores />} />
        <Route exact path="/nosotros/politicas" element={<Politicas />} />
        <Route exact path="/nuestraorg" element={<Organigrama />} />
        <Route exact path="/manuales" element={<Manuales />} />
      </Routes>
    </Router>
  );
}

export default App;
