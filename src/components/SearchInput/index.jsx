import { Component } from 'react';
import P from 'prop-types';
import './style.css';

export class SearchInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        className="search-input"
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Type your search"
      />
    );
  }
}

SearchInput.propTypes = {
  value: P.string.isRequired,
  onChange: P.func.isRequired,
};
