import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchInput } from '.';

describe('<SearchInput />', () => {
  it('should render the SearchInput', () => {
    render(<SearchInput onChange={() => {}} value="" />);
    const input = screen.getByPlaceholderText(/Type your search/i);
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('');
  });

  it('should call onChange as a key is pressed', () => {
    const fn = jest.fn();
    render(<SearchInput onChange={fn} value="" />);
    const input = screen.getByPlaceholderText(/Type your search/i);
    userEvent.type(input, 'text');
    expect(fn).toHaveBeenCalledTimes(4);
  });

  it('should match the snapshot', () => {
    const { container } = render(<SearchInput onChange={() => {}} value="" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
