import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Score />
        <Solution />
        <Letters />
      </div>
    );
  }
}

export default App;
