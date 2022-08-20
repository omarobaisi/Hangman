import Letter from "./letter";
import React, { Component } from "react";

class Letters extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div>Available Letters</div>
          {Object.keys(this.props.letterStatus).map((key) =>
            this.props.letterStatus[key] === true ? (
              <Letter letter={key} key={key} state={"used"} />
            ) : (
              <Letter letter={key} key={key} state={"unused"} />
            )
          )}
        </div>
      </div>
    );
  }
}

export default Letters;
