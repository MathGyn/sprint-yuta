import React, { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
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
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #666666;

  span {
    color: var(--color-white);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    letter-spacing: 4px;
  }
`;

const DEFAULT_GLOW_COLOR = '212, 175, 55';
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_PARTICLE_COUNT = 12;

const PercentIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="6" stroke="#D4AF37" strokeWidth="2.5" fill="none"/>
    <circle cx="34" cy="34" r="6" stroke="#D4AF37" strokeWidth="2.5" fill="none"/>
    <line x1="12" y1="36" x2="36" y2="12" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8H16V20C16 24.4183 19.5817 28 24 28C28.4183 28 32 24.4183 32 20V8Z" stroke="#D4AF37" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
    <path d="M16 12H10C8.89543 12 8 12.8954 8 14V16C8 18.2091 9.79086 20 12 20H16" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 12H38C39.1046 12 40 12.8954 40 14V16C40 18.2091 38.2091 20 36 20H32" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 28V34M24 34H18M24 34H30" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 40H32" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const MoneyIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="14" width="36" height="20" rx="2" stroke="#D4AF37" strokeWidth="2.5" fill="none"/>
    <circle cx="24" cy="24" r="6" stroke="#D4AF37" strokeWidth="2.5" fill="none"/>
    <path d="M24 21V27M22 23L26 25M22 25L26 23" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="24" r="2" fill="#D4AF37"/>
    <circle cx="36" cy="24" r="2" fill="#D4AF37"/>
  </svg>
);

const cardData = [
  {
    title: 'DESCONTOS',
    description: 'EM TODOS OS PRODUTOS',
    label: 'Economia',
    icon: PercentIcon
  },
  {
    title: 'CORRETOR & GERENTES',
    description: 'PREMIAÇÃO PARA',
    label: 'Incentivo',
    icon: TrophyIcon
  },
  {
    title: 'PREMIAÇÃO EM DINHEIRO',
    description: 'PARA OS DECORADOS YUTÁ',
    label: 'Bônus',
    icon: MoneyIcon
  }
];

const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = radius => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard = ({ children, className = '', particleCount = DEFAULT_PARTICLE_COUNT, glowColor = DEFAULT_GLOW_COLOR }) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef([]);
  const particlesInitialized = useRef(false);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (!cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles]);

  return (
    <div ref={cardRef} className={`${className} particle-container`}>
      {children}
    </div>
  );
};

const GlobalSpotlight = ({ gridRef, spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS, glowColor = DEFAULT_GLOW_COLOR }) => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (!gridRef?.current) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = e => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest('.highlights-section');
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      const cards = gridRef.current.querySelectorAll('.card');

      if (!mouseInside) {
        gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' });
        cards.forEach(card => card.style.setProperty('--glow-intensity', '0'));
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(card, e.clientX, e.clientY, glowIntensity, spotlightRadius);
      });

      gsap.to(spotlightRef.current, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' });

      const targetOpacity =
        minDistance <= proximity ? 0.8 : minDistance <= fadeDistance ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8 : 0;

      gsap.to(spotlightRef.current, { opacity: targetOpacity, duration: targetOpacity > 0 ? 0.2 : 0.5, ease: 'power2.out' });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, spotlightRadius, glowColor]);

  return null;
};

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
  max-width: 800px;
  width: 100%;
  height: auto;
  display: block;
  
  @media (max-width: 768px) {
    max-width: 85%;
  }
  
  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

const Highlights = () => {
  const gridRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Section className="highlights-section">
      <GlobalSpotlight gridRef={gridRef} />
      <Container>
        <TopHeader>
          <HeaderTitle>
            <span>ÚLTIMA CHANCE</span> • VENDER EM <span>2025</span>
          </HeaderTitle>
        </TopHeader>

        <div className="card-grid" ref={gridRef}>
          {cardData.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <ParticleCard
                key={index}
                className="card card--border-glow"
                particleCount={isMobile ? 0 : DEFAULT_PARTICLE_COUNT}
                glowColor={DEFAULT_GLOW_COLOR}
              >
                <div className="card__header">
                  <div className="card__label">{card.label}</div>
                  <div className="card__icon">
                    <IconComponent />
                  </div>
                </div>
                <div className="card__content">
                  <p className="card__description">{card.description}</p>
                  <h2 className="card__title">{card.title}</h2>
                </div>
              </ParticleCard>
            );
          })}
        </div>

        <FeaturesImageContainer>
          <FeaturesImage src="/features.png" alt="Features" />
        </FeaturesImageContainer>
      </Container>
    </Section>
  );
};

export default Highlights;