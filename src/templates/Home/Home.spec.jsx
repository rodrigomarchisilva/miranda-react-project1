import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Home } from '.';
import {
  postsEndpoint,
  postsResponse,
  photosEndpoint,
  photosResponse,
} from './mock';
import userEvent from '@testing-library/user-event';

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

    expect.assertions(3);

    const noMorePosts = screen.getByText('No posts found =(');
    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/type your search/i);
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole('img', { name: /title/i });
    expect(images).toHaveLength(3);

    const button = screen.getByRole('button', { name: /show more posts/i });
    expect(button).toBeInTheDocument();
  });

  it('should search for posts', async () => {
    render(<Home />);

    expect.assertions(8);
    const hitBackspace = (repetitions)  => '{backspace}'.repeat(repetitions);

    let noMorePosts = screen.getByText('No posts found =(');
    await waitForElementToBeRemoved(noMorePosts);

    expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /title 2/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /title 3/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /title 4/i })).not.toBeInTheDocument();

    const search = screen.getByPlaceholderText(/type your search/i);
    userEvent.type(search, 'title 1');
    expect(screen.getByRole('heading', { name: 'title 1' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /title 2/i })).not.toBeInTheDocument();
    userEvent.type(search, `${hitBackspace(7)}`);

    userEvent.type(search, 'something that does not exist');
    noMorePosts = screen.getByText('No posts found =(');
    expect(noMorePosts).toBeInTheDocument();
    userEvent.type(search, `${hitBackspace(29)}`);

    const button = screen.getByRole('button', { name: /show more posts/i });
    userEvent.click(button);
    expect(screen.getByRole('heading', { name: /title 4/i })).toBeInTheDocument();
  });
});
