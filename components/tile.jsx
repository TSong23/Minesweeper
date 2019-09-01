import React from 'react';
import * as Minesweeper from '../minesweeper.js';


export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render (){
    let tile = this.props.tile;
    let text = "T";
    if (tile.explored) {
      if (tile.bombed) {
        klass = 'bombed';
        text = '\u2622';
      } else {
        let count = tile.adjacentBombCount();
        text = `${count}`;
      }
    }

    return (
      <div className="Tile">{text}</div>
    );
  }
}