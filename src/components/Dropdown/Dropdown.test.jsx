import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Dropdown } from './Dropdown';

const mockOptions = [
  { label: 'Profile', value: 'profile', onClick: vi.fn() },
  { label: 'Settings', value: 'settings' },
  { label: 'Disabled Item', value: 'disabled', isDisabled: true, onClick: vi.fn() },
  { label: 'Delete Account', value: 'delete', isDanger: true, onClick: vi.fn() },
];

describe('Dropdown Component', () => {
  it('renders correctly with default label', () => {
    render(<Dropdown />);
    expect(screen.getByRole('button', { name: /seleccionar/i })).toBeInTheDocument();
  });

  it('toggles menu visibility when trigger button is clicked', () => {
    render(<Dropdown label="Menu" options={mockOptions} />);
    const trigger = screen.getByRole('button', { name: /menu/i });

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    fireEvent.click(trigger);
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();

    fireEvent.click(trigger);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('calls option onClick and onSelect callbacks when an option is clicked', () => {
    const handleSelect = vi.fn();
    render(<Dropdown label="Menu" options={mockOptions} onSelect={handleSelect} />);

    fireEvent.click(screen.getByRole('button', { name: /menu/i }));
    fireEvent.click(screen.getByText('Profile'));

    expect(mockOptions[0].onClick).toHaveBeenCalledTimes(1);
    expect(handleSelect).toHaveBeenCalledWith(mockOptions[0]);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('does not execute actions when clicking a disabled option', () => {
    const handleSelect = vi.fn();
    render(<Dropdown label="Menu" options={mockOptions} onSelect={handleSelect} />);

    fireEvent.click(screen.getByRole('button', { name: /menu/i }));
    const disabledButton = screen.getByText('Disabled Item').closest('button');

    expect(disabledButton).toBeDisabled();
    fireEvent.click(disabledButton);

    expect(mockOptions[2].onClick).not.toHaveBeenCalled();
    expect(handleSelect).not.toHaveBeenCalled();
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('closes menu when Escape key is pressed', () => {
    render(<Dropdown label="Menu" options={mockOptions} />);
    
    fireEvent.click(screen.getByRole('button', { name: /menu/i }));
    expect(screen.getByRole('menu')).toBeInTheDocument();

    fireEvent.keyDown(screen.getByRole('menu'), { key: 'Escape', code: 'Escape' });
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('closes menu when clicking outside the component', () => {
    render(
      <div>
        <span data-testid="outside">Outside Element</span>
        <Dropdown label="Menu" options={mockOptions} />
      </div>
    );

    fireEvent.click(screen.getByRole('button', { name: /menu/i }));
    expect(screen.getByRole('menu')).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId('outside'));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });
});
