// src/Components/Header/Header.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../Botones/Botones";

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #5a7263;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  gap: 1rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #5a7263;
  font-weight: 600;
  font-size: 1rem;

  &.active {
    border-bottom: 2px solid #f0b65b;
    color: #2e2e2e;
  }

  &:hover {
    color: #2e2e2e;
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <HeaderContainer>
      <Nav>
        {/* Sección izquierda (links desktop) */}
        <LeftGroup>
          <StyledLink to="/">{t("header.inicio")}</StyledLink>
          <StyledLink to="/reservas">{t("header.reserva")}</StyledLink>
          <StyledLink to="/contacto">{t("header.contacto")}</StyledLink>
          <StyledLink
            to="https://www.aguaymanto.shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("header.tienda")}
          </StyledLink>
        </LeftGroup>

        {/* Botón hamburguesa (solo mobile) */}
        <MenuToggle onClick={toggleMenu} aria-label="Abrir menú">
          ≡
        </MenuToggle>

        {/* Sección derecha (botones de idioma siempre visibles) */}
        <LanguageWrapper>
          <LanguageSwitcher />
        </LanguageWrapper>

        {/* Menú mobile desplegable */}
        <MobileMenu open={menuAbierto}>
          <StyledLink to="/" onClick={() => setMenuAbierto(false)}>
            {t("header.inicio")}
          </StyledLink>
          <StyledLink to="/reservas" onClick={() => setMenuAbierto(false)}>
            {t("header.reserva")}
          </StyledLink>
          <StyledLink to="/contacto" onClick={() => setMenuAbierto(false)}>
            {t("header.contacto")}
          </StyledLink>
          <StyledLink
            to="https://www.aguaymanto.shop"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuAbierto(false)}
          >
            {t("header.tienda")}
          </StyledLink>
        </MobileMenu>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
