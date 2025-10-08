import React, { useState, useEffect, useRef } from 'react';
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
  max-width: 1400px;
  margin: 0 auto;
`;

const HeroBanner = styled.div`
  text-align: center;
  margin-bottom: 80px;
  padding: 80px 40px;

  @media (max-width: 768px) {
    padding: 60px 30px;
    margin-bottom: 60px;
  }
`;

const HeroLogo = styled.img`
  max-width: 600px;
  width: 100%;
  height: auto;
  margin: 0 auto 30px;
  display: block;

  @media (max-width: 968px) {
    max-width: 450px;
  }

  @media (max-width: 768px) {
    max-width: 320px;
  }
`;

const HeroTitle = styled.h2`
  font-size: 72px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -2px;
  margin-bottom: 20px;
  position: relative;

  .show {
    color: var(--color-gold);
  }

  .de {
    color: var(--color-gold);
    font-size: 56px;
  }

  .decorados {
    color: #999999;
  }

  @media (max-width: 968px) {
    font-size: 48px;

    .de {
      font-size: 36px;
    }
  }

  @media (max-width: 768px) {
    font-size: 36px;

    .de {
      font-size: 28px;
    }
  }
`;

const PrizeAmount = styled.div`
  font-size: 96px;
  font-weight: 900;
  color: var(--color-gold);
  margin: 30px 0;
  line-height: 1;
  position: relative;

  @media (max-width: 968px) {
    font-size: 64px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const PrizeLabel = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #999999;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PrizeDescription = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Disclaimer = styled.p`
  font-size: 12px;
  color: #666666;
  font-style: italic;
  margin-top: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 15px;
  color: var(--color-white);
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

const UnitsGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$single ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))'};
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const SingleUnitLayout = styled.div`
  display: grid;
  grid-template-columns: 35fr 65fr;
  gap: 0;
  background: #0A0A0A;
  border: 1px solid #222222;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-gold);
    transform: translateY(-3px);
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const UnitCard = styled.div`
  background: #0A0A0A;
  border: 1px solid #222222;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-gold);
    transform: translateY(-3px);
  }
`;

const UnitImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const SingleUnitImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 500px;
  object-fit: cover;
  display: block;

  @media (max-width: 968px) {
    min-height: 350px;
  }

  @media (max-width: 768px) {
    min-height: 250px;
  }
`;

const UnitInfo = styled.div`
  padding: 30px 25px;
`;

const SingleUnitInfo = styled.div`
  padding: 60px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 968px) {
    padding: 40px 35px;
  }

  @media (max-width: 768px) {
    padding: 30px 25px;
  }
`;

const UnitType = styled.h4`
  font-size: 14px;
  font-weight: 800;
  color: var(--color-white);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const UnitArea = styled.div`
  font-size: 12px;
  color: var(--color-gold);
  font-weight: 700;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const UnitPrice = styled.div`
  font-size: 28px;
  font-weight: 900;
  color: var(--color-gold);
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const UnitTag = styled.div`
  font-size: 11px;
  color: #666666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const UnitNumber = styled.div`
  font-size: 12px;
  color: var(--color-white);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`;

const UnitDetails = styled.div`
  font-size: 10px;
  color: #999999;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 4px;
  line-height: 1.3;
`;

const PremiumBanner = styled.div`
  background: var(--color-gold);
  padding: 30px 40px;
  text-align: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    padding: 25px 30px;
  }
`;

const BannerText = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 14px;
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

// Carrossel de imagens
const ImageCarousel = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const CarouselContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => -props.$currentIndex * 100}%);
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  flex-shrink: 0;
  display: block;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const SingleCarouselImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 500px;
  object-fit: cover;
  flex-shrink: 0;
  display: block;

  @media (max-width: 968px) {
    min-height: 350px;
  }

  @media (max-width: 768px) {
    min-height: 250px;
  }
`;

const CarouselDots = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.$active ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-gold);
  }
`;

const GalleryIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.7);
  color: var(--color-gold);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-gold);
    color: #000000;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`;

// Modal de galeria
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: #0A0A0A;
  border: 1px solid var(--color-gold);
  max-width: 95vw;
  max-height: 95vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  padding: 20px 40px 15px;
  border-bottom: 1px solid #222222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 15px 25px 10px;
  }
