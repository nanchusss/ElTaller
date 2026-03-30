import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate, Link } from "react-router-dom";
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
  font-size: 1.05rem;
  padding: 1.4rem;
  border-radius: 18px;
  background-color: #ffffff;
  border: 1px solid rgba(0,0,0,0.08);
`;

const CalendarContainer = styled.div`
  max-width: 1100px;
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
    max-width: 1000px;
    font-size: 1.15rem;
    padding: 2.5rem;
    border-radius: 20px;
    background: transparent;
    border: none;
  }

  .react-calendar__navigation button {
    font-size: 1.3rem;
    color: #3f6b5a;
    background: none;
  }

  .react-calendar__navigation button:hover {
    opacity: 0.6;
  }

  .react-calendar__tile {
    padding: 1.4rem 0.5rem !important;
    font-size: 1.05rem;
    border-radius: 14px;
    background: transparent;
    color: #4a4a4a;
    transition: all 0.25s ease;
  }

  /* hover general */
  .react-calendar__tile:enabled:hover {
    color: #d67447;
    transform: scale(1.08);
  }

  /* hoy */
  .react-calendar__tile--now {
    border: 1px solid rgba(0,0,0,0.12);
  }

  /* DISPONIBLE (elegante, no pesado) */
.react-calendar__tile.available {
  background: rgba(214, 116, 71, 0.12);
  color: #d67447;
  border-radius: 14px;
  font-weight: 600;
}

/* hover (ahí sí entra el color fuerte) */
.react-calendar__tile.available:hover {
  background: #d67447;
  color: white;
  transform: scale(1.08);
}

/* SELECCIONADO */
.react-calendar__tile--active {
  background: #3f6b5a !important;
  color: white;
  border-radius: 16px;
  transform: scale(1.12);
}

  .react-calendar__tile--active:hover {
    background: #355a4b !important;
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
  margin-top: 2rem;
  color: #3f6b5a;

  &:hover {
    text-decoration: underline;
  }
`;

const Reservas = () => {
  const [step, setStep] = useState(1);
  const [fecha, setFecha] = useState(null);
  const [tipoSeleccionado, setTipoSeleccionado] = useState(null);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const navigate = useNavigate();

  const isAvailable = (date) => {
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const esSabado = d.getDay() === 6;
    const esMesValido = [3, 4, 5].includes(d.getMonth());
    return esSabado && esMesValido;
  };

  const isDisabledDay = ({ date }) => !isAvailable(date);

  const opciones = [
    { titulo: "Pack 2 clases", descripcion: "Ideal para probar el taller", precio: "60€" },
    { titulo: "Pack mensual", descripcion: "2 clases al mes · cocciones incluidas", precio: "100€" },
    { titulo: "Pinta tu cerámica", descripcion: "Clase dirigida puntual", precio: "37€" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      fecha: fecha?.toLocaleDateString(),
      tipo: tipoSeleccionado?.titulo,
      precio: tipoSeleccionado?.precio,
    };

    emailjs
      .send("service_pgxu3ij", "template_zw59ehq", templateParams, "y6n4qGd0Vvdb2QmoH")
      .then(() => navigate("/gracias"))
      .catch(() => alert("Error al enviar"));
  };

  return (
    <Section>
      <Helmet>
        <title>Taller cerámica</title>
      </Helmet>

      <Title>Taller de cerámica y pintura</Title>

      <SubText>
        Sábados de 10h a 12h <br />
        Elige cómo quieres vivir la experiencia ✨
      </SubText>

      <GroupLink to="/Grupal">¿Buscas algo puntual?</GroupLink>

      <CalendarContainer>

        {step === 1 && (
          <>
            <h3>Elige tu día</h3>
            <CustomCalendarWrapper>
              <Calendar
                onChange={(value) => {
                  setFecha(value);
                  setStep(2);
                }}
                value={fecha}
                tileDisabled={isDisabledDay}
                tileClassName={({ date, view }) => {
                  if (view === "month" && isAvailable(date)) {
                    return "available";
                  }
                }}
              />
            </CustomCalendarWrapper>
          </>
        )}

        {step === 2 && (
          <>
            <h3 style={{ marginBottom: "1.5rem" }}>Elige tu experiencia</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "500px", margin: "0 auto" }}>
              {opciones.map((op, i) => (
                <Card
                  key={i}
                  onClick={() => setTipoSeleccionado(op)}
                  className={tipoSeleccionado?.titulo === op.titulo ? "active" : ""}
                >
                  <strong>{op.titulo}</strong><br />
                  <span style={{ color: "#6d6762" }}>{op.descripcion}</span><br />
                  <strong style={{ color: "#4f7a65" }}>{op.precio}</strong>
                </Card>
              ))}
            </div>

            {tipoSeleccionado && <Button onClick={() => setStep(3)}>Continuar</Button>}
          </>
        )}

        {step === 3 && (
          <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Nombre" required onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} />
            <Input type="email" placeholder="Email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <Input type="tel" placeholder="Teléfono" onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} />
            <Button type="submit">Confirmar</Button>
          </Form>
        )}

      </CalendarContainer>
    </Section>
  );
};

export default Reservas;