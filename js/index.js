"use strict";

var MarkdownPreview = React.createClass({
  displayName: "MarkdownPreview",

  getInitialState: function getInitialState() {
    return {
      content: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes * italic *, ** bold **,\n `monospace`, ~~ strikethrough ~~.\n\nShopping list : \n\n * apples\n * oranges\n * pears\n\nNumbered list : \n\n 1. apples\n 2. oranges\n 3. pears\n\nThe rain-- -not the reign-- -in\nSpain.\n\n * [Rafael Rodriguez](http : //freecodecamp.com/Rafase282)*\n"
    };
  },
  onChange: function onChange(e) {
    this.setState({
      content: e.target.value
    });
  },
  rawMarkup: function rawMarkup() {
    var rawMarkup = marked(this.state.content, {
      sanitize: true
    });
    return {
      __html: rawMarkup
    };
  },
  render: function render() {
    return React.createElement(
      "div", {
        className: "container-fluid"
      },
      React.createElement(
        "div", {
          className: "row"
        },
        React.createElement(
          "h1", {
            className: "title"
          },
          "Markdown Previewer"
        ),
        React.createElement(
          "div", {
            className: "col-xs-12 col-sm-6"
          },
          React.createElement(
            "h3", {
              className: "title"
            },
            "Markdown"
          ),
          React.createElement("textarea", {
            className: "mark",
            value: this.state.content,
            onChange: this.onChange
          })
        ),
        React.createElement(
          "div", {
            className: "col-xs-12 col-sm-6"
          },
          React.createElement(
            "h3", {
              className: "title"
            },
            "HTML"
          ),
          React.createElement("div", {
            className: "parsed",
            dangerouslySetInnerHTML: this.rawMarkup()
          })
        )
      )
    );
  }
});
ReactDOM.render(React.createElement(MarkdownPreview, null), document.getElementById('content'));
