import React, { useContext } from "react";
import styles from "./CartItem.module.css";
import Button from "../UI/Button";
import CartContext from "../context/show-cart-context";
const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const decrementHandler = () => {
    cartCtx.onAddtoCartReduced({ name: props.name }, "decrement");
  };
  const incrementHandler = () => {
    cartCtx.onAddtoCartReduced({ name: props.name }, "increment");
  };
  return (
    <div className={styles["cart-item"]}>
      <h2>{props.name}</h2>
      <div className={styles.summary}>
        <p className={styles.price}>{`$${props.price}`}</p>
        <p className={styles.amount}>{`x ${props.amount}`}</p>
      </div>
      <div className={styles.actions}>
        <Button type="button" onClick={decrementHandler}>
          -
        </Button>
        <Button type="button" onClick={incrementHandler}>
          +
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
