import React from 'react';
import Flight from '../flight';

export default React.createClass({
  displayName: 'Flights List',

  propTypes: {
    data: React.PropTypes.array.isRequired,
    minimumPrice: React.PropTypes.number,
    maximumPrice: React.PropTypes.number,
    currentTripType: React.PropTypes.string,
    onFlightSelect: React.PropTypes.func
  },

  renderFlights(src, index) {
    return (
      <Flight
        data={src}
        key={index}
        minimumPrice={this.props.minimumPrice}
        maximumPrice={this.props.maximumPrice}
        currentTripType={this.props.currentTripType}
        onSubmit={this.props.onFlightSelect}
      />
    );
  },

  render() {
    return (
      <div>
        {this.props.data.map(this.renderFlights)}
      </div>
    );
  }
});
