import React from 'react';
import Slider from 'rc-slider';

export default React.createClass({
  displayName: 'Controls',

  propTypes: {
    priceRange: React.PropTypes.array.isRequired,
    onSliderInteraction: React.PropTypes.func
  },

  render() {
    return (
      <aside>
        <Slider range value={this.props.priceRange} onChange={this.props.onSliderInteraction} />
      </aside>
    );
  }
});
