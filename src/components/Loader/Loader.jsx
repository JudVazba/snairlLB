import React from 'react';
import {
  loaderColorStyles,
  loaderSizeStyles,
  loaderDotSizeStyles,
  loaderTextSizeStyles,
  loaderContainerBase,
  loaderTextBase,
} from './Loader.styles';

export const Loader = ({
  variant = 'spinner',
  color = 'snairl',
  size = 'md',
  text = '',
  textPosition = 'bottom',
  ariaLabel = 'Cargando contenido...',
  className = '',
}) => {
  const selectedColor = loaderColorStyles[color] || loaderColorStyles.snairl;
  const selectedSize = loaderSizeStyles[size] || loaderSizeStyles.md;
  const selectedDotSize = loaderDotSizeStyles[size] || loaderDotSizeStyles.md;
  const selectedTextSize = loaderTextSizeStyles[size] || loaderTextSizeStyles.md;

  const renderText = text ? (
    <span className={`${loaderTextBase} ${selectedTextSize} ${selectedColor.text}`}>
      {text}
    </span>
  ) : null;

  return (
    <div
      role="status"
      aria-label={ariaLabel}
      className={`${loaderContainerBase} ${className}`}
    >
      {textPosition === 'top' && renderText}

      <div>
        {variant === 'spinner' && (
          <svg
            className={`animate-spin ${selectedSize} ${selectedColor.icon}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M 50 50 a 5 5 0 0 1 5 -5 a 10 10 0 0 1 10 10 a 20 20 0 0 1 -20 20 a 35 35 0 0 1 -35 -35 a 42 42 0 0 1 42 -42"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              className="opacity-20"
            />
            <path
              d="M 50 50 a 5 5 0 0 1 5 -5 a 10 10 0 0 1 10 10 a 20 20 0 0 1 -20 20 a 35 35 0 0 1 -35 -35 a 42 42 0 0 1 42 -42"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray="180"
              strokeDashoffset="60"
              className="opacity-90"
            />
          </svg>
        )}

        {variant === 'dots' && (
          <div className="flex items-center gap-1.5 my-1">
            <span className={`rounded-full animate-bounce ${selectedDotSize} ${selectedColor.bg}`} style={{ animationDelay: '0ms' }} />
            <span className={`rounded-full animate-bounce ${selectedDotSize} ${selectedColor.bg}`} style={{ animationDelay: '150ms' }} />
            <span className={`rounded-full animate-bounce ${selectedDotSize} ${selectedColor.bg}`} style={{ animationDelay: '300ms' }} />
          </div>
        )}

        {variant === 'pulse' && (
          <div className="relative flex items-center justify-center my-1">
            <span className={`absolute inline-flex rounded-full opacity-75 animate-ping ${selectedSize} ${selectedColor.bg}`} />
            <span className={`relative inline-flex rounded-full ${selectedSize} ${selectedColor.bg}`} />
          </div>
        )}
      </div>

      {textPosition === 'bottom' && renderText}

      <span className="sr-only">{text || ariaLabel}</span>
    </div>
  );
};
