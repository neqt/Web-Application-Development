import React, { useState } from 'react';
import Button from './Button';
import './Card.css';

const Card = (props) => {
  const [count, setCount] = useState(0);

  function countVote(value) {
    if(count === 0 && value === -1){
      return alert("Cannot unvote")
    }
    else if(count === 10 && value === 1){
      return alert("Cannot Vote more")
    }
    else {
      setCount((prevCount) => prevCount + value);
    }
  }

  function displayValue(value) {
    if (value === 0) {
      return 'MIN';
    } else if (value === 10) {
      return 'MAX';
    }
    return value;
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
        <Button className="bt-vote" value="Vote" callBack={countVote}></Button>
        <h1 className="display-min">
          <b>{displayValue(count)}</b>
        </h1>
        <Button
          className="bt-unvote"
          value="Unvote"
          callBack={countVote}
        ></Button>
      </div>
    </div>
  );
};

export default Card;
