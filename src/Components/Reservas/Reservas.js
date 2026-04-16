import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

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
const Text = styled.p`
  
  
  color: #2b5a2aff;
  font-size: 1.25rem;
  padding: 1rem;

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

const Select = styled.select`
  width: 100%;
  padding: 1rem 1.2rem;
  border-radius: 14px;
  max-width: 200px;
  border: 1px solid rgba(0,0,0,0.08);
  background-color: #ffffff;
  color: #4a4a4a;
  cursor: pointer;
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
  font-size: 19px;

  transition: all 0.25s ease;

  /* quitar estilo nativo feo */
  appearance: none;

  /* flechita custom */
  background-image: url("data:image/svg+xml;utf8,<svg fill='%233f6b5a' height='20' viewBox='0 0 20 20' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M5.5 7l4.5 5 4.5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 1rem center;

  &:hover {
    border-color: rgba(214, 116, 71, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #3f6b5a;
    box-shadow: 0 0 0 2px rgba(63, 107, 90, 0.1);
  }
`;

const Reservas = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const saved = localStorage.getItem("experienciaSeleccionada");

  const experienciaInicial =
    location.state || (saved ? JSON.parse(saved) : null);

  const [tipoSeleccionado] = useState(experienciaInicial);
  const [step, setStep] = useState(1);
  const [fecha, setFecha] = useState(null);
  const [horario, setHorario] = useState("");
  const [errorHorario, setErrorHorario] = useState("");

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const isAvailable = (date) => {
    const today = new Date();

    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const hoy = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const esSabado = d.getDay() === 6;
    const esMayo = d.getMonth() === 4;
    const noEsPasado = d >= hoy;

    if (d.getDate() === 16 && esMayo) return false;
    if (d.getDate() === 29 && esMayo && noEsPasado) return true;

    return esSabado && esMayo && noEsPasado;
  };

  const isDisabledDay = ({ date }) => !isAvailable(date);

  const getHorarios = () => {
    const tipo = tipoSeleccionado?.tipo?.toLowerCase() || "";

    if (tipo.includes("pinta")) {
      return ["10:00 - 11:30", "11:30 - 13:00"];
    }

    if (tipo.includes("vino")) {
      return ["11:30 - 13:00", "18:00 - 19:30"];
    }

    return [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const esClase = tipoSeleccionado?.tipo?.toLowerCase().includes("clase");

    if (!esClase && !horario) {
      setErrorHorario("Por favor selecciona un horario ✨");
      return;
    }

    setErrorHorario("");

    if (!tipoSeleccionado?.paymentLink) {
      alert("Error: experiencia mal configurada");
      return;
    }

    const reserva = {
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      fecha: fecha?.toLocaleDateString(),
      horario: horario,
      tipo: tipoSeleccionado?.tipo || tipoSeleccionado?.titulo || "",
      precio: tipoSeleccionado?.precio || "",
      paymentLink: tipoSeleccionado.paymentLink
    };

    localStorage.setItem("reservaPendiente", JSON.stringify(reserva));

    const templateParams = {
      nombre: reserva.nombre,
      email: reserva.email,
      telefono: reserva.telefono,
      fecha: reserva.fecha,
      horario: reserva.horario,
      tipo: reserva.tipo,
      precio: reserva.precio,
    };

    emailjs
      .send(
        "service_pgxu3ij",
        "template_zw59ehq",
        templateParams,
        "y6n4qGd0Vvdb2QmoH"
      )
      .then(() => {
        window.location.href = tipoSeleccionado.paymentLink;
      })
      .catch(() => {
        window.location.href = tipoSeleccionado.paymentLink;
      });
  };

  if (!tipoSeleccionado) {
    return (
      <Section>
        <Title>Selecciona una experiencia</Title>
        <SubText>
          Primero elige qué quieres hacer en el taller ✨
        </SubText>
        <Button onClick={() => navigate("/experiencias")}>
          Ver experiencias
        </Button>
      </Section>
    );
  }

  return (
    <Section>
      <Title>
        {tipoSeleccionado?.tipo || tipoSeleccionado?.titulo}
      </Title>

      <SubText>
        {tipoSeleccionado?.descripcion || "Elige cómo quieres vivir la experiencia ✨"}
      </SubText>

      <CalendarContainer>

        {step === 1 && (
          <>
            <h3>Elige tu día</h3>

            <p style={{ marginBottom: "1rem" }}>
              {tipoSeleccionado.tipo || tipoSeleccionado.titulo} ·{" "}
              {tipoSeleccionado.precio}
            </p>

            <CustomCalendarWrapper>
              <Calendar
                onChange={(value) => {
                  setFecha(value);
                  setStep(2);
                }}
                value={fecha}
                tileDisabled={isDisabledDay}
                tileClassName={({ date }) =>
                  isAvailable(date) ? "available" : null
                }
              />
            </CustomCalendarWrapper>
          </>
        )}

        {step === 2 && (
          <>
            <Text>Estás a un paso ✨</Text>

            <div style={{
              background: "#f6f3ef",
              padding: "1rem",
              borderRadius: "12px",
              marginBottom: "1.5rem"
            }}>
              <strong>{fecha?.toLocaleDateString()}</strong><br />
              {tipoSeleccionado.tipo || tipoSeleccionado.titulo} ·{" "}
              {tipoSeleccionado.precio}
            </div>

            {tipoSeleccionado?.tipo?.toLowerCase().includes("clase") ? (
              <p style={{ marginBottom: "1rem" }}>
                Nos pondremos en contacto contigo para definir horarios ✨
              </p>
            ) : (
              <>
                <Select
                  value={horario}
                  onChange={(e) => {
                    setHorario(e.target.value);
                    setErrorHorario("");
                  }}
                >
                  <option value="">Selecciona horario</option>
                  {getHorarios().map((h, i) => (
                    <option key={i} value={h}>{h}</option>
                  ))}
                </Select>

                {errorHorario && (
                  <p style={{
                    color: "#d67447",
                    fontSize: "0.9rem",
                    marginTop: "-0.5rem",
                    marginBottom: "1rem"
                  }}>
                    {errorHorario}
                  </p>
                )}
              </>
            )}

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

              <Button type="submit">
                Continuar al pago
              </Button>
            </Form>
          </>
        )}

      </CalendarContainer>
    </Section>
  );
};

export default Reservas;