import { Fragment } from "react";
import clases from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={clases.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShowCart={props.onShowCart}/>
      </header>
      <div className={clases["main-image"]}>
        <img src={mealsImage} alt="Table filled with food" />
      </div>
    </>
  );
};
export default Header;
