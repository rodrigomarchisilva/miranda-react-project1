import { render } from '@testing-library/react';
import { Home } from '.';

describe('<Home />', () => {
  it('renders the section with data-testid container', async () => {
    const { findByTestId } = render(<Home />);
    const sectionElement = await findByTestId('container');
    expect(sectionElement).toBeInTheDocument();
  });
});
