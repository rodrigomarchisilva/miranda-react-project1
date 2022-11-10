import './style.css';
import { Component } from 'react';
import { Posts } from '../../components/Posts';
import { fetchPosts } from '../../utils/fetchPosts';
import { Button } from '../../components/Button';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
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

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    if (!posts) { return <div>Loading...</div>; }

    return (
      <section className="container">
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
