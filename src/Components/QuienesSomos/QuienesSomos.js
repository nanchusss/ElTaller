import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #fff9f0;
  padding: 5rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #5a7263;
  font-family: "Playfair Display", serif;
  margin-bottom: 1.5rem;
`;

const TextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 3rem auto;
  color: #6d6762;
  font-size: 1.15rem;
  line-height: 1.8;
  font-family: "Open Sans", sans-serif;
`;

const Cita = styled.blockquote`
  font-style: italic;
  font-size: 1.2rem;
  color: #e3a092;
  margin: 3rem auto 1rem;
  max-width: 600px;
  border-left: 4px solid #e3a092;
  padding-left: 1rem;
`;

const Autor = styled.p`
  font-size: 1rem;
  color: #6d6762;
  margin-top: 0.5rem;
`;

const QuienesSomos = () => {
  return (
    <Section>
      <Title>Quiénes somos</Title>
      <TextContainer>
        <p>
          El Taller d’Aguaymanto es un sueño hecho a mano. Está formado por mi
          madre, Marité, y por mí, Nancy. Somos una familia de mujeres
          ceramistas: yo soy la tercera generación, después de mi bisabuela
          Ligia —una ceramista y pintora apasionada que nos abrió el camino.
        </p>
        <p>
          Hace años que Aguaymanto es nuestro motor creativo, nuestra forma de
          celebrar la vida y conectarnos. Soñábamos con un espacio donde
          compartir esa alegría con otras personas, donde las manos, el barro y
          la risa se encuentren.
        </p>
        <p>
          Hoy, ese lugar existe. Y te damos la bienvenida con las manos
          abiertas.
        </p>
      </TextContainer>

      <Cita>“El barro guarda la memoria de las manos que lo tocaron.”</Cita>
      <Autor>— Anónima</Autor>
    </Section>
  );
};

export default QuienesSomos;
