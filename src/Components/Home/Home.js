import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import pintando from "./Images/imagen1.png";
import AvisoPopup from "../AvisoPopup/AvisoPopup";

import estanteria1 from "./Images/taller1.jpeg";
import taller1 from "./Images/taller2.jpeg";
import taller2 from "./Images/taller3.jpeg";
import taller3 from "./Images/tallerbonito.jpeg";
import taller4 from "./Images/estanteria.jpeg";
import jarra from "./Images/taza.jpg.webp";

import evento2 from "./Images/evento2.png";
import evento3 from "./Images/evento3.png";
import bannerVideo from "./Images/videoeltallerdefinitivo.mp4";
import AsistenteIA from "../Asistente/Asistente";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import { keyframes } from "styled-components";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* HERO VIDEO */

const Hero = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: 'Fraunces', serif;
  font-size: 8.5rem;
  line-height: 1.1;
  max-width: 800px;
`;

const CTA = styled(NavLink)`
  margin-top: 2rem;
  padding: 1.4rem 3.2rem;
  border-radius: 999px;
  background: #d67447;
  color: white;
  text-decoration: none;
  font-size: 1.3rem; /* 🔥 clave */
  font-weight: 500;
  letter-spacing: 0.5px;

  &:hover {
    background: #df6535ff;
    color: white;
    transform: scale(1.05);
  }
`;

/* SECTION */

const Section = styled.section`
  background: #f6f3ef;
  padding: 5rem 1.5rem;
`;

/* CARDS */

const CardsWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  opacity: 0;
  transform: translateY(60px);
  animation: fadeUp 0.8s ease forwards;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 20px;
`;

const CardText = styled.div``;

const CardTitle = styled.h3`
  font-family: 'Fraunces', serif;
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

const CardDesc = styled.p`
  color: #6d6762;
  font-size: 1.5rem;
`;

/* 🔥 NUEVO HIGHLIGHT (CLAVE) */

const HighlightBlock = styled.section`
  position: relative;
  height: 70vh;
  max-width: 1200px;
  margin: 4rem auto;
  border-radius: 30px;
  overflow: hidden;
`;

const HighlightImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HighlightOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 240, 235, 0.65);
`;

const HighlightContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
`;

const HighlightTitle = styled.h2`
  font-family: 'Fraunces', serif;
  font-size: 2.8rem;
  color: #3f5c4a;
  margin-bottom: 1rem;
`;

const HighlightText = styled.p`
  color: #5a7263;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const HighlightButton = styled(NavLink)`
  padding: 1rem 2rem;
  border-radius: 40px;
  background: black;
  color: white;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
`;

/* GALERÍA */

const Gallery = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 2rem 0;
`;

const GalleryImg = styled.img`
  width: 260px;
  height: 320px;
  object-fit: cover;
  border-radius: 16px;

  &:hover {
    transform: scale(1.05);
  }
`;

/* FRASE */

const Closing = styled.p`
  max-width: 1000px;
  pading: 50px;
  font-size: 2.2rem;
  margin: 3rem auto;
  text-align: center;
  color: #6d6762;
`;

/* WHATSAPP */

const WhatsApp = styled.a`
  position: fixed;
  bottom: 25px;
  right: 25px;
  background: #25d366;
  color: white;
  width: 70px;
  height: 70px;
  font-size: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const AboutSection = styled.section`
  padding: 4rem 1.5rem;
  text-align: center;
  background: #ffffffff;
  position: relative;
`;

const AboutContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  animation: ${fadeUp} 1s ease forwards;
`;

const AboutTitle = styled.h1`
  font-family: 'Fraunces', serif;
  font-size: 3.8rem;
  margin-bottom: 2rem;
  color: #3f5c4a;

  animation: ${fadeUp} 0.8s ease forwards;
`;

const AboutText = styled.p`
  color: #6d6762;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.65rem;

  opacity: 0;
  animation: ${fadeUp} 1s ease forwards;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }

  &:nth-child(4) {
    animation-delay: 0.6s;
  }
`;

/* COMPONENT */

const Home = () => {
  const { t } = useTranslation();

  const [avisoVisible, setAvisoVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAvisoVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (

    
    <>

    {avisoVisible && (
      <AvisoPopup onClose={() => setAvisoVisible(false)} />
    )}
   <Helmet>
  <title>
    Taller de cerámica en Granollers | Eventos y experiencias creativas
  </title>

  <meta
    name="description"
    content="Taller de cerámica en Granollers. Ideal para cumpleaños, eventos y team building en un espacio creativo y acogedor."
  />

  {/* OPEN GRAPH */}
  <meta property="og:title" content="Taller de cerámica en Granollers" />
  <meta
    property="og:description"
    content="Vive una experiencia creativa única en El Taller d’Aguaymanto."
  />
<meta property="og:image" content="/images/tallerbonito.jpg" />
  <meta property="og:type" content="website" />
</Helmet>

      <Hero>
        <Video autoPlay muted loop playsInline>
          <source src={bannerVideo} type="video/mp4" />
        </Video>
        <Overlay />
        <HeroContent>
          <Title>{t("home.title")}</Title>
          <CTA to="/reservas">{t("home.ctaButton")}</CTA>
        </HeroContent>
      </Hero>

  <AboutSection>

 

  <AboutContent>
    <AboutTitle>{t("quienes.titulo")}</AboutTitle>

    <AboutText>{t("quienes.p1")}</AboutText>
    <AboutText>{t("quienes.p2")}</AboutText>
    <AboutText>{t("quienes.p3")}</AboutText>
  </AboutContent>

</AboutSection>


      <Section>
        <CardsWrapper>
          <Card>
            <CardImage
  src={pintando}
  alt="Personas pintando cerámica en taller en Granollers"
/>
            <CardText>
              <CardTitle>{t("home.feature1.title")}</CardTitle>
              <CardDesc>{t("home.feature1.text")}</CardDesc>
            </CardText>
          </Card>

          <Card>
            <CardText>
              <CardTitle>{t("home.feature2.title")}</CardTitle>
              <CardDesc>{t("home.feature2.text")}</CardDesc>
            </CardText>
            <CardImage src={evento3} alt="Evento de cerámica en grupo en Granollers" />
          </Card>

          <Card>
            <CardImage src={jarra} alt="Jarra de cerámica pintada a mano" />
            <CardText>
              <CardTitle>{t("home.feature3.title")}</CardTitle>
              <CardDesc>{t("home.feature3.text")}</CardDesc>
            </CardText>
          </Card>
        </CardsWrapper>
      </Section>

      {/* 🔥 BLOQUE EVENTOS MEJORADO */}
      <HighlightBlock>
        <HighlightImage src={evento2} alt="Evento de cerámica en Granollers" />
        <HighlightOverlay />

        <HighlightContent>
          <HighlightTitle>{t("eventos.titulo")}</HighlightTitle>
          <HighlightText>{t("eventos.subtexto")}</HighlightText>
          <HighlightButton to="/eventos">
  Obtén más Información
</HighlightButton>
        </HighlightContent>
      </HighlightBlock>

 

      <Section>
         <Closing>
       
        Talleres, cerámica y momentos que inspiran.
      </Closing>
        <Gallery>
          {[pintando, taller4, jarra, estanteria1, taller1, taller2, taller3].map((img, i) => (
            <GalleryImg key={i} src={img} alt={`Imagen del taller ${i + 1}`} />
          ))}
        </Gallery>
      </Section>

      

      <WhatsApp href="https://wa.me/34683704011" target="_blank">
        <FaWhatsapp />
      </WhatsApp>

      <AsistenteIA />
    </>
  );
};

export default Home;