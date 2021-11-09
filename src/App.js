import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Fruta } from "./components/Fruta";
import { Inicio } from "./components/Inicio";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/categorias/frutas" element={<Fruta />} />
      </Routes>
    </Router>
  );
}

export default App;
