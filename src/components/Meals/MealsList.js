import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import styles from "./MealsList.module.css";
const MealsList = (props) => {
  return (
    <Card classes={styles.meals}>
      <ul>
        {props.meals.map((meal) => {
          return (
            <MealItem
              key={meal.id}
              mealName={meal.name}
              price={meal.price}
              description={meal.description}
              onAddToCart={props.onAddToCart}
              meal={meal}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default MealsList;
