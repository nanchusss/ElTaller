// src/Components/Header/Header.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../Botones/Botones";
import logo from "../Home/Images/ELTALLERLOGO.png";

const HeaderContainer = styled.header`
  background-color: #f1e3d2ff;
  padding: 0.5rem 2.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: 130px;
  object-fit: contain;
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  button {
    font-size: 1.6rem;     /* 👈 más grande */
    padding: 0.4rem 0.6rem;
    border-radius: 8px;
  }
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 5px;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 30px;
    height: 3.5px;
    background: #0c0c0c;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
`;


const MobileMenu = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  gap: 1.2rem;
  padding-top: 1rem;

  @media (max-width: 768px) {
    gap: 1.8rem;
    padding: 1.5rem 0;
    align-items: center;      /* 👈 PRO */
    text-align: center;       /* 👈 PRO */
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #5a7263;
  font-weight: 600;
  font-size: 1.60rem;
  position: relative;
  padding-bottom: 4px;

  &.active {
    border-bottom: 2px solid #35664dff;
    color: #2e2e2e;
  }

  &:hover {
    color: #2e2e2e;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0%;
    background-color: #f0b65b;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
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

        {/* LOGO */}
        <NavLink to="/">
          <Logo src={logo} alt="El Taller Logo" />
        </NavLink>

        {/* LINKS DESKTOP */}
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

          <StyledLink to="/quienes-somos">
            {t("header.quienes")}
          </StyledLink>
        </LeftGroup>

        {/* DERECHA */}
        <LanguageWrapper>
          <LanguageSwitcher />
          <MenuToggle onClick={toggleMenu}>
  <span />
  <span />
  <span />
</MenuToggle>
        </LanguageWrapper>

        {/* MOBILE */}
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
          <StyledLink to="/quienes-somos" onClick={() => setMenuAbierto(false)}>
            {t("header.quienes")}
          </StyledLink>
        </MobileMenu>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;