/**
 * @jsx React.DOM
 */

var React = window.React || require('react');

/**
 * Encapsulates the rendering of an option that has been "selected" in a
 * TypeaheadTokenizer
 */
var Token = React.createClass({displayName: "Token",
  propTypes: {
    children: React.PropTypes.string,
    onRemove: React.PropTypes.func
  },

  render: function() {
    return (
      React.createElement("div", React.__spread({},  this.props, {className: "typeahead-token"}), 
        this.props.children, 
        this._makeCloseButton()
      )
    );
  },

  _makeCloseButton: function() {
    if (!this.props.onRemove) {
      return "";
    }
    return (
      React.createElement("a", {className: "typeahead-token-close", href: "#", onClick: function(event) {
          this.props.onRemove(this.props.children);
          event.preventDefault();
        }.bind(this)}, "×")
    );
  }
});

module.exports = Token;
