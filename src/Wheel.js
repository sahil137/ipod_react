import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faForward,
  faBackward,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import ZingTouch from 'zingtouch';

class Wheel extends Component {
  rotateWheel = () => {
    var container = document.getElementById('container');
    var activeRegion = new ZingTouch.Region(container);
    activeRegion.bind(container, 'rotate', () => {
      console.log('rotate');
    });
  };

  render() {
    return (
      <div
        id="container"
        style={styles.container}
        onMouseOver={this.rotateWheel}
      >
        <div className="menuButton" style={styles.menuButton}>
          <FontAwesomeIcon size="2x" icon={faBars} />
        </div>
        <div className="nextButton" style={styles.nextButton}>
          <FontAwesomeIcon size="2x" icon={faForward} />
        </div>
        <div className="prevButton" style={styles.prevButton}>
          <FontAwesomeIcon size="2x" icon={faBackward} />
        </div>
        <div className="playPauseButton" style={styles.playPauseButton}>
          <FontAwesomeIcon size="2x" icon={faPlay} />
        </div>

        <div className="wheel" style={styles.wheel}>
          <div className="middleButton" style={styles.middleButton}></div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: 200,
    width: 250,
    backgroundColor: 'lightgrey',
    position: 'relative',
    margin: 'auto',
    marginTop: '10px',
  },

  wheel: {
    height: 195,
    width: 195,
    backgroundColor: 'white',
    borderRadius: '50%',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleButton: {
    height: '40%',
    width: '40%',
    borderRadius: '50%',
    backgroundColor: 'lightgrey',
    zIndex: '-1',
  },
  menuButton: {
    position: 'absolute',
    left: '6.7rem',
    top: '1rem',
    zIndex: '1',
  },
  nextButton: {
    position: 'absolute',
    right: '2.5rem',
    top: '5.2rem',
    zIndex: '1',
  },
  prevButton: {
    position: 'absolute',
    zIndex: '1',
    top: '5.2rem',
    left: '2.5rem',
  },
  playPauseButton: {
    position: 'absolute',
    zIndex: '1',
    bottom: '0.9rem',
    left: '7.1rem',
  },
};

export default Wheel;
