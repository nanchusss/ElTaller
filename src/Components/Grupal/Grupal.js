// src/Components/ReservaGrupal/ReservaGrupal.js
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Section = styled.section`
  background-color: #fff9f0;
  padding: 4rem 1.5rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #5a7263;
  font-family: "Playfair Display", serif;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  max-width: 700px;
  margin: 0 auto 2rem;
  color: #6d6762;
  font-size: 1.2rem;
`;

const CTAButton = styled(NavLink)`
  background-color: #f0b65b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dda94f;
  }
`;

const ReservaGrupal = () => {
  return (
    <Section>
      <Title>Reservas Grupales</Title>
      <Text>
        ¿Estás planeando una actividad para un grupo grande? En El Taller nos
        encanta recibir familias, colegios, equipos y celebraciones especiales.
      </Text>
      <Text>
        Para reservas de más de 6 personas, gestionamos todo de forma
        personalizada. Solo necesitamos saber cuántos son, qué día prefieren y
        si tienen alguna idea especial en mente.
      </Text>
      <Text>
        Podés escribirnos desde el siguiente enlace y nos pondremos en contacto
        para coordinarlo todo con vos:
      </Text>
      <CTAButton to="/contacto">Enviar mensaje</CTAButton>
    </Section>
  );
};

export default ReservaGrupal;
