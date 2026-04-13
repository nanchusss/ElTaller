import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate, Link, useLocation} from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";

const Section = styled.section`
  background-color: #f6f3ef;
  padding: 5rem 1.5rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #3f6b5a;
  margin-bottom: 1.5rem;
  font-family: "Playfair Display", serif;
`;

const SubText = styled.p`
  max-width: 680px;
  margin: 0 auto 2.5rem auto;
  color: #6d6762;
  font-size: 1.25rem;
  padding: 1.4rem;
  border-radius: 18px;
  background-color: #ffffff;
  border: 1px solid rgba(0,0,0,0.08);
`;

const CalendarContainer = styled.div`
  max-width: 650px;
  margin: 3rem auto;
  background: #ffffff;
  padding: 3rem;
  border-radius: 28px;
  box-shadow: 0 18px 40px rgba(0,0,0,0.06);
`;

const CustomCalendarWrapper = styled.div`
  display: flex;
  justify-content: center;

  .react-calendar {
    width: 100% !important;
    max-width: 750px;
    font-size: 1rem;
    padding: 1.5rem;
    border-radius: 20px;
    background: transparent;
    border: none;
  }

  .react-calendar__navigation {
    margin-bottom: 1.5rem;
  }

  .react-calendar__navigation button {
    font-size: 1.2rem;
    color: #3f6b5a;
    background: none;
  }

  .react-calendar__month-view__weekdays {
    text-transform: uppercase;
    font-size: 0.75rem;
    color: #999;
    margin-bottom: 0.5rem;
  }

  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr);
    gap: 6px;
  }

  .react-calendar__tile {
    aspect-ratio: 1 / 1;
    padding: 0 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.95rem;
    border-radius: 12px;
    background: transparent;
    color: #4a4a4a;
    transition: all 0.2s ease;
  }

  .react-calendar__tile:enabled:hover {
    color: #d67447;
    transform: scale(1.05);
  }

  .react-calendar__tile--now {
    border: 1px solid rgba(0,0,0,0.12);
  }

  .react-calendar__tile.available {
    background: rgba(214, 116, 71, 0.12);
    color: #d67447;
    font-weight: 600;
  }

  .react-calendar__tile.available:hover {
    background: #d67447;
    color: white;
  }

  .react-calendar__tile--active {
    background: #3f6b5a !important;
    color: white;
    transform: scale(1.08);
  }

  .react-calendar__tile--active:hover {
    background: #355a4b !important;
  }

  @media (max-width: 768px) {
    .react-calendar {
      padding: 1rem;
      font-size: 0.95rem;
    }

    .react-calendar__tile {
      font-size: 0.9rem;
    }

    .react-calendar__tile--active {
      transform: scale(1.03);
    }

    .react-calendar__tile:enabled:hover {
      transform: none;
    }
  }
`;

const Card = styled.div`
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 18px;
  padding: 1.6rem;
  text-align: left;
  cursor: pointer;
  background: #ffffff;
  transition: all 0.25s ease;

  &:hover {
    border-color: #d67447;
    transform: translateY(-4px);
  }

  &.active {
    border: 2px solid #3f6b5a;
  }


`;

const Button = styled.button`
  background: #3f6b5a;
  color: white;
  border: none;
  padding: 1rem 1.6rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1.5rem;

  &:hover {
    background: #355a4b;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 420px;
  margin: 2rem auto;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(0,0,0,0.15);

  &:focus {
    outline: none;
    border-color: #3f6b5a;
  }
`;

const GroupLink = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #3f6b5a;

  &:hover {
    text-decoration: underline;
  }
`;

const Reservas = () => {

  const location = useLocation();
  const navigate = useNavigate();

  // 🔥 recuperar datos guardados
  const saved = localStorage.getItem("experienciaSeleccionada");

  const experienciaInicial =
    location.state || (saved ? JSON.parse(saved) : null);

  const [tipoSeleccionado, setTipoSeleccionado] = useState(experienciaInicial);
  const [step, setStep] = useState(1);
  const [fecha, setFecha] = useState(null);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  // 🔥 disponibilidad
  const isAvailable = (date) => {
    const today = new Date();

    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const hoy = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const esSabado = d.getDay() === 6;
    const esMayo = d.getMonth() === 4;
    const noEsPasado = d >= hoy;

    return esSabado && esMayo && noEsPasado;
  };

  const isDisabledDay = ({ date }) => !isAvailable(date);

  // 🔥 submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      fecha: fecha?.toLocaleDateString(),
      tipo: tipoSeleccionado?.tipo || tipoSeleccionado?.titulo || "",
      precio: tipoSeleccionado?.precio || "",
    };

    emailjs
      .send("service_pgxu3ij", "template_zw59ehq", templateParams, "y6n4qGd0Vvdb2QmoH")
      .then(() => {
        localStorage.removeItem("experienciaSeleccionada");
        navigate("/gracias");
      })
      .catch(() => alert("Error al enviar"));
  };

  return (
    <Section>
      <Title>Taller de cerámica y pintura</Title>

      <SubText>
        Sábados de 10h a 12h <br />
        Elige cómo quieres vivir la experiencia ✨
      </SubText>

      <CalendarContainer>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h3>Elige tu día</h3>

            {tipoSeleccionado && (
              <p style={{ marginBottom: "1rem" }}>
                {tipoSeleccionado.tipo || tipoSeleccionado.titulo} ·{" "}
                {tipoSeleccionado.precio}
              </p>
            )}

            <CustomCalendarWrapper>
              <Calendar
                onChange={(value) => {
                  setFecha(value);
                  setStep(2);
                }}
                value={fecha}
                tileDisabled={isDisabledDay}
              />
            </CustomCalendarWrapper>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h3>Estás a un paso ✨</h3>

            <div style={{
              background: "#f6f3ef",
              padding: "1rem",
              borderRadius: "12px",
              marginBottom: "1.5rem"
            }}>
              <strong>{fecha?.toLocaleDateString()}</strong><br />
              {tipoSeleccionado?.tipo || tipoSeleccionado?.titulo} ·{" "}
              {tipoSeleccionado?.precio}
            </div>

            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Nombre"
                required
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
              />

              <Input
                type="email"
                placeholder="Email"
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <Input
                type="tel"
                placeholder="Teléfono"
                onChange={(e) =>
                  setFormData({ ...formData, telefono: e.target.value })
                }
              />

              <Button type="submit">Confirmar reserva</Button>
            </Form>
          </>
        )}

      </CalendarContainer>
    </Section>
  );
};

export default Reservas;