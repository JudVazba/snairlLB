import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Image } from './Image';

describe('Image Component', () => {
  it('renders image element with provided src and alt text', () => {
    render(<Image src="test.jpg" alt="Test image" />);
    const img = screen.getByRole('img', { name: /test image/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test.jpg');
  });

  it('hides loading placeholder after image triggers onLoad', () => {
    render(<Image src="test.jpg" alt="Test image" />);
    const img = screen.getByRole('img');

    expect(img).toHaveClass('opacity-0');

    fireEvent.load(img);

    expect(img).toHaveClass('opacity-100');
  });

  it('renders caption when provided', () => {
    render(<Image src="test.jpg" alt="Test image" caption="A cute snail" />);
    expect(screen.getByText('A cute snail')).toBeInTheDocument();
  });

  it('handles image error and displays default snairl fallback', () => {
    render(<Image src="invalid.jpg" alt="Test image" fallbackType="snairl" />);
    const img = screen.getByRole('img');

    fireEvent.error(img);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.getByText('¡Ups! La imagen no pudo cargar')).toBeInTheDocument();
  });

  it('uses fallbackSrc when image loading fails', () => {
    render(<Image src="invalid.jpg" fallbackSrc="backup.jpg" alt="Backup image" />);
    const img = screen.getByRole('img');

    fireEvent.error(img);

    expect(img).toHaveAttribute('src', 'backup.jpg');
  });

  it('applies decorative attributes correctly', () => {
    const { container } = render(
      <Image src="decorative.jpg" alt="Should be ignored" isDecorative />
    );
    
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', '');
    expect(img).toHaveAttribute('aria-hidden', 'true');
  });
});