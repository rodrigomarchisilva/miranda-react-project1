import { Component } from 'react';
import P from 'prop-types';
import './style.css';

export class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <button onClick={onClick} className="button" disabled={disabled}>
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
