import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import imagen1 from "./images/evento1.png";
import imagen2 from "./images/evento2.png";
import imagen3 from "./images/evento3.png";
import { Helmet } from "react-helmet";

<Helmet>
  <title>El Taller d’Aguaymanto – Cerámica, plantas y café</title>
  <meta
    name="description"
    content="Un espacio creativo en Barcelona para talleres, eventos y experiencias con cerámica."
  />
</Helmet>;

const Section = styled.section`
  background-color: #fff9f0;
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #5a7263;
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const SubText = styled.p`
  max-width: 800px;
  margin: 0 auto 3rem auto;
  color: #6d6762;
  font-size: 1.1rem;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto 4rem auto;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 2rem;
  text-align: left;
`;

const CardTitle = styled.h3`
  color: #5a7263;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  font-family: "Playfair Display", serif;

  letter-spacing: 0.5px;
`;

const CardText = styled.p`
  color: #6d6762;
  font-size: 1.05rem;
  line-height: 1.6;
  font-family: "Open Sans", sans-serif;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: #f0b65b;
  color: white;
  padding: 1rem 2.5rem;
  font-weight: bold;
  border-radius: 12px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #dda94f;
  }
`;

const Eventos = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Title>{t("eventos.titulo")}</Title>
      <SubText>{t("eventos.subtexto")}</SubText>

      <CardsContainer>
        <Card>
          <CardImage src={imagen1} alt="Team building" />
          <CardContent>
            <CardTitle> {t("eventos.cards.team.title")}</CardTitle>
            <CardText>{t("eventos.cards.team.texto")}</CardText>
          </CardContent>
        </Card>

        <Card>
          <CardImage src={imagen2} alt="Celebraciones" />
          <CardContent>
            <CardTitle>{t("eventos.cards.celebraciones.title")}</CardTitle>
            <CardText>{t("eventos.cards.celebraciones.texto")}</CardText>
          </CardContent>
        </Card>

        <Card>
          <CardImage src={imagen3} alt="Talleres privados" />
          <CardContent>
            <CardTitle>{t("eventos.cards.privados.title")}</CardTitle>
            <CardText>{t("eventos.cards.privados.texto")}</CardText>
          </CardContent>
        </Card>
      </CardsContainer>

      <CTAButton href="/contacto">{t("eventos.boton")}</CTAButton>
    </Section>
  );
};

export default Eventos;
