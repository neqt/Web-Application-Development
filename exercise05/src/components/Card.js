import React from 'react';
import Button from './Button';
import Status from './Status';
import './Card.css';

const Card = (props) => {
  function name() {
    
  }

  return (
    <div className="card">
      <div className="food-container">
        <div className="food-text">
          <div className="type">
            <h2>{props.data.type}</h2>
          </div>
          <div className="name">
            <h4>{props.data.name}</h4>
          </div>
          <div className="detail">{props.data.detail}</div>
        </div>
        <div className="food-img">
          <img src={props.data.pic} alt="food img" />
        </div>
      </div>

      <div className="button-container">
        <Button className="bt-vote" value="Vote" catDoll='name()'>
        </Button>
        <p className='display-min'></p>
        <Button className="bt-unvote" value="Unvote">
        </Button>
      </div>
    </div>
  );
};

export default Card;
