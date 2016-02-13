import React from 'react';
import Slider from 'rc-slider';
import TripTypeSwitch from '../trip-type-switch';

export default React.createClass({
  displayName: 'Controls',

  propTypes: {
    priceRange: React.PropTypes.array.isRequired,
    onSliderInteraction: React.PropTypes.func,
    tripTypes: React.PropTypes.array.isRequired,
    currentTripType: React.PropTypes.string,
    onTripTypeChange: React.PropTypes.func
  },

  render() {
    return (
      <aside>
        <TripTypeSwitch
          tripTypes={this.props.tripTypes}
          currentTripType={this.props.currentTripType}
          onChange={this.props.onTripTypeChange}
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
