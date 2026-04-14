import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Wrapper = styled.section`
  padding: 4rem 1.2rem;
  background: #f6f3ef;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Fraunces', serif;
  font-size: 2.8rem;
  color: #3f5c4a;
  margin-bottom: 0.6rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 1.2;
  }
`;

const Subtitle = styled.p`
  color: #6d6762;
  font-size: 1.05rem;
  margin-bottom: 2.2rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0 0.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 10px 25px rgba(0,0,0,0.06);
  transition: all 0.25s ease;
  text-align: left;
  position: relative;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    max-width: 420px;
    margin: 0 auto;
    padding: 1.4rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #3f5c4a;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CardText = styled.p`
  color: #6d6762;
  font-size: 0.92rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const Highlight = styled.p`
  font-size: 0.9rem;
  color: #3f5c4a;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  color: #3f6b5a;
  margin: 1rem 0 1.4rem;

  span {
    font-size: 0.85rem;
    font-weight: 400;
    color: #6d6762;
    margin-left: 4px;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ButtonPrimary = styled(NavLink)`
  display: inline-block;
  padding: 0.85rem;
  background: #d67447;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  width: 100%;
  text-align: center;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.03);
    background: #c9653a;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.95rem;
  }
`;

const Experiencias = () => {

  const guardarExperiencia = (data) => {
    localStorage.setItem("experienciaSeleccionada", JSON.stringify(data));
  };

  return (
    <>
      <Helmet>
        <title>Experiencias de cerámica en Barcelona | Taller creativo</title>
        <meta
          name="description"
          content="Descubre experiencias de cerámica cerca de Barcelona. Clases, workshops y pintura de cerámica en un espacio creativo y acogedor."
        />
      </Helmet>

      <Wrapper>
        <Container>
          <Title>Elige tu experiencia</Title>

          <Subtitle>
            Cerámica, calma y creatividad en un espacio pensado para disfrutar
          </Subtitle>

          <Grid>

            {/* PINTA CERÁMICA */}
            <Card>
              <CardTitle>Pinta tu propia cerámica</CardTitle>

              <CardText>
                Elige tu pieza, relájate y disfruta del proceso.
              </CardText>

              <Highlight>
                Ideal para desconectar o compartir un plan diferente
              </Highlight>
              <Highlight>
                Sábados de 10h a 12h. Otros horarios a consultar.
              </Highlight>

              <Price>37€ por persona</Price>

              <ButtonPrimary
                to="/reservas"
                onClick={() =>
                  guardarExperiencia({
                    tipo: "Pinta tu cerámica",
                    precio: "Desde 37€ por persona",
                    descripcion: "Clase guiada donde os acompañaremos en el proceso de decoración de un bizcocho cerámico. Unos días más tarde os entregamos vuestra pieza lista!",
                    slug: "pinta-tu-ceramica-granollers",
                    paymentLink: "https://buy.stripe.com/3cI7sK7glejZcEv59K0RG00"
                  })
                }
                state={{
                  tipo: "Pinta tu cerámica",
                  precio: "Desde 37€ por persona",
                  descripcion: "Clase guiada donde os acompañaremos en el proceso de decoración de un bizcocho cerámico. Unos días más tarde os entregamos vuestra pieza lista!",
                  slug: "pinta-tu-ceramica-granollers",
                  paymentLink: "https://buy.stripe.com/3cI7sK7glejZcEv59K0RG00"
                }}
              >
                Reservar
              </ButtonPrimary>
            </Card>

            {/* CLASES */}
            <Card>
              <CardTitle>Clases de cerámica</CardTitle>

              <CardText>
                Aprende técnicas y desarrolla tus propios proyectos.
              </CardText>

              <Highlight>No necesitas experiencia previa</Highlight>
              <Highlight>
                Aprende técnicas para hacer tus propias creaciones
              </Highlight>
              <Highlight>2 horas a la semana</Highlight>

              <Price>95€ / mes</Price>

              <ButtonPrimary
                to="/reservas"
                onClick={() =>
                  guardarExperiencia({
                    tipo: "Clases de cerámica. Asistencia Mensual Sábados de 10h a 12h",
                    descripcion: "Apuntate a nuestras clases regulares. Te enseñaremos a comprender la cerámica, te acompañaremos en el proceso creativo y primeros pasos para que descubras este nuevo mundo de creatividad y relax",
                    precio: "95€ / 4 clases",
                    slug: "taller-ceramica-clases-granollers",
                    paymentLink: "https://buy.stripe.com/28EbJ00RX0t933V31C0RG03"
                  })
                }
                state={{
                  tipo: "Clases de cerámica",
                  precio: "95€ / 4 clases",
                  slug: "taller-ceramica-clases-granollers",
                  paymentLink: "https://buy.stripe.com/28EbJ00RX0t933V31C0RG03"
                }}
              >
                Reservar
              </ButtonPrimary>
            </Card>

            {/* CERÁMICA + VINO */}
            <Card>
              <CardTitle>Pinta tu Cerámica + Vino y picoteo</CardTitle>

              <CardText>
                Un plan diferente: cerámica + vino en un ambiente relajado
              </CardText>

              <Highlight>
                Diviértete y haz tu primera experiencia pintando cerámica
              </Highlight>
              <Highlight>Grupos mínimo de 4 personas</Highlight>

              <Price>47€ por persona</Price>

              <ButtonPrimary
                to="/reservas"
                onClick={() =>
                  guardarExperiencia({
                    tipo: "Workshop Pinta Cerámica + Vino",
                    precio: "47€ por Persona",
                    descripcion: "Actividad para grupos mínimo de 4 personas. Actividad en sesión abierta al público. El profe irá explicando las técnicas de decoración mientras acompañamos de una copa de vino y un picoteo sencillo. Todos los materiales están incluídos",
                    slug: "ceramica-y-vino-granollers",
                    paymentLink: "https://buy.stripe.com/cNi8wO1W1cbRcEv8lW0RG04"
                  })
                }
                state={{
                  tipo: "Workshop Pinta Cerámica + Vino",
                  precio: "47€ por Persona",
                  slug: "ceramica-y-vino-granollers",
                  paymentLink: "https://buy.stripe.com/cNi8wO1W1cbRcEv8lW0RG04"
                }}
              >
                Reservar
              </ButtonPrimary>
            </Card>

          </Grid>
        </Container>
      </Wrapper>
    </>
  );
};

export default Experiencias;