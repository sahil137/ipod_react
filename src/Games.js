import React, { Component } from 'react';

export class Games extends Component {
  render() {
    return (
      <div style={styles.gameContainer}>
        <div style={{ width: '100%', height: '100%' }}>
          <img
            style={styles.pacman}
            src="https://i.gifer.com/T7n.gif"
            alt="Pacman Game"
          />
        </div>
      </div>
    );
  }
}

const styles = {
  gameContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  pacman: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
};

export default Games;
