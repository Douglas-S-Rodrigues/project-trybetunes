import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    this.list();
  }

  list = () => {
    const { match: { params: { id } } } = this.props;
    getMusics(id)
      .then((array) => {
        this.setState({
          albums: array,
        });
      });
  }

  render() {
    const { albums } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        { albums.length > 0 && (
          <div>
            <h3 data-testid="artist-name">{albums[0].artistName}</h3>
            <p data-testid="album-name">{albums[0].collectionName}</p>
            { albums.filter((items) => items.trackName)
              .map((music) => (
                <div key={ music.trackId }>
                  <MusicCard
                    musicName={ music.trackName }
                    player={ music.previewUrl }
                    id={ music.trackId }
                    array={ music }
                  />
                </div>))}
          </div>
        )}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default Album;
