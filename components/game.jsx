import * as Minesweeper from '../minesweeper.js'

class Game extends React.Component {
  constructor () {
    this.state.board = new Minesweeper.Board()

  }

  updateGame() {

  };

  render(){
    let currentBoard = this.state.board;
    let updateGame = this.updateGame;
    return(
      <div>
        <h1>Game Board should show up here</h1>
      </div>
    )
  }


}