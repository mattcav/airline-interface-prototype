import React from 'react';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'radio-element',
  prefix: 'fse-'
});

export default React.createClass({
  displayName: 'RadioElement',

  propTypes: {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    currentTripType: React.PropTypes.string,
    onChange: React.PropTypes.func
  },

  onValueChange() {
    this.props.onChange(this.props.id);
  },

  render() {
    let selectedClass = this.props.id === this.props.currentTripType ? 'is-selected' : '';

    return (
     <div {...classes('', selectedClass)}>
      <label
        {...classes('label')}
        tabIndex='0'
        htmlFor={this.props.id}
      >
        {this.props.label}
      </label>
      <input
        {...classes('input')}
        type="radio"
        id={this.props.id}
        name={this.props.name}
        checked={this.props.id === this.props.currentTripType}
        onChange={this.onValueChange}
      />
     </div>
    );
  }
});
