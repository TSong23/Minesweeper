import * as Minesweeper from '../minesweeper.js';
import React from 'react';
import Board from './board.jsx';

class Game extends React.Component {
  constructor (props) {
    super(props);
    const board = new Minesweeper.Board(9,10);
    this.state = { board: board};
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flagBool) {
    if (flagBool){
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board })
  };

  render(){

    return(
      <div>
        <Board board={this.state.board} 
                updateGame = {this.updateGame}/>
      </div>
    );
  }

}

export default Game;