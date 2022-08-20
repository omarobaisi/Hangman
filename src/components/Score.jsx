import React, {Component} from "react";

class Score extends Component {

    render() {
        if(this.props.score >= 80) {
            return (
                <div className="high-score">{this.props.score}</div>
            )
        } else if(this.props.score < 80 && this.props.score > 50) {
            return (
                <div className="medium-score">{this.props.score}</div>
            )
        } else {
            return (
                <div className="low-score">{this.props.score}</div>
            )
        }
    }
}

export default Score;