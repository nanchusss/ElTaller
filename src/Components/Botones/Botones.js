// src/Components/ui/LanguageSwitcher.js
import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const LangButton = styled.button`
  background-color: #f0b65b;
  border: none;
  color: white;
  border-radius: 20px;
  padding: 0.3rem 0.8rem;
  font-weight: bold;
  font-size: 0.85rem;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    background-color: #dda94f;
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Wrapper>
      <LangButton onClick={() => changeLanguage("es")}>ES</LangButton>
      <LangButton onClick={() => changeLanguage("ca")}>CA</LangButton>
    </Wrapper>
  );
};

export default LanguageSwitcher;
