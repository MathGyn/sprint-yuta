import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const Section = styled.section`
  padding: 120px 20px;
  background: #000000;
  border-top: 1px solid #111111;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 15px;
  color: var(--color-gold);
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
  margin-bottom: 60px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 40px;
  }
`;

const ChipsContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 60px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 40px;
  }
`;

const Chip = styled.button`
  background: ${props => props.$active ? 'var(--color-gold)' : '#0A0A0A'};
  color: ${props => props.$active ? '#000000' : '#666666'};
  border: 1px solid ${props => props.$active ? 'var(--color-gold)' : '#222222'};
  padding: 12px 28px;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Salena', sans-serif;

  &:hover {
    background: ${props => props.$active ? 'var(--color-yellow)' : '#111111'};
    border-color: var(--color-gold);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 11px;
  }
`;

const PremiosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const PremioCard = styled.div`
  background: #0A0A0A;
  border: 1px solid ${props => props.$special ? 'var(--color-gold)' : '#222222'};
  padding: 40px 35px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  grid-column: ${props => props.$fullWidth ? '1 / -1' : 'auto'};

  &:hover {
    border-color: var(--color-gold);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 30px 25px;
    grid-column: auto;
  }
`;

const SpecialBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: var(--color-gold);
  color: #000000;
  padding: 8px 20px;
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const PremioHeader = styled.div`
  font-size: 11px;
  color: #666666;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const PremioContent = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$fullWidth ? '2fr auto' : '1fr auto'};
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  }
`;

const PremioInfo = styled.div``;

const PremioTarget = styled.div`
  font-size: 14px;
  color: var(--color-white);
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const PremioTitle = styled.h3`
  font-size: 28px;
  font-weight: 900;
  color: var(--color-gold);
  text-transform: uppercase;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const PremioValue = styled.div`
  font-size: ${props => props.$fullWidth ? '56px' : '42px'};
  font-weight: 900;
  color: var(--color-gold);
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const PremioSubtitle = styled.div`
  font-size: 12px;
  color: #666666;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 8px;
`;

const PremioStars = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 15px;
  font-size: 20px;
  color: var(--color-gold);

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const DisclaimerText = styled.p`
  text-align: center;
  margin-top: 40px;
  font-size: 11px;
  color: #444444;
  font-weight: 600;
  font-style: italic;
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  a:hover {
    color: inherit;
    text-decoration: none;
  }
`;

const PremioImage = styled.img`
  width: 180px;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 150px;
    margin: 0 auto;
  }
`;

const premiosData = [
  {
    id: 'synergia',
    name: 'SYNERGIA BUENO',
    premios: [
      {
        header: 'Vendeu unidade de 2 Quartos ou 2 Suítes',
        target: 'CORRETOR',
        title: 'GANHA',
        premio: 'IPHONE 16!',
        stars: 3,
        image: '/images/premios/iphone.png'
      },
      {
        header: 'Vendeu unidade de 3 Suítes',
        target: 'CORRETOR',
        title: 'GANHA',
        premio: 'MACBOOK',
        stars: 3,
        image: '/images/premios/macbook.png'
      },
      {
        header: 'Vendeu unidade de 2 Quartos ou 2 Suítes',
        target: 'GERENTE',
        title: 'GANHA',
        value: 'R$ 1.000',
        stars: 0,
        image: null
      },
      {
        header: 'Vendeu unidade de 3 Suítes',
        target: 'GERENTE',
        title: 'GANHA',
        value: 'R$ 2.000',
        stars: 0,
        image: null
      }
    ]
  },
  {
    id: 'urban-garden',
    name: 'URBAN GARDEN',
    premios: [
      {
        header: 'Vendeu qualquer unidade',
        target: 'CORRETOR',
        title: 'GANHA',
        premio: 'MACBOOK',
        stars: 3,
        image: '/images/premios/macbook.png'
      },
      {
        header: 'Vendeu qualquer unidade',
        target: 'GERENTE',
        title: 'GANHA',
        value: 'R$ 1.000',
        stars: 0,
        image: null
      },
      {
        header: 'Para o gerente - Vendas a partir de R$ 1 milhão',
        target: 'O PRÊMIO',
        title: 'DOBRA',
        value: 'R$ 2.000',
        subtitle: 'PARA CADA UNIDADE',
        special: true,
        fullWidth: true,
        image: '/images/premios/relogio.png'
      }
    ]
  },
  {
    id: 'lake-house',
    name: 'LAKE HOUSE',
    premios: [
      {
        header: 'Vendeu qualquer unidade',
        target: 'CORRETOR',
        title: 'GANHA',
        premio: 'MACBOOK',
        stars: 3,
        image: '/images/premios/macbook.png'
      },
      {
        header: 'Vendeu qualquer unidade',
        target: 'GERENTE',
        title: 'GANHA',
        value: 'R$ 1.000',
        stars: 0,
        image: null
      },
      {
        header: 'Para o gerente - Vendas a partir de R$ 1 milhão',
        target: 'O PRÊMIO',
        title: 'DOBRA',
        value: 'R$ 2.000',
        subtitle: 'PARA CADA UNIDADE',
        special: true,
        fullWidth: true,
        image: '/images/premios/relogio.png'
      }
    ]
  },
  {
    id: 'vertice',
    name: 'VÉRTICE RESIDENCE',
    premios: [
      {
        header: 'Vendeu qualquer unidade',
        target: 'CORRETOR',
        title: 'GANHA',
        premio: 'MACBOOK',
        stars: 3,
        image: '/images/premios/macbook.png'
      },
      {
        header: 'Vendeu qualquer unidade',
        target: 'GERENTE',
        title: 'GANHA',
        value: 'R$ 1.000',
        stars: 0,
        image: null
      },
      {
        header: 'Meta Especial - A imobiliária que vender 3 unidades até dia 31/12/2025',
        target: 'PRÊMIO DE',
        title: '',
        value: 'R$ 10.000',
        subtitle: 'PARA A IMOBILIÁRIA',
        special: true,
        fullWidth: true,
        image: '/images/premios/relogio.png'
      }
    ]
  },
  {
    id: 'parque',
    name: 'RESERVA DO PARQUE',
    premios: [
      {
        header: 'Vendeu qualquer unidade',
        target: 'CORRETOR',
        title: 'GANHA',
        premio: 'MACBOOK',
        stars: 3,
        image: '/images/premios/macbook.png'
      },
      {
        header: 'Vendeu qualquer unidade',
        target: 'GERENTE',
        title: 'GANHA',
        value: 'R$ 1.000',
        stars: 0,
        image: null
      },
      {
        header: 'Para o gerente - Na venda de 2 unidades',
        target: 'O PRÊMIO',
        title: 'DOBRA',
        value: 'R$ 2.000',
        subtitle: 'PARA CADA UNIDADE',
        special: true,
        fullWidth: true,
        image: '/images/premios/relogio.png'
      }
    ]
  }
];

