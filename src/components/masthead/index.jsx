import React from 'react';

export default React.createClass({
  displayName: 'MastHead',

  propTypes: {
    banner: React.PropTypes.string.isRequired,
  },

  render() {
    return (
      <header>
        <h1>
          {this.props.banner}
        </h1>
      </header>
    );
  }
});
