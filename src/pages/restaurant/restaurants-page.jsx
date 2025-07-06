import { useSelector } from "react-redux";
import { RestaurantTab } from "../../components/restaurant-tab/restaurant-tab";
import { selectRestaurantIds } from "../../redux/entities/restaurant/slice";
import { NavLink, Outlet } from "react-router";
import "../../styles/navLink.css";
import classNames from "classnames/bind";
import { useContext } from "react";
import { ThemeContext } from "../../components/theme-context";

export const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {restaurantIds.map((id) => (
        <NavLink
          className={classNames("navLink", {
            light: theme === "light",
            dark: theme === "dark",
          })}
          to={`/restaurants/${id}/menu`}
          key={id}
        >
          <RestaurantTab id={id} />
        </NavLink>
      ))}
      <Outlet />
    </>
  );
};
