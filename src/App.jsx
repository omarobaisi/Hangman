import "./App.css";
import React, { Component } from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      letterStatus: {},
      solution: {word: 'BYTES', hint: 'hhh'},
      score: 5
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

  componentDidMount() {
    const alphapet = this.generateLetterStatuses();
    this.setState({
      letterStatus: alphapet
    })
    // this.setState(
    //   () => {
    //     return { letterStatus: alphapet }
    //   }
    // )
  }

  render() {
    return (
      <div className="App">
        <Score score={this.state.score}  />
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />
        <Letters letterStatus={this.state.letterStatus} />
      </div>
    );
  }
}

export default App;
