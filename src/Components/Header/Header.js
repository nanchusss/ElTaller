// src/Components/Header/Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
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

  return (
    <HeaderContainer>
      <Nav>
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
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
