import React from "react";
import HeaderCart from "./HeaderCart";
import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCart numCartItems={props.numCartItems} />
      </header>
      <figure className={styles["main-image"]}>
        <img src={props.image}></img>
      </figure>
    </>
  );
};

export default Header;
