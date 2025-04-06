// src/Components/Asistente/AsistenteIA.js
import React, { useState } from "react";
import styled from "styled-components";
import { FaRobot } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// ...styled-components (sin cambios)

const Container = styled.div`
  position: fixed;
  bottom: 90px;
  left: 20px;
  width: 320px;
  max-height: 480px;
  background-color: #fff9f0;
  border: 1px solid #e3a092;
  border-radius: 16px;
  padding: 1rem;
  z-index: 1000;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #5a7263;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const ChatBubble = styled.div`
  background-color: ${(props) => (props.user ? "#f0b65b" : "#e3a092")};
  color: white;
  border-radius: 16px;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  align-self: ${(props) => (props.user ? "flex-end" : "flex-start")};
  max-width: 85%;
  font-family: "Open Sans", sans-serif;
  font-size: 0.95rem;
  line-height: 1.4;
`;

const InputBar = styled.div`
  display: flex;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e3a092;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.6rem 1rem;
  border-radius: 20px 0 0 20px;
  border: 1px solid #e3a092;
  outline: none;
  font-size: 0.95rem;
  font-family: "Open Sans", sans-serif;
`;

const SendButton = styled.button`
  padding: 0.6rem 1rem;
  border-radius: 0 20px 20px 0;
  border: 1px solid #e3a092;
  background-color: #5a7263;
  color: white;
  font-weight: bold;
  font-size: 0.95rem;
  cursor: pointer;
`;

const OptionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const OptionButton = styled.button`
  background-color: rgba(227, 160, 146, 0.2);
  color: #5a7263;
  border: 1px solid #e3a092;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgba(227, 160, 146, 0.4);
    color: #3c463d;
  }
`;

const AsistenteIA = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: t("asistente.saludo"), user: false },
  ]);
  const [input, setInput] = useState("");

  const respuestas = {
    "como reservo": t("asistente.respuestas.comoReservo"),
    "necesito experiencia": t("asistente.respuestas.necesitoExperiencia"),
    "es para niños": t("asistente.respuestas.ninios"),
    "hacéis eventos": t("asistente.respuestas.eventos"),
    precio: t("asistente.respuestas.precio"),
    "cuánto dura": t("asistente.respuestas.duracion"),
    "qué puedo pintar": t("asistente.respuestas.quePintar"),
    "puedo llevar a alguien": t("asistente.respuestas.acompanar"),
    "hay comida o bebida": t("asistente.respuestas.comidaBebida"),
  };

  const handleSend = (texto = input) => {
    if (!texto.trim()) return;
    const pregunta = texto.toLowerCase();
    const respuestaClave = Object.keys(respuestas).find((p) =>
      pregunta.includes(p)
    );
    const respuesta = respuestaClave
      ? respuestas[respuestaClave]
      : t("asistente.respuestas.default");
    setMessages([
      ...messages,
      { text: texto, user: true },
      { text: respuesta, user: false },
    ]);
    setInput("");
  };

  const opciones = [
    t("asistente.opciones.1"),
    t("asistente.opciones.2"),
    t("asistente.opciones.3"),
    t("asistente.opciones.4"),
    t("asistente.opciones.5"),
    t("asistente.opciones.6"),
    t("asistente.opciones.7"),
    t("asistente.opciones.8"),
    t("asistente.opciones.9"),
  ];

  return (
    <>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        <FaRobot />
      </ToggleButton>
      {isOpen && (
        <Container>
          {messages.map((msg, idx) => (
            <ChatBubble key={idx} user={msg.user}>
              {msg.text}
            </ChatBubble>
          ))}
          <OptionList>
            {opciones.map((op, i) => (
              <OptionButton key={i} onClick={() => handleSend(op)}>
                {op}
              </OptionButton>
            ))}
          </OptionList>
          <InputBar>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("asistente.placeholder")}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <SendButton onClick={() => handleSend()}>
              {t("asistente.enviar")}
            </SendButton>
          </InputBar>
        </Container>
      )}
    </>
  );
};

export default AsistenteIA;
