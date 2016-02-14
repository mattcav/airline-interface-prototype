import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default React.createClass({
  displayName: 'DatesSelection',

  propTypes: {
    departureDate: React.PropTypes.object.isRequired,
    onDepartureDateChange: React.PropTypes.func.isRequired,
    returnDate: React.PropTypes.object.isRequired,
    onReturnDateChange: React.PropTypes.func.isRequired,
    currentTripType: React.PropTypes.string
  },

  onDepartureDateChange(date) {
    var dayAfter = moment(date).add(1, 'days');
    var currentReturnDate = moment(this.props.returnDate);

    this.props.onDepartureDateChange(date);
    if (date.diff(currentReturnDate) > 0) {
      this.props.onReturnDateChange(dayAfter);
    }
  },

  onReturnDateChange(date) {
    var dayBefore = moment(date).subtract(1, 'days');
    var currentDepartureDate = moment(this.props.departureDate);

    this.props.onReturnDateChange(date);
    if (date.diff(currentDepartureDate) < 0) {
      this.props.onDepartureDateChange(dayBefore);
    }
  },


  render() {
    let startDate = this.props.departureDate;
    let endDate = this.props.currentTripType === 'return' ?
                  this.props.returnDate : this.props.departureDate;

    return (
      <div>
        <DatePicker
          selected={this.props.departureDate}
          onChange={this.onDepartureDateChange}
          dateFormat={'DD/MM/YYYY'}
          dateFormatCalendar={'DD/MM/YYYY'}
          startDate={startDate}
          endDate={endDate}
        />

        <DatePicker
          selected={this.props.returnDate}
          onChange={this.onReturnDateChange}
          dateFormat={'DD/MM/YYYY'}
          dateFormatCalendar={'DD/MM/YYYY'}
          startDate={startDate}
          endDate={endDate}
          disabled={this.props.currentTripType !== 'return'}
        />
      </div>
    );
  }
});
