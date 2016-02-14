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
    suggestions: React.PropTypes.array,
    onContentChange: React.PropTypes.func.isRequired
  },

  onChange(event) {
    this.props.onContentChange(event.target.value);
  },

  matchSuggestionToTerm(suggestion, value) {
    return (
      suggestion.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
      suggestion.code.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  },

  sortSuggestions(a, b, value) {
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
          items={this.props.suggestions}
          getItemValue={(item) => item.name}
          shouldItemRender={this.matchSuggestionToTerm}
          sortItems={this.sortSuggestions}
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
