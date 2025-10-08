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

const LimitedConditionText = styled.div`
  background: #000000;
  color: var(--color-gold);
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  margin-top: 15px;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  animation: blink 2s infinite;
  
  @keyframes blink {
    0% {
      background: #000000;
      color: var(--color-gold);
    }
    50% {
      background: var(--color-gold);
      color: #000000;
    }
    100% {
      background: #000000;
      color: var(--color-gold);
    }
  }
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
  font-weight: 900;
  padding: 8px 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: right;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const DiscountValue = styled.span`
  font-size: 13px;
  font-weight: 900;
  line-height: 1;
`;

const DiscountText = styled.span`
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  margin-top: 2px;
`;

const UnitNumber = styled.div`
  position: absolute;
  bottom: 30px;
  right: 15px;
  background: #111111;
  color: var(--color-gold);
  font-size: 10px;
  font-weight: 800;
  padding: 6px 10px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  border: 1px solid var(--color-gold);
  display: flex;
  align-items: flex-end;
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
  .discount-badge {
    background: var(--color-gold);
    color: #000000;
    padding: 6px 12px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    line-height: 1.2;
  }
  
  .discount-value {
    font-size: 11px;
    font-weight: 900;
    line-height: 1;
  }
  
  .discount-text {
    font-size: 8px;
    font-weight: 700;
    line-height: 1;
    margin-top: 1px;
  }
`;

const FlowButton = styled.button`
  background: transparent;
  color: var(--color-gold);
  border: 1px solid var(--color-gold);
  padding: 6px 12px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Salena', sans-serif;

  &:hover {
    background: var(--color-gold);
    color: #000000;
  }
`;

const ExpandedRow = styled.tr`
  background: #111111;
  
  td {
    padding: 15px;
    border-top: none;
    border-bottom: 1px solid #222222;
  }
`;

const FlowDetails = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns === 2 ? '1fr 1fr' : '1fr 1fr 1fr'};
  gap: 20px;
  margin-top: 10px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const FlowItem = styled.div`
  background: #0A0A0A;
  border: 1px solid #222222;
  padding: 15px;
  
  h4 {
    color: var(--color-gold);
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 12px;
    text-align: center;
  }
  
  p {
    color: var(--color-white);
    font-size: 13px;
    font-weight: 600;
    margin: 4px 0;
  }
  
  .installment-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    border-bottom: 1px solid #222222;
    
    &:last-child {
      border-bottom: none;
    }
    
    .period {
      color: #666666;
      font-size: 11px;
      font-weight: 600;
      text-transform: capitalize;
    }
    
    .value {
      color: var(--color-gold);
      font-size: 12px;
      font-weight: 700;
    }
  }
  
  .installment-section {
    margin-bottom: 15px;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    .section-title {
      color: var(--color-gold);
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
      border-bottom: 1px solid #333;
      padding-bottom: 4px;
    }
  }
