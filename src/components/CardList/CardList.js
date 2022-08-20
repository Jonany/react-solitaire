import './CardList.css';
import * as React from 'react';
import {Card} from '../Card/Card';


class CardList extends React.Component {
  render() {
    return (
      <div className='CardList'>
        {this.props.deck.map((card, cardIdx) => <Card key={cardIdx} card={card} />)}
      </div>
    )
  }
}

export {CardList}