import P from 'prop-types';
import './style.css';

export const Button = ({ text, onClick, disabled }) => (
  <button onClick={ onClick } className="button" disabled={ disabled }>
    { text }
  </button>
);

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
