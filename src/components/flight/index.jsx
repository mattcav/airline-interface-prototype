import React from 'react';

export default React.createClass({
  displayName: 'Flight',

  propTypes: {
    data: React.PropTypes.object.isRequired,
    minimumPrice: React.PropTypes.number,
    maximumPrice: React.PropTypes.number,
    currentTripType: React.PropTypes.string
  },

  renderReturnData() {
    if (this.props.currentTripType === 'return') {
      return (
        <div>
          <li>{this.props.data.return.flightId}</li>
          <li>{this.props.data.return.departTime}</li>
          <li>{this.props.data.return.arrivalTime}</li>
        </div>
      );
    }
  },

  render() {
    if (this.props.data.price < this.props.minimumPrice
      || this.props.data.price > this.props.maximumPrice ) {
      return false;
    }

    return (
      <article>
        <ul>
          <li>{this.props.data.airline}</li>

          <li>{this.props.data.departure.flightId}</li>
          <li>{this.props.data.departure.departTime}</li>
          <li>{this.props.data.departure.arrivalTime}</li>
          {this.renderReturnData()}
          <li>{this.props.data.price}</li>
        </ul>
      </article>
    );
  }
});
