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
    // calculate total price. If one-way, get only departure price.
    var price = this.props.currentTripType === 'return' ?
              this.props.data.departure.price + this.props.data.return.price
              : this.props.data.departure.price;

    // Display always 2 decimals in prices & currency.
    var displayPrice = price.toFixed(2) + '€';

    // if the price is not in the selected span, do not render
    if (price < this.props.minimumPrice
      || price > this.props.maximumPrice ) {
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
          <li>{displayPrice}</li>
        </ul>
      </article>
    );
  }
});
