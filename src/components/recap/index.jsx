import React from 'react';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'recap',
  prefix: 'fse-'
});

export default React.createClass({
  displayName: 'Recap',

  propTypes: {
    departureDate: React.PropTypes.string.isRequired,
    returnDate: React.PropTypes.string.isRequired,
    currentTripType: React.PropTypes.string
  },

  renderReturn() {
    if (this.props.currentTripType === 'return') {
      return (
        <p {...classes('item')}>
          <span {...classes('label')}>
            Return:
          </span>
          {this.props.returnDate}
        </p>
      );
    }
    return false;
  },

  render() {
    return (
      <div {...classes('')}>
        <p {...classes('item')}>
          <span {...classes('label')}>
            Depart:
          </span>
          {this.props.departureDate}
        </p>
        {this.renderReturn()}
      </div>
    );
  }
});
