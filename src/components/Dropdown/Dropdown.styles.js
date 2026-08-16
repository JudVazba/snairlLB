// src/components/Dropdown/Dropdown.styles.js
import { interactiveBase, radiusTokens } from '../../theme/tokens';

export const dropdownTriggerBase = 
  `inline-flex items-center justify-between gap-2 px-4 py-2.5 text-sm font-semibold border outline-none select-none ${interactiveBase}`;

export const dropdownVariantStyles = {
  snairl: 'bg-snairl-accent-500 text-white hover:bg-snairl-accent-600 shadow-md border-transparent',
  outline: 'bg-white text-snairl-text border-snairl-base-200 hover:bg-snairl-base-50',
  ghost: 'bg-transparent text-snairl-text hover:bg-snairl-base-100 border-transparent',
};

export const dropdownRoundedStyles = {
  md: radiusTokens.md,
  lg: radiusTokens.lg,
  spiral: radiusTokens.spiral,
};

export const dropdownMenuBase = 
  'absolute mt-2 w-56 z-50 p-1.5 bg-white border border-snairl-base-200 shadow-xl animate-in fade-in zoom-in-95';

export const dropdownItemBase = 
  'w-full text-left px-3 py-2 text-sm font-medium flex items-center gap-2.5 transition-colors duration-150 select-none';

export const dropdownItemStateStyles = {
  disabled: 'text-snairl-base-800/40 cursor-not-allowed',
  danger: 'text-snairl-danger-500 hover:bg-snairl-danger-50 hover:text-snairl-danger-600',
  default: 'text-snairl-text hover:bg-snairl-accent-100 hover:text-snairl-accent-700',
};
