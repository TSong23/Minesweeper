import React from 'react';
import * as Minesweeper from '../minesweeper.js';


export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    const flagged = e.altKey ? true : false;
    this.props.updateGame(this.props.tile, flagged);
  }

  render (){
    let tile = this.props.tile;
    let text = " ";
    let klass;
    if (tile.explored) {
      if (tile.bombed) {
        klass = 'bombed';
        text = '\u2622';
      } else {
        let count = tile.adjacentBombCount();
        text = `${count}`;
      }
    } else if (tile.flagged) {
      klass = 'flagged';
      text = '\u2691';
    } else {
      klass = 'unexplored';
    }
    klass = `tile ${klass}`;

    return (
      <div className={klass} onClick={this.handleClick}>{text}</div>
    );
  }
}