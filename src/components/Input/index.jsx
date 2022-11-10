import { Component } from 'react';
import P from 'prop-types';

export class Input extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        type="text"
        value={ value }
        onChange={ onChange }
      />
    );
  }
}

Input.propTypes = {
  value: P.string.isRequired,
  onChange: P.func.isRequired,
};
