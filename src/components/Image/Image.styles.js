// src/components/Image/Image.styles.js
import { radiusTokens } from '../../theme/tokens';

export const imageBorderColorStyles = {
  snairl: 'border-snairl-accent-500',
  base: 'border-snairl-base-300',
  black: 'border-black',
  white: 'border-white',
  none: 'border-transparent',
};

export const imageBorderWidthStyles = {
  none: 'border-0',
  sm: 'border',
  md: 'border-2',
  lg: 'border-4',
};

export const imageRoundedStyles = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: radiusTokens.md,
  lg: radiusTokens.lg,
  full: radiusTokens.full,
  spiral: radiusTokens.spiral,
};

export const imageFitStyles = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
  none: 'object-none',
  'scale-down': 'object-scale-down',
};

export const imageWrapperBase = 'relative overflow-hidden transition-all duration-300 bg-snairl-base-100';
export const imageFallbackContainerBase = 'w-full h-full min-h-[140px] flex items-center justify-center p-4 text-center select-none';