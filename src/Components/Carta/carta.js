import React, { useState } from 'react';
import styled from 'styled-components';

// Estilos base
const Fondo = styled.section`
  background-color: #fff9f0;
  padding: 3rem 2rem;
  border-radius: 1rem;
  max-width: 800px;
  margin: 3rem auto;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  text-align: center;
`;

const TituloPrincipal = styled.h1`
  color: #5a7263;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Subfrase = styled.p`
  font-style: italic;
  color: #6d6762;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const Seccion = styled.div`
  margin-bottom: 2rem;
  text-align: left;

  @media (max-width: 768px) {
    border-bottom: 1px solid #f0b65b;
    padding-bottom: 1rem;
  }
`;

const TituloSeccion = styled.button`
  font-size: 1.5rem;
  color: #5a7263;
  background: none;
  border: none;
  font-weight: 600;
  padding: 0;
  margin-bottom: 1rem;
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #f0b65b;
  }

  span {
    font-size: 1.5rem;
    line-height: 1;
  }

  @media (min-width: 769px) {
    cursor: default;

    span {
      display: none;
    }
  }
`;

const Contenido = styled.div`
  display: ${props => (props.abierto ? 'block' : 'none')};

  @media (min-width: 769px) {
    display: block;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const Nombre = styled.p`
  font-weight: 500;
  color: #6d6762;
`;

const Descripcion = styled.p`
  font-size: 0.75rem;
  line-height: 1.2;
  color: #6d6762;
  opacity: 0.85;
`;

const Precio = styled.p`
  font-weight: 600;
  color: #5a7263;
  margin-left: 1rem;
  white-space: nowrap;
`;

function SeccionMenu({ titulo, items }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <Seccion>
      <TituloSeccion onClick={() => setAbierto(!abierto)}>
        {titulo}
        <span>{abierto ? '–' : '+'}</span>
      </TituloSeccion>
      <Contenido abierto={abierto}>
        {items.map((item, index) => (
          <Item key={index}>
            <div>
              <Nombre>{item.nombre}</Nombre>
              {item.descripcion && <Descripcion>{item.descripcion}</Descripcion>}
            </div>
            <Precio>{item.precio}</Precio>
          </Item>
        ))}
      </Contenido>
    </Seccion>
  );
}

function Carta() {
  const cafes = [
    { nombre: 'Espresso', precio: '1,50 €' },
    { nombre: 'Café con leche', precio: '2,00 €' },
  
  ];

  const affogatos = [
    { nombre: 'Affogato clásico', precio: '3,50 €', descripcion: 'Helado con espresso caliente.' },
    { nombre: 'Affogato con Baileys', precio: '5,50 €', descripcion: 'Helado, espresso y licor Baileys.' },
  ];


  const dulces = [
    { nombre: 'Carrot cake', precio: '3,50 €', descripcion: 'Pastel de zanahoria y especias.' },
    { nombre: 'Magdalena', precio: '1,50 €', descripcion: 'Chocolate o Vainilla.' },
    
  ];

  const salados = [
    { nombre: 'Entrepan de salmón, queso Finlandia y rúcula', precio: '5,50 €' },
  
  ];

  const bebidas = [
    { nombre: 'Agua saborizada natural (500 ml)', precio: '3 €', descripcion: 'Agua fresca con frutas y hierbas naturales. Variedad según el día.' },
    { nombre: 'Limonada con jengibre y menta', precio: '3.5 €', descripcion: 'Refrescante y natural. Hecha en casa con limón, jengibre, menta fresca y azúcar mascab¡¡¡¡¡.' },
    { nombre: 'Refrescos', precio: '2 €', descripcion: 'Coca Cola Zero, Coca Cola, Refresco Naranja, Refresco Limón' },
    { nombre: 'Agua con gas', precio: '1,5 €', descripcion: 'Vichy Catalán' },
    { nombre: 'Agua sin gas', precio: '1,5 €', descripcion: 'Solan de Cabras' },
  ];

  return (
    <Fondo>
      <TituloPrincipal>Nuestra Carta</TituloPrincipal>
      <Subfrase>Cerámica, café y algo dulce. Así de simple.</Subfrase>

      <SeccionMenu titulo="Cafés" items={cafes} />
      <SeccionMenu titulo="Affogatos" items={affogatos} />
      <SeccionMenu titulo="Para acompañar (dulces)" items={dulces} />
      <SeccionMenu titulo="Entrepanes salados" items={salados} />
      <SeccionMenu titulo="Bebidas frescas" items={bebidas} />
    </Fondo>
  );
}

export default Carta;


