import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Loader } from './Loader';

describe('Loader Component', () => {
  it('renders with role status and default accessible label', () => {
    render(<Loader />);
    const loader = screen.getByRole('status');
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveAttribute('aria-label', 'Cargando contenido...');
  });

  it('renders custom aria-label when provided', () => {
    render(<Loader ariaLabel="Loading user profile" />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading user profile');
  });

  it('displays loading text when passed', () => {
    render(<Loader text="Please wait..." />);
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
  });

  it('renders text in top position when textPosition is top', () => {
    render(<Loader text="Loading top" textPosition="top" />);
    const loader = screen.getByRole('status');
    expect(loader.firstChild).toHaveTextContent('Loading top');
  });

  it('renders spinner variant by default', () => {
    const { container } = render(<Loader variant="spinner" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('animate-spin');
  });

  it('renders dots variant with three animated spans', () => {
    const { container } = render(<Loader variant="dots" />);
    const dots = container.querySelectorAll('span.animate-bounce');
    expect(dots.length).toBe(3);
  });

  it('renders pulse variant', () => {
    const { container } = render(<Loader variant="pulse" />);
    const pingDot = container.querySelector('span.animate-ping');
    expect(pingDot).toBeInTheDocument();
  });
});