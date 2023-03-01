import React from 'react';
import './Button.css';

const Button = (props) => {
  function name() {
    if (props.value === 'Vote') {
      props.catDoll(1);
    } else {
      props.catDoll(-1);
    }
  }

  return (
    <div>
      <button onClick={Button}>Click to {props.value}</button>
    </div>
  );
};

export default Button;
