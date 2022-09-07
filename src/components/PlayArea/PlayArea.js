
import * as React from 'react';
import { Deck } from '../../assets/Cards';
import { Tableau } from '../Tableau/Tableau';


class PlayArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: Deck
    };
  }

  render() {
    const handleShuffle = () => {
      const shuffled = [...this.state.deck];
      // For loop copied from https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
      for (let idx = shuffled.length - 1; idx > 0; idx--) {
        const swapIdx = Math.floor(Math.random() * (idx + 1));

        // Swap the element at idx with the element at swapIdx and 
        // swap the element at swapIdx with the element at idx
        [shuffled[idx], shuffled[swapIdx]] = [shuffled[swapIdx], shuffled[idx]];
      }

      this.setState({
        deck: shuffled
      });
    }

    return (
      <div>
        <Tableau />
      </div>
    )
  }
}

export { PlayArea }

