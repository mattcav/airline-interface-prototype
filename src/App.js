import React, { Component } from 'react';
import MastHead from './components/masthead';
import Controls from './components/controls';
import Results from './components/results';

// Data stubs
import RESULTS_DATA from './data/results';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      priceRange: [0, 200]
     };
  }

  getMinimumPrice() {
    return this.state.priceRange[0];
  }

  getMaximumPrice() {
    return this.state.priceRange[1];
  }

  changePriceRange = (value) => {
    this.setState({
      priceRange: value,
    });
  };

  render() {
    return (
      <main>
        <MastHead
          banner="aip"
        />
        <Controls
          priceRange={this.state.priceRange}
          onSliderInteraction={this.changePriceRange}
        />
        <Results
          data={RESULTS_DATA}
          minimumPrice={this.getMinimumPrice()}
          maximumPrice={this.getMaximumPrice()}
        />
      </main>
    );
  }
}
