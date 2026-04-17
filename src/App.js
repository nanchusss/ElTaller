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
import QuienesSomos from "./Components/QuienesSomos/QuienesSomos.js"; // ajustá el path si hace falta
import Carta from "./Components/Carta/carta.js"; 
import Experiencias from "./Components/Experiencias/Experiencias.js";
import Voucher from "./Components/Voucher/Voucher.js"





const App = () => {
  return (
    <>
      <GlobalStyle />
      
     
      <Router>
        <Header />
      
        
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/gracias" element={<Gracias />} />
          <Route path="/gracias-contacto" element={<GraciasContacto />} />
          <Route path="/grupal" element={<ReservaGrupal />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/carta" element={<Carta />} />
          <Route path="/experiencias-ceramica-granollers" element={<Experiencias />} />
          <Route path="/regala-pinta-tu-ceramica-granollers" element={<Voucher/>}/>
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
