import React from 'react';
import Home from './Home';
import Games from './Games';

class Screen extends React.Component {
  render() {
    return (
      <div style={styles.screen} id="screen-container">
        {this.props.activePage === 'Home' ? (
          <Home activeOption={this.props.activeOption} />
        ) : null}
        {this.props.activePage === 'Songs' ? <Games /> : null}
      </div>
    );
  }
}

const styles = {
  screen: {
    height: '270px',
    width: '240px',
    margin: 'auto',
    marginTop: '0',
    // border: '1px solid black',
  },
};

export default Screen;
