import React, { Component } from "react";
import Letter from "./letter";

class Solution extends Component {
  render() {
    return (
      <div>
        {[...this.props.solution.word].map((char, i) =>
          this.props.letterStatus[char] === true ? (
            <Letter letter={char} key={char} state={"character"} />
          ) : (
            <Letter
              letter="_"
              key={"underscore" + i}
              className={"underscore"}
            />
          )
        )}
        <div>
          <em>{this.props.solution.hint}</em>
        </div>
      </div>
    );
  }
}

export default Solution;
