import React, { Component } from "react";
import lodash from "lodash";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cats.json";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameOver: false,
      score: 0
    };
  };

  changeScore() {
    this.setState({ score: this.state.score + 1 });
    console.log(this.state.score);
  };

  changeStatus() {
    this.setState({ gameOver: true });
    console.log("Game Over");
    this.playGame();
  };

  playGame() {
    if (this.state.gameOver === true) {
      this.setState({
        gameOver: false,
        score: 0
      });
    };
  };

  render() {
    return (
      <Wrapper>
        <Title score={this.state.score}></Title>
        {lodash.shuffle(cards).map(card => (
          <GameCard
            id={card.id}
            key={card.id}
            image={card.image}
            changeStatus={this.changeStatus.bind(this)}
            changeScore={this.changeScore.bind(this)}
            playGame={this.playGame}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
