import './Tableau.css';
import * as React from 'react';


class Tableau extends React.Component {
  render() {
    return (
      <div className='Tableau'>
        <div className='Pile'>
          <div className='PileCard'>🂽</div>
        </div>
        <div className='Pile'>
          <div className='PileCard'>🂽</div>
        </div>
        <div className='Pile'>
          <div className='PileCard'>🂽</div>
        </div>
        <div className='Pile'>
          <div className='PileCard'>🂽</div>
        </div>
        <div className='Pile'>
          <div className='PileCard'>🂽</div>
        </div>
        <div className='Pile'>
          <div className='PileCard'>🂽</div>
        </div>
        <div className='Pile'>
          <div className='PileCard'>🂽</div>
        </div>
      </div>
    )
  }
}

export { Tableau }