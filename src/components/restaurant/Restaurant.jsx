import styles from "./restaurant.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { NavLink } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../theme-context";
import classNames from "classnames/bind";

export const Restaurant = ({ id }) => {
  const { theme } = useContext(ThemeContext);
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const { name, description } = restaurant;
  return (
    <div>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.description}>{description}</div>
      <NavLink
        className={classNames("navLink", {
          light: theme === "light",
          dark: theme === "dark",
        })}
        to="menu"
      >
        Menu
      </NavLink>
      <NavLink
        className={classNames("navLink", {
          light: theme === "light",
          dark: theme === "dark",
        })}
        to="reviews"
      >
        Reviews
      </NavLink>
    </div>
  );
};
