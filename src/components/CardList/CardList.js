import './CardList.css';
import * as React from 'react';
import {Card} from '../Card/Card';


class CardList extends React.Component {
  render() {
    return (
      <div className='CardList'>
        {this.props.cardIcons.map((icon, iconIdx) => <Card key={iconIdx} icon={icon} />)}
      </div>
    )
  }
}

export {CardList}