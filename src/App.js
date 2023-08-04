import React, { useState, useContext } from "react";
import Header from "./components/Header/Header";
import MealsList from "./components/Meals/MealsList";
import styles from "./index.css";
import MealsImg from "./assets/images/meals.jpg";
import MealsSummary from "./components/Meals/MealsSummary";
import CartContext from "./components/context/show-cart-context";
import Cart from "./components/Cart/Cart";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function App() {
  // const [cart, setCart] = useState([]);
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const cartContext = useContext(CartContext);
  // const onAddToCart = (item) => {
  //   setCart((prevState) => {
  //     return [...prevState, item];
  //   });
  // };
  // const onAddToCartUpdated = (item) => {
  //   let alreadyContainsItem = false;
  //   let indexOfItem = 0;
  //   let foundItem = null;
  //   if (cart.some((cartItem) => cartItem.name === item.name)) {
  //     console.log("cart already contains item");
  //     alreadyContainsItem = true;
  //   }

  //   console.log(cart.some((cartItem) => cartItem.name === item.name));
  //   if (alreadyContainsItem) {
  //     console.log("updated cart item");
  //     setCart((prevState) => {
  //       let updatedArray = prevState.filter((cartItem) => {
  //         if (cartItem.name === item.name) {
  //           console.log("updating item amount");
  //           item.amount += cartItem.amount; //if names match add their amounts together.
  //         }

  //         return cartItem.name !== item.name; // return all items that don't match the name;
  //       });
  //       console.log("updated array is ");
  //       console.log(updatedArray);
  //       return [...updatedArray, item];
  //     });
  //   } else {
  //     setCart((prevState) => {
  //       return [...prevState, item];
  //     });
  //   }
  // };

  const onShowCart = () => {
    setCartIsVisible(true);
  };

  let numCartItems = 0;
  cartContext.cart.map((item) => {
    numCartItems += item.amount;
  });
  console.log(numCartItems);
  return (
    <React.Fragment>
      <Header
        numCartItems={numCartItems}
        image={MealsImg}
        onShowCart={onShowCart}
      />
      {cartContext.isVisible && <Cart cart={cartContext.cart} />}
      {/* <figure className={styles["main-img"]}>
        <img src={MealsImg} alt="Header image of meals" />
      </figure> */}

      <MealsSummary />
      <MealsList meals={DUMMY_MEALS} onAddToCart={cartContext.onAddToCart} />
    </React.Fragment>
  );
}

export default App;
