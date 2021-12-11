import React from 'react';
import Home from './Home';

class Screen extends React.Component {
  render() {
    return (
      <div style={styles.screen} id="screen-container">
        <Home />
      </div>
    );
  }
}

const styles = {
  screen: {
    height: '270px',
    width: '250px',
    margin: 'auto',
    marginTop: '50px',
    border: '2px solid lightgrey',
  },
};

export default Screen;
