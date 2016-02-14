import React from 'react';
import FlightsList from '../flights-list';
import Recap from '../recap';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'results',
  prefix: 'fse-'
});

export default React.createClass({
  displayName: 'Results',

  propTypes: {
    data: React.PropTypes.array.isRequired,
    minimumPrice: React.PropTypes.number,
    maximumPrice: React.PropTypes.number,
    currentTripType: React.PropTypes.string,
    departureDate: React.PropTypes.string.isRequired,
    returnDate: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <article {...classes()}>
        <header {...classes('header')}>
          <h2{...classes('title')}>
            Your results
          </h2>
          <div {...classes('recap')}>
            <Recap
              currentTripType={this.props.currentTripType}
              departureDate={this.props.departureDate}
              returnDate={this.props.returnDate}
            />
          </div>
        </header>

        <div {...classes('list')}>
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
        </div>
      </article>
    );
  }
});
