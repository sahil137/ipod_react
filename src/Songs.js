import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class Songs extends Component {
  render() {
    return (
      <div style={styles.songsContainer}>
        <div style={styles.menuList}>
          <ListGroup>
            <ListGroupItem
              className={this.props.activeOption === 'English' ? 'active' : ''}
              style={{ border: '0', padding: '0.2rem 0.6rem' }}
            >
              English
            </ListGroupItem>
            <ListGroupItem
              className={this.props.activeOption === 'Hindi' ? 'active' : ''}
              style={{ border: '0', padding: '0.2rem 0.6rem' }}
            >
              Hindi
            </ListGroupItem>
          </ListGroup>
        </div>
        <div style={styles.wallpaper}></div>
      </div>
    );
  }
}

const styles = {
  songsContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  wallpaper: {
    height: '100%',
    width: '75%',
    backgroundImage:
      'url("https://i.pinimg.com/originals/b5/ca/9a/b5ca9a6c64b6a5c445dc993dd6294d10.jpg")',
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '0 12px 12px 0',
  },
};

export default Songs;
