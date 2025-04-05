// src/Components/Reservas/Reservas.js
import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate, Link } from "react-router-dom";

const Section = styled.section`
  background-color: #fff9f0;
  padding: 4rem 1.5rem;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  color: #5a7263;
  margin-bottom: 2rem;
  font-family: "Playfair Display", serif;
`;

const SubText = styled.p`
  max-width: 700px;
  margin: 0 auto 2rem auto;
  color: #6d6762;
  font-size: 1.1rem;
  border: 2px solid #5a7263;
  padding: 1rem;
  border-radius: 20px;
  background-color: #fff;
`;

const CalendarContainer = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
  background: #fdf6ec;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
`;

const CustomCalendarWrapper = styled.div`
  display: flex;
  justify-content: center;

  .react-calendar {
    width: 100%;
    max-width: 900px;
    border: none;
    background-color: #fff;
    font-family: "Open Sans", sans-serif;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
  }

  .react-calendar__navigation button {
    background: none;
    color: #5a7263;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 0.75rem;
    border: none;
  }

  .react-calendar__month-view__weekdays {
    text-transform: uppercase;
    color: #5a7263;
    font-size: 1rem;
  }

  .react-calendar__tile {
    background: transparent;
    color: #6d6762;
    font-weight: 500;
    padding: 1.2rem 0.8rem;
    border-radius: 12px;
    transition: all 0.2s ease;
  }

  .react-calendar__tile:disabled {
    background: none;
    color: #ccc;
    pointer-events: none;
  }

  .react-calendar__tile:hover {
    background: #f0b65b;
    color: white;
  }

  .react-calendar__tile--now {
    background: #e3a092;
    color: white;
  }

  .react-calendar__tile--active {
    background: #5a7263;
    color: white;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .react-calendar {
      padding: 1rem;
    }

    .react-calendar__tile {
      padding: 0.6rem;
      font-size: 0.85rem;
    }

    .react-calendar__navigation button {
      font-size: 1rem;
    }
  }
`;

const Horarios = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin: 3rem auto;
`;

const Horario = styled.button`
  background-color: #f0b65b;
  border: none;
  border-radius: 30px;
  padding: 0.9rem 1.5rem;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    background-color: #dda94f;
  }
`;

const SelectorContainer = styled.div`
  margin: 3rem auto;
  max-width: 400px;
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  border: 2px solid #e3a092;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #5a7263;
  font-family: "Playfair Display", serif;
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 2rem auto;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #5a7263;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    background-color: #4b5c52;
  }
`;

const GroupLink = styled(Link)`
  display: inline-block;
  margin-top: 2.5rem;
  color: #5a7263;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: underline;
`;

const Reservas = () => {
  const [step, setStep] = useState(1);
  const [fecha, setFecha] = useState(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const [personas, setPersonas] = useState(1);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
  const navigate = useNavigate();

  const horarios = ["11:00", "13:00", "15:00", "17:00"];

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/gracias");
  };

  const isDisabledDay = ({ date }) => {
    const day = date.getDay();
    const today = new Date();
    return day === 0 || day === 1 || date < today.setHours(0, 0, 0, 0);
  };

  return (
    <Section>
      <Title>RESERVAS</Title>
      <SubText>
        Si quieres venir a pintar, te recomendamos reservar tu plaza con
        antelación.
      </SubText>

      <GroupLink to="/Grupal">¿Sois un grupo grande? Haz click aquí</GroupLink>

      <CalendarContainer>
        {step === 1 && (
          <>
            <h3
              style={{
                marginBottom: "2rem",
                fontFamily: "Playfair Display",
                color: "#5a7263",
              }}
            >
              Selecciona el día que quieres venir:
            </h3>
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

        {step === 2 && fecha && (
          <>
            <h3
              style={{
                marginBottom: "1.5rem",
                fontFamily: "Playfair Display",
                color: "#5a7263",
              }}
            >
              Elige el horario:
            </h3>
            <Horarios>
              {horarios.map((hora) => (
                <Horario
                  key={hora}
                  onClick={() => {
                    setHorarioSeleccionado(hora);
                    setStep(3);
                  }}
                >
                  {hora}
                </Horario>
              ))}
            </Horarios>
          </>
        )}

        {step === 3 && horarioSeleccionado && (
          <SelectorContainer>
            <Label htmlFor="personas">¿Cuántas personas seréis?</Label>
            <Select
              id="personas"
              value={personas}
              onChange={(e) => setPersonas(e.target.value)}
            >
              <option value={1}>1 persona</option>
              <option value={2}>2 personas</option>
              <option value={3}>3 personas</option>
              <option value={4}>4 personas</option>
              <option value={5}>5 personas</option>
              <option value={6}>6 personas</option>
            </Select>
            <Button onClick={() => setStep(4)} style={{ marginTop: "1.5rem" }}>
              Continuar
            </Button>
          </SelectorContainer>
        )}

        {step === 4 && (
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleFormChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
            <Input
              type="tel"
              name="telefono"
              placeholder="Tu teléfono"
              value={formData.telefono}
              onChange={handleFormChange}
            />
            <Button type="submit">Confirmar reserva</Button>
          </Form>
        )}
      </CalendarContainer>
    </Section>
  );
};

export default Reservas;
