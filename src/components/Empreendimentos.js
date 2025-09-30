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

const EmpreendimentoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  margin-bottom: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ImageSection = styled.div`
  position: relative;
`;

const BuildingImage = styled.img`
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  border: 1px solid #222222;
`;

const DeliveryBadge = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid var(--color-gold);
  padding: 12px 24px;
  font-size: 12px;
  font-weight: 800;
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const BuildingHeader = styled.div`
  margin-bottom: 30px;
`;

const BuildingName = styled.h3`
  font-size: 36px;
  font-weight: 900;
  color: var(--color-white);
  text-transform: uppercase;
  margin-bottom: 10px;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const BuildingDetails = styled.p`
  font-size: 13px;
  color: #666666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ConditionsLabel = styled.div`
  background: var(--color-gold);
  color: #000000;
  padding: 8px 20px;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: inline-block;
  margin-bottom: 30px;
`;

const UnitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const UnitCard = styled.div`
  background: #0A0A0A;
  border: 1px solid #222222;
  padding: 30px 25px;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-gold);
    transform: translateY(-3px);
  }
`;

const UnitBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--color-gold);
  color: #000000;
  font-size: 11px;
  font-weight: 900;
  padding: 8px 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const UnitType = styled.h4`
  font-size: 16px;
  font-weight: 800;
  color: var(--color-white);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const UnitArea = styled.div`
  font-size: 12px;
  color: #666666;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const UnitPrice = styled.div`
  font-size: 11px;
  color: #666666;
  margin-bottom: 5px;
  font-weight: 600;
`;

const UnitPromoPrice = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: var(--color-gold);

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ViewAllButton = styled.button`
  background: transparent;
  color: var(--color-gold);
  border: 1px solid var(--color-gold);
  padding: 18px 40px;
  font-size: 13px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Salena', sans-serif;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: block;

  &:hover {
    background: var(--color-gold);
    color: #000000;
  }

  @media (max-width: 768px) {
    padding: 16px 30px;
    font-size: 12px;
  }
