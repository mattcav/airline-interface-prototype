import React from 'react';
import Result from '../result';

export default React.createClass({
  displayName: 'Flights List',

  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  renderResult(src, index) {
    return(
      <Result
        data={src}
        key={index}
      />
      );
  },

  render() {
    return (
      <div>
        {this.props.data.map(this.renderResult)}
      </div>
    );
  }
});
