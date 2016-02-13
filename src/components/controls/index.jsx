import React from 'react';
import Slider from 'rc-slider';
import TripTypeSwitch from '../trip-type-switch';
import FlightsSearchForm from '../flights-search-form';

export default React.createClass({
  displayName: 'Controls',

  propTypes: {
    priceRange: React.PropTypes.array.isRequired,
    onSliderInteraction: React.PropTypes.func,
    tripTypes: React.PropTypes.array.isRequired,
    currentTripType: React.PropTypes.string,
    onTripTypeChange: React.PropTypes.func,
    from: React.PropTypes.string.isRequired,
    onFromContentChange: React.PropTypes.func.isRequired,
    destination: React.PropTypes.string.isRequired,
    onDestinationContentChange: React.PropTypes.func.isRequired,
    departureDate: React.PropTypes.object.isRequired,
    onDepartureDateChange: React.PropTypes.func.isRequired,
    returnDate: React.PropTypes.object.isRequired,
    onReturnDateChange: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <aside>
        <TripTypeSwitch
          tripTypes={this.props.tripTypes}
          currentTripType={this.props.currentTripType}
          onChange={this.props.onTripTypeChange}
        />

        <FlightsSearchForm
          from={this.props.from}
          onFromContentChange={this.props.onFromContentChange}
          destination={this.props.destination}
          onDestinationContentChange={this.props.onDestinationContentChange}
          departureDate={this.props.departureDate}
          onDepartureDateChange={this.props.onDepartureDateChange}
          returnDate={this.props.returnDate}
          onReturnDateChange={this.props.onReturnDateChange}
        />

        <Slider
          range
          value={this.props.priceRange}
          onChange={this.props.onSliderInteraction}
        />
      </aside>
    );
  }
});
