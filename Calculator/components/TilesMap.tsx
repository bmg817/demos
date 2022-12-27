import React from 'react';
import Tile from './Tile.tsx';

const TilesMap = (): Tile[] => {
    let tileArr: Tile[] = [];
    for (i = 0; i <= 9; i++) {
        tileArr.push(<Tile num={i} />);
    }
    return tileArr;
}


export default TilesMap;