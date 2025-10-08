import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente de imagem otimizada com suporte automático a WebP
 * 
 * @component
 * @example
 * ```jsx
 * <OptimizedImage 
 *   src="/images/lake-house-1.jpg"
 *   alt="Lake House"
 *   width={2048}
 *   height={1365}
 *   loading="lazy"
 * />
 * ```
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {},
  width,
  height,
  loading = 'lazy',
  onLoad,
  onError
}) => {
  // Gerar caminho WebP automaticamente
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return (
    <picture className={className}>
      {/* Fonte WebP (navegadores modernos) */}
      <source 
        srcSet={webpSrc} 
        type="image/webp" 
      />
      
      {/* Fallback para JPG/PNG (navegadores antigos) */}
      <img 
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        style={style}
        onLoad={onLoad}
        onError={onError}
        className={className}
      />
    </picture>
  );
};

OptimizedImage.propTypes = {
  /** Caminho da imagem (JPG, JPEG ou PNG) */
  src: PropTypes.string.isRequired,
  /** Texto alternativo para acessibilidade */
  alt: PropTypes.string.isRequired,
  /** Classes CSS */
  className: PropTypes.string,
  /** Estilos inline */
  style: PropTypes.object,
  /** Largura da imagem */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Altura da imagem */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Tipo de carregamento (lazy, eager) */
  loading: PropTypes.oneOf(['lazy', 'eager']),
  /** Callback quando a imagem carrega */
  onLoad: PropTypes.func,
  /** Callback quando há erro no carregamento */
  onError: PropTypes.func,
};

export default OptimizedImage;

