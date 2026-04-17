import styled from "styled-components";
import card1 from "../Voucher/images/card1.jpeg"
import card2 from "../Voucher/images/card2.png"
import card3 from "../Voucher/images/card3.png"
import card4 from "../Voucher/images/card4.png"

/* GRID */

const Grid = styled.div`
  display: grid;
  gap: 2.5rem;
  max-width: 1100px;
  margin: 4rem auto;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

/* CARD */

const Card = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 2.5rem 2rem;
  text-align: center;

  box-shadow: 0 12px 30px rgba(0,0,0,0.05);
  transition: all 0.25s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-6px);
  }
`;

const Image = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1.2rem;
`;

const Title = styled.h3`
  font-family: 'Fraunces', serif;
  font-size: 1.5rem;
  color: #3f5c4a;
  margin-bottom: 0.5rem;
`;

const Desc = styled.p`
  font-size: 1rem;
  color: #6d6762;
  margin-bottom: 1.2rem;
  line-height: 1.4;
`;

const Price = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: #3f6b5a;
  margin-bottom: 1.5rem;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.8rem 1.8rem;
  border-radius: 999px;
  background: #d67447;
  color: white;
  text-decoration: none;
  font-size: 0.95rem;

  transition: all 0.2s ease;

  &:hover {
    background: #c9653a;
    transform: scale(1.05);
  }
`;

/* DATA REAL (aquí está la magia) */

const vouchers = [
  {
    title: "Pinta tu cerámica",
    desc: "El regalo perfecto! Un momento para desconectar, crear y disfrutar en una clase guidada. Materiales incluídos! Coffee Corner para disfrutar de una infusión",
    price: "37€",
    img: card1,
    link: "https://buy.stripe.com/dRm00i9otdfVawngSs0RG06"
  },
  {
    title: "Cerámica + vino y picoteo",
    desc: "Plan perfecto para compartir, crear y brindar. Sorprende a esa persona especial con una experiencia creativa",
    price: "47€",
    img: card4,
    link: "https://buy.stripe.com/dRm5kCcAFfo3dIzfOo0RG07"
  },
  {
    title: "Pack 4 clases de cerámica",
    desc: "Regala un pack de 4 clases para iniciar en el mundo de la cerámica. Clases guiadas para poder descubrir este mundo lleno de arcilla y creatividad.",
    price: "95€",
    img: card2,
    link: "https://buy.stripe.com/eVq4gybwB3Fl5c3eKk0RG05"
  },
  {
    title: "Privatización hasta 10 personas",
    desc: "En exclusiva para tu grupo. Regala un taller privado solo para vosotros. Ideal para celebrar.",
    price: "Consultar",
    img: card3,
    link: "https://buy.stripe.com/eVq4gy6ch2Bhawn6dO0RG08"
  }
];

/* COMPONENT */

const VoucherCards = () => {
  return (
    <Grid>
      {vouchers.map((v, i) => (
        <Card key={i}>
          <div>
            <Image src={v.img} alt={v.title} />
            <Title>{v.title}</Title>
            <Desc>{v.desc}</Desc>
          </div>

          <div>
            <Price>{v.price}</Price>
            <Button href={v.link} target="_blank">
              Comprar voucher
            </Button>
          </div>
        </Card>
      ))}
    </Grid>
  );
};

export default VoucherCards;
