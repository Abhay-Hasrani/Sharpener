import { Fragment } from "react";
import clases from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "../Meal/MealsSummary";
const Header = () => {
  return (
    <>
      <header className={clases.header}>
        <h1>React Meals</h1>
        <HeaderCartButton/>
      </header>
      <div className={clases["main-image"]}>
        <img src={mealsImage} alt="Table filled with food" />
      </div>
      <MealsSummary/>
    </>
  );
};
export default Header;
