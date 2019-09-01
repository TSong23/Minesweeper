import React from 'react';
import * as Minesweeper from '../minesweeper.js';
import Tile from './tile.jsx'

export default class Board extends React.Component{
  constructor(props){
    super(props);
    
  }

  render(){
    const board = this.props.board;

    return(
      <div id="board">
        {this.props.board.grid.map( (row, i) => {
          return (
            <div className="row" key={`row:${i}`}>
              {row.map( (tile, j) => {
                return (
                  <Tile tile={tile}                         
                        key={i * board.gridSize + j}
                        updateGame={this.props.updateGame}/>
                );
              } 
            )}
            </div>
          )
        })
        }
      </div>
  
    );
  }
}