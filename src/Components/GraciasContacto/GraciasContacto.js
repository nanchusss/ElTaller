// src/Components/Gracias/Gracias.js
import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ilustracion from "./images/ilustracionGracias.png";
import { useTranslation } from "react-i18next";

const Section = styled.section`
  background-color: #fff9f0;
  padding: 4rem 1.5rem;
  text-align: center;
`;

const Imagen = styled.img`
  max-width: 300px;
  margin: 0 auto 2rem;
  display: block;
`;

const Titulo = styled.h1`
  font-size: 2.5rem;
  color: #5a7263;
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
`;

const Texto = styled.p`
  font-size: 1.2rem;
  color: #6d6762;
  margin-bottom: 2rem;
`;

const Gracias = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Section>
      <Imagen src={ilustracion} alt={t("gracias.altIlustracion")} />
      <Titulo>{t("gracias.titulo")}</Titulo>
      <Texto>{t("gracias.texto")}</Texto>
      <p style={{ color: "#e3a092", fontSize: "1.3rem" }}>
        {t("gracias.redireccion")}
      </p>
    </Section>
  );
};

export default Gracias;
