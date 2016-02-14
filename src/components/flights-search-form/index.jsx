import React from 'react';
import FormTextInput from '../form-text-input';
import DatesSelection from '../dates-selection';
import BEMHelper from 'react-bem-helper';
import NUMBER_OF_PASSENGERS from '../../data/number-of-passengers';

const classes = new BEMHelper({
  name: 'flight-search-form',
  prefix: 'fse-'
});

export default React.createClass({
  displayName: 'FlightsSearchForm',

  propTypes: {
    from: React.PropTypes.string.isRequired,
    onFromContentChange: React.PropTypes.func.isRequired,
    destination: React.PropTypes.string.isRequired,
    onDestinationContentChange: React.PropTypes.func.isRequired,
    departureDate: React.PropTypes.object.isRequired,
    onDepartureDateChange: React.PropTypes.func.isRequired,
    returnDate: React.PropTypes.object.isRequired,
    onReturnDateChange: React.PropTypes.func.isRequired,
    currentTripType: React.PropTypes.string,
    availableAirports: React.PropTypes.array.isRequired,
    passengers: React.PropTypes.string.isRequired,
    onPassengersChange: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <div {...classes('')}>
        <fieldset {...classes('fieldset')}>
          <FormTextInput
            label={'From'}
            content={this.props.from}
            suggestions={this.props.availableAirports}
            onContentChange={this.props.onFromContentChange}
          />
          <FormTextInput
            label={'Destination'}
            content={this.props.destination}
            suggestions={this.props.availableAirports}
            onContentChange={this.props.onDestinationContentChange}
          />
        </fieldset>

      <fieldset {...classes('fieldset')}>
        <DatesSelection
          departureDate={this.props.departureDate}
          onDepartureDateChange={this.props.onDepartureDateChange}
          returnDate={this.props.returnDate}
          onReturnDateChange={this.props.onReturnDateChange}
          currentTripType={this.props.currentTripType}
        />
      </fieldset>

      <fieldset {...classes('fieldset')}>
        <FormTextInput
          label={'Passengers'}
          suggestions={NUMBER_OF_PASSENGERS}
          content={this.props.passengers}
          onContentChange={this.props.onPassengersChange}
        />
      </fieldset>

      </div>
    );
  }
});
