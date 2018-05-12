import React, { Component }  from 'react'
import { generateLandscape } from '../../util/generateLandscape'
import GameSpace             from '../gameSpace/gameSpace'
import { TerrainTypes }      from '../../constants/enums/terrainTypes'
class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: generateLandscape(5, 10, TerrainTypes.GRASSLAND, TerrainTypes.ROCKY),
      height: `${window.innerHeight.valueOf()}px`,
      width: `${window.innerWidth.valueOf()}px`
    }
    this.calcSize = this.calcSize.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', () => {
      console.log('resize event');
      this.calcSize();
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calcSize());
  }

  render() {
    const style = {
      height: this.state.height,
      width: this.state.width
    }
    return (
      <div className="game" style={style}>
        {
          this.state.board.map((row, index) => {
            return (
              <div
                className={'game-row'}
                key={`game-row-${index}`}
              >
                {
                  row.map((square, rIndex) => {
                    return (
                      <GameSpace
                        key={`game-space-${index}-${rIndex}`}
                        terrain={square}
                      />
                    )
                  })
                }
              </div>
             );
          })
        }
      </div>
    );
  }

  calcSize() {
    this.setState({
      ...this.state,
      height: `${window.innerHeight.valueOf()}px`,
      width: `${window.innerWidth.valueOf()}px`
    })
  }
}

export default Game;
