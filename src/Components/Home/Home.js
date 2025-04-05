// src/Components/Home/Home.js
import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaWhatsapp, FaRobot } from "react-icons/fa";
import pintando from "./Images/imagen1.png";
import cafe from "./Images/imagen2.png";
import estanteria from "./Images/imagen3.png";
import macetas from "./Images/imagen4.png";
import banner from "./Images/taller interior.png";
import AsistenteIA from "../Asistente/Asistente";

const Section = styled.section`
  background-color: #fff9f0;
  padding: 4rem 1.5rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #5a7263;
  margin-bottom: 0.2rem;
  font-family: "Playfair Display", serif;
  line-height: 1;
`;

const SubTitleMini = styled.p`
  font-size: 1.4rem;
  color: #6d6762;
  margin-bottom: 2.5rem;
  font-family: "Caveat", cursive;
  letter-spacing: 0.5px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #6d6762;
  margin-bottom: 3rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(NavLink)`
  background-color: #f0b65b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dda94f;
  }
`;

const Divider = styled.div`
  margin: 5rem 0 2rem;
  height: 2px;
  width: 80px;
  background-color: #e3a092;
  margin-left: auto;
  margin-right: auto;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureCard = styled.div`
  background-color: #fff9f0;
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid #e3a092;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const FeatureTitle = styled.h3`
  color: #5a7263;
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
`;

const FeatureText = styled.p`
  color: #6d6762;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
`;

const BannerImage = styled.img`
  margin: 4rem auto 2rem;
  display: block;
  max-width: 100%;
  border-radius: 16px;
`;

const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1rem;
  margin: 3rem auto;
  max-width: 90%;
  padding: 1rem;
  justify-content: center;
`;

const CarouselImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: 350px;
  object-fit: cover;
  border-radius: 12px;
  scroll-snap-align: start;
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const ChatButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #5a7263;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const ChatBox = styled.div`
  position: fixed;
  bottom: 90px;
  left: 20px;
  width: 280px;
  background-color: #fdf6ec;
  border: 2px solid #e3a092;
  border-radius: 12px;
  padding: 1rem;
  z-index: 1000;
`;

const ChatQuestion = styled.div`
  color: #5a7263;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-family: "Playfair Display", serif;
`;

const ChatAnswer = styled.div`
  color: #6d6762;
  font-size: 0.95rem;
  margin-bottom: 1.2rem;
  font-family: "Open Sans", sans-serif;
`;

const HighlightCard = styled.div`
  background-color: #c3d7dc;
  border-radius: 20px;
  padding: 3rem 2rem;
  margin-top: 4rem;
  color: #fff;
  text-align: center;
`;

const HighlightTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 2rem;
  color: #5a7263;
  font-family: "Playfair Display", serif;
`;

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const HighlightBox = styled.div`
  background-color: #f0b65b;
  border-radius: 20px;
  padding: 1.5rem;
`;

const HighlightHeading = styled.h3`
  font-size: 1.3rem;
  color: #fff9f0;
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
`;

const HighlightText = styled.p`
  font-size: 1rem;
  color: #fff9f0;
  font-family: "Open Sans", sans-serif;
`;

const Home = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <Section>
      <Title>El Taller</Title>
      <SubTitleMini>de Aguaymanto</SubTitleMini>
      <Subtitle>
        Un espacio creativo y acogedor en el centro de Granollers. Ven a pintar
        cerámica, disfrutar de algo rico y compartir una experiencia única.
      </Subtitle>
      <CTAButton to="/reservas">Reservar tu plaza</CTAButton>
      <BannerImage src={banner} alt="Vista del Taller de Aguaymanto" />
      <Divider />
      <Title style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        ¿Qué puedes encontrar en El Taller?
      </Title>
      <FeatureGrid>
        <FeatureCard>
          <FeatureTitle>Pinta tu cerámica</FeatureTitle>
          <FeatureText>
            Dispones de una selección única de piezas listas para decorar a tu
            manera.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureTitle>Café y cosas ricas</FeatureTitle>
          <FeatureText>
            Disfruta de algo calentito mientras creas, en un ambiente relajado y
            acogedor.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureTitle>Regalos con alma</FeatureTitle>
          <FeatureText>
            Objetos únicos, hechos a mano, pensados para regalar o regalarte.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureTitle>Un rincón verde</FeatureTitle>
          <FeatureText>
            Macetas, plantas y objetos para llenar de vida y color tus espacios.
          </FeatureText>
        </FeatureCard>
      </FeatureGrid>
      <Divider />
      <HighlightCard>
        <HighlightTitle>¡Diviértete con la cerámica!</HighlightTitle>
        <HighlightGrid>
          <HighlightBox>
            <HighlightHeading>LOS PRIMEROS EN GRANOLLERS</HighlightHeading>
            <HighlightText>
              Los primeros en ofrecer a la ciudad, una experiencia única en
              familia, con amigos, o como más lo disfrutes. La magia de la
              cerámica está en Granollers.
            </HighlightText>
          </HighlightBox>
          <HighlightBox>
            <HighlightHeading>MÁS DE 50 PIEZAS PARA ELEGIR</HighlightHeading>
            <HighlightText>
              Desde tazas hasta figuras decorativas, tenemos una gran variedad
              de piezas esperando a ser pintadas por ti. ¡Explora y encuentra la
              que más te inspire!
            </HighlightText>
          </HighlightBox>
          <HighlightBox>
            <HighlightHeading>¿NECESITO EXPERIENCIA?</HighlightHeading>
            <HighlightText>
              ¡Para nada! El Taller es para todos. Lo único que necesitas son
              ganas de pintar y pasarlo bien. ¿Te apuntas?
            </HighlightText>
          </HighlightBox>
          <HighlightBox>
            <HighlightHeading>LIBERA TU CREATIVIDAD</HighlightHeading>
            <HighlightText>
              Aquí, la creatividad es tuya. Nosotros te damos las herramientas,
              y tú pones lo demás: ideas, colores y una buena dosis de
              diversión. ¡Deja volar tu imaginación!
            </HighlightText>
          </HighlightBox>
        </HighlightGrid>
      </HighlightCard>
      <Divider />
      <Title style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
        Momentos en el Taller
      </Title>
      <Carousel>
        <CarouselImage src={pintando} alt="Pintando cerámica" />
        <CarouselImage src={cafe} alt="Espacio del café" />
        <CarouselImage src={estanteria} alt="Estantería de piezas" />
        <CarouselImage src={macetas} alt="Macetas artesanales" />
      </Carousel>
      <Divider />
      <WhatsAppButton
        href="https://wa.me/34683704011"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </WhatsAppButton>
      <AsistenteIA />
    </Section>
  );
};

export default Home;
