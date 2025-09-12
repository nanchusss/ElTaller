import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";

// 👇 Meta info
<Helmet>
  <title>El Taller d’Aguaymanto – Un café amb art</title>
  <meta
    name="description"
    content="Un espacio creativo en Vilanova del Vallés para talleres, eventos y experiencias con cerámica."
  />
</Helmet>;

// ✅ Tus estilos (sin cambios)
const Section = styled.section`
  background-color: #fff9f0;
  padding: 4rem 1.5rem;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  color: #726a5a;
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

// 👉 Componente principal
const Reservas = () => {
  const { t } = useTranslation();
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

  // ✅ Fechas permitidas: 4 y 11 de octubre de 2025 (mes 9 porque es 0-index)
  const allowedDates = [
    new Date(2025, 9, 4),
    new Date(2025, 9, 11),
  ].map(d => new Date(d.getFullYear(), d.getMonth(), d.getDate())); // normalizar sin hora

  // Horarios (19:00 fijo)
  const DURACION = "1 h 30 a 2 h";
  const horarios = [
    {
      hora: "19:00",
      experiencia: "Pinta tu cerámica + vino y picoteo",
    },
  ];

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      fecha: fecha.toLocaleDateString(),
      hora: horarioSeleccionado?.hora || "",
      personas,
      experiencia: horarioSeleccionado?.experiencia || "",
      duracion: DURACION,
    };

    emailjs
      .send(
        "service_pgxu3ij",
        "template_zw59ehq",
        templateParams,
        "y6n4qGd0Vvdb2QmoH"
      )
      .then(() => {
        navigate("/gracias");
      })
      .catch((error) => {
        console.error("Error al enviar email:", error);
        alert("Error al enviar la reserva. Por favor, intentá de nuevo.");
      });
  };

  const isSameDay = (a, b) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const isDisabledDay = ({ date }) => {
    // Normalizar fecha sin hora
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    // Regla 48 h
    const hoy = new Date();
    const hoySinHora = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
    const fechaLimite = new Date(hoySinHora);
    fechaLimite.setDate(fechaLimite.getDate() + 2);

    const esPermitida = allowedDates.some(ad => isSameDay(ad, d));
    const respeta48h = d >= fechaLimite;

    // Deshabilitar lo que NO sea una de las fechas permitidas o no cumpla 48h
    return !(esPermitida && respeta48h);
  };

  return (
    <Section>
      <Title>{t("reservas.titulo")}</Title>
      <SubText>{t("reservas.subtexto")}</SubText>
      <GroupLink to="/Grupal">{t("reservas.linkGrupal")}</GroupLink>

      <CalendarContainer>
        {step === 1 && (
          <>
            <h3 style={{ marginBottom: "2rem", fontFamily: "Playfair Display", color: "#5a7263" }}>
              {t("reservas.seleccionaDia")}
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
            <h3 style={{ marginBottom: "1rem", fontFamily: "Playfair Display", color: "#5a7263" }}>
              {t("reservas.seleccionaHora")}
            </h3>
            <p style={{ marginTop: 0, marginBottom: "1.5rem", color: "#6d6762" }}>
              Duración: {DURACION}
            </p>
            <Horarios>
              {horarios.map((h) => (
                <Horario
                  key={h.hora}
                  onClick={() => {
                    setHorarioSeleccionado(h);
                    setStep(3);
                  }}
                  title={h.experiencia}
                >
                  <div style={{ fontWeight: 600 }}>{h.hora}</div>
                  <div style={{ fontSize: "0.9rem", opacity: 0.9, marginTop: 4 }}>
                    {h.experiencia}
                  </div>
                </Horario>
              ))}
            </Horarios>
          </>
        )}

        {step === 3 && horarioSeleccionado && (
          <SelectorContainer>
            <Label htmlFor="personas">{t("reservas.labelPersonas")}</Label>
            <Select
              id="personas"
              value={personas}
              onChange={(e) => setPersonas(parseInt(e.target.value, 10))}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {t(`reservas.persona${n}`)}
                </option>
              ))}
            </Select>
            <Button onClick={() => setStep(4)} style={{ marginTop: "1.5rem" }}>
              {t("reservas.botonContinuar")}
            </Button>
          </SelectorContainer>
        )}

        {step === 4 && (
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="nombre"
              placeholder={t("reservas.placeholderNombre")}
              value={formData.nombre}
              onChange={handleFormChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder={t("reservas.placeholderEmail")}
              value={formData.email}
              onChange={handleFormChange}
              required
            />
            <Input
              type="tel"
              name="telefono"
              placeholder={t("reservas.placeholderTelefono")}
              value={formData.telefono}
              onChange={handleFormChange}
            />
            <Button type="submit">{t("reservas.botonConfirmar")}</Button>
          </Form>
        )}
      </CalendarContainer>
    </Section>
  );
};

export default Reservas;
