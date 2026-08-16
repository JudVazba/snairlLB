import React, { useId, forwardRef } from 'react';
import {
  inputContainerBase,
  inputLabelBase,
  inputElementBase,
  inputStatusStyles,
  inputRoundedStyles,
  inputIconWrapperBase,
  inputHelperTextBase,
} from './Input.styles';

export const Input = forwardRef(({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error = '',
  helperText = '',
  status = 'default',
  rounded = 'spiral',
  isDisabled = false,
  isRequired = false,
  startIcon,
  endIcon,
  id: customId,
  className = '',
  ...rest
}, ref) => {
  const generatedId = useId();
  const inputId = customId || generatedId;
  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;

  const currentStatus = error ? 'error' : status;
  const selectedStatusStyle = inputStatusStyles[currentStatus] || inputStatusStyles.default;
  const selectedRounded = inputRoundedStyles[rounded] || inputRoundedStyles.spiral;

  return (
    <div className={`${inputContainerBase} ${className}`}>
      {label && (
        <label htmlFor={inputId} className={inputLabelBase}>
          {label}
          {isRequired && <span className="text-snairl-danger-500" aria-hidden="true">*</span>}
        </label>
      )}

      <div className="relative flex items-center w-full">
        {startIcon && (
          <div className={`${inputIconWrapperBase} left-3.5 pointer-events-none select-none`}>
            {startIcon}
          </div>
        )}

        <input
          ref={ref}
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={isDisabled}
          required={isRequired}
          aria-invalid={!!error || currentStatus === 'error'}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          {...rest}
          className={`
            ${inputElementBase}
            ${selectedRounded}
            ${selectedStatusStyle}
            ${startIcon ? 'pl-10' : 'pl-4'}
            ${endIcon ? 'pr-10' : 'pr-4'}
          `.trim()}
        />

        {endIcon && (
          <div className={`${inputIconWrapperBase} right-3.5`}>
            {endIcon}
          </div>
        )}
      </div>

      {error && (
        <span id={errorId} className={`${inputHelperTextBase} text-snairl-danger-500 flex items-center gap-1`}>
          <span aria-hidden="true">⚠️</span> {error}
        </span>
      )}

      {!error && helperText && (
        <span id={helperId} className={`${inputHelperTextBase} text-snairl-base-800`}>
          {helperText}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';
