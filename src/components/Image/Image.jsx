import React, { useState } from 'react';
import { Loader } from '../Loader/Loader';
import {
  imageBorderColorStyles,
  imageBorderWidthStyles,
  imageRoundedStyles,
  imageFitStyles,
  imageWrapperBase,
  imageFallbackContainerBase,
} from './Image.styles';

export const Image = ({
  src,
  alt = '',
  fallbackSrc = '',
  fallbackType = 'snairl',
  fallbackText = '',
  aspectRatio = 'aspect-auto',
  fit = 'cover',
  rounded = 'md',
  borderColor = 'none',
  borderWidth = 'none',
  caption = '',
  isDecorative = false,
  className = '',
  width,
  height,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const selectedBorderColor = imageBorderColorStyles[borderColor] || imageBorderColorStyles.none;
  const selectedBorderWidth = imageBorderWidthStyles[borderWidth] || imageBorderWidthStyles.none;
  const selectedRounded = imageRoundedStyles[rounded] || imageRoundedStyles.md;
  const selectedFit = imageFitStyles[fit] || imageFitStyles.cover;

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const imageSource = hasError && fallbackSrc ? fallbackSrc : src;

  const renderFallback = () => {
    switch (fallbackType) {
      case 'snairl':
        return (
          <div className={`${imageFallbackContainerBase} flex-col bg-snairl-accent-100 text-snairl-accent-700 gap-2`}>
            <span className="text-3xl animate-pulse" aria-hidden="true">🐌</span>
            <span className="text-xs font-semibold tracking-tight">
              {fallbackText || '¡Ups! La imagen no pudo cargar'}
            </span>
          </div>
        );

      case 'minimal':
        return (
          <div className={`${imageFallbackContainerBase} flex-col bg-snairl-base-200 text-snairl-base-800 gap-1.5`}>
            <svg className="w-8 h-8 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-medium">
              {fallbackText || 'Imagen no disponible'}
            </span>
          </div>
        );

      case 'loader':
        return (
          <div className={`${imageFallbackContainerBase} bg-snairl-base-100`}>
            <Loader variant="spinner" color="snairl" size="md" text={fallbackText || 'Reintentando...'} textPosition="bottom" />
          </div>
        );

      case 'custom':
        return (
          <div className={`${imageFallbackContainerBase} bg-snairl-base-100 text-snairl-text text-xs font-medium`}>
            {fallbackText || 'Error al cargar imagen.'}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <figure className={`inline-flex flex-col gap-2 max-w-full ${className}`}>
      <div
        className={`${imageWrapperBase} ${aspectRatio} ${selectedRounded} ${selectedBorderColor} ${selectedBorderWidth}`}
      >
        {isLoading && !hasError && (
          <div className="absolute inset-0 bg-snairl-base-200 animate-pulse flex items-center justify-center">
            <Loader variant="spinner" color="snairl" size="sm" />
          </div>
        )}

        {hasError && !fallbackSrc ? (
          renderFallback()
        ) : (
          <img
            src={imageSource}
            alt={isDecorative ? '' : alt}
            aria-hidden={isDecorative ? 'true' : undefined}
            width={width}
            height={height}
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full transition-opacity duration-300 ${selectedFit} ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            {...props}
          />
        )}
      </div>

      {caption && (
        <figcaption className="text-xs text-center text-snairl-base-800 font-medium px-1">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
