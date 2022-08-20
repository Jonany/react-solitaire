
import * as React from 'react';
import {CardList} from '../CardList/CardList';


class PlayArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardIcons: ['🂡', '🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂨', '🂩', '🂪', '🂫', '🂭', '🂮']
    };
  }

  render() {
    const handleShuffle = () => {
      const shuffled = [ ...this.state.cardIcons ];
      // For loop copied from https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
      for (let idx = shuffled.length - 1; idx > 0; idx--) {
        const swapIdx = Math.floor(Math.random() * (idx + 1));

        // Swap the element at idx with the element at swapIdx and 
        // swap the element at swapIdx with the element at idx
        [shuffled[idx], shuffled[swapIdx]] = [shuffled[swapIdx], shuffled[idx]];
      }

      this.setState({
        cardIcons: shuffled
      });
    }

    return (
      <div>
        <button className='Shuffle' onClick={handleShuffle}>Shuffle</button>
        <CardList cardIcons={this.state.cardIcons} />
      </div> 
    )
  }
}

export {PlayArea}