`;

const empreendimentos = [
  {
    id: 'synergia',
    name: 'SYNERGIA',
    details: '68m², 119m² e 122m² • 2 Quartos e 3 Suítes',
    delivery: 'Entrega em 2028',
    image: '/images/synergia.jpg',
    units: [
      {
        type: '2 Quartos + 1 Suíte',
        area: '68m²',
        originalPrice: 'De R$ 1.400.000',
        promoPrice: 'R$ 780.000',
        discount: '84 un.'
      },
      {
        type: '3 Suítes',
        area: '119m²',
        originalPrice: 'De R$ 1.900.000',
        promoPrice: 'R$ 1.350.000',
        discount: '82 un.'
      },
      {
        type: '3 Suítes',
        area: '122m²',
        originalPrice: 'De R$ 1.900.000',
        promoPrice: 'R$ 1.400.000',
        discount: '71 un.'
      }
    ]
  },
  {
    id: 'urban-garden',
    name: 'URBAN GARDEN',
    details: '60m² a 93m² • 2 Quartos e 3 Suítes',
    delivery: 'Entrega em 2028',
    image: '/images/urban-garden.jpg',
    units: [
      {
        type: '2 Quartos + 1 Suíte',
        area: '60m²',
        originalPrice: 'De R$ 1.100.000',
        promoPrice: 'R$ 630.000',
        discount: '87 un.'
      },
      {
        type: '2 Suítes',
        area: '61m²',
        originalPrice: 'De R$ 1.100.000',
        promoPrice: 'R$ 700.000',
        discount: '80 un.'
      },
      {
        type: '2 Suítes',
        area: '75m²',
        originalPrice: 'De R$ 1.150.000',
        promoPrice: 'R$ 750.000',
        discount: '44 un.'
      },
      {
        type: '3 Suítes',
        area: '93m²',
        originalPrice: 'De R$ 1.400.000',
        promoPrice: 'R$ 1.050.000',
        discount: '83 un.'
      }
    ]
  },
  {
    id: 'lake-house',
    name: 'LAKE HOUSE',
    details: '49m² a 82m² • 1 Quarto e 3 Suítes',
    delivery: 'Pronto pra Morar',
    image: '/images/lake-house.jpg',
    units: [
      {
        type: '1 Suíte',
        area: '49m²',
        originalPrice: 'De R$ 600.000',
        promoPrice: 'R$ 425.000',
        discount: '71 un.'
      },
      {
        type: '2 Quartos + 1 Suíte',
        area: '60m²',
        originalPrice: 'De R$ 900.000',
        promoPrice: 'R$ 600.000',
        discount: '84 un.'
      },
      {
        type: '2 Suítes',
        area: '67m²',
        originalPrice: 'De R$ 1.050.000',
        promoPrice: 'R$ 690.000',
        discount: '39 un.'
      },
      {
        type: '3 Suítes',
        area: '82m²',
        originalPrice: 'De R$ 1.150.000',
        promoPrice: 'R$ 740.000',
        discount: '52 un.'
      },
      {
        type: '3 Suítes',
        area: '82m²',
        originalPrice: 'De R$ 1.250.000',
        promoPrice: 'R$ 810.000',
        discount: '83 un.'
      }
    ]
  },
  {
    id: 'vertice',
    name: 'VÉRTICE',
    details: '73m² a 75m² • 3 Quartos com 1 Suíte',
    delivery: 'Pronto pra Morar',
    image: '/images/vertice.jpg',
    units: [
      {
        type: '3 Quartos + 1 Suíte',
        area: '73m²',
        originalPrice: 'De R$ 650.000',
        promoPrice: 'R$ 500.000',
        discount: '103 un.'
      },
      {
        type: '3 Quartos + 1 Suíte',
        area: '75m²',
        originalPrice: 'De R$ 680.000',
        promoPrice: 'R$ 530.000',
        discount: '100 un.'
      }
    ]
  },
  {
    id: 'parque',
    name: 'PARQUE',
    details: '59m² a 86m² • 2 Quartos com 1 Suíte',
    delivery: 'Pronto pra Morar',
    image: '/images/parque.jpg',
    units: [
      {
        type: '2 Quartos + 1 Suíte',
        area: '59m²',
        originalPrice: 'De R$ 450.000',
        promoPrice: 'R$ 372.475',
        discount: '49 un.'
      },
      {
        type: '2 Quartos + 1 Suíte',
        area: '59m²',
        originalPrice: 'De R$ 450.000',
        promoPrice: 'R$ 375.475',
        discount: '45 un.'
      },
      {
        type: '2 Quartos + 1 Suíte',
        area: '62m²',
        originalPrice: 'De R$ 480.000',
        promoPrice: 'R$ 391.679',
        discount: '38 un.'
      }
    ]
  }
];

const Empreendimentos = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  const startAutoRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % empreendimentos.length);
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

  const activeEmpreendimento = empreendimentos[activeIndex];

  return (
    <Section id="empreendimentos">
      <Container>
        <SectionTitle>Empreendimentos</SectionTitle>
        <SectionSubtitle>Unidades selecionadas com condições especiais</SectionSubtitle>

        <ChipsContainer>
          {empreendimentos.map((emp, index) => (
            <Chip
              key={emp.id}
              $active={index === activeIndex}
              onClick={() => handleManualClick(index)}
            >
              {emp.name}
            </Chip>
          ))}
        </ChipsContainer>

        <EmpreendimentoContainer>
          <ImageSection>
            <BuildingImage src={activeEmpreendimento.image} alt={activeEmpreendimento.name} />
            <DeliveryBadge>{activeEmpreendimento.delivery}</DeliveryBadge>
          </ImageSection>

          <InfoSection>
            <BuildingHeader>
              <BuildingName>{activeEmpreendimento.name}</BuildingName>
              <BuildingDetails>{activeEmpreendimento.details}</BuildingDetails>
            </BuildingHeader>

            <ConditionsLabel>
              Condições Especiais • Apenas Unidades Selecionadas
            </ConditionsLabel>

            <UnitsGrid>
              {activeEmpreendimento.units.map((unit, index) => (
                <UnitCard key={index}>
                  <UnitBadge>{unit.discount}</UnitBadge>
                  <UnitType>{unit.type}</UnitType>
                  <UnitArea>{unit.area}</UnitArea>
                  <UnitPrice>{unit.originalPrice}</UnitPrice>
                  <UnitPromoPrice>{unit.promoPrice}</UnitPromoPrice>
                </UnitCard>
              ))}
            </UnitsGrid>

            <ViewAllButton>
              Ver todas as unidades com desconto
            </ViewAllButton>
          </InfoSection>
        </EmpreendimentoContainer>
      </Container>
    </Section>
  );
};

export default Empreendimentos;