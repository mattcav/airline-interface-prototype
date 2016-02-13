import React from 'react';
import Flight from '../flight';

export default React.createClass({
  displayName: 'Flights List',

  propTypes: {
    data: React.PropTypes.array.isRequired,
    minimumPrice: React.PropTypes.number,
    maximumPrice: React.PropTypes.number
  },

  renderFlights(src, index) {
    return (
      <Flight
        data={src}
        key={index}
        minimumPrice={this.props.minimumPrice}
        maximumPrice={this.props.maximumPrice}
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
