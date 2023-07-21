import React from 'react';

import './Button.css';

const Button = props => {
  const className = "button " + props.className;
  return (
    <button type={props.type} className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
