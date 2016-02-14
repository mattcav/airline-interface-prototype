import React from 'react';
import Slider from 'rc-slider';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'price-slider',
  prefix: 'fse-'
});

export default React.createClass({
  displayName: 'PriceSlider',

  propTypes: {
    priceRange: React.PropTypes.array.isRequired,
    onSliderInteraction: React.PropTypes.func,
  },

  render() {
    return (
      <section {...classes()}>
        <span {...classes('label')}>
          Refine Flight Search
        </span>
        <div {...classes('slider')}>
          <Slider
            range
            value={this.props.priceRange}
            onChange={this.props.onSliderInteraction}
            min={0}
            max={200}
            tooltipAlwaysVisible={true}
          />
        </div>
      </section>
    );
  }
});