const Premios = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRefs = useRef([]);
  const intervalRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  const startAutoRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % premiosData.length);
    }, 5000);
  };

  const stopAutoRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleManualClick = (index) => {
    setActiveIndex(index);
    stopAutoRotation();

    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      startAutoRotation();
    }, 30000);
  };

  useEffect(() => {
    startAutoRotation();

    return () => {
      stopAutoRotation();
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    imageRefs.current.forEach((img, index) => {
      if (img) {
        gsap.fromTo(
          img,
          {
            y: 20,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'back.out(1.4)'
          }
        );

        gsap.to(img, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: index * 0.2
        });
      }
    });
  }, [activeIndex]);

  const activePremios = premiosData[activeIndex];

  return (
    <Section id="premios">
      <Container>
        <SectionTitle>PRÊMIOS</SectionTitle>
        <SectionSubtitle>Premiações exclusivas por empreendimento</SectionSubtitle>

        <ChipsContainer>
          {premiosData.map((emp, index) => (
            <Chip
              key={emp.id}
              $active={index === activeIndex}
              onClick={() => handleManualClick(index)}
            >
              {emp.name}
            </Chip>
          ))}
        </ChipsContainer>

        <PremiosGrid>
          {activePremios.premios.map((premio, index) => (
            <PremioCard key={index} $special={premio.special} $fullWidth={premio.fullWidth}>
              {premio.special && <SpecialBadge>ESPECIAL</SpecialBadge>}

              {premio.header && <PremioHeader>{premio.header}</PremioHeader>}

              <PremioContent $fullWidth={premio.fullWidth}>
                <PremioInfo>
                  <PremioTarget>{premio.target}</PremioTarget>
                  {premio.title && <PremioTitle>{premio.title}</PremioTitle>}
                  {premio.premio && <PremioTitle>{premio.premio}</PremioTitle>}
                  {premio.value && <PremioValue $fullWidth={premio.fullWidth}>{premio.value}</PremioValue>}
                  {premio.subtitle && <PremioSubtitle>{premio.subtitle}</PremioSubtitle>}
                  {premio.stars > 0 && (
                    <PremioStars>
                      {Array.from({ length: premio.stars }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </PremioStars>
                  )}
                </PremioInfo>

                {premio.image && (
                  <PremioImage
                    ref={el => imageRefs.current[index] = el}
                    src={premio.image}
                    alt={premio.premio || 'Prêmio'}
                  />
                )}
              </PremioContent>
            </PremioCard>
          ))}
        </PremiosGrid>

        <DisclaimerText><a href="/regulamento" target="_blank" rel="noopener noreferrer">Confira o regulamento completo</a></DisclaimerText>
      </Container>
    </Section>
  );
};

export default Premios;