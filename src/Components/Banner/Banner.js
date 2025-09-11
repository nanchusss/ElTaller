// Importá tu video (asegurate del .mp4 real)
import bannerVideo from "../Home/Images/eltallervideo.MOV";
import styled, { css } from "styled-components";

/** 
 * MODO: "landscape" | "portrait" | "rotate90" | "rotate-90"
 */
const BANNER_MODE = "landscape";

const BannerVideoWrapper = styled.div`
  position: relative;
  margin: 4rem auto 2rem;
  width: min(1200px, 100%);
  border-radius: 16px;
  overflow: hidden;

  /* Desktop por default */
  ${({ mode }) =>
    mode === "portrait"
      ? css`
          aspect-ratio: 9 / 16;
        `
      : css`
          aspect-ratio: 16 / 9;
        `}

  /* En mobile forzamos vertical */
  @media (max-width: 768px) {
    aspect-ratio: 9 / 16;
  }
`;

const BannerVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center;

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

const Banner = () => (
  <BannerVideoWrapper mode={BANNER_MODE}>
    <BannerVideo
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      mode={BANNER_MODE}
    >
      <source src={bannerVideo} type="video/mp4" />
      Tu navegador no soporta video HTML5.
    </BannerVideo>
  </BannerVideoWrapper>
);

export default Banner;

