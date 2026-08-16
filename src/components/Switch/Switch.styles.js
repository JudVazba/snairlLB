import { radiusTokens } from '../../theme/tokens';

export const switchSizeStyles = {
  sm: {
    track: 'w-10 h-6 p-0.5',
    thumb: 'w-5 h-5',
    translate: 'translate-x-4',
    icon: 'w-3 h-3',
  },
  md: {
    track: 'w-12 h-7 p-1',
    thumb: 'w-5 h-5',
    translate: 'translate-x-5',
    icon: 'w-3.5 h-3.5',
  },
  lg: {
    track: 'w-16 h-9 p-1',
    thumb: 'w-7 h-7',
    translate: 'translate-x-7',
    icon: 'w-4.5 h-4.5',
  },
};

export const switchTrackRoundedStyles = {
  spiral: 'rounded-2xl',
  full: radiusTokens.full || 'rounded-full',
};

export const switchThumbRoundedStyles = {
  spiral: radiusTokens.spiral || 'rounded-spiral',
  full: radiusTokens.full || 'rounded-full',
};

export const switchContainerBase = 'inline-flex flex-col gap-1.5';
export const switchLabelBase = 'inline-flex items-center gap-3 select-none group';
export const switchTrackBase = 
  'relative flex items-center transition-all duration-300 ease-out peer-focus-visible:ring-2 peer-focus-visible:ring-snairl-accent-500 peer-focus-visible:ring-offset-2';
export const switchThumbBase = 
  'flex items-center justify-center bg-white shadow-md text-snairl-accent-500 transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-active:scale-95';
export const switchLabelTextBase = 'text-sm font-semibold text-snairl-text tracking-tight';
export const switchHelperTextBase = 'text-xs text-snairl-base-800 font-medium pl-0.5';