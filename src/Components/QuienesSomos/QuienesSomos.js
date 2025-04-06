import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Section = styled.section`
  background-color: #fbf3e6;
  background-image: url("/assets/fondo-quienes.png");
  background-repeat: repeat;
  background-size: 800px;
  background-position: center;
  padding: 5rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #5a7263;
  font-family: "Playfair Display", serif;
  margin-bottom: 2rem;
`;

const TextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  color: #6d6762;
  font-size: 1.15rem;
  line-height: 1.8;
  font-family: "Open Sans", sans-serif;
  text-align: left;

  p + p {
    margin-top: 1.5rem;
  }
`;

const QuienesSomos = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Title>{t("quienes.titulo")}</Title>
      <TextContainer>
        <p>{t("quienes.p1")}</p>
        <p>{t("quienes.p2")}</p>
        <p>{t("quienes.p3")}</p>
      </TextContainer>
    </Section>
  );
};

export default QuienesSomos;
