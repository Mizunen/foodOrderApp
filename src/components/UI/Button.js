import React from "react";

const Button = (props) => {
  return (
    <button className={props.classes} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
