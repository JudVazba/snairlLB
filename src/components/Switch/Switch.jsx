import React, { useId, forwardRef } from 'react';
import {
  switchSizeStyles,
  switchTrackRoundedStyles,
  switchThumbRoundedStyles,
  switchContainerBase,
  switchLabelBase,
  switchTrackBase,
  switchThumbBase,
  switchLabelTextBase,
  switchHelperTextBase,
} from './Switch.styles';

const SnairlSpiralIcon = ({ className = 'w-3.5 h-3.5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 12a2 2 0 1 0 2 2" />
    <path d="M16 12a6 6 0 1 0-6 6" />
    <path d="M20 12a10 10 0 1 0-10 10" />
  </svg>
);

export const Switch = forwardRef(({
  label,
  checked = false,
  onChange,
  isDisabled = false,
  size = 'md',
  rounded = 'spiral',
  showIcon = true,
  helperText = '',
  id: customId,
  className = '',
  ...rest
}, ref) => {
  const generatedId = useId();
  const switchId = customId || generatedId;
  const helperId = `${switchId}-helper`;

  const selectedSize = switchSizeStyles[size] || switchSizeStyles.md;
  const trackRadius = switchTrackRoundedStyles[rounded] || switchTrackRoundedStyles.spiral;
  const thumbRadius = switchThumbRoundedStyles[rounded] || switchThumbRoundedStyles.spiral;

  const handleToggle = (e) => {
    if (isDisabled) return;
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`${switchContainerBase} ${className}`}>
      <label
        htmlFor={switchId}
        className={`${switchLabelBase} ${
          isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        }`}
      >
        <input
          ref={ref}
          id={switchId}
          type="checkbox"
          role="switch"
          checked={checked}
          onChange={handleToggle}
          disabled={isDisabled}
          aria-checked={checked}
          aria-describedby={helperText ? helperId : undefined}
          className="sr-only peer"
          {...rest}
        />

        <div
          className={`
            ${switchTrackBase}
            ${selectedSize.track}
            ${trackRadius}
            ${
              checked
                ? 'bg-snairl-accent-500 shadow-[0_2px_10px_rgba(249,115,22,0.3)]'
                : 'bg-snairl-base-200 shadow-inner border border-snairl-base-300/40'
            }
          `.trim()}
        >
          <div
            className={`
              ${switchThumbBase}
              ${selectedSize.thumb}
              ${thumbRadius}
              ${checked ? `${selectedSize.translate} rotate-0` : 'translate-x-0 -rotate-45 text-snairl-base-400'}
            `.trim()}
          >
            {showIcon && (
              <SnairlSpiralIcon
                className={`${selectedSize.icon} transition-opacity duration-200 ${
                  checked ? 'opacity-100 scale-100' : 'opacity-40 scale-90'
                }`}
              />
            )}
          </div>
        </div>

        {label && (
          <span className={switchLabelTextBase}>
            {label}
          </span>
        )}
      </label>

      {helperText && (
        <span id={helperId} className={switchHelperTextBase}>
          {helperText}
        </span>
      )}
    </div>
  );
});

Switch.displayName = 'Switch';
