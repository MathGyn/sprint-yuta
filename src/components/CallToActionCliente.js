import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 120px 20px 40px;
  background: #000000;
  border-top: 1px solid #111111;

  @media (max-width: 768px) {
    padding: 80px 20px 30px;
  }
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 15px;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: -1px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const FormSubtitle = styled.p`
  font-size: 14px;
  color: #666666;
  margin-bottom: 60px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 40px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: #666666;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Input = styled.input`
  background: #0A0A0A;
  border: 1px solid #222222;
  color: var(--color-white);
  font-size: 16px;
  font-weight: 600;
  padding: 18px 20px;
  font-family: 'Salena', sans-serif;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-gold);
  }

  &::placeholder {
    color: #444444;
  }

  @media (max-width: 768px) {
    padding: 16px 18px;
    font-size: 14px;
  }
`;

const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 0;
`;

const SubmitButton = styled.button`
  background: var(--color-gold);
  color: #000000;
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 20px 40px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Salena', sans-serif;

  &:hover {
    background: var(--color-yellow);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 18px 35px;
  }
`;

const CallToActionCliente = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <Section id="contato">
      <Container>
        <FormTitle>Receba mais informações</FormTitle>
        <FormSubtitle>Fale com nosso time comercial</FormSubtitle>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Nome completo</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              placeholder="(00) 00000-0000"
              value={formData.whatsapp}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <ButtonsGroup>
            <SubmitButton type="submit">
              Enviar
            </SubmitButton>
          </ButtonsGroup>
        </Form>
      </Container>
    </Section>
  );
};

export default CallToActionCliente;


