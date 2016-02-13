import React from 'react';

export default React.createClass({
  displayName: 'FormTextInput',

  propTypes: {
    content: React.PropTypes.string.isRequired,
    onContentChange: React.PropTypes.func.isRequired
  },

  onChange(event) {
    this.props.onContentChange(event.target.value);
  },

  render() {
    return (
     <input
      type="text"
      tabIndex="0"
      value={this.props.content}
      onChange={this.onChange}
     />
    );
  }
});
