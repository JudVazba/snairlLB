import React from 'react';

const glyphPaths = {
  // 'S' fluida con margen interno
  S: (
    <>
      <path
        d="M 17 7 C 15 4.5 11.5 4.5 9 6.5 C 6.5 8.5 7 12 11 13.5 C 15.5 15 16.5 18 14 20.5 C 11.5 22.5 7.5 21 6 18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 17 7 C 18 8 18.5 9.5 17.5 10.5 C 16.5 11.5 15 11 14.5 9.5 C 14 8 15.5 6.5 17 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  // 'N' con arranque en espiral inferior izquierda y bucle superior
  N: (
    <>
      <path
        d="M 6 16 C 4.5 16 4.5 14 6 14 C 7 14 7.5 15 6.8 15.6 C 6.2 16.2 4.5 15.5 4.5 13.5 C 4.5 10 7 5 7 4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 7 4.5 L 16.5 19 C 16.5 19 17.5 11 17.5 6.5 C 17.5 4.5 19 3.8 20 4.8 C 20.8 5.8 19.8 7 18.8 6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  // NUEVA 'A': Pata izquierda curvada, travesaño fluido y patas rematadas en espiral
  A: (
    <>
      {/* Pata izquierda con arranque en gancho suave y subida limpia */}
      <path
        d="M 4 17 C 4 19.5 6 20 7.5 19 C 9 18 8.5 15 10 11 L 12.5 4.5 C 13 3 14 3 14.5 4.5 L 16.5 13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Pata derecha con remate en espiral/bucle orgánico */}
      <path
        d="M 16.5 13 C 16.5 16 16 19 18 19.5 C 19.5 20 20.5 18.5 20 17 C 19.5 15.8 18 16 18.2 17.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Travesaño extendido que cruza la A como en tu boceto */}
      <path
        d="M 6.5 12.5 C 10 12 14.5 12 18.5 11.5 C 19.5 11.4 20 12.2 19.2 13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  // 'I' equilibrada con punto/antena
  I: (
    <>
      <path d="M 12 10 V 20" strokeLinecap="round" />
      <circle cx="12" cy="5" r="2" fill="currentColor" />
    </>
  ),

  // 'R' continua con panza suave y pata en espiral
  R: (
    <>
      <path
        d="M 6 20 V 4 C 6 4 10.5 2.5 14.5 4.2 C 17.5 5.5 17.5 9 14.5 10.8 C 12 12.2 9.5 11.5 9.5 10 C 9.5 9 10.8 8.5 11.8 9.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 10.5 11 C 12 14.5 13.5 18 16.5 19.2 C 18.8 20.1 20.2 18.2 19.5 16.2 C 18.8 14.8 17.2 15 16.8 16.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  // 'L' limpia
  L: (
    <path
      d="M 6.5 4 V 16 C 6.5 18.5 8.5 20 11 20 H 18"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),

  // Espiral icónica
  spiral: (
    <>
      <path d="M 12 12 A 1.8 1.8 0 1 0 13.8 13.8" strokeLinecap="round" />
      <path d="M 15.6 12 A 5.4 5.4 0 1 0 10.2 17.4" strokeLinecap="round" />
      <path d="M 19.2 12 A 9 9 0 1 0 10.2 21" strokeLinecap="round" />
    </>
  ),

  // Caracol mascota
  snail: (
    <>
      <path d="M 3 18 C 5 18 7 17 9 17 H 18 C 20 17 21.5 15.5 21.5 13.5 C 21.5 11.5 20 10 18 10 C 17 10 16.2 10.4 15.5 11" strokeLinecap="round" />
      <path d="M 12 17 A 4.5 4.5 0 1 0 7.5 12.5 C 7.5 13.8 8.2 15 9.2 15.8" strokeLinecap="round" />
      <path d="M 17 9 L 18 5 M 19.5 10 L 21.5 7" strokeLinecap="round" />
      <circle cx="18" cy="4.5" r="1" fill="currentColor" />
      <circle cx="21.5" cy="6.5" r="1" fill="currentColor" />
    </>
  )
};

const sizeClasses = {
  sm: 'w-5 h-5 stroke-[2.2]',
  md: 'w-8 h-8 stroke-[2]',
  lg: 'w-12 h-12 stroke-[1.8]',
  xl: 'w-20 h-20 stroke-[1.5]',
};

export const SnairlGlyph = ({
  name = 'spiral',
  size = 'md',
  color = 'accent',
  animate = false,
  className = '',
  ...props
}) => {
  const selectedPath = glyphPaths[name] || glyphPaths.spiral;
  const sizeStyle = sizeClasses[size] || sizeClasses.md;

  const colorClasses = {
    accent: 'text-snairl-accent-500',
    text: 'text-snairl-text',
    base: 'text-snairl-base-800',
    white: 'text-white',
  };

  const selectedColor = colorClasses[color] || '';

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={`
        inline-block
        transition-transform duration-300 ease-out
        ${sizeStyle}
        ${selectedColor}
        ${animate ? 'animate-spin-slow' : ''}
        ${className}
      `}
      {...props}
    >
      {selectedPath}
    </svg>
  );
};