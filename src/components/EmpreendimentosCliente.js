import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 120px 20px;
  background: #000000;
  border-top: 1px solid #111111;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 15px;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 14px;
  text-align: center;
  color: #666666;
  margin-bottom: 60px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 40px;
  }
`;

const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

const Card = styled.article`
  background: #0A0A0A;
  border: 1px solid #222222;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  flex: 0 1 calc((100% - 48px) / 3);

  @media (max-width: 1200px) {
    flex-basis: calc((100% - 24px) / 2);
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
  }

  &:hover {
    border-color: var(--color-gold);
    transform: translateY(-3px);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid #222222;
`;

const Cover = styled.img`
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
`;

const DeliveryBadge = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid var(--color-gold);
  padding: 10px 16px;
  font-size: 11px;
  font-weight: 800;
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Content = styled.div`
  padding: 20px;
`;

const Name = styled.h3`
  font-size: 22px;
  font-weight: 900;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 8px;
`;

const Details = styled.p`
  font-size: 12px;
  color: #888888;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 8px;
`;

const Hint = styled.p`
  font-size: 11px;
  color: #666666;
  margin: 0;
`;

const Sector = styled.p`
  font-size: 12px;
  color: var(--color-gold);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 8px;
`;

const empreendimentosResumo = [
  {
    id: 'synergia',
    name: 'SYNERGIA BUENO',
    details: '68m², 119m² e 122m² • 2 Quartos a 3 Suítes',
    delivery: 'Entrega em 2028',
    image: '/images/synergia.jpg',
    sector: 'Setor Bueno'
  },
  {
    id: 'urban-garden',
    name: 'URBAN GARDEN',
    details: '60m² a 93m² • 2 Quartos a 3 Suítes',
    delivery: 'Entrega em 2028',
    image: '/images/urban-garden.jpg',
    sector: 'Setor Bueno'
  },
  {
    id: 'lake-house',
    name: 'LAKE HOUSE',
    details: '49m² a 82m² • 1 Quarto a 3 Suítes',
    delivery: 'Pronto pra Morar',
    image: '/images/lake-house.jpg',
    sector: 'Parque Amazônia'
  },
  {
    id: 'vertice',
    name: 'VÉRTICE RESIDENCE',
    details: '73m² a 75m² • 3 Quartos com 1 Suíte',
    delivery: 'Pronto pra Morar',
    image: '/images/vertice.jpg',
    sector: 'Vila Rosa'
  },
  {
    id: 'parque',
    name: 'RESERVA DO PARQUE',
    details: '59m² a 66m² • 2 Quartos com 1 Suíte',
    delivery: 'Pronto pra Morar',
    image: '/images/parque.jpg',
    sector: 'Vila Rosa'
  }
];

const EmpreendimentosCliente = () => {
  return (
    <Section id="empreendimentos">
      <Container>
        <SectionTitle>Empreendimentos</SectionTitle>
        <SectionSubtitle>Resumo dos empreendimentos com condições especiais</SectionSubtitle>

        <CardsGrid>
          {empreendimentosResumo.map(emp => (
            <Card key={emp.id}>
              <ImageWrapper>
                <Cover src={emp.image} alt={emp.name} />
                <DeliveryBadge>{emp.delivery}</DeliveryBadge>
              </ImageWrapper>
              <Content>
                <Name>{emp.name}</Name>
                <Details>{emp.details}</Details>
                <Sector>{emp.sector}</Sector>
                <Hint>Seleção limitada de unidades com desconto</Hint>
              </Content>
            </Card>
          ))}
        </CardsGrid>
      </Container>
    </Section>
  );
};

export default EmpreendimentosCliente;


