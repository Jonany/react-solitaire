import * as React from 'react';
import './Pile.css';
import {Card} from '../Card/Card';

class Pile extends React.Component  {
    constructor(props) {
      super(props);
      this.state = {
        cards: [Card]
      };
    }
  
    render() {
      return (
        <div className='Pile'>
          {this.props.cards.map((card, cardIdx) => <Card key={cardIdx} card={card} />)}
        </div> 
      )
    }
  }
  
  export {Pile}