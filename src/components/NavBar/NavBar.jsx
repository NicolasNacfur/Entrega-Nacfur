import React from "react";
import "./NavBar.css";
import CardWidget from "../CartWidget/CardWidget";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom";
import Inicio from "../../Pages/Inicio";
import Tortas from "../../Pages/Tortas";
import Produccion from "../../Pages/Produccion";
import Nosotros from "../../Pages/Nosotros";
import Contacto from "../../Pages/Contacto";
import NotFound from "../../Pages/NotFound";
const NavBar = () => {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          
        }}
      >
       <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Tortas">Tortas</Link>
        </li>
        <li>
          <Link to="/Produccion">Produccion</Link>
        </li>
        <li>
          <Link to="/Nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/Contacto">Contacto</Link>
        </li>
        <li>
          <CardWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
