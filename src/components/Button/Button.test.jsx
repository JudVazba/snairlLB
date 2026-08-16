import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';
import { buttonVariantStyles } from './Button.styles';

describe('Componente Button', () => {
  it('renderiza correctamente con el texto provisto', () => {
    render(<Button>Click aquí</Button>);
    expect(screen.getByRole('button', { name: /click aquí/i })).toBeInTheDocument();
  });

  it('aplica las clases de la variante por defecto (primary)', () => {
    render(<Button>Primario</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(buttonVariantStyles.primary);
  });

  it('aplica las clases de variantes alternativas como danger', () => {
    render(<Button variant="danger">Eliminar</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(buttonVariantStyles.danger);
  });

  it('ejecuta la función onClick al hacer click', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Enviar</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('no ejecuta onClick si el botón está deshabilitado', () => {
    const handleClick = vi.fn();
    render(<Button isDisabled onClick={handleClick}>Deshabilitado</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('pasa el atributo aria-label correctamente cuando se proporciona', () => {
    render(<Button ariaLabel="Botón de cerrar">X</Button>);
    expect(screen.getByRole('button', { name: /botón de cerrar/i })).toBeInTheDocument();
  });
});