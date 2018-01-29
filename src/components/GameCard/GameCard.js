import React from "react";
import "./GameCard.css";

export default class GameCard extends React.Component {
  constructor() {
    super();
    this.state = { clicked: false };
  };

  handleChange() {
    if (this.state.clicked === false) {
      this.setState({ clicked: true });
      this.props.changeScore();
    }
    else {
      this.props.changeStatus();
    }
  };

  render() {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} onClick={this.handleChange.bind(this)}/>
        </div>
      </div>
    )
  }
}