`;

const empreendimentos = [
  {
    id: 'synergia',
    name: 'SYNERGIA BUENO',
    details: '68m², 119m² e 122m² • 2 Quartos a 3 Suítes',
    delivery: 'Entrega em 2028',
    image: '/images/synergia.jpg',
    units: [
      {
        unit: '903',
        type: '2 Quartos + 1 Suíte',
        area: '68m²',
        originalPrice: 'De R$ 844.135,00',
        promoPrice: 'R$ 780.000',
        discount: { value: 'R$ 64 mil', text: 'de desconto' }
      },
      {
        unit: '601',
        type: '3 Suítes',
        area: '119m²',
        originalPrice: 'De R$ 1.442.797,00',
        promoPrice: 'R$ 1.350.000',
        discount: { value: 'R$ 92 mil', text: 'de desconto' }
      },
      {
        unit: '402',
        type: '3 Suítes',
        area: '122m²',
        originalPrice: 'De R$ 1.471.626,00',
        promoPrice: 'R$ 1.400.000',
        discount: { value: 'R$ 71 mil', text: 'de desconto' }
      }
    ],
    allUnits: [
      {
        unit: '803',
        type: '2 Quartos + 1 Suíte',
        area: '68,59m²',
        garage: '52',
        promoPrice: 'R$ 780.000',
        discount: { value: 'R$ 64 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 10.400,00',
          parcelas5: 'R$ 10.400,00',
          mensais30: 'R$ 2.600,00',
          semestrais4: 'R$ 15.600,00',
          final1: 'R$ 31.200,00',
          financiamento: 'R$ 546.000,00'
        },
        investorFlow: {
          entrada: 'R$ 7.800,00',
          parcelas5: 'R$ 7.800,00',
          mensais30: 'R$ 1.950,00',
          semestrais4: 'R$ 11.700,00',
          final1: 'R$ 23.400,00',
          financiamento: 'R$ 409.500,00'
        }
      },
      {
        unit: '903',
        type: '2 Quartos + 1 Suíte',
        area: '68,59m²',
        garage: '31',
        promoPrice: 'R$ 780.000',
        discount: { value: 'R$ 64 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 10.400,00',
          parcelas5: 'R$ 10.400,00',
          mensais30: 'R$ 2.600,00',
          semestrais4: 'R$ 15.600,00',
          final1: 'R$ 31.200,00',
          financiamento: 'R$ 546.000,00'
        },
        investorFlow: {
          entrada: 'R$ 7.800,00',
          parcelas5: 'R$ 7.800,00',
          mensais30: 'R$ 1.950,00',
          semestrais4: 'R$ 11.700,00',
          final1: 'R$ 23.400,00',
          financiamento: 'R$ 409.500,00'
        }
      },
      {
        unit: '1303',
        type: '2 Quartos + 1 Suíte',
        area: '68,59m²',
        storage: '10 - 2,2m²',
        garage: '34',
        promoPrice: 'R$ 820.000',
        discount: { value: 'R$ 24 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 10.933,00',
          parcelas5: 'R$ 10.933,00',
          mensais30: 'R$ 2.733,00',
          semestrais4: 'R$ 16.400,00',
          final1: 'R$ 32.800,00',
          financiamento: 'R$ 574.000,00'
        },
        investorFlow: {
          entrada: 'R$ 8.200,00',
          parcelas5: 'R$ 8.200,00',
          mensais30: 'R$ 2.050,00',
          semestrais4: 'R$ 12.300,00',
          final1: 'R$ 24.600,00',
          financiamento: 'R$ 430.125,00'
        }
      },
      {
        unit: '501',
        type: '3 Suítes',
        area: '119,61m²',
        garage: '110/110A',
        promoPrice: 'R$ 1.370.000',
        discount: { value: 'R$ 72 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 18.267,00',
          parcelas5: 'R$ 18.267,00',
          mensais30: 'R$ 4.567,00',
          semestrais4: 'R$ 27.400,00',
          final1: 'R$ 54.800,00',
          financiamento: 'R$ 959.000,00'
        },
        investorFlow: {
          entrada: 'R$ 13.700,00',
          parcelas5: 'R$ 13.700,00',
          mensais30: 'R$ 3.425,00',
          semestrais4: 'R$ 20.550,00',
          final1: 'R$ 41.100,00',
          financiamento: 'R$ 719.250,00'
        }
      },
      {
        unit: '601',
        type: '3 Suítes',
        area: '119,61m²',
        garage: '101/101A',
        promoPrice: 'R$ 1.350.000',
        discount: { value: 'R$ 92 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 18.000,00',
          parcelas5: 'R$ 18.000,00',
          mensais30: 'R$ 4.500,00',
          semestrais4: 'R$ 27.000,00',
          final1: 'R$ 54.000,00',
          financiamento: 'R$ 945.000,00'
        },
        investorFlow: {
          entrada: 'R$ 13.500,00',
          parcelas5: 'R$ 13.500,00',
          mensais30: 'R$ 3.375,00',
          semestrais4: 'R$ 20.250,00',
          final1: 'R$ 40.500,00',
          financiamento: 'R$ 708.750,00'
        }
      },
      {
        unit: '801',
        type: '3 Suítes',
        area: '119,61m²',
        garage: '71/71A',
        promoPrice: 'R$ 1.350.000',
        discount: { value: 'R$ 92 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 18.000,00',
          parcelas5: 'R$ 18.000,00',
          mensais30: 'R$ 4.500,00',
          semestrais4: 'R$ 27.000,00',
          final1: 'R$ 54.000,00',
          financiamento: 'R$ 945.000,00'
        },
        investorFlow: {
          entrada: 'R$ 13.500,00',
          parcelas5: 'R$ 13.500,00',
          mensais30: 'R$ 3.375,00',
          semestrais4: 'R$ 20.250,00',
          final1: 'R$ 40.500,00',
          financiamento: 'R$ 708.750,00'
        }
      }
    ]
  },
  {
    id: 'urban-garden',
    name: 'URBAN GARDEN',
    details: '60m² a 93m² • 2 Quartos a 3 Suítes',
    delivery: 'Entrega em 2028',
    image: '/images/urban-garden.jpg',
    units: [
      {
        unit: '507',
        type: '2 Quartos + 1 Suíte',
        area: '60,98m²',
        garage: '197',
        originalPrice: 'De R$ 687.576',
        promoPrice: 'R$ 630.000',
        discount: { value: 'R$ 57 mil', text: 'de desconto' }
      },
      {
        unit: '506',
        type: '2 Suítes',
        area: '69,33m²',
        garage: '110',
        originalPrice: 'De R$ 764.162',
        promoPrice: 'R$ 700.000',
        discount: { value: 'R$ 64 mil', text: 'de desconto' }
      },
      {
        unit: '603',
        type: '2 Suítes',
        area: '76,09m²',
        garage: '202',
        originalPrice: 'De R$ 803.644',
        promoPrice: 'R$ 750.000',
        discount: { value: 'R$ 53 mil', text: 'de desconto' }
      },
      {
        unit: '2305',
        type: '3 Suítes',
        area: '90,00m²',
        garage: '183/183A',
        originalPrice: 'De R$ 1.050.356',
        promoPrice: 'R$ 990.000',
        discount: { value: 'R$ 60 mil', text: 'de desconto' }
      },
      {
        unit: '2704',
        type: '3 Suítes',
        area: '99,00m²',
        garage: '183/183A',
        originalPrice: 'De R$ 1.133.395',
        promoPrice: 'R$ 1.050.000',
        discount: { value: 'R$ 83 mil', text: 'de desconto' }
      }
    ],
    allUnits: [
      {
        unit: '407',
        type: '2 Quartos + 1 Suíte',
        area: '60,98m²',
        storage: '72 - 3,81m²',
        garage: '157',
        promoPrice: 'R$ 630.000',
        discount: { value: 'R$ 57 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 50.400,00',
          mensais6: 'R$ 10.500,00',
          final1: 'R$ 56.700,00',
          financiamento: 'R$ 459.900,00'
        }
      },
      {
        unit: '507',
        type: '2 Quartos + 1 Suíte',
        area: '60,98m²',
        storage: '94 - 3,77m²',
        garage: '197',
        promoPrice: 'R$ 630.000',
        discount: { value: 'R$ 57 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 50.400,00',
          mensais6: 'R$ 10.500,00',
          final1: 'R$ 56.700,00',
          financiamento: 'R$ 459.900,00'
        }
      },
      {
        unit: '406',
        type: '2 Suítes',
        area: '69,33m²',
        garage: '201',
        promoPrice: 'R$ 700.000',
        discount: { value: 'R$ 64 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 56.000,00',
          mensais6: 'R$ 11.667,00',
          final1: 'R$ 63.000,00',
          financiamento: 'R$ 511.000,00'
        }
      },
      {
        unit: '506',
        type: '2 Suítes',
        area: '69,33m²',
        storage: '42 - 4,56m²',
        garage: '110',
        promoPrice: 'R$ 700.000',
        discount: { value: 'R$ 64 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 56.000,00',
          mensais6: 'R$ 11.667,00',
          final1: 'R$ 63.000,00',
          financiamento: 'R$ 511.000,00'
        }
      },
      {
        unit: '503',
        type: '2 Suítes',
        area: '76,09m²',
        storage: '38 - 4,4m²',
        garage: '121',
        promoPrice: 'R$ 750.000',
        discount: { value: 'R$ 53 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 60.000,00',
          mensais6: 'R$ 12.500,00',
          final1: 'R$ 67.500,00',
          financiamento: 'R$ 547.500,00'
        }
      },
      {
        unit: '603',
        type: '2 Suítes',
        area: '76,09m²',
        storage: '89 - 4,63m²',
        garage: '202',
        promoPrice: 'R$ 750.000',
        discount: { value: 'R$ 53 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 60.000,00',
          mensais6: 'R$ 12.500,00',
          final1: 'R$ 67.500,00',
          financiamento: 'R$ 547.500,00'
        }
      },
      {
        unit: '2305',
        type: '3 Suítes',
        area: '91,76m²',
        storage: '97 - 2,86m²',
        garage: '183/183A',
        promoPrice: 'R$ 990.000',
        discount: { value: 'R$ 60 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 79.200,00',
          mensais6: 'R$ 16.500,00',
          final1: 'R$ 89.100,00',
          financiamento: 'R$ 722.700,00'
        }
      },
      {
        unit: '2402',
        type: '3 Suítes',
        area: '90,97m²',
        storage: '3 - 5,79m²',
        garage: '40/40A',
        promoPrice: 'R$ 990.000',
        discount: { value: 'R$ 60 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 79.200,00',
          mensais6: 'R$ 16.500,00',
          final1: 'R$ 89.100,00',
          financiamento: 'R$ 722.700,00'
        }
      }
    ]
  },
  {
    id: 'lake-house',
    name: 'LAKE HOUSE',
    details: '49m² a 82m² • 1 Quarto a 3 Suítes',
    delivery: 'Pronto pra Morar',
    image: '/images/lake-house.jpg',
    units: [
      {
        unit: '1605',
        type: '1 Suíte',
        area: '48m²',
        originalPrice: 'De R$ 496.920',
        promoPrice: 'R$ 425.000',
        discount: { value: 'R$ 71 mil', text: 'de desconto' }
      },
      {
        unit: '1202',
        type: '2 Quartos + 1 Suíte',
        area: '66m²',
        originalPrice: 'De R$ 660.443',
        promoPrice: 'R$ 600.000',
        discount: { value: 'R$ 60 mil', text: 'de desconto' }
      },
      {
        unit: '706',
        type: '2 Suítes',
        area: '73m²',
        originalPrice: 'De R$ 761.986',
        promoPrice: 'R$ 700.000',
        discount: { value: 'R$ 61 mil', text: 'de desconto' }
      },
      {
        unit: '603',
        type: '3 Suítes',
        area: '82m²',
        originalPrice: 'De R$ 792.306',
        promoPrice: 'R$ 740.000',
        discount: { value: 'R$ 52 mil', text: 'de desconto' }
      },
      {
        unit: '601',
        type: '3 Suítes',
        area: '85m²',
        originalPrice: 'De R$ 871.619',
        promoPrice: 'R$ 810.000',
        discount: { value: 'R$ 61 mil', text: 'de desconto' }
      }
    ],
    allUnits: [
      {
        unit: '605',
        type: '1 Suíte',
        area: '48,76m²',
        garage: '91',
        promoPrice: 'R$ 425.000',
        discount: { value: 'R$ 71 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 42.500,00',
          financiamento: 'R$ 382.500,00'
        }
      },
      {
        unit: '1605',
        type: '1 Suíte',
        area: '48,76m²',
        garage: '57',
        promoPrice: 'R$ 425.000',
        discount: { value: 'R$ 71 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 42.500,00',
          financiamento: 'R$ 382.500,00'
        }
      },
      {
        unit: '802',
        type: '2 Quartos + 1 Suíte',
        area: '66,07m²',
        garage: '22',
        promoPrice: 'R$ 600.000',
        discount: { value: 'R$ 60 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 60.000,00',
          financiamento: 'R$ 540.000,00'
        }
      },
      {
        unit: '1202',
        type: '2 Quartos + 1 Suíte',
        area: '66,07m²',
        garage: '10',
        promoPrice: 'R$ 600.000',
        discount: { value: 'R$ 60 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 60.000,00',
          financiamento: 'R$ 540.000,00'
        }
      },
      {
        unit: '606',
        type: '2 Suítes',
        area: '73,57m²',
        storage: '19 - 2,84m²',
        garage: '167',
        promoPrice: 'R$ 700.000',
        discount: { value: 'R$ 61 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 70.000,00',
          financiamento: 'R$ 630.000,00'
        }
      },
      {
        unit: '706',
        type: '2 Suítes',
        area: '73,57m²',
        storage: '5 - 4,93m²',
        garage: '31',
        promoPrice: 'R$ 700.000',
        discount: { value: 'R$ 61 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 70.000,00',
          financiamento: 'R$ 630.000,00'
        }
      },
      {
        unit: '603',
        type: '3 Suítes',
        area: '82,78m²',
        garage: '163',
        promoPrice: 'R$ 740.000',
        discount: { value: 'R$ 52 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 74.000,00',
          financiamento: 'R$ 666.000,00'
        }
      },
      {
        unit: '501',
        type: '3 Suítes',
        area: '85,25m²',
        garage: '25/25A',
        promoPrice: 'R$ 810.000',
        discount: { value: 'R$ 61 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 81.000,00',
          financiamento: 'R$ 729.000,00'
        }
      },
      {
        unit: '601',
        type: '3 Suítes',
        area: '85,25m²',
        garage: '128/128A',
        promoPrice: 'R$ 810.000',
        discount: { value: 'R$ 61 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 81.000,00',
          financiamento: 'R$ 729.000,00'
        }
      }
    ]
  },
  {
    id: 'vertice',
    name: 'VÉRTICE RESIDENCE',
    details: '73m² a 75m² • 3 Quartos com 1 Suíte',
    delivery: 'Pronto pra Morar',
    image: '/images/vertice.jpg',
    units: [
      {
        unit: '201',
        type: '3 Quartos + 1 Suíte',
        area: '73m²',
        originalPrice: 'De R$ 603.808',
        promoPrice: 'R$ 500.000',
        discount: { value: 'R$ 103 mil', text: 'de desconto' }
      },
      {
        unit: '302',
        type: '3 Quartos + 1 Suíte',
        area: '75m²',
        originalPrice: 'De R$ 630.952',
        promoPrice: 'R$ 530.000',
        discount: { value: 'R$ 100 mil', text: 'de desconto' }
      }
    ],
    allUnits: [
      {
        unit: '101',
        type: '3 Quartos + 1 Suíte',
        area: '73,17m²',
        garage: '101',
        promoPrice: 'R$ 500.000',
        discount: { value: 'R$ 103 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 50.000,00',
          financiamento: 'R$ 450.000,00'
        }
      },
      {
        unit: '104',
        type: '3 Quartos + 1 Suíte',
        area: '73,17m²',
        garage: '104',
        promoPrice: 'R$ 500.000',
        discount: { value: 'R$ 103 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 50.000,00',
          financiamento: 'R$ 450.000,00'
        }
      },
      {
        unit: '201',
        type: '3 Quartos + 1 Suíte',
        area: '73,17m²',
        garage: '201',
        promoPrice: 'R$ 500.000',
        discount: { value: 'R$ 103 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 50.000,00',
          financiamento: 'R$ 450.000,00'
        }
      },
      {
        unit: '103',
        type: '3 Quartos + 1 Suíte',
        area: '75,11m²',
        garage: '103',
        promoPrice: 'R$ 530.000',
        discount: { value: 'R$ 100 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 53.000,00',
          financiamento: 'R$ 477.000,00'
        }
      },
      {
        unit: '203',
        type: '3 Quartos + 1 Suíte',
        area: '75,11m²',
        garage: '203',
        promoPrice: 'R$ 530.000',
        discount: { value: 'R$ 100 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 53.000,00',
          financiamento: 'R$ 477.000,00'
        }
      },
      {
        unit: '302',
        type: '3 Quartos + 1 Suíte',
        area: '75,11m²',
        garage: '302',
        promoPrice: 'R$ 530.000',
        discount: { value: 'R$ 100 mil', text: 'de desconto' },
        installment: {
          entrada: 'R$ 53.000,00',
          financiamento: 'R$ 477.000,00'
        }
      }
    ]
  },
  {
    id: 'parque',
    name: 'RESERVA DO PARQUE',
    details: '59m² a 66m² • 2 Quartos com 1 Suíte',
    delivery: 'Pronto pra Morar',
    image: '/images/parque.jpg',
    limitedCondition: 'Condição limitada as 3 primeiras unidades vendidas!',
    units: [
      {
        unit: '405',
        type: '2 Quartos + 1 Suíte',
        area: '59m²',
        originalPrice: 'R$ 411.000,00',
        promoPrice: 'R$ 372.475',
        discount: { value: 'R$ 38 mil', text: 'de desconto' }
      },
      {
        unit: '703',
        type: '2 Quartos + 1 Suíte',
        area: '62m²',
        originalPrice: 'R$ 449.420,00',
        promoPrice: 'R$ 406.679',
        discount: { value: 'R$ 42 mil', text: 'de desconto' }
      },
      {
        unit: '203',
        type: '2 Quartos + 1 Suíte',
        area: '62m²',
        originalPrice: 'R$ 430.000,00',
        promoPrice: 'R$ 391.679',
        discount: { value: 'R$ 38 mil', text: 'de desconto' }
      }
    ],
    allUnits: [
      {
        unit: '203',
        type: '2 Quartos com 1 Suíte',
        area: '62,60m²',
        garage: '34',
        promoPrice: 'R$ 391.679',
        installment: {
          entrada: 'R$ 39.168,00',
          financiamento: 'R$ 352.511,00'
        }
      },
      {
        unit: '204',
        type: '2 Quartos com 1 Suíte',
        area: '66,01m²',
        garage: '4',
        escaninho: '4 - 2,38m²',
        promoPrice: 'R$ 417.688',
        installment: {
          entrada: 'R$ 41.769,00',
          financiamento: 'R$ 375.919,00'
        }
      },
      {
        unit: '303',
        type: '2 Quartos com 1 Suíte',
        area: '62,60m²',
        garage: '28/28 A',
        escaninho: '9 - 2,52m²',
        promoPrice: 'R$ 427.679',
        installment: {
          entrada: 'R$ 42.768,00',
          financiamento: 'R$ 384.911,00'
        }
      },
      {
        unit: '304',
        type: '2 Quartos com 1 Suíte',
        area: '66,01m²',
        garage: '8',
        promoPrice: 'R$ 408.688',
        installment: {
          entrada: 'R$ 40.869,00',
          financiamento: 'R$ 367.819,00'
        }
      },
      {
        unit: '401',
        type: '2 Quartos com 1 Suíte',
        area: '60,76m²',
        garage: '9/9A',
        escaninho: '3 - 2,52m²',
        promoPrice: 'R$ 417.342',
        installment: {
          entrada: 'R$ 41.734,00',
          financiamento: 'R$ 375.608,00'
        }
      },
      {
        unit: '405',
        type: '2 Quartos com 1 Suíte',
        area: '59,97m²',
        garage: '15',
        promoPrice: 'R$ 372.475',
        installment: {
          entrada: 'R$ 37.248,00',
          financiamento: 'R$ 335.228,00'
        }
      },
      {
        unit: '502',
        type: '2 Quartos com 1 Suíte',
        area: '61,43m²',
        garage: '10/10A',
        escaninho: '2 - 2,52m²',
        promoPrice: 'R$ 422.470',
        installment: {
          entrada: 'R$ 42.247,00',
          financiamento: 'R$ 380.223,00'
        }
      },
      {
        unit: '703',
        type: '2 Quartos com 1 Suíte',
        area: '62,60m²',
        garage: '36',
        escaninho: '1 - 2,56m²',
        promoPrice: 'R$ 406.679',
        installment: {
          entrada: 'R$ 40.668,00',
          financiamento: 'R$ 366.011,00'
        }
      }
    ]
  }
];

const Empreendimentos = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedRow, setExpandedRow] = useState(null);
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
    stopAutoRotation();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setExpandedRow(null);
    startAutoRotation();
  };

  const handleToggleFlow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  useEffect(() => {
    if (!isModalOpen) {
      startAutoRotation();
    }

    return () => {
      stopAutoRotation();
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [isModalOpen]);

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

            {activeEmpreendimento.limitedCondition && (
              <LimitedConditionText>
                {activeEmpreendimento.limitedCondition}
              </LimitedConditionText>
            )}

            <ConditionsLabel>
              Condições Especiais • Apenas Unidades Selecionadas
            </ConditionsLabel>

            <UnitsGrid>
              {activeEmpreendimento.units.map((unit, index) => (
                <UnitCard key={index}>
                  {unit.unit && <UnitNumber>Unidade {unit.unit}</UnitNumber>}
                  <UnitBadge>
                    {typeof unit.discount === 'object' ? (
                      <>
                        <DiscountValue>{unit.discount.value}</DiscountValue>
                        <DiscountText>{unit.discount.text}</DiscountText>
                      </>
                    ) : (
                      unit.discount
                    )}
                  </UnitBadge>
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
              {activeEmpreendimento.limitedCondition && (
                <LimitedConditionText>
                  {activeEmpreendimento.limitedCondition}
                </LimitedConditionText>
              )}
            </ModalHeader>

            <ModalBody>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Unidade</TableHeaderCell>
                    <TableHeaderCell>Tipo</TableHeaderCell>
                    <TableHeaderCell>Área</TableHeaderCell>
                    <TableHeaderCell>Preço Promocional</TableHeaderCell>
                    <TableHeaderCell>Ações</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <tbody>
                  {(activeEmpreendimento.allUnits || activeEmpreendimento.units).map((unit, index) => (
                    <>
                      <TableRow key={index}>
                        <TableCell>{unit.unit || '-'}</TableCell>
                        <TableCell>{unit.type}</TableCell>
                        <TableCell>{unit.area}</TableCell>
                        <PriceCell>{unit.promoPrice}</PriceCell>
                        <TableCell>
                          <FlowButton onClick={() => handleToggleFlow(index)}>
                            {expandedRow === index ? 'Ocultar' : 'Fluxo Completo'}
                          </FlowButton>
                        </TableCell>
                      </TableRow>
                      {expandedRow === index && (
                        <ExpandedRow>
                          <TableCell colSpan="5">
                            <FlowDetails columns={activeEmpreendimento.id === 'lake-house' || activeEmpreendimento.id === 'vertice' || activeEmpreendimento.id === 'parque' ? 2 : 3}>
                              <FlowItem>
                                <h4>Entrada</h4>
                                {typeof unit.installment === 'object' ? (
                                  <div className="installment-option">
                                    <span className="period">Ato</span>
                                    <span className="value">{unit.installment.entrada}</span>
                                  </div>
                                ) : (
                                  <p>{unit.installment}</p>
                                )}
                              </FlowItem>
                              {activeEmpreendimento.id === 'lake-house' || activeEmpreendimento.id === 'vertice' || activeEmpreendimento.id === 'parque' ? (
                                <FlowItem>
                                  <h4>Financiamento</h4>
                                  {typeof unit.installment === 'object' ? (
                                    <div className="installment-option">
                                      <span className="period">jan/26</span>
                                      <span className="value">{unit.installment.financiamento}</span>
                                    </div>
                                  ) : (
                                    <p>{unit.installment}</p>
                                  )}
                                </FlowItem>
                              ) : (
                                <>
                                  <FlowItem>
                                    <h4>Parcelas</h4>
                                    {typeof unit.installment === 'object' ? (
                                      <>
                                        <div className="installment-option">
                                          <span className="period">Mensais 6x</span>
                                          <span className="value">{unit.installment.mensais6}</span>
                                        </div>
                                        <div className="installment-option">
                                          <span className="period">Final 1x</span>
                                          <span className="value">{unit.installment.final1}</span>
                                        </div>
                                      </>
                                    ) : (
                                      <p>{unit.installment}</p>
                                    )}
                                  </FlowItem>
                                  <FlowItem>
                                    <h4>Financiamento</h4>
                                    {typeof unit.installment === 'object' ? (
                                      <div className="installment-option">
                                        <span className="period">1x jun/26</span>
                                        <span className="value">{unit.installment.financiamento}</span>
                                      </div>
                                    ) : (
                                      <p>{unit.installment}</p>
                                    )}
                                  </FlowItem>
                                </>
                              )}
                            </FlowDetails>
                          </TableCell>
                        </ExpandedRow>
                      )}
                    </>
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