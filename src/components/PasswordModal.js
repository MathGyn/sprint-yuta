import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
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

const Modal = styled.div`
  background: #0A0A0A;
  border: 1px solid #D4AF37;
  max-width: 520px;
  width: 100%;
  position: relative;
`;

const Header = styled.div`
  padding: 40px 40px 30px;
  border-bottom: 1px solid #222222;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 25px 20px;
  }
`;

const Title = styled.h3`
  font-size: 36px;
  font-weight: 900;
  color: #FFFFFF;
  text-transform: uppercase;
  margin: 0 0 10px 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.p`
  font-size: 13px;
  color: #666666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
`;

const Body = styled.div`
  padding: 40px;

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LabelText = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: #666666;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const InputBox = styled.div`
  position: relative;
`;

const InputField = styled.input`
  background: #0A0A0A;
  border: 1px solid #222222;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 600;
  padding: 18px 80px 18px 20px;
  font-family: 'Salena', sans-serif;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #D4AF37;
  }

  &::placeholder {
    color: #444444;
  }

  @media (max-width: 768px) {
    padding: 16px 80px 16px 18px;
    font-size: 14px;
  }
`;

const ShowHide = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #666666;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #D4AF37;
  }
`;

const ErrorBox = styled.p`
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  padding: 12px 15px;
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px 12px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`;

const BackBtn = styled.button`
  background: transparent;
  color: #D4AF37;
  border: 1px solid #D4AF37;
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 20px 40px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Salena', sans-serif;

  &:hover {
    background: #D4AF37;
    color: #000000;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 18px 35px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const EnterBtn = styled.button`
  background: #D4AF37;
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
    background: #F5C61A;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 18px 35px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

function PasswordModal({ onSuccess, onCancel }) {
  const [pass, setPass] = useState('');
  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onCancel();
    };
    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onCancel]);

  const goBack = () => {
    window.location.href = '/';
  };

  const submit = (e) => {
    e.preventDefault();
    if (pass === 'SPRINTYUTA2025') {
      setErr('');
      onSuccess();
    } else {
      setErr('Senha inválida. Tente novamente.');
    }
  };

  return (
    <Overlay>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Acesso do Corretor</Title>
          <Subtitle>Insira a senha para continuar</Subtitle>
        </Header>
        <Body>
          <FormContainer onSubmit={submit}>
            <Group>
              <LabelText htmlFor="pwd">Senha</LabelText>
              <InputBox>
                <InputField
                  id="pwd"
                  type={visible ? 'text' : 'password'}
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="Digite a senha"
                  autoFocus
                />
                <ShowHide type="button" onClick={() => setVisible(!visible)}>
                  {visible ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  )}
                </ShowHide>
              </InputBox>
              {err && <ErrorBox>{err}</ErrorBox>}
            </Group>
            <Buttons>
              <BackBtn type="button" onClick={goBack}>
                Voltar
              </BackBtn>
              <EnterBtn type="submit">Entrar</EnterBtn>
            </Buttons>
          </FormContainer>
        </Body>
      </Modal>
    </Overlay>
  );
}

export default PasswordModal;
