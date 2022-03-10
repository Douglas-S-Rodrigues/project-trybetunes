import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      musicName: '',
      buttonDisabled: true };
  }

  onInputChange = ({ target: { value } }) => {
    const MIN_LENGTH_VALUE = 2;
    const validate = value.length;
    this.setState({
      musicName: value,
      buttonDisabled: validate < MIN_LENGTH_VALUE,
    });
  }

  render() {
    const { musicName, buttonDisabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="nameSearch">
            <input
              type="text"
              data-testid="search-artist-input"
              id="nameSearch"
              onChange={ this.onInputChange }
              value={ musicName }
            />
          </label>
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ buttonDisabled }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
