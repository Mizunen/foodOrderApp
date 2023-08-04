import React, { useState, useReducer } from "react";

const CartContext = React.createContext({
  cart: [],
  isVisible: false,
  updateVisibility: () => {},
  onAddToCart: (item) => {},
  onAddtoCartReduced: (item, change) => {},
});

const filterCart = (cart, change, item) => {
  let removeItem = false;

  let filteredCart = cart.filter((cartItem) => {

    if (cartItem.name == item.name) {
      if (change == "update") {
        item.amount += cartItem.amount;
      } else if (change == "increment") {
        item = { ...cartItem };
        item.amount += 1;
      } else {
        item = { ...cartItem };
        item.amount -= 1;
        if (item.amount === 0) {
          removeItem = true;
        } else {
        }
      }
    }
    return cartItem.name !== item.name;
  });
  if (removeItem) {
    return [...filteredCart];
  }
  return [...filteredCart, item];
};
const cartReducer = (state, action) => {
 
  if (action.type == "ADD") {
    return [...state, action.item];
  }
  if (action.type == "UPDATE_AMOUNT") {
    let newCart = filterCart(state, "update", action.item);
    return newCart;
  }
  if (action.type == "INCREMENT") {
    let newCart = filterCart(state, "increment", action.item);
    return newCart;
  }
  if (action.type == "DECREMENT") {
    let newCart = filterCart(state, "decrement", action.item);
    return newCart;
  }
};

export const CartContextProvider = (props) => {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartState, dispatchCart] = useReducer(cartReducer, []);
  const updateVisibility = () => {
    setCartIsVisible((prevState) => {
      return !prevState;
    });
  };

  const onAddToCartReduced = (item, change = null) => {
    // console.log("change is ");
    // console.log(change);
    // console.log("cartState is ");
    // console.log(cartState);
    // if (cartState.length() !== 0) {
    // console.log("cartState.some is");
    // console.log(cartState.some((cartItem) => cartItem.name === item.name));
    if (cartState.some((cartItem) => cartItem.name === item.name)) {
      if (change === "increment") {
        dispatchCart({ type: "INCREMENT", item: item });
      } else if (change === "decrement") {
        dispatchCart({ type: "DECREMENT", item: item });
      } else {
        dispatchCart({ type: "UPDATE_AMOUNT", item: item });
      }
    }
    // }

    // if (change === "update") {
    //   dispatchCart({ type: "UPDATE_AMOUNT", item: item });
    // } else if (change === "increment") {
    //   dispatchCart({ type: "INCREMENT", item: item });
    // } else if (change === "decrement") {
    //   dispatchCart({ type: "DECREMENET", item: item });
    // }
    else {
      dispatchCart({ type: "ADD", item: item });
    }
  };
  const onAddToCartUpdated = (item) => {
    let alreadyContainsItem = false;
    let indexOfItem = 0;
    let foundItem = null;
    if (cart.some((cartItem) => cartItem.name === item.name)) {
      alreadyContainsItem = true;
    }

    // console.log(cart.some((cartItem) => cartItem.name === item.name));
    if (alreadyContainsItem) {
      setCart((prevState) => {
        let updatedArray = prevState.filter((cartItem) => {
          if (cartItem.name === item.name) {
            item.amount += cartItem.amount; //if names match add their amounts together.
          }

          return cartItem.name !== item.name; // return all items that don't match the name;
        });
        return [...updatedArray, item];
      });
    } else {
      setCart((prevState) => {
        return [...prevState, item];
      });
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart: cartState,
        isVisible: cartIsVisible,
        updateVisibility: updateVisibility,
        onAddToCart: onAddToCartUpdated,
        onAddtoCartReduced: onAddToCartReduced,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
