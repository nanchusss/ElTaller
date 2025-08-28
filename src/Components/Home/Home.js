import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import pintando from "./Images/imagen1.png";
import grupo from "./Images/imagen6.png";
import banner from "./Images/1.jpeg";
import estanteria1 from "./Images/estanteria.jpeg";
import jarra from "./Images/zoom jarra.jpeg";
import panfleto from "./Images/panfleto.png";
import AsistenteIA from "../Asistente/Asistente";
import { useTranslation } from "react-i18next";
import PreviewEventos from "../ClickEventos/ClickEventos";
import { Helmet } from "react-helmet";
import bannerVideo from "./Images/video.mp4";
import Banner from "../Banner/Banner"
<Helmet>
  <title>El Taller d’Aguaymanto – Café Creatiu</title>
  <meta
    name="description"
    content="Un espacio creativo en Granollers para disfrutar de un café, taller para pintar cerámica, eventos y experiencias con cerámica."
  />
</Helmet>;

const Section = styled.section`
  background-color: #fff9f0;
  padding: 4rem 1.5rem;
  text-align: center;
`;

const BannerVideo = styled.video`
  margin: 4rem auto 2rem;
  display: block;
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  max-height: 600px; /* opcional: límite de altura */
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
  cursor: pointer;
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 12px;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 12px;
  }
`;

const Cerrar = styled.button`
  background: none;
  border: none;
  color: #5a7263;
  font-size: 2rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
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
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const { t } = useTranslation();

  const cerrarModal = () => {
    setImagenAmpliada(null);
  };

  return (
    <Section>
      <Title>{t("home.title")}</Title>
      <SubTitleMini>{t("home.subtitleMini")}</SubTitleMini>
      <Subtitle>{t("home.subtitle")}</Subtitle>
      <CTAButton to="/reservas">{t("home.ctaButton")}</CTAButton>
    
<Banner />

      <Divider />
      <HighlightCard>
        <HighlightTitle>{t("home.highlight.title")}</HighlightTitle>
        <HighlightGrid>
          <HighlightBox>
            <HighlightHeading>{t("home.highlight1.title")}</HighlightHeading>
            <HighlightText>{t("home.highlight1.text")}</HighlightText>
          </HighlightBox>
          <HighlightBox>
            <HighlightHeading>{t("home.highlight2.title")}</HighlightHeading>
            <HighlightText>{t("home.highlight2.text")}</HighlightText>
          </HighlightBox>
          <HighlightBox>
            <HighlightHeading>{t("home.highlight3.title")}</HighlightHeading>
            <HighlightText>{t("home.highlight3.text")}</HighlightText>
          </HighlightBox>
          <HighlightBox>
            <HighlightHeading>{t("home.highlight4.title")}</HighlightHeading>
            <HighlightText>{t("home.highlight4.text")}</HighlightText>
          </HighlightBox>
        </HighlightGrid>
      </HighlightCard>
      <Divider />
      <Title style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        {t("home.whatYouCanFind")}
      </Title>
      <FeatureGrid>
        <FeatureCard>
          <FeatureTitle>{t("home.feature1.title")}</FeatureTitle>
          <FeatureText>{t("home.feature1.text")}</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>{t("home.feature2.title")}</FeatureTitle>
          <FeatureText>{t("home.feature2.text")}</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>{t("home.feature3.title")}</FeatureTitle>
          <FeatureText>{t("home.feature3.text")}</FeatureText>
        </FeatureCard>
        {/* <FeatureCard>
          <FeatureTitle>{t("home.feature4.title")}</FeatureTitle>
          <FeatureText>{t("home.feature4.text")}</FeatureText>
        </FeatureCard> */}
      </FeatureGrid>
      <Divider />
      <PreviewEventos />
      <Divider />
      <Title style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
        {t("home.moments")}
      </Title>
      <Carousel>
        {[pintando, jarra, estanteria1, grupo].map(
          (img, index) => (
            <CarouselImage
              key={index}
              src={img}
              alt={`imagen ${index}`}
              onClick={() => setImagenAmpliada(img)}
            />
          )
        )}
      </Carousel>
      {imagenAmpliada && (
        <ModalOverlay onClick={cerrarModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <Cerrar onClick={cerrarModal}>×</Cerrar>
            <img src={imagenAmpliada} alt="Imagen ampliada" />
          </ModalContent>
        </ModalOverlay>
      )}
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
