import "./App.css";
import React, { Component } from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import EndGame from "./components/EndGame";

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {word: 'HOME', hint: 'A place to stay in'},
      score: 100,
      gameEnded: false
    }
  }

  generateLetterStatuses() {
    const alphapet = {}
    for(let i=65; i<91; i++) {
        const letter = String.fromCharCode(i);
        alphapet[letter] = false
    }
    return alphapet
  }

  selectLetter = letter => {
    const letterStatus = JSON.parse(JSON.stringify(this.state.letterStatus));
    letterStatus[letter] = true;
    const right = 5;
    const wrong = -20
    const increase = this.state.solution.word.includes(letter) ? right : wrong
    this.setState({
      letterStatus: letterStatus,
      score: this.state.score + increase
    }, () => {
      this.checkEnded();
    })
  }

  checkEnded = () => {
    this.outOfTime();
    this.win();
  }

  outOfTime = () => {
    if(this.state.score <= 0) {
      this.setState({
        gameEnded: this.state.solution.word
      }) 
    }
  }

  win = () => {
    let ended = true;
    [...this.state.solution.word].forEach(char => {
      if(!this.state.letterStatus[char]) ended = false
    })
    if(ended) {
      this.setState({
        gameEnded: "Congratulations"
      }) 
    }
  }

  restartGame = () => {
    const alphapet = this.generateLetterStatuses();
    this.setState({
      letterStatus: alphapet,
      score: 100,
      gameEnded: false
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.gameEnded ? (
          <EndGame message={this.state.gameEnded} restartGame={this.restartGame} />
        ) : (
          [
            <Score score={this.state.score}  />,
            <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />,
            <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
          ]
        )}
      </div>
    );
  }
}

export default App;