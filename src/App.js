import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Fruta } from "./components/Fruta";
import { Carnicos } from "./components/Carnicos";
import { Restaurantes } from "./components/Restaurantes";
import { Variedades } from "./components/Variedades";
import { Granos } from "./components/Granos";
import { Inicio } from "./components/Inicio";

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
      </Routes>
    </Router>
  );
}

export default App;
