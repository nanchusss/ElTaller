import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import imagenEventos from "../Home/Images/imagen6.png"; // imagen representativa

const EventoCard = styled.div`
  background-image: url(${imagenEventos});
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

const Overlay = styled.div`
  background-color: rgba(90, 114, 99, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Titulo = styled.h2`
  color: white;
  font-size: 2rem;
  z-index: 1;
  text-align: center;
  padding: 1rem;
`;

const PreviewEventos = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const irAEventos = () => {
    navigate("/eventos"); // o scroll si se cambia
  };

  return (
    <EventoCard onClick={irAEventos}>
      <Overlay />
      <Titulo>{t("previewEventos.titulo")}</Titulo>
    </EventoCard>
  );
};

export default PreviewEventos;
