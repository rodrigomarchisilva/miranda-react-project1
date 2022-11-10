import './style.css';
import { Component } from 'react';
import { Posts } from '../../components/Posts';
import { fetchPosts } from '../../utils/fetchPosts';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
    searchValue: '',
  };

  async componentDidMount() {
    await this.setPosts();
  }

  setPosts = async() => {
    const { page, postsPerPage } = this.state;
    const posts = await fetchPosts();
    this.setState({
      posts: posts.slice(page, postsPerPage),
      allPosts: posts,
    });
  }

  addPosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  }

  handleSearch = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }

  filterPosts = (post) => (
    post.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
  );

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const { addPosts, handleSearch, filterPosts } = this;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = searchValue ? allPosts.filter(filterPosts) : posts;

    if (!posts) { return <div>Loading...</div>; }

    return (
      <section className="container" data-testid="container">
        { searchValue && <h1>Search value: { searchValue }</h1> }
        <SearchInput value={ searchValue } onChange={ handleSearch } />
        {
          !filteredPosts.length
            ? <div>{ 'No posts found =(' }</div>
            : (
              <>
                <Posts posts={ filteredPosts } />
                <Button
                  text="Show more posts"
                  onClick={ addPosts }
                  disabled={ noMorePosts }
                />
              </>
            )
        }
      </section>
    );
  }
}
