import React from 'react';
import Home from './Home';

class Screen extends React.Component {
  render() {
    return (
      <div style={styles.screen} id="screen-container">
        {this.props.activePage === 'Home' ? (
          <Home activeOption={this.props.activeOption} />
        ) : null}
      </div>
    );
  }
}

const styles = {
  screen: {
    height: '270px',
    width: '240px',
    margin: 'auto',
    marginTop: '50px',
  },
};

export default Screen;
