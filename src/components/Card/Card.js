import * as React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    return (<div className='Card'>{this.props.icon}</div>)
  }
}

export {Card}