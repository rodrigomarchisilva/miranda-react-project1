import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Home } from '.';
import { postsEndpoint, postsResponse, photosEndpoint, photosResponse } from './mock';

const handlers = [
  rest.get(postsEndpoint, (_req, res, ctx) => res(ctx.json(postsResponse))),
  rest.get(photosEndpoint, (_req, res, ctx) => res(ctx.json(photosResponse))),
];

const server = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => server.listen());
  afterEach(() => {
    server.resetHandlers();
    jest.restoreAllMocks();
  });
  afterAll(() => server.close());

  it('renders the section with data-testid container', async () => {
    const componentDidMount = jest.spyOn(Home.prototype, 'componentDidMount');
    componentDidMount.mockImplementation(() => {});
    const { findByTestId } = render(<Home />);
    const sectionElement = await findByTestId('container');
    expect(sectionElement).toBeInTheDocument();
  });

  it('should render search, posts and load more', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('No posts found =(');
    await waitForElementToBeRemoved(noMorePosts);
  });
});
