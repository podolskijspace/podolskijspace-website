import React, {Component} from "react";

export default class Title extends Component {
  
  render () {
    const mod = this.props.mod ? this.props.mod : "";

    if (this.props.main) {
      return (
        <h1 className={"title title--main " + mod}>
          {this.props.children}
        </h1>
      )
    } else {
      return (
        <h2 className={"title" + this.props.mod}>
          {this.props.children}
        </h2>
      )
    }

  }
}