import PropTypes from 'prop-types';
import React from 'react';

class MusicCard extends React.Component {
  render() {
    const { musicName, url } = this.props;
    return (
      <>
        <p>{ musicName }</p>
        <audio data-testid="audio-component" src={ url } controls>
          <track kind="captions" />
        </audio>
      </>
    );
  }
}

MusicCard.propTypes = {
  musicName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MusicCard;
