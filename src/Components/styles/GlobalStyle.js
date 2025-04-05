// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #fff9f0;
    color: #2e2e2e;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
// Nombre	Hex	Uso sugerido
// Piedra clara	#fff9f0	Fondo general, contenedores grandes
// Verde salvia	#5a7263	Títulos, acentos elegantes
// Amarillo ocre	#f0b65b	Botones, highlights
// Terracota suave	#e3a092	Links activos, detalles sutiles
// Gris arcilla	#6d6762	Texto secundario, bordes, íconos
