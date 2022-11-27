import { screen, render } from '@testing-library/react';
import { Posts } from '.';
import { props } from './mock';

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(4);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(4);
    expect(screen.getAllByText(/body/i)).toHaveLength(4);
    expect(screen.getByRole('img', { name: /title 3/i })).toHaveAttribute(
      'src',
      'img/img3.png',
    );
  });

  it('should not be in the document', () => {
    render(<Posts posts={[]} />);
    expect(
      screen.queryByRole('heading', { name: /title/i }),
    ).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
