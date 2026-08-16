import React from 'react';
import { SnairlGlyph } from './SnairlGlyph';

export const SnairlWordmark = ({ size = 'lg', className = '' }) => {
  const letters = ['S', 'N', 'A', 'I', 'R', 'L'];

  return (
    <div className={`inline-flex items-center gap-1 group ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="transition-transform duration-200 hover:-translate-y-1 hover:scale-110 cursor-pointer"
        >
          <SnairlGlyph
            name={letter}
            size={size}
            color={letter === 'I' ? 'accent' : 'text'}
          />
        </span>
      ))}
      <SnairlGlyph
        name="spiral"
        size={size}
        color="accent"
        className="ml-1 hover:rotate-180 duration-500"
      />
    </div>
  );
};
