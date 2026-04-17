import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import imagen1 from "./images/evento1.jpeg";
import imagen2 from "./images/evento2.png";
import imagen3 from "./images/evento3.png";
import { Helmet } from "react-helmet";

/* SECTION */

const Section = styled.section`
  background-color: #fff9f0;
  padding: 4rem 2rem;
  text-align: center;
`;

/* TITLES */

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

/* CARDS */

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
`;

const CardText = styled.p`
  color: #6d6762;
  font-size: 1.05rem;
  line-height: 1.6;
`;

/* 🔥 BLOQUE CLAVE (VENTA REAL) */

const InfoBox = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.2rem;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  text-align: left;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
`;

const InfoTitle = styled.h3`
  font-size: 1.6rem;
  color: #5a7263;
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
`;

const InfoText = styled.p`
  color: #6d6762;
  font-size: 1rem;
  margin-bottom: 0.6rem;
`;

/* CTA */

const CTAButton = styled.a`
  display: inline-block;
  background-color: #f0b65b;
  color: white;
  margin-bottom: 40px;
  padding: 1rem 2.5rem;
  font-weight: bold;
  border-radius: 12px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #dc9333;
    color: white;
  }
`;

/* COMPONENT */

const Eventos = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Eventos y celebraciones en taller de cerámica | A 8 minutos de Granollers</title>
        <meta
          name="description"
          content="Celebra cumpleaños, eventos o team building en un taller de cerámica cerca de Granollers. Experiencias creativas para grupos."
        />
      </Helmet>

      <Section>
        <Title>{t("eventos.titulo")}</Title>

        <SubText>
          Celebra algo especial de forma diferente: una experiencia creativa para compartir
        </SubText>

        <CardsContainer>
          <Card>
            <CardImage src={imagen1} alt="Team building cerámica" />
            <CardContent>
              <CardTitle>Team building creativo</CardTitle>
              <CardText>
                Refuerza vínculos en un entorno relajado creando con las manos.
              </CardText>
            </CardContent>
          </Card>

          <Card>
            <CardImage src={imagen2} alt="Cumpleaños cerámica" />
            <CardContent>
              <CardTitle>Cumpleaños y celebraciones</CardTitle>
              <CardText>
                Celebra tu cumpleaños o una ocasión especial de forma única y creativa.
              </CardText>
            </CardContent>
          </Card>

          <Card>
            <CardImage src={imagen3} alt="Taller privado cerámica" />
            <CardContent>
              <CardTitle>Grupos privados</CardTitle>
              <CardText>
                Organiza una experiencia a medida para tu grupo en el taller.
              </CardText>
            </CardContent>
          </Card>
        </CardsContainer>
 <CTAButton href="/contacto">
          Organizar mi evento
        </CTAButton>

        {/* 🔥 BLOQUE QUE CONVIERTE */}
        <InfoBox>
          <InfoTitle>Organiza tu evento en EL TALLER</InfoTitle>

          <InfoText>• Una experiencia exclusiva para tu grupo</InfoText>
          <InfoText>• Una clase guiada, súper divertida con todos los materiales incluídos</InfoText>
          <InfoText>• Pinta tu pieza de cerámica, elige, crea, disfruta</InfoText>
          <InfoText>• Ambiente acogedor y creativo</InfoText>


          <InfoText style={{ marginTop: "1rem" }}>
            ¡Cuéntanos tu idea!
          </InfoText>
        </InfoBox>

       
      </Section>
    </>
  );
};

export default Eventos;