// src/Components/Footer/Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  border-top: 1px solid #eee;
`;

const InstagramLink = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  color: #5a7263;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: #2e2e2e;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>&copy; {new Date().getFullYear()} El Taller de Aguaymanto</div>
      <InstagramLink
        href="https://www.instagram.com/aguaymanto.es"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </InstagramLink>
    </FooterContainer>
  );
};

export default Footer;
