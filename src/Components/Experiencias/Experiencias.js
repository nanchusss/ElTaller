import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Wrapper = styled.section`
  padding: 5rem 1.2rem;
  background: #f6f3ef;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Fraunces', serif;
  font-size: 3rem;
  color: #3f5c4a;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  color: #6d6762;
  font-size: 1.1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 18px;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    max-width: 380px;
    margin: 0 auto;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
  color: #3f5c4a;
`;

const CardText = styled.p`
  color: #6d6762;
  font-size: 0.95rem;
  margin-bottom: 0.6rem;
`;

const Highlight = styled.p`
  font-size: 0.9rem;
  color: #3f5c4a;
  margin-bottom: 1rem;
`;

const Price = styled.p`
  font-weight: 600;
  margin-bottom: 1.2rem;
`;

const ButtonPrimary = styled(NavLink)`
  display: inline-block;
  padding: 0.9rem;
  background: #d67447;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  width: 100%;
  text-align: center;

  &:hover {
    transform: scale(1.03);
  }
`;

const ButtonSecondary = styled(NavLink)`
  display: inline-block;
  padding: 0.8rem;
  border: 1px solid #d67447;
  color: #d67447;
  border-radius: 30px;
  text-decoration: none;
  width: 100%;
  text-align: center;
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

            {/* EXPERIENCIA PRINCIPAL */}
            <Card>
              <CardTitle>Pinta tu propia cerámica</CardTitle>

              <CardText>
                Elige tu pieza, relájate y disfruta del proceso.
              </CardText>

              <Highlight>
                Ideal para desconectar o compartir un plan diferente
              </Highlight>

              <Price>Desde 37€</Price>

              <ButtonPrimary
                to="/reservas"
                onClick={() =>
                  guardarExperiencia({
                    tipo: "Pinta tu propia cerámica",
                    precio: "Desde 37€"
                  })
                }
                state={{
                  tipo: "Pinta tu propia cerámica",
                  precio: "Desde 37€"
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

              <Highlight>
                No necesitas experiencia previa
              </Highlight>
<Highlight>
                Aprende técnicas para hacer tus propias creaciones
              </Highlight>
<Highlight>
                2 Horas a la semana
              </Highlight>
              <Price>95€ / mes </Price>

              <ButtonSecondary
                to="/reservas"
                onClick={() =>
                  guardarExperiencia({
                    tipo: "Clases de cerámica",
                    precio: "95€ / 4 clases"
                  })
                }
                state={{
                  tipo: "Clases de cerámica",
                  precio: "95€ / 4 clases"
                }}
              >
                Reservar
              </ButtonSecondary>
            </Card>

            {/* WORKSHOPS */}
            <Card>
              <CardTitle>Pinta tu Cerámica + Vino y picoteo</CardTitle>

              <CardText>
                Taller guiado para pintar tu pieza más vino y algo para picar
              </CardText>

              <Highlight>
                Diviértete y haz tu primera experiencia pintando cerámica!
              </Highlight>
              <Highlight>
                Grupos mínimo de 4 personas
              </Highlight>

              <Price>47€ por persona</Price>

              <ButtonSecondary
                to="/reservas"
                onClick={() =>
                  guardarExperiencia({
                    tipo: "Workshops creativos",
                    precio: "Próximas fechas"
                  })
                }
                state={{
                  tipo: "Workshops creativos",
                  precio: "Próximas fechas"
                }}
              >
                Reservar
              </ButtonSecondary>
            </Card>

          </Grid>
        </Container>
      </Wrapper>
    </>
  );
};

export default Experiencias;