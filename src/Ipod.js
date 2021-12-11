import React, { Component } from 'react';
import Wheel from './Wheel';
import Screen from './Screen';

class Ipod extends Component {
  render() {
    return (
      <div>
        <Screen />
        <Wheel />
      </div>
    );
  }
}

export default Ipod;