`;

const ModalTitle = styled.h3`
  font-size: 24px;
  font-weight: 900;
  color: var(--color-white);
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ModalInfo = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 12px;
    gap: 15px;
  }
`;

const CloseButton = styled.button`
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
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
`;

const ModalBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const GalleryContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  min-height: 0;
  overflow: hidden;
`;

const GalleryImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
  width: auto;
  height: auto;
  object-position: center;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid var(--color-gold);
  color: var(--color-gold);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Salena', sans-serif;
  z-index: 2;

  &:hover {
    background: var(--color-gold);
    color: #000000;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }
  }
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  border-top: 1px solid #222222;
  flex-shrink: 0;
  overflow-x: auto;
  max-width: 100%;
`;

const Thumbnail = styled.div`
  width: 80px;
  height: 60px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.$active ? 'var(--color-gold)' : 'transparent'};
  flex-shrink: 0;

  &:hover {
    border-color: var(--color-gold);
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 45px;
  }
`;

const GalleryDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  border-top: 1px solid #222222;
  flex-shrink: 0;
`;

const GalleryDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.$active ? 'var(--color-gold)' : '#333333'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-gold);
  }
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: var(--color-gold);
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 20px;
  z-index: 2;
`;

// Sistema inteligente - gera automaticamente as imagens baseado na quantidade
// Adicionando timestamp para forçar reload das imagens
const timestamp = Date.now();

// Função para gerar imagens automaticamente baseado na quantidade
const generateUnitImages = (decoradoId, area, imageCount) => {
  const areaFolder = area.replace('m²', 'm2');
  const images = [];
  for (let i = 1; i <= imageCount; i++) {
    images.push(`/images/decorados/${decoradoId}/${areaFolder}/${decoradoId}-${areaFolder}-${i}.jpg?v=${timestamp}`);
  }
  return images;
};

// Configuração por unidade específica - APENAS MUDE OS NÚMEROS quando adicionar mais fotos
const UNIT_IMAGE_COUNTS = {
  'urban-garden-69m2': 6,      // ✅ 6 fotos configuradas
  'urban-garden-76m2': 9,      // ✅ 9 fotos configuradas
  'urban-garden-99m2': 9,      // ✅ 9 fotos configuradas (atualizado de 93m2 para 99m2)
  'synergia-76m2': 8,      // ✅ 8 fotos configuradas
  'vertice-75m2': 9,       // ✅ 9 fotos configuradas
  'lake-house-73m2': 15,   // ✅ 15 fotos configuradas
  'lake-house-82m2': 10,   // ✅ 10 fotos configuradas
  'lake-house-85m2': 14    // ✅ 14 fotos configuradas
};

// Função para obter imagens de uma unidade
const getUnitImages = (decoradoId, area) => {
  const unitKey = `${decoradoId}-${area.replace('m²', 'm2')}`;
  const imageCount = UNIT_IMAGE_COUNTS[unitKey] || 1;
  return generateUnitImages(decoradoId, area, imageCount);
};

const decoradosData = [
  {
    id: 'urban-garden',
    name: 'URBAN GARDEN',
    units: [
      {
        type: '2 Quartos sendo 2 Suítes + Lavabo',
        area: '69m²',
        price: 'R$ 994.116,00',
        unit: 'Unidade 405',
        garage: '1 vaga de garagem',
        storage: '1 escaninho',
        tag: '',
        image: '/images/decorados/urban-garden-1.jpg'
      },
      {
        type: '2 Quartos sendo 2 Suítes + Lavabo',
        area: '76m²',
        price: 'R$ 1.056.639,00',
        unit: 'Unidade 403',
        garage: '1 vaga de garagem',
        storage: '1 escaninho',
        tag: '',
        image: '/images/decorados/urban-garden-2.jpg'
      },
      {
        type: '3 Quartos sendo 3 Suítes + Lavabo',
        area: '99m²',
        price: 'R$ 1.453.944,00',
        unit: 'Unidade 2303',
        garage: '2 vagas de garagem',
        storage: '',
        tag: '',
        image: '/images/decorados/urban-garden-3.jpg'
      }
    ]
  },
  {
    id: 'synergia',
    name: 'SYNERGIA BUENO',
    units: [
      {
        type: '2 Quartos sendo 2 Suítes + Lavabo',
        area: '76m²',
        price: 'R$ 1.257.146,00',
        unit: 'Unidade 405',
        garage: '1 vaga de garagem',
        storage: '',
        tag: '',
        image: '/images/decorados/synergia-1.jpg'
      }
    ]
  },
  {
    id: 'vertice',
    name: 'VÉRTICE RESIDENCE',
    units: [
      {
        type: '3 Quartos 1 Suíte',
        area: '75m²',
        price: 'R$ 809.136,00',
        unit: 'Unidade 102',
        garage: '1 vaga de garagem',
        storage: '1 escaninho',
        tag: '',
        image: '/images/decorados/vertice-1.jpg'
      }
    ]
  },
  {
    id: 'lake-house',
    name: 'LAKE HOUSE',
    units: [
      {
        type: '2 Quartos 2 Suítes + Lavabo',
        area: '73m²',
        price: 'R$ 1.032.500,00',
        unit: 'Unidade 506',
        garage: '1 vaga de garagem',
        storage: '1 escaninho',
        tag: '',
        image: '/images/decorados/lake-house-1.jpg'
      },
      {
        type: '3 Quartos sendo 2 Suítes Americanas + Lavabo',
        area: '82m²',
        price: 'R$ 1.103.200,00',
        unit: 'Unidade 903',
        garage: '2 vagas de garagem',
        storage: '',
        tag: '',
        image: '/images/decorados/lake-house-2.jpg'
      },
      {
        type: '3 Quartos 3 Suítes Plenas + Lavabo',
        area: '85m²',
        price: 'R$ 1.188.800,00',
        unit: 'Unidade 1401',
        garage: '2 vagas de garagem',
        storage: '',
        tag: '',
        image: '/images/decorados/lake-house-3.jpg'
      }
    ]
  }
];

const ShowDecorados = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);
  const [galleryUnitIndex, setGalleryUnitIndex] = useState(0);
  const [carouselImageIndex, setCarouselImageIndex] = useState({});
  const intervalRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const carouselIntervalRef = useRef({});

  const startAutoRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % decoradosData.length);
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

  // Funções do carrossel de imagens
  const startCarouselRotation = (decoradoId, images) => {
    if (images.length <= 1) return;
    
    if (carouselIntervalRef.current[decoradoId]) {
      clearInterval(carouselIntervalRef.current[decoradoId]);
    }
    
    carouselIntervalRef.current[decoradoId] = setInterval(() => {
      setCarouselImageIndex(prev => ({
        ...prev,
        [decoradoId]: ((prev[decoradoId] || 0) + 1) % images.length
      }));
    }, 3000);
  };

  const stopCarouselRotation = (decoradoId) => {
    if (carouselIntervalRef.current[decoradoId]) {
      clearInterval(carouselIntervalRef.current[decoradoId]);
      carouselIntervalRef.current[decoradoId] = null;
    }
  };

  const handleCarouselDotClick = (decoradoId, index) => {
    setCarouselImageIndex(prev => ({
      ...prev,
      [decoradoId]: index
    }));
    stopCarouselRotation(decoradoId);
  };

  // Funções da galeria
  const openGallery = (decoradoId, imageIndex = 0, unitIndex = 0) => {
    setGalleryImageIndex(imageIndex);
    setGalleryUnitIndex(unitIndex);
    setIsGalleryOpen(true);
    stopAutoRotation();
    stopCarouselRotation(decoradoId);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    startAutoRotation();
  };

  const nextGalleryImage = () => {
    const images = getCurrentUnitImages(galleryUnitIndex);
    setGalleryImageIndex(prev => 
      (prev + 1) % images.length
    );
  };

  const prevGalleryImage = () => {
    const images = getCurrentUnitImages(galleryUnitIndex);
    setGalleryImageIndex(prev => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleGalleryDotClick = (index) => {
    setGalleryImageIndex(index);
  };

  useEffect(() => {
    startAutoRotation();

    return () => {
      stopAutoRotation();
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
      // Limpar todos os intervalos do carrossel
      Object.values(carouselIntervalRef.current).forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  // Iniciar carrossel quando mudar o decorado ativo
  useEffect(() => {
    const currentDecorado = decoradosData[activeIndex];
    const images = getCurrentUnitImages(0);
    if (images.length > 1) {
      startCarouselRotation(currentDecorado.id, images);
    }
  }, [activeIndex]);

  // Controle de teclado para a galeria
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isGalleryOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeGallery();
          break;
        case 'ArrowLeft':
          prevGalleryImage();
          break;
        case 'ArrowRight':
          nextGalleryImage();
          break;
        default:
          break;
      }
    };

    if (isGalleryOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isGalleryOpen]);

  const activeDecorado = decoradosData[activeIndex];
  
  // Função para obter imagens da unidade específica
  const getCurrentUnitImages = (unitIndex) => {
    if (!activeDecorado || !activeDecorado.units[unitIndex]) return [];
    const unit = activeDecorado.units[unitIndex];
    return getUnitImages(activeDecorado.id, unit.area);
  };
  
  // Para o carrossel principal, usar a primeira unidade
  const currentImages = getCurrentUnitImages(0);

  return (
    <Section id="show-decorados">
      <Container>
        <HeroBanner>
          <HeroLogo src="/images/show-decorados-logo.png" alt="Show de Decorados" />
          <PrizeLabel>Prêmio de</PrizeLabel>
          <PrizeAmount>R$ 10.000</PrizeAmount>
          <PrizeLabel>em dinheiro</PrizeLabel>
          <PrizeDescription>Na venda de qualquer decorado</PrizeDescription>
          <Disclaimer>Verifique regulamento completo da campanha.</Disclaimer>
        </HeroBanner>

        <SectionTitle>Apartamentos Decorados</SectionTitle>
        <SectionSubtitle>Unidades prontas para visitar</SectionSubtitle>

        <ChipsContainer>
          {decoradosData.map((dec, index) => (
            <Chip
              key={dec.id}
              $active={index === activeIndex}
              onClick={() => handleManualClick(index)}
            >
              {dec.name}
            </Chip>
          ))}
        </ChipsContainer>

        {activeDecorado.units.length === 1 ? (
          <UnitsGrid $single>
            <SingleUnitLayout onClick={() => openGallery(activeDecorado.id, 0, 0)}>
              <ImageCarousel>
                <CarouselContainer $currentIndex={carouselImageIndex[activeDecorado.id] || 0}>
                  {getCurrentUnitImages(0).map((image, index) => (
                    <SingleCarouselImage key={index} src={image} alt={`${activeDecorado.name} - Imagem ${index + 1}`} />
                  ))}
                </CarouselContainer>
                {getCurrentUnitImages(0).length > 1 && (
                  <>
                    <CarouselDots>
                      {getCurrentUnitImages(0).map((_, index) => (
                        <Dot
                          key={index}
                          $active={index === (carouselImageIndex[activeDecorado.id] || 0)}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCarouselDotClick(activeDecorado.id, index);
                          }}
                        />
                      ))}
                    </CarouselDots>
                    <GalleryIcon onClick={(e) => {
                      e.stopPropagation();
                      openGallery(activeDecorado.id, carouselImageIndex[activeDecorado.id] || 0, 0);
                    }}>
                      <svg viewBox="0 0 24 24">
                        <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                      </svg>
                    </GalleryIcon>
                  </>
                )}
              </ImageCarousel>
              <SingleUnitInfo>
                {activeDecorado.units[0].unit && <UnitNumber>{activeDecorado.units[0].unit}</UnitNumber>}
                <UnitType>{activeDecorado.units[0].type}</UnitType>
                <UnitArea>{activeDecorado.units[0].area}</UnitArea>
                <UnitPrice>{activeDecorado.units[0].price}</UnitPrice>
                {(activeDecorado.units[0].garage || activeDecorado.units[0].storage) && (
                  <UnitDetails>
                    {activeDecorado.units[0].garage && <div>{activeDecorado.units[0].garage}</div>}
                    {activeDecorado.units[0].storage && <div>{activeDecorado.units[0].storage}</div>}
                  </UnitDetails>
                )}
                {activeDecorado.units[0].tag && <UnitTag>{activeDecorado.units[0].tag}</UnitTag>}
              </SingleUnitInfo>
            </SingleUnitLayout>
          </UnitsGrid>
        ) : (
          <UnitsGrid>
            {activeDecorado.units.map((unit, index) => (
              <UnitCard key={index} onClick={() => openGallery(activeDecorado.id, index, index)}>
                <ImageCarousel>
                  <CarouselContainer $currentIndex={carouselImageIndex[activeDecorado.id] || 0}>
                    {getCurrentUnitImages(index).map((image, imgIndex) => (
                      <CarouselImage key={imgIndex} src={image} alt={`${activeDecorado.name} - Imagem ${imgIndex + 1}`} />
                    ))}
                  </CarouselContainer>
                  {getCurrentUnitImages(index).length > 1 && (
                    <>
                      <CarouselDots>
                        {getCurrentUnitImages(index).map((_, imgIndex) => (
                          <Dot
                            key={imgIndex}
                            $active={imgIndex === (carouselImageIndex[activeDecorado.id] || 0)}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCarouselDotClick(activeDecorado.id, imgIndex);
                            }}
                          />
                        ))}
                      </CarouselDots>
                      <GalleryIcon onClick={(e) => {
                        e.stopPropagation();
                        openGallery(activeDecorado.id, carouselImageIndex[activeDecorado.id] || 0, index);
                      }}>
                        <svg viewBox="0 0 24 24">
                          <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                        </svg>
                      </GalleryIcon>
                    </>
                  )}
                </ImageCarousel>
                <UnitInfo>
                  {unit.unit && <UnitNumber>{unit.unit}</UnitNumber>}
                  <UnitType>{unit.type}</UnitType>
                  <UnitArea>{unit.area}</UnitArea>
                  <UnitPrice>{unit.price}</UnitPrice>
                  {(unit.garage || unit.storage) && (
                    <UnitDetails>
                      {unit.garage && <div>{unit.garage}</div>}
                      {unit.storage && <div>{unit.storage}</div>}
                    </UnitDetails>
                  )}
                  {unit.tag && <UnitTag>{unit.tag}</UnitTag>}
                </UnitInfo>
              </UnitCard>
            ))}
          </UnitsGrid>
        )}

        <PremiumBanner>
          <BannerText>PRÊMIO DE R$8.000 PARA O CORRETOR E R$ 2.000 PARA O GERENTE</BannerText>
        </PremiumBanner>

        <DisclaimerText><a href="/._regulamento/" target="_blank" rel="noopener noreferrer">Confira o regulamento completo</a></DisclaimerText>
      </Container>

      {/* Modal da Galeria */}
      {isGalleryOpen && (
        <ModalOverlay onClick={closeGallery}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>{activeDecorado.name}</ModalTitle>
                <ModalInfo>
                  {activeDecorado.units[galleryUnitIndex]?.type} • {activeDecorado.units[galleryUnitIndex]?.area}
                </ModalInfo>
              </div>
              <CloseButton onClick={closeGallery}>×</CloseButton>
            </ModalHeader>
            
            <ModalBody>
              <GalleryContainer>
                <NavigationButton 
                  className="prev" 
                  onClick={prevGalleryImage}
                  disabled={getCurrentUnitImages(galleryUnitIndex).length <= 1}
                >
                  ‹
                </NavigationButton>
                
                <GalleryImage 
                  src={getCurrentUnitImages(galleryUnitIndex)[galleryImageIndex]} 
                  alt={`${activeDecorado.name} - Imagem ${galleryImageIndex + 1}`}
                />
                
                <NavigationButton 
                  className="next" 
                  onClick={nextGalleryImage}
                  disabled={getCurrentUnitImages(galleryUnitIndex).length <= 1}
                >
                  ›
                </NavigationButton>
                
                <ImageCounter>
                  {galleryImageIndex + 1} / {getCurrentUnitImages(galleryUnitIndex).length}
                </ImageCounter>
              </GalleryContainer>
              
              {getCurrentUnitImages(galleryUnitIndex).length > 1 && (
                <>
                  <ThumbnailsContainer>
                    {getCurrentUnitImages(galleryUnitIndex).map((image, index) => (
                      <Thumbnail
                        key={index}
                        $active={index === galleryImageIndex}
                        onClick={() => handleGalleryDotClick(index)}
                      >
                        <img src={image} alt={`Thumbnail ${index + 1}`} />
                      </Thumbnail>
                    ))}
                  </ThumbnailsContainer>
                  <GalleryDots>
                    {getCurrentUnitImages(galleryUnitIndex).map((_, index) => (
                      <GalleryDot
                        key={index}
                        $active={index === galleryImageIndex}
                        onClick={() => handleGalleryDotClick(index)}
                      />
                    ))}
                  </GalleryDots>
                </>
              )}
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
};

export default ShowDecorados;