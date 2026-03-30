import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-bg: #fff9f0;
    --color-primary: #4f7a65;     /* verde más vivo */
    --color-secondary: #f0b65b;   /* ocre */
    --color-accent: #d98c7a;      /* terracota más elegante */
    --color-text: #2e2e2e;
    --color-muted: #6d6762;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Fraunces', serif;
    background-color: var(--color-bg);
    color: var(--color-text);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  /* 🔥 TIPOGRAFÍA MÁS VIVA */
  h1, h2, h3 {
    font-family: 'fraunces', serif;
    color: var(--color-primary);
    letter-spacing: -0.5px;
  }

  p {
    color: var(--color-muted);
  }

  /* 🔥 LINKS */
  a {
    text-decoration: none;
    color: var(--color-primary);
    transition: all 0.2s ease;

    &:hover {
      color: var(--color-accent);
    }
  }

  /* 🔥 BOTONES (esto es clave visual) */
  button {
    font-family: inherit;
    cursor: pointer;
    border-radius: 999px;
    transition: all 0.2s ease;
  }

  /* botón primario */
  .btn-primary {
    background: var(--color-secondary);
    color: white;
    border: none;
    padding: 0.8rem 1.6rem;
    font-weight: 600;

    &:hover {
      background: #010101ff;
      transform: translateY(-1px);
    }
  }

  /* botón secundario */
  .btn-secondary {
    background: transparent;
    border: 1.5px solid var(--color-primary);
    color: var(--color-primary);
    padding: 0.8rem 1.6rem;

    &:hover {
      background: var(--color-primary);
      color: white;
    }
  }

  /* 🔥 INPUTS MÁS VIVOS */
  input, select, textarea {
    border-radius: 10px;
    border: 1px solid #ddd;
    padding: 0.8rem;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 2px rgba(79, 122, 101, 0.15);
    }
  }

  /* 🔥 DETALLE SUTIL (esto suma mucho) */
  ::selection {
    background: var(--color-secondary);
    color: white;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export default GlobalStyle;