import React from 'react';
import './Button.css';

const Button = (props) => {
  function isVote() {
    if (props.value === 'Vote') {
      props.callBack(1);
    } else if (props.value === 'Unvote') {
      props.callBack(-1);
    }
  }

  return (
    <div>
      <button onClick={() => isVote()}>Click to {props.value}</button>
    </div>
  );
};

export default Button;
