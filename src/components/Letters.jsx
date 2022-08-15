import Letter from "./letter";
import React, {Component} from "react";

class Letters extends Component {
    render() {
        return (
          <div className="App">
            <div>
                <div>Available Letters</div>
                <Letter />
            </div>
          </div>
        );
      }
}

export default Letters;