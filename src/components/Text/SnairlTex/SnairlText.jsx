import React from 'react';

export const SnairlText = ({
  children,
  as: Component = 'h1',
  variant = 'gradient', // 'gradient' | 'solid' | 'outline'
  withSpiral = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-bold tracking-tight inline-flex items-center gap-2';

  const variants = {
    gradient: 'bg-gradient-to-r from-snairl-text via-snairl-accent-500 to-amber-500 bg-clip-text text-transparent',
    solid: 'text-snairl-text',
    outline: 'text-transparent bg-clip-text bg-snairl-text stroke-snairl-text [-webkit-text-stroke:1.5px_#2d2b2a]',
  };

  return (
    <Component className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span>{children}</span>
      {withSpiral && (
        <svg
          className="w-[0.8em] h-[0.8em] inline-block text-snairl-accent-500 animate-spin-slow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M12 12a2 2 0 1 0 2 2" />
          <path d="M16 12a6 6 0 1 0-6 6" />
          <path d="M20 12a10 10 0 1 0-10 10" />
        </svg>
      )}
    </Component>
  );
};