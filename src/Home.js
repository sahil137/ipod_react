import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="homeScreen" style={styles.homeScreen}>
        <div style={styles.menuList} className="menuList">
          <ListGroup>
            {/* Change the classname of item if the opion is active */}
            <ListGroup.Item
              className={this.props.activeOption === 'Songs' ? 'active' : ''}
              style={{ border: '0' }}
            >
              Songs
            </ListGroup.Item>
            <ListGroup.Item
              className={this.props.activeOption === 'Albums' ? 'active' : ''}
              style={{ border: '0' }}
            >
              Albums
            </ListGroup.Item>
            <ListGroup.Item
              className={this.props.activeOption === 'Artists' ? 'active' : ''}
              style={{ border: '0' }}
            >
              Artists
            </ListGroup.Item>
            <ListGroup.Item
              className={this.props.activeOption === 'Playlist' ? 'active' : ''}
              style={{ border: '0' }}
            >
              Playlist
            </ListGroup.Item>
            <ListGroup.Item
              className={this.props.activeOption === 'Games' ? 'active' : ''}
              style={{ border: '0' }}
            >
              Games
            </ListGroup.Item>
            <ListGroup.Item
              className={this.props.activeOption === 'Settings' ? 'active' : ''}
              style={{ border: '0' }}
            >
              Settings
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="wallpaperContainer" style={styles.wallpaperContainer}>
          {/* <img
            style={{ height: '100%', width: '100%' }}
            src="https://i.pinimg.com/474x/9a/dc/55/9adc555f69cc28746d3c0363a1028933.jpg"
            alt="Wallpaper"
          /> */}
        </div>
      </div>
    );
  }
}

const styles = {
  homeScreen: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirecton: 'row',
  },
  menuList: {
    height: '100%',
    width: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    zIndex: '1',
  },
  wallpaperContainer: {
    height: '100%',
    width: '50%',
    backgroundImage:
      'url("https://i.pinimg.com/474x/9a/dc/55/9adc555f69cc28746d3c0363a1028933.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '0 12px 12px 0',
  },
};

export default Home;
