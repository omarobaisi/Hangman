import React, {Component} from "react";

class Letter extends Component {

    doStuff = () => {
        this.props.selectLetter(this.props.letter)
    }

    render() {
        return(
            <span className={this.props.state} onClick={this.doStuff}>{this.props.letter}</span>
        )
    }
}

export default Letter;