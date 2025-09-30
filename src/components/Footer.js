import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: #000000;
  border-top: 1px solid #111111;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const RegulamentoButton = styled.a`
  display: inline-block;
  background: transparent;
  color: var(--color-gold);
  border: 1px solid var(--color-gold);
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 15px 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-bottom: 30px;
  font-family: 'Salena', sans-serif;

  &:hover {
    background: var(--color-gold);
    color: #000000;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 12px 25px;
  }
`;

const Copyright = styled.p`
  color: #666666;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.8;
`;

const Link = styled.a`
  color: #666666;
  text-decoration: none;
  font-family: 'Salena', sans-serif;
  font-size: 12px;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-gold);
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <RegulamentoButton href="/._regulamento/" target="_blank" rel="noopener noreferrer">
          Ver regulamento completo
        </RegulamentoButton>
        <Copyright>
          © 2025 Yutá Inc. Todos os direitos reservados. Criado por <Link href="http://behance.net/MatheusSouza" target="_blank" rel="noopener noreferrer">Matheus Souza</Link>.
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;