import React, { useRef, useImperativeHandle } from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const getValue = () => {
    return inputRef.current.value;
  };
  useImperativeHandle(ref, () => {
    return { value: getValue };
  });
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        ref={inputRef}
        key={`amount_${props.id}`}
        id={props.id}
        type="number"
        min={1}
        max={5}
        step={1}
        defaultValue={1}
      />
    </div>
  );
});

export default Input;
