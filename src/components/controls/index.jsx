import React from 'react';
import BEMHelper from 'react-bem-helper';
import Slider from 'rc-slider';
import TripTypeSwitch from '../trip-type-switch';
import FlightsSearchForm from '../flights-search-form';
import SubmitButton from '../submit-button';

const classes = new BEMHelper({
  name: 'controls',
  prefix: 'fse-'
});

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
    onReturnDateChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <aside
        {...classes()}
        role='complementary'
        itemScope
        itemType='http://schema.org/WPSideBar'
      >
      <div {...classes('widget', 'top')}>
        <TripTypeSwitch
          tripTypes={this.props.tripTypes}
          currentTripType={this.props.currentTripType}
          onChange={this.props.onTripTypeChange}
        />
      </div>

      <div {...classes('widget')}>
        <FlightsSearchForm
          from={this.props.from}
          onFromContentChange={this.props.onFromContentChange}
          destination={this.props.destination}
          onDestinationContentChange={this.props.onDestinationContentChange}
          departureDate={this.props.departureDate}
          onDepartureDateChange={this.props.onDepartureDateChange}
          returnDate={this.props.returnDate}
          onReturnDateChange={this.props.onReturnDateChange}
          currentTripType={this.props.currentTripType}
        />
      </div>

      <div {...classes('widget')}>
        <Slider
          range
          value={this.props.priceRange}
          onChange={this.props.onSliderInteraction}
          min={10}
          max={200}
        />
      </div>

      <div {...classes('action')}>
        <SubmitButton
          onSubmit={this.props.onSubmit}
          label='Search'
        />
      </div>
      </aside>
    );
  }
});
