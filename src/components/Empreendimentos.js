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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background: #0A0A0A;
  border: 1px solid var(--color-gold);
  max-width: 1200px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const ModalHeader = styled.div`
  padding: 40px 40px 30px;
  border-bottom: 1px solid #222222;
  position: sticky;
  top: 0;
  background: #0A0A0A;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 30px 25px 20px;
  }
`;

const ModalTitle = styled.h3`
  font-size: 36px;
  font-weight: 900;
  color: var(--color-white);
  text-transform: uppercase;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ModalSubtitle = styled.p`
  font-size: 13px;
  color: #666666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: transparent;
  border: 1px solid #222222;
  color: #666666;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Salena', sans-serif;

  &:hover {
    border-color: var(--color-gold);
    color: var(--color-gold);
  }

  @media (max-width: 768px) {
    top: 20px;
    right: 20px;
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
`;

const ModalBody = styled.div`
  padding: 40px;

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background: #111111;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #222222;

  &:hover {
    background: #111111;
  }
`;

const TableHeaderCell = styled.th`
  padding: 18px 15px;
  text-align: left;
  font-size: 11px;
  font-weight: 900;
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    padding: 12px 10px;
    font-size: 10px;
  }
`;

const TableCell = styled.td`
  padding: 20px 15px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-white);

  @media (max-width: 768px) {
    padding: 15px 10px;
    font-size: 12px;
  }
`;

const PriceCell = styled(TableCell)`
  color: var(--color-gold);
  font-weight: 900;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const BadgeCell = styled(TableCell)`
  span {
    background: var(--color-gold);
    color: #000000;
    padding: 6px 12px;
    font-size: 10px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: inline-block;
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
        discount: 'R$ 620 mil OFF'
      },
      {
        type: '3 Suítes',
        area: '119m²',
        originalPrice: 'De R$ 1.900.000',
        promoPrice: 'R$ 1.350.000',
        discount: 'R$ 550 mil OFF'
      },
      {
        type: '3 Suítes',
        area: '122m²',
        originalPrice: 'De R$ 1.900.000',
        promoPrice: 'R$ 1.400.000',
        discount: 'R$ 500 mil OFF'
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
        discount: 'R$ 470 mil OFF'
      },
      {
        type: '2 Suítes',
        area: '61m²',
        originalPrice: 'De R$ 1.100.000',
        promoPrice: 'R$ 700.000',
        discount: 'R$ 400 mil OFF'
      },
      {
        type: '2 Suítes',
        area: '75m²',
        originalPrice: 'De R$ 1.150.000',
        promoPrice: 'R$ 750.000',
        discount: 'R$ 400 mil OFF'
      },
      {
        type: '3 Suítes',
        area: '93m²',
        originalPrice: 'De R$ 1.400.000',
        promoPrice: 'R$ 1.050.000',
        discount: 'R$ 350 mil OFF'
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
        discount: 'R$ 175 mil OFF'
      },
      {
        type: '2 Quartos + 1 Suíte',
        area: '60m²',
        originalPrice: 'De R$ 900.000',
        promoPrice: 'R$ 600.000',
        discount: 'R$ 300 mil OFF'
      },
      {
        type: '2 Suítes',
        area: '67m²',
        originalPrice: 'De R$ 1.050.000',
        promoPrice: 'R$ 690.000',
        discount: 'R$ 360 mil OFF'
      },
      {
        type: '3 Suítes',
        area: '82m²',
        originalPrice: 'De R$ 1.150.000',
        promoPrice: 'R$ 740.000',
        discount: 'R$ 410 mil OFF'
      },
      {
        type: '3 Suítes',
        area: '82m²',
        originalPrice: 'De R$ 1.250.000',
        promoPrice: 'R$ 810.000',
        discount: 'R$ 440 mil OFF'
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
        discount: 'R$ 150 mil OFF'
      },
      {
        type: '3 Quartos + 1 Suíte',
        area: '75m²',
        originalPrice: 'De R$ 680.000',
        promoPrice: 'R$ 530.000',
        discount: 'R$ 150 mil OFF'
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
        discount: 'R$ 77,5 mil OFF'
      },
      {
        type: '2 Quartos + 1 Suíte',
        area: '59m²',
        originalPrice: 'De R$ 450.000',
        promoPrice: 'R$ 375.475',
        discount: 'R$ 74,5 mil OFF'
      },
      {
        type: '2 Quartos + 1 Suíte',
        area: '62m²',
        originalPrice: 'De R$ 480.000',
        promoPrice: 'R$ 391.679',
        discount: 'R$ 88,3 mil OFF'
      }
    ]
  }
];

const Empreendimentos = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    startAutoRotation();

    return () => {
      stopAutoRotation();
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

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

            <ViewAllButton onClick={handleOpenModal}>
              Ver todas as unidades com desconto
            </ViewAllButton>
          </InfoSection>
        </EmpreendimentoContainer>

        <DisclaimerText><a href="/._regulamento/" target="_blank" rel="noopener noreferrer">Confira o regulamento completo</a></DisclaimerText>
      </Container>

      {isModalOpen && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <CloseButton onClick={handleCloseModal}>×</CloseButton>
              <ModalTitle>{activeEmpreendimento.name}</ModalTitle>
              <ModalSubtitle>
                {activeEmpreendimento.details} • {activeEmpreendimento.delivery}
              </ModalSubtitle>
            </ModalHeader>

            <ModalBody>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Tipo</TableHeaderCell>
                    <TableHeaderCell>Área</TableHeaderCell>
                    <TableHeaderCell>Preço Original</TableHeaderCell>
                    <TableHeaderCell>Preço Promocional</TableHeaderCell>
                    <TableHeaderCell>Desconto</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <tbody>
                  {activeEmpreendimento.units.map((unit, index) => (
                    <TableRow key={index}>
                      <TableCell>{unit.type}</TableCell>
                      <TableCell>{unit.area}</TableCell>
                      <TableCell>{unit.originalPrice}</TableCell>
                      <PriceCell>{unit.promoPrice}</PriceCell>
                      <BadgeCell>
                        <span>{unit.discount}</span>
                      </BadgeCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
};

export default Empreendimentos;