// src/Components/Contacto/Contacto.js
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ilustracion from "./images/ilustracion.png";

const Section = styled.section`
  background-color: #fff9f0;
  padding: 4rem 1.5rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #5a7263;
  margin-bottom: 1rem;
`;

const SubText = styled.p`
  max-width: 700px;
  margin: 0 auto 2rem auto;
  color: #6d6762;
  font-size: 1.1rem;
`;

const Ilustracion = styled.img`
  max-width: 320px;
  width: 100%;
  margin: 2rem auto;
  display: block;
  border-radius: 12px;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
`;

const Button = styled.button`
  background-color: #f0b65b;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: #dda94f;
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  color: ${(props) => (props.success ? "#5a7263" : "#e74c3c")};
`;

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [estado, setEstado] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !mensaje) {
      setEstado({
        success: false,
        msg: "Por favor, completá todos los campos.",
      });
      return;
    }

    setEstado({
      success: true,
      msg: "¡Gracias por escribirnos! Te responderemos pronto.",
    });
    setNombre("");
    setEmail("");
    setMensaje("");

    setTimeout(() => {
      navigate("/GraciasContacto");
    }, 0);
  };

  return (
    <Section>
      <Title>CONTACTO</Title>
      <Ilustracion src={ilustracion} alt="Ilustración de contacto" />
      <SubText>
        Si tenés alguna duda, propuesta o solo querés saludarnos, completá el
        formulario y te respondemos pronto 💌
      </SubText>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          rows="5"
          placeholder="Tu mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <Button type="submit">Enviar</Button>
        {estado && <Message success={estado.success}>{estado.msg}</Message>}
      </Form>
    </Section>
  );
};

export default Contacto;
