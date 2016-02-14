import React from 'react';
import RadioElement from '../radio-element';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'trip-type-switch',
  prefix: 'fse-'
});

export default React.createClass({
  displayName: 'TripTypeSwitch',

  propTypes: {
    tripTypes: React.PropTypes.array.isRequired,
    currentTripType: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func
  },

  onChange(value) {
    this.props.onChange(value);
  },

  renderRadioElement(tripType, index) {
    var tripTypeId = tripType.toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'');
    return (
      <RadioElement
        key={index}
        name="trip-type"
        id={tripTypeId}
        label={tripType}
        currentTripType={this.props.currentTripType}
        onChange={this.onChange}
      />
    );
  },

  render() {
    return (
     <div {...classes('')}>
      {this.props.tripTypes.map(this.renderRadioElement)}
     </div>
    );
  }
});
