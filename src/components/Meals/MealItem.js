import React from "react";
import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";
const MealItem = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <li className={styles.meal}>
      <div className={styles.description}>
        <h3>{props.mealName}</h3>
        <p>{props.description}</p>
        {/* <p>{props.description}</p> */}
        <p className={styles.price}>{formatter.format(props.price)}</p>
      </div>
      <MealItemForm
        inputId={props.mealName}
        labelText="Amount"
        onAddToCart={props.onAddToCart}
        item={props.meal}
      />
    </li>
  );
};

export default MealItem;
