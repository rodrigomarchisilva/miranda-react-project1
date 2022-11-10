import P from 'prop-types';

export const Button = ({ text, onClick }) => (
  <button onClick={ onClick }>
    { text }
  </button>
);

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
};
