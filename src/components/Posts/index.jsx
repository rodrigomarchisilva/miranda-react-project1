import P from 'prop-types';
import { PostCard } from "../PostCard"
import './style.css';

export const Posts = ({ posts }) => (
  <div className="posts">
    { posts.map(({ id, title, body, cover }) => (
      <PostCard
        key={ id }
        title={ title }
        body={ body }
        cover={ cover }
      />
    ))}
  </div>
);

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      id: P.number,
      title: P.string,
      body: P.string,
      cover: P.string,
    })
  ).isRequired,
}
