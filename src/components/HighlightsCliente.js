import React from 'react';
import styled from 'styled-components';
import './Highlights.css';

const Section = styled.section`
  padding: 120px 20px;
  background: #000000;
  border-top: 1px solid #111111;
  position: relative;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const TopHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const HeaderTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #666666;

  span {
    color: var(--color-white);
  }

  .gold {
    color: var(--color-gold);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 4px;
  }
`;

const FeaturesImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const FeaturesImage = styled.img`
  max-width: 920px;
  width: 100%;
  height: auto;
  display: block;
  
  @media (max-width: 768px) {
    max-width: 98%;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const HighlightsCliente = () => {
  return (
    <Section className="highlights-section">
      <Container>
        <TopHeader>
          <HeaderTitle>
            <span>As </span>
            <span className="gold">MELHORES OFERTAS</span>
            <span> do ano!</span>
          </HeaderTitle>
        </TopHeader>

        <FeaturesImageContainer>
          <FeaturesImage src="/features-client.png" alt="Features" />
        </FeaturesImageContainer>
      </Container>
    </Section>
  );
};

export default HighlightsCliente;


