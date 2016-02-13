import React from 'react';

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
    return (
     <div>
      <label htmlFor={this.props.id}>
        {this.props.label}
      </label>
      <input
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
