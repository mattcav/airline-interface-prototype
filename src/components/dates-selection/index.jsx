import React from 'react';
import DatePicker from 'react-datepicker';

export default React.createClass({
  displayName: 'DatesSelection',

  propTypes: {
    departureDate: React.PropTypes.object.isRequired,
    onDepartureDateChange: React.PropTypes.func.isRequired,
    returnDate: React.PropTypes.object.isRequired,
    onReturnDateChange: React.PropTypes.func.isRequired
  },

  onDepartureDateChange(date) {
    this.props.onDepartureDateChange(date);
  },

  onReturnDateChange(date) {
    this.props.onReturnDateChange(date);
  },

  render() {
    return (
      <div>
        <DatePicker
          selected={this.props.departureDate}
          onChange={this.onDepartureDateChange}
          dateFormat={'DD/MM/YYYY'}
          dateFormatCalendar={'DD/MM/YYYY'}
        />

        <DatePicker
          selected={this.props.returnDate}
          onChange={this.onReturnDateChange}
          dateFormat={'DD/MM/YYYY'}
          dateFormatCalendar={'DD/MM/YYYY'}
        />
      </div>
    );
  }
});
