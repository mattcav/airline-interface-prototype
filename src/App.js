import React, { Component } from 'react';
import FlightsList from './components/flights-list';
import RESULTS_DATA from './data/results';

export default class App extends Component {

  render() {
    return (
      <div>
        <FlightsList
          data={RESULTS_DATA}
        />
      </div>
    );
  }
}
