// Importá tu video (asegurate del .mp4 real)
import bannerVideo from "../Home/Images/eltallervideo.MOV";
import styled, { css } from "styled-components";

/** 
 * MODO: "landscape" | "portrait" | "rotate90" | "rotate-90"
 * - landscape: contenedor 16:9
 * - portrait: contenedor 9:16
 * - rotate90 / rotate-90: si el video se ve de lado
 */
const BANNER_MODE = "landscape"; // probá "portrait" o "rotate90" si es vertical o está de lado

const BannerVideoWrapper = styled.div`
  position: relative;
  margin: 4rem auto 2rem;
  width: min(1200px, 100%);
  border-radius: 16px;
  overflow: hidden;

  /* Aspect-ratio del contenedor según modo */
  ${({ mode }) =>
    mode === "portrait"
      ? css`
          aspect-ratio: 9 / 16;
        `
      : css`
          /* default landscape */
          aspect-ratio: 16 / 9;
        `}
`;

const BannerVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* recorta sin deformar */
  transform-origin: center;

  /* Si el archivo viene con orientación mal escrita en metadatos,
     forzamos rotación sin deformar */
  ${({ mode }) =>
    mode === "rotate90" &&
    css`
      transform: rotate(90deg) scale(1.2);
    `}
  ${({ mode }) =>
    mode === "rotate-90" &&
    css`
      transform: rotate(-90deg) scale(1.2);
    `}
`;

// En tu JSX, reemplazá el <BannerImage .../> por esto:
const Banner = () => (
  <BannerVideoWrapper mode={BANNER_MODE}>
    <BannerVideo
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      // poster={banner} // opcional: tu imagen 1.jpeg como poster
      mode={BANNER_MODE}
    >
      <source src={bannerVideo} type="video/mp4" />
      Tu navegador no soporta video HTML5.
    </BannerVideo>
  </BannerVideoWrapper>
);

export default Banner;
