import { interactiveBase, radiusTokens } from '../../theme/tokens';

export const inputContainerBase = 'flex flex-col gap-1.5 w-full';
export const inputLabelBase = 'text-xs font-semibold tracking-wide text-snairl-text flex items-center gap-1 select-none';

export const inputElementBase = 
  `w-full bg-white text-snairl-text text-sm font-medium border transition-all duration-200 outline-none placeholder:text-snairl-base-800/50 disabled:bg-snairl-base-100 disabled:text-snairl-base-800/60 disabled:cursor-not-allowed py-2.5 ${interactiveBase}`;

export const inputStatusStyles = {
  default: 'border-snairl-base-200 focus:border-snairl-accent-500 focus:ring-snairl-accent-500',
  error: 'border-snairl-danger-500 focus:border-snairl-danger-600 focus:ring-snairl-danger-500 text-snairl-danger-600',
  success: 'border-emerald-500 focus:border-emerald-600 focus:ring-emerald-500',
};

export const inputRoundedStyles = {
  sm: radiusTokens.sm || 'rounded-md',
  md: radiusTokens.md || 'rounded-xl',
  lg: radiusTokens.lg || 'rounded-2xl',
  spiral: radiusTokens.spiral || 'rounded-spiral',
};

export const inputIconWrapperBase = 'absolute flex items-center justify-center text-snairl-base-800';
export const inputHelperTextBase = 'text-xs font-medium mt-0.5';