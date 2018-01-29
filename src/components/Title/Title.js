import React from "react";
import "./Title.css";

export default class Title extends React.Component {

  render() {
    return(
      <div className="jumbotron title">
        <h1>Clicky Game</h1>
        <p>Click any image to get started. Each new click earns you 1 point. Make sure not to click the same image twice, or its game over!</p>
      <hr/>
      <p>Score: {this.props.score}</p>
    </div>
  )
  }
}
