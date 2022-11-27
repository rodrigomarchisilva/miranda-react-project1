import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  it('should render the button with the text "Load more posts"', () => {
    render(
      <Button text="Load more posts" disabled={false} onClick={() => {}} />,
    );

    expect.assertions(2);

    const button = screen.getByRole('button', { name: /Load more posts/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('class', 'button');
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load more posts" disabled={false} onClick={fn} />);
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /Load more posts/i });
    fireEvent.click(button);
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should be disabled when disabled is true', () => {
    render(
      <Button text="Load more posts" disabled={true} onClick={() => {}} />,
    );
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /Load more posts/i });
    expect(button).toBeDisabled();
  });

  it('should not be disabled when disabled is false', () => {
    render(
      <Button text="Load more posts" disabled={false} onClick={() => {}} />,
    );
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /Load more posts/i });
    expect(button).toBeEnabled();
  });

  it('should match the snapshot', () => {
    const { container } = render(
      <Button text="Load more posts" disabled={false} onClick={() => {}} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
