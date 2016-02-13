import React from 'react';
import FlightsList from '../flights-list';

export default React.createClass({
  displayName: 'Results',

  propTypes: {
    data: React.PropTypes.array.isRequired,
    minimumPrice: React.PropTypes.number,
    maximumPrice: React.PropTypes.number,
    currentTripType: React.PropTypes.string
  },

  render() {
    return (
      <section>
        <FlightsList
          data={this.props.data}
          minimumPrice={this.props.minimumPrice}
          maximumPrice={this.props.maximumPrice}
          currentTripType={this.props.currentTripType}
          from={this.props.from}
          onFromContentChange={this.props.onFromContentChange}
          destination={this.props.destination}
          onDestinationContentChange={this.props.onDestinationContentChange}
        />
      </section>
    );
  }
});
