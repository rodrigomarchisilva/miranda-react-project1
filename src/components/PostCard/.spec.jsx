import { screen, render } from '@testing-library/react';
import { PostCard } from '.';
import { props } from './mock';

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    expect.assertions(3);
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute(
      'src',
      props.cover,
    );
    expect(
      screen.getByRole('heading', { name: /title 1/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
