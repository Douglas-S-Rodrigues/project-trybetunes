import { React, Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';
import Loading from '../pages/Loading';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      favorite: false,
    };
  }

  favoriteSongs = ({ target }) => {
    this.setState({
      loading: true,
      favorite: target.checked,
    });
    addSong(getMusics(target.id))
      .then((status) => {
        if (status === 'OK') {
          this.setState({
            loading: false,
          });
        }
      });
    getFavoriteSongs();
  }

  render() {
    const { loading, favorite } = this.state;
    const { musicName, url, id, array } = this.props;
    return (
      <div>
        { loading ? <Loading />
          : (
            <div>
              <div>{ musicName }</div>
              <audio data-testid="audio-component" src={ url } controls>
                <track kind="captions" />
                <code>audio</code>
              </audio>
              <label htmlFor={ id }>
                Favorita
                <input
                  id={ id }
                  data={ array }
                  type="checkbox"
                  data-testid={ `checkbox-music-${id}` }
                  onChange={ this.favoriteSongs }
                  checked={ favorite }
                />
              </label>
            </div>
          )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  array: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
};

export default MusicCard;
