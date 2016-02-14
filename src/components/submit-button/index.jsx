import React from 'react';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'submit-button',
  prefix: 'fse-'
});

export default React.createClass({
  displayName: 'SubmitButton',

  propTypes: {
    label: React.PropTypes.string.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    modifier: React.PropTypes.string
  },

  render() {
    let modifier = this.props.modifier ? this.props.modifier : '';

    return (
      <div {...classes('', modifier)}>
        <button
          {...classes('button', modifier)}
          onClick={this.props.onSubmit}
        >
          {this.props.label}
        </button>
      </div>
    );
  }
});
