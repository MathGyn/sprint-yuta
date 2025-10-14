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

const RegulamentoLink = styled.a`
  display: inline-block;
  background: transparent;
  color: #666666;
  border: none;
  font-size: 13px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0;
  padding: 0;
  text-decoration: none;
  transition: none;
  margin-bottom: 30px;
  font-family: 'Salena', sans-serif;
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
`;

const FooterCliente = () => {
  return (
    <FooterSection>
      <Container>
        <RegulamentoLink href="/regulamento" target="_blank" rel="noopener noreferrer">
          Ver regulamento completo
        </RegulamentoLink>
        <Copyright>
          © 2025 Yutá Inc. Todos os direitos reservados. Criado por <Link href="http://behance.net/MatheusSouza" target="_blank" rel="noopener noreferrer">Matheus Souza</Link>.
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default FooterCliente;


