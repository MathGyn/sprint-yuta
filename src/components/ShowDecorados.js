import React, { useState, useEffect, useRef } from 'react';
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

const HeroBanner = styled.div`
  text-align: center;
  margin-bottom: 80px;
  padding: 80px 40px;

  @media (max-width: 768px) {
    padding: 60px 30px;
    margin-bottom: 60px;
  }
`;

const HeroLogo = styled.img`
  max-width: 600px;
  width: 100%;
  height: auto;
  margin: 0 auto 30px;
  display: block;

  @media (max-width: 968px) {
    max-width: 450px;
  }

  @media (max-width: 768px) {
    max-width: 320px;
  }
`;

const HeroTitle = styled.h2`
  font-size: 72px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -2px;
  margin-bottom: 20px;
  position: relative;

  .show {
    color: var(--color-gold);
  }

  .de {
    color: var(--color-gold);
    font-size: 56px;
  }

  .decorados {
    color: #999999;
  }

  @media (max-width: 968px) {
    font-size: 48px;

    .de {
      font-size: 36px;
    }
  }

  @media (max-width: 768px) {
    font-size: 36px;

    .de {
      font-size: 28px;
    }
  }
`;

const PrizeAmount = styled.div`
  font-size: 96px;
  font-weight: 900;
  color: var(--color-gold);
  margin: 30px 0;
  line-height: 1;
  position: relative;

  @media (max-width: 968px) {
    font-size: 64px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const PrizeLabel = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #999999;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PrizeDescription = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Disclaimer = styled.p`
  font-size: 12px;
  color: #666666;
  font-style: italic;
  margin-top: 30px;
`;

const SectionTitle = styled.h3`
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

const ChipsContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 60px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 40px;
  }
`;

const Chip = styled.button`
  background: ${props => props.$active ? 'var(--color-gold)' : '#0A0A0A'};
  color: ${props => props.$active ? '#000000' : '#666666'};
  border: 1px solid ${props => props.$active ? 'var(--color-gold)' : '#222222'};
  padding: 12px 28px;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Salena', sans-serif;

  &:hover {
    background: ${props => props.$active ? 'var(--color-yellow)' : '#111111'};
    border-color: var(--color-gold);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 11px;
  }
`;

const UnitsGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$single ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))'};
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const SingleUnitLayout = styled.div`
  display: grid;
  grid-template-columns: 35fr 65fr;
  gap: 0;
  background: #0A0A0A;
  border: 1px solid #222222;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-gold);
    transform: translateY(-3px);
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const UnitCard = styled.div`
  background: #0A0A0A;
  border: 1px solid #222222;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-gold);
    transform: translateY(-3px);
  }
`;

const UnitImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const SingleUnitImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 500px;
  object-fit: cover;
  display: block;

  @media (max-width: 968px) {
    min-height: 350px;
  }

  @media (max-width: 768px) {
    min-height: 250px;
  }
`;

const UnitInfo = styled.div`
  padding: 30px 25px;
`;

const SingleUnitInfo = styled.div`
  padding: 60px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 968px) {
    padding: 40px 35px;
  }

  @media (max-width: 768px) {
    padding: 30px 25px;
  }
`;

const UnitType = styled.h4`
  font-size: 14px;
  font-weight: 800;
  color: var(--color-white);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const UnitArea = styled.div`
  font-size: 12px;
  color: var(--color-gold);
  font-weight: 700;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const UnitPrice = styled.div`
  font-size: 28px;
  font-weight: 900;
  color: var(--color-gold);
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const UnitTag = styled.div`
  font-size: 11px;
  color: #666666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const PremiumBanner = styled.div`
  background: var(--color-gold);
  padding: 30px 40px;
  text-align: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    padding: 25px 30px;
  }
`;

const BannerText = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DisclaimerText = styled.p`
  text-align: center;
  margin-top: 40px;
  font-size: 11px;
  color: #444444;
  font-weight: 600;
  font-style: italic;
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  a:hover {
    color: inherit;
    text-decoration: none;
  }
