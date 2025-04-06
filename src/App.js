import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Components/styles/GlobalStyle";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Reservas from "./Components/Reservas/Reservas";
import Header from "./Components/Header/Header";
import Contacto from "./Components/Contacto/Contacto";
import Gracias from "./Components/Gracias/Gracias";
import GraciasContacto from "./Components/GraciasContacto/GraciasContacto";
import ReservaGrupal from "./Components/Grupal/Grupal.js";
import Eventos from "./Components/Eventos/Eventos.js";
import QuienesSomos from "./Components/QuienesSomos/QuienesSomos"; // ajustá el path si hace falta

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        ></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/gracias" element={<Gracias />} />
          <Route path="/GraciasContacto" element={<GraciasContacto />} />
          <Route path="/Grupal" element={<ReservaGrupal />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/quienesSomos" element={<QuienesSomos />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
