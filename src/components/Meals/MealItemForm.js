import React, { useRef, useContext } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";
import CartContext from "../context/show-cart-context";
const MealItemForm = (props) => {
  const inputRef = useRef();
  const cartCtx = useContext(CartContext);
  const handleSubmit = (event) => {
    event.preventDefault();

    let itemsToAdd = inputRef.current.value();
    let itemToAdd = { ...props.item, amount: +inputRef.current.value() };
    // props.onAddToCart(itemToAdd);
    cartCtx.onAddtoCartReduced(itemToAdd);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        inputId={props.inputId}
        labelText={props.labelText}
      />
      <Button type="submit">+ Add</Button>
    </form>
  );
};

export default MealItemForm;
