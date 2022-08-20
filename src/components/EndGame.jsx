import React, { Component } from 'react';

class EndGame extends Component {

    restart = () => {
        console.log(this.props.restartGame())
    }

    render() {
        return (
            <div>
                <div>{this.props.message}</div>
                <button onClick={this.restart}>Restart the game</button>
            </div>
        );
    }
}

export default EndGame;