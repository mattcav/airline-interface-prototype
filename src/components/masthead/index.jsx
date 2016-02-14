import React from 'react';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'masthead',
  prefix: 'fse-'
});

export default React.createClass({
  displayName: 'MastHead',

  propTypes: {
    banner: React.PropTypes.string.isRequired,
  },

  render() {
    return (
      <header {...classes()}>
        <h1 {...classes('title')}>
          {this.props.banner}
        </h1>
      </header>
    );
  }
});
