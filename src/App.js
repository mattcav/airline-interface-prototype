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
      priceRange: [0, 200],
      tripTypes: this.getTripTypes(),
      currentTripType: 'return',
      from: 'FCO',
      destination: 'BER'
    };
  }

  getTripTypes() {
    return ['one way', 'return'];
  }

  getMinimumPrice() {
    return this.state.priceRange[0];
  }

  getMaximumPrice() {
    return this.state.priceRange[1];
  }

  onTripTypeChange = (value) => {
    this.setState({
      currentTripType: value
    });
  };

  changePriceRange = (value) => {
    this.setState({
      priceRange: value
    });
  };

  onFromContentChange = value => {
    this.setState({
      from: value
    });
  };

  onDestinationContentChange = value => {
    this.setState({
      destination: value
    });
  };

  render() {
    return (
      <main>
        <MastHead
          banner='aip'
        />
        <Controls
          priceRange={this.state.priceRange}
          onSliderInteraction={this.changePriceRange}
          tripTypes={this.state.tripTypes}
          currentTripType={this.state.currentTripType}
          onTripTypeChange={this.onTripTypeChange}
          from={this.state.from}
          onFromContentChange={this.onFromContentChange}
          destination={this.state.destination}
          onDestinationContentChange={this.onDestinationContentChange}
        />
        <Results
          data={RESULTS_DATA}
          minimumPrice={this.getMinimumPrice()}
          maximumPrice={this.getMaximumPrice()}
          currentTripType={this.state.currentTripType}
        />
      </main>
    );
  }
}
