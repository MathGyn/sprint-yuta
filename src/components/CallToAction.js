import React, { useState, useEffect } from 'react';
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
  gap: 8px; /* Enviar próximo do formulário */
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

const SecondaryButton = styled.button`
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
  display: block;
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

const ActionsRow = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 28px; /* maior afastamento em relação ao Enviar */

  @media (max-width: 540px) {
    flex-wrap: wrap; /* em telas bem pequenas pode quebrar */
  }
`;

const LinkButton = styled.a`
  background: transparent;
  color: var(--color-gold);
  border: 1px solid var(--color-gold);
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 20px 40px;
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
`;

const ModalContent = styled.div`
  background: #0A0A0A;
  border: 1px solid var(--color-gold);
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const ModalHeader = styled.div`
  padding: 40px 40px 30px;
  border-bottom: 1px solid #222222;
  text-align: center;

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

const CoordinatorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const CoordinatorCard = styled.div`
  background: #111111;
  border: 1px solid #222222;
  padding: 30px 25px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-gold);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 25px 20px;
  }
`;

const CoordinatorPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 20px;
  display: block;
  border: 3px solid var(--color-gold);

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const CoordinatorName = styled.h4`
  font-size: 20px;
  font-weight: 900;
  color: var(--color-white);
  margin-bottom: 8px;
  text-transform: uppercase;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CoordinatorRole = styled.p`
  font-size: 12px;
  color: var(--color-gold);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const WhatsAppButton = styled.a`
  display: block;
  background: var(--color-gold);
  color: #000000;
  font-size: 13px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 15px 25px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Salena', sans-serif;

  &:hover {
    background: var(--color-yellow);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 12px 20px;
  }
`;

const coordinators = [
  {
    name: 'Eltoncley Oliveira',
    role: 'Coordenador',
    phone: '5511999999999',
    photo: '/images/coordinators/eltoncley-oliveira.jpg'
  },
  {
    name: 'Douglas Marques',
    role: 'Coordenador',
    phone: '5511988888888',
    photo: '/images/coordinators/douglas-marques.jpg'
  },
  {
    name: 'Glaucia\nSouza',
    role: 'Coordenadora',
    phone: '5511977777777',
    photo: '/images/coordinators/glaucia-souza.jpg'
  }
];

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log('Form data:', formData);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

            <ActionsRow>
              <LinkButton href="/materiais" target="_blank" rel="noopener noreferrer">
                Corretor, Acesse os materiais de apoio
              </LinkButton>

              <SecondaryButton type="button" onClick={handleOpenModal}>
                Falar com um coordenador
              </SecondaryButton>
            </ActionsRow>
          </ButtonsGroup>
        </Form>
      </Container>

      {isModalOpen && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <CloseButton onClick={handleCloseModal}>×</CloseButton>
              <ModalTitle>Escolha um Coordenador</ModalTitle>
              <ModalSubtitle>Fale diretamente com nossa equipe</ModalSubtitle>
            </ModalHeader>

            <ModalBody>
              <CoordinatorsGrid>
                {coordinators.map((coordinator, index) => (
                  <CoordinatorCard key={index}>
                    <CoordinatorPhoto src={coordinator.photo} alt={coordinator.name} />
                    <CoordinatorName>{coordinator.name}</CoordinatorName>
                    <CoordinatorRole>{coordinator.role}</CoordinatorRole>
                    <WhatsAppButton
                      href={`https://wa.me/${coordinator.phone}?text=Olá%20${coordinator.name.split(' ')[0]},%20vim%20do%20site%20da%20Sprint%20Final%202025`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Falar no WhatsApp
                    </WhatsAppButton>
                  </CoordinatorCard>
                ))}
              </CoordinatorsGrid>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
};

export default CallToAction;