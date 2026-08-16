import { interactiveBase, radiusTokens } from '../../theme/tokens';

export const buttonBaseStyles = 
  `inline-flex items-center justify-center font-semibold ${radiusTokens.spiral} hover:-translate-y-0.5 active:translate-y-0 ${interactiveBase}`;

export const buttonVariantStyles = {
  primary: 'bg-snairl-accent-500 text-snairl-base-50 hover:bg-snairl-accent-600 active:bg-snairl-accent-700 focus:ring-snairl-accent-500 shadow-sm',
  secondary: 'bg-snairl-base-100 text-snairl-text hover:bg-snairl-base-200 active:bg-snairl-base-300 focus:ring-snairl-base-200 border border-snairl-base-200',
  danger: 'bg-snairl-danger-500 text-white hover:bg-snairl-danger-600 active:bg-snairl-danger-600 focus:ring-snairl-danger-500',
  outline: 'bg-transparent text-snairl-accent-600 border-2 border-snairl-accent-500 hover:bg-snairl-accent-100 focus:ring-snairl-accent-500',
};

export const buttonSizeStyles = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
};