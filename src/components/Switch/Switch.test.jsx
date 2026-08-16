import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React, { createRef } from 'react';
import { Switch } from './Switch';

describe('Switch Component', () => {
  it('renders with role switch and associated label', () => {
    render(<Switch label="Enable Notifications" />);
    
    const toggle = screen.getByRole('switch', { name: /enable notifications/i });
    expect(toggle).toBeInTheDocument();
    expect(toggle).not.toBeChecked();
  });

  it('reflects checked state correctly', () => {
    render(<Switch label="Dark Mode" checked />);
    
    const toggle = screen.getByRole('switch');
    expect(toggle).toBeChecked();
    expect(toggle).toHaveAttribute('aria-checked', 'true');
  });

  it('calls onChange handler when clicked', () => {
    const handleChange = vi.fn();
    render(<Switch label="Toggle option" onChange={handleChange} />);
    
    const toggle = screen.getByRole('switch');
    fireEvent.click(toggle);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('does not call onChange when disabled', () => {
    const handleChange = vi.fn();
    render(<Switch label="Disabled Switch" isDisabled onChange={handleChange} />);
    
    const toggle = screen.getByRole('switch');
    expect(toggle).toBeDisabled();

    fireEvent.click(toggle);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders helper text and links via aria-describedby', () => {
    render(<Switch label="Location" helperText="Used for precise weather" />);
    
    const helper = screen.getByText('Used for precise weather');
    expect(helper).toBeInTheDocument();

    const toggle = screen.getByRole('switch');
    expect(toggle).toHaveAttribute('aria-describedby', helper.id);
  });

  it('forwards ref correctly to input element', () => {
    const ref = createRef();
    render(<Switch label="Ref Test" ref={ref} />);
    
    expect(ref.current).not.toBeNull();
    expect(ref.current.tagName).toBe('INPUT');
    expect(ref.current.type).toBe('checkbox');
  });
});
