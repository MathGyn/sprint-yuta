import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import HeroCliente from '../components/HeroCliente';
import HighlightsCliente from '../components/HighlightsCliente';
import EmpreendimentosCliente from '../components/EmpreendimentosCliente';
import CallToActionCliente from '../components/CallToActionCliente';
import FooterCliente from '../components/FooterCliente';

const AccessButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 60px;
`;

const AccessButton = styled.button`
  background: transparent;
  color: var(--color-gold);
  border: 1px solid var(--color-gold);
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 20px 40px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease;
  font-family: 'Salena', sans-serif;

  &:hover {
    background: var(--color-gold);
    color: #000000;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 18px 35px;
  }
`;

function ClientePage() {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyles />
      <HeroCliente />
      <HighlightsCliente />
      <EmpreendimentosCliente />
      <CallToActionCliente />

      <AccessButtonWrapper>
        <AccessButton onClick={() => navigate('/corretor')} aria-label="Acesso do corretor">
          ACESSO DO CORRETOR
        </AccessButton>
      </AccessButtonWrapper>

      <FooterCliente />
    </>
  );
}

export default ClientePage;


