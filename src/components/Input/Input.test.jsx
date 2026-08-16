import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React, { createRef } from 'react';
import { Input } from './Input';

describe('Input Component', () => {
  it('renders correctly with label and placeholder', () => {
    render(<Input label="Username" placeholder="Enter username" />);
    
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
  });

  it('handles value changes via onChange handler', () => {
    const handleChange = vi.fn();
    render(<Input label="Email" onChange={handleChange} />);
    
    const input = screen.getByLabelText(/email/i);
    fireEvent.change(input, { target: { value: 'user@snairl.com' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders required indicator when isRequired is true', () => {
    render(<Input label="Password" isRequired />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('displays helper text when provided and no error exists', () => {
    render(<Input label="Age" helperText="Must be 18 or older" />);
    
    const helper = screen.getByText('Must be 18 or older');
    expect(helper).toBeInTheDocument();
    
    const input = screen.getByLabelText(/age/i);
    expect(input).toHaveAttribute('aria-describedby', helper.id);
  });

  it('displays error message and sets aria-invalid to true', () => {
    render(<Input label="Email" error="Invalid email address" helperText="Some helper" />);
    
    const errorMessage = screen.getByText('Invalid email address');
    expect(errorMessage).toBeInTheDocument();
    expect(screen.queryByText('Some helper')).not.toBeInTheDocument();

    const input = screen.getByLabelText(/email/i);
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby', errorMessage.id);
  });

  it('renders start and end icons correctly', () => {
    render(
      <Input
        label="Search"
        startIcon={<span data-testid="start-icon">🔍</span>}
        endIcon={<span data-testid="end-icon">❌</span>}
      />
    );

    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });

  it('forwards ref correctly to input element', () => {
    const ref = createRef();
    render(<Input label="Ref Test" ref={ref} />);
    
    expect(ref.current).not.toBeNull();
    expect(ref.current.tagName).toBe('INPUT');
  });
});