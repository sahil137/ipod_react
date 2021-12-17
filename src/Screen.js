import React from 'react';
import Home from './Home';
import Games from './Games';
import Songs from './Songs';
import Albums from './Albums';

class Screen extends React.Component {
  render() {
    return (
      <div style={styles.screen} id="screen-container">
        {this.props.activePage === 'Home' ? (
          <Home activeOption={this.props.activeOption} />
        ) : null}
        {this.props.activePage === 'Games' ? <Games /> : null}
        {this.props.activePage === 'Songs' ? (
          <Songs activeOption={this.props.activeOption} />
        ) : null}
        {this.props.activePage === 'Albums' ? <Albums /> : null}
      </div>
    );
  }
}

const styles = {
  screen: {
    height: '50%',
    width: '95%',
    borderRadius: '12px',
    backgroundColor: 'white',
    border: '2px solid black',
    marginTop: '-1rem',
  },
  // screen: {
  //   height: '270px',
  //   width: '240px',
  //   margin: 'auto',
  //   marginTop: '0',
  //   border: '1px solid black',
  //   borderRadius: '10px',
  // },
};

export default Screen;
