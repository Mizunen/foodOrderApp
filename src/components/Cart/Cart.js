import React, { useContext } from "react";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./Cart.module.css";
import modalStyles from "./modal.module.css";
import CartContext from "../context/show-cart-context";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  let total = 0;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <>
      <div className={`${modalStyles.backdrop}`}></div>
      <Card classes={`${modalStyles.modal}`}>
        <ul className={styles["cart-items"]}>
          {props.cart.map((item) => {
            total += item.price * item.amount;
            return (
              <li>
                <CartItem
                  key={item.id}
                  name={item.name}
                  amount={item.amount}
                  price={item.price}
                />
              </li>
            );
          })}
          {props.cart.length !== 0 && (
            <li className={styles.total}>
              <p>Total Amount</p>

              <p className={styles.total}>{`${formatter.format(total)}`}</p>
            </li>
          )}
        </ul>

        <section className={styles.actions}>
          <Button type="button" onClick={cartContext.updateVisibility}>
            Close
          </Button>
          <Button
            classes={styles.button}
            type="button"
            onClick={cartContext.updateVisibility}
          >
            Order
          </Button>
        </section>
      </Card>
    </>
  );
};

export default Cart;
