import React from 'react';
import FormTextInput from '../form-text-input';

export default React.createClass({
  displayName: 'FlightsSearchForm',

  propTypes: {
    from: React.PropTypes.string.isRequired,
    onFromContentChange: React.PropTypes.func.isRequired,
    destination: React.PropTypes.string.isRequired,
    onDestinationContentChange: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <form>
        <FormTextInput
          content={this.props.from}
          onContentChange={this.props.onFromContentChange}
        />
        <FormTextInput
          content={this.props.destination}
          onContentChange={this.props.onDestinationContentChange}
        />
      </form>
    );
  }
});
