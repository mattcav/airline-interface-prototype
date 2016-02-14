import React, { Component } from 'react';
import MastHead from './components/masthead';
import Controls from './components/controls';
import Results from './components/results';
import moment from 'moment';

// Data stubs
import RESULTS_DATA from './data/results';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      isSubmitted: false,
      priceRange: [0, 200],
      tripTypes: this.getTripTypes(),
      currentTripType: 'return',
      from: 'FCO',
      destination: 'BER',
      departureDate: moment(),
      returnDate: moment().add(1, 'days')
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

  onDepartureDateChange = value => {
    this.setState({
      departureDate: value
    });
  };

  onReturnDateChange = value => {
    this.setState({
      returnDate: value
    });
  };

  onFormSubmit = () => {
    this.setState({
      isSubmitted: true
    });
  };

  render() {
    return (
      <main>
        <MastHead
          banner='Flight search engine'
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
          departureDate={this.state.departureDate}
          onDepartureDateChange={this.onDepartureDateChange}
          returnDate={this.state.returnDate}
          onReturnDateChange={this.onReturnDateChange}
          onSubmit={this.onFormSubmit}
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
