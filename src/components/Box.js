import React from "react";

export default class Box extends React.Component {
  static defaultProps = {
    children: "box"
  };

  state = {
    name: "the box"
  };

  render() {
    return (
      <div className="box">
        <h1 className="box__title">{this.state.name}</h1>
        <p className="box__body">{this.props.children}</p>
      </div>
    );
  }
}
