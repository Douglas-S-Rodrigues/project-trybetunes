import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from './Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      buttonDisabled: true,
      loading: false,
      notNull: false,
      albuns: [],
      artist: '',
    };
  }

  onInputChange = () => {
    const MIN_LENGTH_VALUE = 2;
    const { search } = this.state;
    if (search.length >= MIN_LENGTH_VALUE) {
      this.setState({
        buttonDisabled: false,
      });
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      search: target.value,
    }, this.onInputChange);
  }

  handleClick = async () => {
    const { search } = this.state;
    this.setState({
      loading: true,
    });
    const albuns = await searchAlbumsAPI(search);
    this.setState(() => ({
      loading: false,
      notNull: true,
      artist: search,
      albuns: [...albuns],
    }), () => this.setState({ search: '' }));
  }

  render() {
    const { buttonDisabled, loading, notNull, search, artist, albuns } = this.state;
    const result = `Resultado de álbuns de: ${artist}`;
    return (
      <div data-testid="page-search">
        <Header />
        <p>Pesquisar</p>
        { loading ? <Loading /> : (
          <>
            <input
              data-testid="search-artist-input"
              type="text"
              name="search"
              value={ search }
              onChange={ this.handleChange }
            />
            <button
              data-testid="search-artist-button"
              type="button"
              disabled={ buttonDisabled }
              onClick={ this.handleClick }
            >
              Pesquisar
            </button>
          </>
        ) }
        { notNull ? (
          <>
            { result }
            { albuns.length > 0 ? albuns.map((album) => (
              <div key={ album.collectionId }>
                <Link
                  data-testid={ `link-to-album-${album.collectionId}` }
                  to={ `/album/${album.collectionId}` }
                >
                  <h2>{ album.collectionName }</h2>
                  <h4>{ album.artistName }</h4>
                </Link>
              </div>
            )) : <p>Nenhum álbum foi encontrado</p> }
          </>
        ) : null}
      </div>
    );
  }
}

export default Search;
