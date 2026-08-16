// src/components/Button/Button.jsx
import React from 'react';
import { buttonBaseStyles, buttonVariantStyles, buttonSizeStyles } from './Button.styles';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isDisabled = false,
  onClick,
  type = 'button',
  ariaLabel,
  className = '',
  ...props
}) => {
  const selectedVariant = buttonVariantStyles[variant] || buttonVariantStyles.primary;
  const selectedSize = buttonSizeStyles[size] || buttonSizeStyles.md;

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      aria-disabled={isDisabled}
      aria-label={ariaLabel}
      className={`${buttonBaseStyles} ${selectedVariant} ${selectedSize} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};
