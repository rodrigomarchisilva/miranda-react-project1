import './style.css';
import { Component } from 'react';
import { Posts } from '../../components/Posts';
import { fetchPosts } from '../../utils/fetchPosts';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

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

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    if (!posts) { return <div>Loading...</div>; }

    return (
      <section className="container">
        <Input
          value={ searchValue }
          onChange={ this.handleSearch }
        />
        <Posts posts={ posts } />
        <div className="button-container">
          <Button
            text="Show more posts"
            onClick={ this.addPosts }
            disabled={ noMorePosts }
          />
        </div>
      </section>
    );
  }
}
