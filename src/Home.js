import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="homeScreen" style={styles.homeScreen}>
        <div style={styles.menuList} className="menuList">
          <ListGroup>
            {/* Change the classname of item if the opion is active */}
            <ListGroupItem
              className={this.props.activeOption === 'Songs' ? 'active' : ''}
              style={{ border: '0' }}
            >
              Songs
            </ListGroupItem>
            <ListGroupItem
              className={this.props.activeOption === 'Albums' ? 'active' : ''}
              style={{ border: '0' }}
            >
              Albums
            </ListGroupItem>
            <ListGroupItem
              className={this.props.activeOption === 'Artists' ? 'active' : ''}
              style={{ border: '0' }}
            >
              Artists
            </ListGroupItem>
            <ListGroupItem
              className={this.props.activeOption === 'Playlist' ? 'active' : ''}
              style={{ border: '0' }}
            >
              Playlist
            </ListGroupItem>
            <ListGroupItem
              className={this.props.activeOption === 'Games' ? 'active' : ''}
              style={{ border: '0' }}
            >
              Games
            </ListGroupItem>
            <ListGroupItem
              className={this.props.activeOption === 'Settings' ? 'active' : ''}
              style={{ border: '0' }}
            >
              Settings
            </ListGroupItem>
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
