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
  max-width: 1200px;
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
  margin-bottom: 80px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 60px;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1px;
  background: #111111;
  border: 1px solid #111111;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  background: #000000;
  padding: 50px 30px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: #0A0A0A;
  }

  @media (max-width: 768px) {
    padding: 40px 25px;
  }
`;

const BenefitTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: var(--color-white);
  text-transform: uppercase;
  margin-bottom: 15px;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const BenefitDescription = styled.p`
  font-size: 13px;
  color: #666666;
  line-height: 1.6;
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const BenefitHighlight = styled.div`
  font-size: 11px;
  font-weight: 800;
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const benefits = [
  {
    title: 'Descontos Especiais',
    description: 'Descontos exclusivos em todos os produtos selecionados da campanha',
    highlight: 'Até R$ 420.000 off'
  },
  {
    title: 'Premiação Corretores',
    description: 'Prêmios especiais para corretores e gerentes que atingirem as metas',
    highlight: 'Até R$ 150.000'
  },
  {
    title: 'Bônus Decorados',
    description: 'Premiação em dinheiro para vendas de unidades decoradas',
    highlight: 'Comissões diferenciadas'
  },
  {
    title: 'Análise de Permuta',
    description: 'Aceite seu imóvel ou veículo como parte do pagamento',
    highlight: 'Processo simplificado'
  }
];

const Beneficios = () => {
  return (
    <Section id="beneficios">
      <Container>
        <SectionTitle>Benefícios</SectionTitle>
        <SectionSubtitle>Mais descontos. Mais prêmios. Mais vendas.</SectionSubtitle>

        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index}>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDescription>{benefit.description}</BenefitDescription>
              <BenefitHighlight>{benefit.highlight}</BenefitHighlight>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </Container>
    </Section>
  );
};

export default Beneficios;