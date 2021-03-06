import React, { Component } from 'react';
import MastHead from './components/masthead';
import Controls from './components/controls';
import Results from './components/results';
import moment from 'moment';

// Data stubs
import RESULTS_DATA from './data/results';
import AIRPORTS from './data/airports';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      isSubmitted: false,
      isFlightSelected: false,
      priceRange: [20, 165],
      tripTypes: this.getTripTypes(),
      currentTripType: 'return',
      from: 'Rome Fiumicino',
      destination: 'Berlin Brandeburg',
      departureDate: moment(),
      returnDate: moment().add(1, 'days'),
      passengers: '2'
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

  getAvailableAirports() {
    return AIRPORTS;
  }

  getFormattedDepartureDate() {
    return moment(this.state.departureDate).format('dddd, Do MMMM YYYY');
  }

  getFormattedReturnDate() {
    return moment(this.state.returnDate).format('dddd, Do MMMM YYYY');
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

  onPassengersChange= value => {
    this.setState({
      passengers: value
    });
  };

  onFormSubmit = () => {
    this.setState({
      isSubmitted: true
    });
  };

  onFlightSelect = () => {
    this.setState({
      isFlightSelected: true
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
          availableAirports={this.getAvailableAirports()}
          passengers={this.state.passengers}
          onPassengersChange={this.onPassengersChange}
        />
        <Results
          data={RESULTS_DATA}
          minimumPrice={this.getMinimumPrice()}
          maximumPrice={this.getMaximumPrice()}
          currentTripType={this.state.currentTripType}
          departureDate={this.getFormattedDepartureDate()}
          returnDate={this.getFormattedReturnDate()}
          onFlightSelect={this.onFlightSelect}
        />
      </main>
    );
  }
}
