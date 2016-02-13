import React from 'react';
import FormTextInput from '../form-text-input';
import DatesSelection from '../dates-selection';

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
    onReturnDateChange: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <form>
        <fieldset>
          <FormTextInput
            content={this.props.from}
            onContentChange={this.props.onFromContentChange}
          />
          <FormTextInput
            content={this.props.destination}
            onContentChange={this.props.onDestinationContentChange}
          />
        </fieldset>

       <DatesSelection
        departureDate={this.props.departureDate}
        onDepartureDateChange={this.props.onDepartureDateChange}
        returnDate={this.props.returnDate}
        onReturnDateChange={this.props.onReturnDateChange}
       />

      </form>
    );
  }
});
