// src/Components/AvisoPopup.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import octubre from "../Home/Images/octubre.png";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Popup = styled.div`
  background: #fff9f0;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #5a7263;
  margin-bottom: 1rem;
`;

// const Text = styled.p`
//   color: #6d6762;
//   font-size: 1rem;
//   margin-bottom: 1.5rem;
// `;

const Button = styled.button`
  background-color: #f0b65b;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #dda94f;
  }
`;

const AvisoPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("popupShown");
    if (!alreadyShown) {
      setVisible(true);
      sessionStorage.setItem("popupShown", "true");
    }
  }, []);

  if (!visible) return null;

  return (
    <Overlay>
      <Popup>
        <img src={octubre} alt="Aviso" style={{ width: '1000px', marginBottom: '1rem' }} />
        <Title>¡Novedad en Octubre!</Title>
        <Button onClick={() => setVisible(false)}>Entendido</Button>
      </Popup>
    </Overlay>
  );
};

export default AvisoPopup;
