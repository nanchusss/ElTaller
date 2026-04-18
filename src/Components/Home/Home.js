import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import pintando from "./Images/clientapintando.jpeg";
import AvisoPopup from "../AvisoPopup/AvisoPopup";

import estanteria1 from "./Images/tallerestanteria.jpeg";
import taller1 from "./Images/taller2.jpeg";
import taller2 from "./Images/taller3.jpeg";
import taller3 from "./Images/tallerbonito.jpeg";
import taller4 from "./Images/tallervacio2.jpeg";
import taza from "./Images/taza.jpg.webp";

import evento2 from "./Images/cumpleanosinfantil.png"; 
import evento3 from "./Images/mujeresceramicayvino.png";
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
  color: white;
  line-height: 1.1;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 4.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 2rem;
  color: white;
  margin-top: 1rem;
  max-width: 600px;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
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
  animation: ${fadeUp} 0.8s ease forwards;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center; /* 🔥 mejora visual */
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
  font-size: 3rem;
  color: #3f5c4a;
  margin-bottom: 1rem;
`;

const HighlightText = styled.p`
  color: #5a7263;
  font-size: 2rem;
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

const CardButton = styled(NavLink)`
  display: inline-block;
  margin-top: 1.5rem;
 
align-self: flex-start;
  padding: 0.8rem 1.6rem;
  border-radius: 999px;
  background: #d67447;
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;

  &:hover {
    background: #df6535;
    transform: scale(1.05);
  }
`;

/* COMPONENT */

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [avisoVisible, setAvisoVisible] = useState(false);

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
    Taller de cerámica en Vilanova del Vallés a 8 minutos de Granollers | Eventos y experiencias creativas
  </title>

  <meta
    name="description"
    content="Taller de cerámica en Vilanova del Vallés a 8 minutos de Granollers. Ideal para cumpleaños, eventos y team building en un espacio creativo y acogedor."
  />

  {/* OPEN GRAPH */}
  <meta property="og:title" content="Taller de cerámica en Vilanova del Vallés a 8 minutos de Granollers" />
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
  <Title>
    {t("home.title")}
   
  </Title>

  <Subtitle>{t("home.subtitle")}</Subtitle>

  <CTA to="/experiencias-ceramica-granollers">{t("home.ctaButton")}</CTA>
</HeroContent>
      </Hero>

  


      <Section>
        <CardsWrapper>
          

          <Card onClick={() => navigate("/experiencias-ceramica-granollers")} style={{ cursor: "pointer" }}>

             <CardImage src={pintando} alt="Pinta tu cerámica, actividad para familias, grupos, amigos" />
            <CardText>
              <CardTitle>{t("home.feature2.title")}</CardTitle>
              <CardDesc>{t("home.feature2.text")}</CardDesc><CardButton to="/experiencias-ceramica-granollers">
  {t("home.ctaExperiencias")}
</CardButton>
            </CardText>
           
          </Card>

          <Card onClick={() => navigate("/eventos")} style={{ cursor: "pointer" }}>
            
            <CardText>
              <CardTitle>{t("home.feature1.title")}</CardTitle>
              <CardDesc>{t("home.feature1.text")}</CardDesc><CardButton to="/eventos">
  {t("home.ctaEventos")}
</CardButton>
            </CardText>

            <CardImage
  src={evento3}
  alt="Personas pintando cerámica en taller en Vilanova del Vallés cerca de Granollers"
/>

          </Card>

          <Card onClick={() => navigate("/regala-pinta-tu-ceramica-granollers")} style={{ cursor: "pointer" }}>
            <CardImage src={taza} alt="Taza de cerámica pintada a mano" />
            <CardText>
              <CardTitle>{t("home.feature3.title")}</CardTitle>
              <CardDesc>{t("home.feature3.text")}</CardDesc><CardButton to="/regala-pinta-tu-ceramica-granollers">
  {t("home.ctaRegala")}
</CardButton>
            </CardText>
            
          </Card>
        </CardsWrapper>
      </Section>

      <AboutSection>

 

  <AboutContent>
    <AboutTitle>{t("quienes.titulo")}</AboutTitle>

    <AboutText>{t("quienes.p1")}</AboutText>
    <AboutText>{t("quienes.p2")}</AboutText>
    <AboutText>{t("quienes.p3")}</AboutText>
  </AboutContent>

</AboutSection>

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
          {[pintando, taller4, taza, estanteria1, taller1, taller2, taller3, evento2, evento3].map((img, i) => (
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