import React from 'react';
import SubmitButton from '../submit-button';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'flight',
  prefix: 'fse-'
});


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
        <div {...classes('flight', 'flight--return')}>
          <ul {...classes('info')}>
            <li {...classes('code')}>
              {this.props.data.return.flightId}
            </li>
            <li {...classes('trip')}>
              <span {...classes('trip-label')}>
                FCO > BER
              </span>
            </li>
            <li {...classes('time')}>
             <span {...classes('label')}>Depart: </span>
             {this.props.data.return.departTime}
            </li>
            <li {...classes('time')}>
             <span {...classes('label')}>Arrive: </span>
             {this.props.data.return.arrivalTime}
            </li>
          </ul>
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

    let airlineSlug = this.props.data.airline.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');

    return (
      <article {...classes('')}>
        <img
          {...classes('logo')}
          src={'./static/images/' + airlineSlug + '.jpg'}
          alt={this.props.data.airline}
        />

        <div {...classes('flight', 'flight--departure')}>
          <ul {...classes('info')}>
            <li {...classes('code')}>
              {this.props.data.departure.flightId}
            </li>
            <li {...classes('trip')}>
              <span {...classes('trip-label')}>
                FCO > BER
              </span>
            </li>
            <li {...classes('time')}>
             <span {...classes('label')}>Depart: </span>
             {this.props.data.departure.departTime}
            </li>
            <li {...classes('time')}>
             <span {...classes('label')}>Arrive: </span>
             {this.props.data.departure.arrivalTime}
            </li>
          </ul>
        </div>
        {this.renderReturnData()}

        <div {...classes('price')}>
          Price: {displayPrice}
        </div>

        <div {...classes('button')}>
          <SubmitButton
            onSubmit={this.props.onSubmit}
            label='Select this flight'
            modifier='small'
          />
        </div>
      </article>
    );
  }
});
