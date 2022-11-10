import { render, screen } from '@testing-library/react';
import { SearchInput } from '.';

describe('test the search input', () => {
  it('renders the placeholder', () => {
    render(<SearchInput onChange={ () => {} } value="" />);
    const inputElement = screen.getByPlaceholderText(/Type your search/i);
    expect(inputElement).toBeInTheDocument();
  });
});
