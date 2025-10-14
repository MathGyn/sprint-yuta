import React from 'react';
import styled from 'styled-components';
import Aurora from './Aurora';

const HeroSection = styled.section`
  min-height: 100vh;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 60px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const LogoImage = styled.img`
  max-width: 600px;
  width: 100%;
  height: auto;
  margin: 0 auto 80px;
  display: block;

  @media (max-width: 768px) {
    max-width: 320px;
    margin-bottom: 60px;
  }
`;

const TagLine = styled.h2`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 80px;
  color: #999999;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 60px;
  }
`;

const HighlightBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const HighlightBox = styled.div`
  background: #0A0A0A;
  border: 1px solid #222222;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;

  &:nth-child(1) {
    animation-delay: 0.3s;
  }

  &:hover {
    border-color: var(--color-gold);
    transform: translateY(-2px);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const HighlightLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: #666666;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
  animation: fadeIn 0.6s ease-out forwards;
  animation-delay: inherit;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const HighlightValue = styled.div`
  font-size: 36px;
  font-weight: 900;
  color: var(--color-gold);
  margin-bottom: 5px;
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const HighlightSubtext = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: #666666;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: fadeIn 0.6s ease-out forwards;
  animation-delay: inherit;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const HeroCliente = () => {
  return (
    <HeroSection>
      <Aurora
        colorStops={["#000000", "#D4AF37", "#000000"]}
        blend={0.5}
        amplitude={1.2}
        speed={0.6}
      />
      <Container>
        <LogoImage src="/SprintFinal copiar.png" alt="Sprint Final 2025" />

        <TagLine>
          As melhores ofertas do ano!
        </TagLine>

        <HighlightBoxes>
          <HighlightBox>
            <HighlightLabel>MAIS DE</HighlightLabel>
            <HighlightValue>R$ 3,5 MILHÕES</HighlightValue>
            <HighlightSubtext>EM DESCONTO</HighlightSubtext>
          </HighlightBox>
        </HighlightBoxes>
      </Container>
    </HeroSection>
  );
};

export default HeroCliente;


