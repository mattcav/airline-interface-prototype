import React from 'react';
import Autocomplete from 'react-autocomplete';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'form-text-input',
  prefix: 'fse-'
});

export default React.createClass({
  displayName: 'FormTextInput',

  propTypes: {
    label: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    onContentChange: React.PropTypes.func.isRequired
  },

  onChange(event) {
    this.props.onContentChange(event.target.value);
  },

  getAirports() {
    return [
      { code: 'BER', name: 'Berlin Brandeburg'},
      { code: 'FCO', name: 'Rome Fiumicino'},
      { code: 'AUH', name: 'Abu Dhabi'},
      { code: 'LHR', name: 'London Heatrow'}
    ];
  },

  matchAirportToTerm(airport, value) {
    return (
      airport.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
      airport.code.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  },

  sortAirports(a, b, value) {
    return (
      a.name.toLowerCase().indexOf(value.toLowerCase()) >
      b.name.toLowerCase().indexOf(value.toLowerCase()) ? 1 : -1
    );
  },

  render() {
    return (
    <div {...classes('')}>
      <label {...classes('wrapper')}>
        <span {...classes('label')}>
          {this.props.label}
        </span>
        <Autocomplete
          initialValue={this.props.content}
          onChange={(event, value) => {this.props.onContentChange(value);}}
          items={this.getAirports()}
          getItemValue={(item) => item.name}
          shouldItemRender={this.matchAirportToTerm}
          sortItems={this.sortAirports}
          inputProps={{ className: 'fse-form-text-input__input' }}
          renderItem={(item, isHighlighted) => (
            <div
              className={isHighlighted ? 'fse-form-text-input__suggestion--is-highlighted' : 'fse-form-text-input__suggestion'}
              key={item.abbr}
            >{item.name}</div>
          )}
        />
      </label>
    </div>
    );
  }
});
