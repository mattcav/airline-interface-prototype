import React from 'react';

export default React.createClass({
  displayName: 'SubmitButton',

  propTypes: {
    label: React.PropTypes.string.isRequired,
    onSubmit: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <div>
        <button
          onClick={this.props.onSubmit}
        >
          {this.props.label}
        </button>
      </div>
    );
  }
});
