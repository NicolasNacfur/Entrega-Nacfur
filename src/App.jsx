import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CardUser from "./components/CardUser/CardUser";
import NavBar from "./components/NavBar/NavBar";
import SubHeadingTitle from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Tortas from "./Pages/Tortas";
import Produccion from "./Pages/Produccion";
import Nosotros from "./Pages/Nosotros";
import Contacto from "./Pages/Contacto";
import NotFound from "./Pages/NotFound";
import Producto from "./Pages/producto/[id].jsx";
import Featured from "./Pages/feature/[id].jsx";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Tortas" element={<Tortas />} />
          <Route path="/Produccion" element={<Produccion />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/feature/:id" element={<Featured />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
};

export default App;
