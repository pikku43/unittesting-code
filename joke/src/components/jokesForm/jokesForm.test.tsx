import { render, fireEvent, screen } from '@testing-library/react';
import JokesForm from './jokesForm';
import '@testing-library/jest-dom';

describe('JokesForm', () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    render(<JokesForm onSubmit={mockOnSubmit} />);
  });

  it('should render the form with a number input and a submit button', () => {
    expect(screen.getByLabelText('Number of jokes')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Get Jokes' })).toBeInTheDocument();
  });

  it('should call onSubmit with the selected count when the form is submitted', () => {
    const countInput = screen.getByLabelText('Number of jokes');
    const submitButton = screen.getByRole('button', { name: 'Get Jokes' });

    fireEvent.change(countInput, { target: { value: '50' } });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith(50);
  });

  it('should not call onSubmit if the selected count is less than 1 or greater than 100', () => {
    const countInput = screen.getByLabelText('Number of jokes');
    const submitButton = screen.getByRole('button', { name: 'Get Jokes' });

    fireEvent.change(countInput, { target: { value: '0' } });
    fireEvent.click(submitButton);
    expect(mockOnSubmit).not.toHaveBeenCalled();

    fireEvent.change(countInput, { target: { value: '101' } });
    fireEvent.click(submitButton);
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});