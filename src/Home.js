import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="homeScreen" style={styles.homeScreen}>
        <div style={styles.menuList} className="menuList">
          <h3>Ipod</h3>
          <ListGroup>
            <ListGroup.Item style={{ border: '0' }} active>
              Songs
            </ListGroup.Item>
            <ListGroup.Item style={{ border: '0' }}>Albums</ListGroup.Item>
            <ListGroup.Item style={{ border: '0' }}>Artists</ListGroup.Item>
            <ListGroup.Item style={{ border: '0' }}>Playlist</ListGroup.Item>
            <ListGroup.Item style={{ border: '0' }}>Settings</ListGroup.Item>
          </ListGroup>
        </div>
        <div className="wallpaperContainer" style={styles.wallpaperContainer}>
          <img
            style={{ height: '100%', width: '100%' }}
            src="https://i.pinimg.com/474x/9a/dc/55/9adc555f69cc28746d3c0363a1028933.jpg"
            alt="Wallpaper"
          />
        </div>
      </div>
    );
  }
}

const styles = {
  homeScreen: {
    position: 'relative',
  },
  menuList: {
    height: '100%',
    width: '50%',
  },
  wallpaperContainer: {
    position: 'absolute',
    height: '270px',
    width: '250px',
    zIndex: '-1',
    top: '0',
    left: '0',
  },
};

export default Home;