`;

const decoradosData = [
  {
    id: 'urban-garden',
    name: 'URBAN GARDEN',
    units: [
      {
        type: '2 Quartos sendo 2 Suítes',
        area: '69m²',
        price: 'R$ 898.192,00',
        tag: 'Decorado Vintage',
        image: '/images/decorados/urban-garden-1.jpg'
      },
      {
        type: '2 Quartos sendo 2 Suítes',
        area: '76m²',
        price: 'R$ 1.058.830,00',
        tag: 'Decorado Vintage',
        image: '/images/decorados/urban-garden-2.jpg'
      },
      {
        type: '3 Quartos sendo 3 Suítes',
        area: '93m²',
        price: 'R$ 1.413.844,00',
        tag: 'Decorado Vintage',
        image: '/images/decorados/urban-garden-3.jpg'
      }
    ]
  },
  {
    id: 'synergia',
    name: 'SYNERGIA',
    units: [
      {
        type: '2 Quartos sendo 2 Suítes',
        area: '76m²',
        price: 'R$ 1.291.005,00',
        tag: 'Decorado Clássico',
        image: '/images/decorados/synergia-1.jpg'
      }
    ]
  },
  {
    id: 'vertice',
    name: 'VÉRTICE',
    units: [
      {
        type: '3 Quartos 1 Suíte',
        area: '75m²',
        price: 'R$ 804.136,00',
        tag: 'Pronto para morar - Entregando em Lençóis',
        image: '/images/decorados/vertice-1.jpg'
      }
    ]
  },
  {
    id: 'lake-house',
    name: 'LAKE HOUSE',
    units: [
      {
        type: '2 Quartos 2 Suítes',
        area: '73m²',
        price: 'R$ 1.032.540,00',
        tag: 'Decorado Vintage',
        image: '/images/decorados/lake-house-1.jpg'
      },
      {
        type: '3 Quartos sendo 2 Suítes Americanas',
        area: '82m²',
        price: 'R$ 1.103.200,00',
        tag: 'Pronto para morar',
        image: '/images/decorados/lake-house-2.jpg'
      },
      {
        type: '3 Quartos sendo 3 Suítes Plenas',
        area: '85m²',
        price: 'R$ 1.180.800,00',
        tag: 'Pronto para morar',
        image: '/images/decorados/lake-house-3.jpg'
      }
    ]
  }
];

const ShowDecorados = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  const startAutoRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % decoradosData.length);
    }, 5000);
  };

  const stopAutoRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleManualClick = (index) => {
    setActiveIndex(index);
    stopAutoRotation();

    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      startAutoRotation();
    }, 30000);
  };

  useEffect(() => {
    startAutoRotation();

    return () => {
      stopAutoRotation();
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const activeDecorado = decoradosData[activeIndex];

  return (
    <Section id="show-decorados">
      <Container>
        <HeroBanner>
          <HeroLogo src="/images/show-decorados-logo.png" alt="Show de Decorados" />
          <PrizeLabel>Prêmio de</PrizeLabel>
          <PrizeAmount>R$ 10.000</PrizeAmount>
          <PrizeLabel>em dinheiro</PrizeLabel>
          <PrizeDescription>Na venda de qualquer decorado</PrizeDescription>
          <Disclaimer>Verifique regulamento completo da campanha.</Disclaimer>
        </HeroBanner>

        <SectionTitle>Apartamentos Decorados</SectionTitle>
        <SectionSubtitle>Unidades prontas para visitar</SectionSubtitle>

        <ChipsContainer>
          {decoradosData.map((dec, index) => (
            <Chip
              key={dec.id}
              $active={index === activeIndex}
              onClick={() => handleManualClick(index)}
            >
              {dec.name}
            </Chip>
          ))}
        </ChipsContainer>

        {activeDecorado.units.length === 1 ? (
          <UnitsGrid $single>
            <SingleUnitLayout>
              <SingleUnitImage src={activeDecorado.units[0].image} alt={activeDecorado.units[0].type} />
              <SingleUnitInfo>
                <UnitType>{activeDecorado.units[0].type}</UnitType>
                <UnitArea>{activeDecorado.units[0].area}</UnitArea>
                <UnitPrice>{activeDecorado.units[0].price}</UnitPrice>
                <UnitTag>{activeDecorado.units[0].tag}</UnitTag>
              </SingleUnitInfo>
            </SingleUnitLayout>
          </UnitsGrid>
        ) : (
          <UnitsGrid>
            {activeDecorado.units.map((unit, index) => (
              <UnitCard key={index}>
                <UnitImage src={unit.image} alt={unit.type} />
                <UnitInfo>
                  <UnitType>{unit.type}</UnitType>
                  <UnitArea>{unit.area}</UnitArea>
                  <UnitPrice>{unit.price}</UnitPrice>
                  <UnitTag>{unit.tag}</UnitTag>
                </UnitInfo>
              </UnitCard>
            ))}
          </UnitsGrid>
        )}

        <PremiumBanner>
          <BannerText>PRÊMIO DE R$8.000 PARA O CORRETOR E R$ 2.000 PARA O GERENTE</BannerText>
        </PremiumBanner>

        <DisclaimerText><a href="/._regulamento/" target="_blank" rel="noopener noreferrer">Confira o regulamento completo</a></DisclaimerText>
      </Container>
    </Section>
  );
};

export default ShowDecorados;