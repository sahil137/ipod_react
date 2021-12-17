import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faForward,
  faBackward,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import ZingTouch from 'zingtouch';
import Screen from './Screen';

class Ipod extends Component {
  constructor() {
    super();

    this.state = {
      activeOption: 'Songs',
      activePage: 'Home',
      depth: 0,
    };
  }

  rotateWheel = () => {
    var container = document.getElementById('container');
    var activeRegion = new ZingTouch.Region(container);
    var changeInAngle = 0;
    var self = this;
    self.state.depth = self.state.depth + 1;

    if (this.state.depth < 2) {
      activeRegion.bind(container, 'rotate', (event) => {
        var angle = event.detail.distanceFromLast;
        // logic for anticlockwose rotation
        if (angle < 0) {
          changeInAngle++;
          if (changeInAngle === 15) {
            // console.log(angle);
            changeInAngle = 0;
            if (this.state.activePage === 'Home') {
              if (this.state.activeOption === 'Songs') {
                this.setState({
                  activeOption: 'Settings',
                });
              } else if (this.state.activeOption === 'Albums') {
                this.setState({
                  activeOption: 'Songs',
                });
              } else if (this.state.activeOption === 'Artists') {
                this.setState({
                  activeOption: 'Albums',
                });
              } else if (this.state.activeOption === 'Playlist') {
                this.setState({
                  activeOption: 'Artists',
                });
              } else if (this.state.activeOption === 'Games') {
                this.setState({
                  activeOption: 'Playlist',
                });
              } else if (this.state.activeOption === 'Settings') {
                this.setState({
                  activeOption: 'Games',
                });
              }
            } else if (this.state.activePage === 'Songs') {
              if (this.state.activeOption === 'English') {
                this.setState({
                  activeOption: 'Hindi',
                });
              } else if (this.state.activeOption === 'Hindi') {
                this.setState({
                  activeOption: 'English',
                });
              }
            }
          }
        } else {
          changeInAngle++;
          // for clockwise rotation
          if (changeInAngle === 15) {
            changeInAngle = 0;
            if (this.state.activePage === 'Home') {
              if (this.state.activeOption === 'Songs') {
                this.setState({
                  activeOption: 'Albums',
                });
              } else if (this.state.activeOption === 'Albums') {
                this.setState({
                  activeOption: 'Artists',
                });
              } else if (this.state.activeOption === 'Artists') {
                this.setState({
                  activeOption: 'Playlist',
                });
              } else if (this.state.activeOption === 'Playlist') {
                this.setState({
                  activeOption: 'Games',
                });
              } else if (this.state.activeOption === 'Games') {
                this.setState({
                  activeOption: 'Settings',
                });
              } else if (this.state.activeOption === 'Settings') {
                this.setState({
                  activeOption: 'Songs',
                });
              }
            } else if (this.state.activePage === 'Songs') {
              if (this.state.activeOption === 'English') {
                this.setState({
                  activeOption: 'Hindi',
                });
              } else if (this.state.activeOption === 'Hindi') {
                this.setState({
                  activeOption: 'English',
                });
              }
            }
          }
        }
      });
    } else {
    }
  };

  changePage = () => {
    if (this.state.activeOption === 'Songs') {
      this.setState({
        activeOption: 'English',
        activePage: this.state.activeOption,
      });
    } else if (
      this.state.activeOption === 'Settings' ||
      this.state.activeOption === 'Playlist' ||
      this.state.activeOption === 'Artists'
    ) {
      return;
    } else {
      this.setState({
        activeOption: this.state.activeOption,
        activePage: this.state.activeOption,
      });
    }
  };

  backToHomeScreen = () => {
    if (
      this.state.activeOption === 'English' ||
      this.state.activeOption === 'Hindi'
    ) {
      this.setState({
        activeOption: 'Songs',
        activePage: 'Home',
      });
    } else {
      this.setState({
        activePage: 'Home',
        activeOption: this.state.activeOption,
      });
    }
  };

  render() {
    return (
      <div style={styles.ipodContainer}>
        <h3 style={styles.heading}>Ipod</h3>
        <Screen
          activeOption={this.state.activeOption}
          activePage={this.state.activePage}
        />
        <div
          id="container"
          style={styles.container}
          onMouseOver={this.rotateWheel}
          draggable={false}
        >
          <div
            onClick={this.backToHomeScreen}
            className="menuButton"
            style={styles.menuButton}
          >
            <FontAwesomeIcon size="2x" icon={faBars} />
          </div>
          <div
            onClick={this.changePage}
            className="nextButton"
            style={styles.nextButton}
          >
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
      </div>
    );
  }
}

const styles = {
  heading: {
    fontSize: '1.2rem',
    marginTop: '0.4rem',
  },
  ipodContainer: {
    height: '35rem',
    width: '17rem',
    backgroundColor: '#9e9e9e',
    margin: '4rem auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: '20px',
    position: 'relative',
    boxShadow:
      'rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px',
    // border: '2px solid black',
    zIndex: '0',
  },
  container: {
    height: '38%',
    width: '90%',
    // backgroundColor: 'lightgrey',
    position: 'relative',
    margin: 'auto',
    marginTop: '2px',
    borderRadius: '10px',
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
  buttonContainer: {
    width: '85%',
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  middleButton: {
    height: '40%',
    width: '40%',
    borderRadius: '50%',
    backgroundColor: 'lightgrey',
    // zIndex: '-1',
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

export default Ipod;
