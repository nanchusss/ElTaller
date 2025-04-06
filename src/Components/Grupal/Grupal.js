// src/Components/ReservaGrupal/ReservaGrupal.js
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <Section>
      <Title>{t("reservaGrupal.titulo")}</Title>
      <Text>{t("reservaGrupal.texto1")}</Text>
      <Text>{t("reservaGrupal.texto2")}</Text>
      <Text>{t("reservaGrupal.texto3")}</Text>
      <CTAButton to="/contacto">{t("reservaGrupal.boton")}</CTAButton>
    </Section>
  );
};

export default ReservaGrupal;
