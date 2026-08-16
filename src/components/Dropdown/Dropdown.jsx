import React, { useState, useRef, useEffect } from 'react';
import {
  dropdownTriggerBase,
  dropdownVariantStyles,
  dropdownRoundedStyles,
  dropdownMenuBase,
  dropdownItemBase,
  dropdownItemStateStyles,
} from './Dropdown.styles';

export const Dropdown = ({
  label = 'Seleccionar',
  options = [],
  variant = 'snairl',
  rounded = 'spiral',
  onSelect,
  isDisabled = false,
  className = '',
  align = 'left',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') setIsOpen(false);
  };

  const handleOptionClick = (option) => {
    if (option.isDisabled) return;

    if (option.onClick) {
      option.onClick(option);
    }

    if (onSelect) {
      onSelect(option);
    }

    setIsOpen(false);
  };

  const selectedVariant = dropdownVariantStyles[variant] || dropdownVariantStyles.snairl;
  const selectedRounded = dropdownRoundedStyles[rounded] || dropdownRoundedStyles.spiral;
  const alignmentClass = align === 'right' ? 'right-0' : 'left-0';

  return (
    <div
      ref={dropdownRef}
      onKeyDown={handleKeyDown}
      className={`relative inline-block text-left ${className}`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isDisabled}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`${dropdownTriggerBase} ${selectedVariant} ${selectedRounded}`}
      >
        <span>{label}</span>
        <span
          className={`transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      {isOpen && (
        <div
          role="menu"
          className={`${dropdownMenuBase} ${alignmentClass} ${selectedRounded}`}
        >
          {options.map((option, index) => {
            const itemRounded = rounded === 'spiral' ? 'rounded-lg' : selectedRounded;
            const itemState = option.isDisabled
              ? dropdownItemStateStyles.disabled
              : option.isDanger
              ? dropdownItemStateStyles.danger
              : dropdownItemStateStyles.default;

            return (
              <button
                key={option.value || index}
                type="button"
                role="menuitem"
                disabled={option.isDisabled}
                onClick={() => handleOptionClick(option)}
                className={`${dropdownItemBase} ${itemRounded} ${itemState}`}
              >
                {option.icon && <span className="text-base" aria-hidden="true">{option.icon}</span>}
                <span className="flex-1">{option.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};