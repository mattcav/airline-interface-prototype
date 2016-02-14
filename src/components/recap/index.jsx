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
          <span {...classes('value')}>
            {this.props.returnDate}
          </span>
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
          <span {...classes('value')}>
            {this.props.departureDate}
          </span>
        </p>
        {this.renderReturn()}
      </div>
    );
  }
});
