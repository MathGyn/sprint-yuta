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
        <Copyright>
          © 2025 Yutá Inc. Todos os direitos reservados. Criado por <Link href="http://behance.net/MatheusSouza" target="_blank" rel="noopener noreferrer">Matheus Souza</Link>.
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;