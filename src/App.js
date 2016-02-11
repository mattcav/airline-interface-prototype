import React, { Component } from 'react';
import Slider from 'rc-slider';
import FlightsList from './components/flights-list';
import RESULTS_DATA from './data/results';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      value: [20, 40]
     };
  }

  changeContent = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <div>
        <Slider range value={this.state.value} onChange={this.changeContent} />
        <FlightsList
          data={RESULTS_DATA}
        />
      </div>
    );
  }
}
