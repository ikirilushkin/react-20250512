import { Provider } from "react-redux";
import { AuthContextProvider } from "../auth-context/auth-context-provider";
import { Layout } from "../layout/Layout";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";
import "./global.css";
import { store } from "../../redux/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "../../pages/home/home-page";
import { RestaurantsPage } from "../../pages/restaurant/restaurants-page";
import { RestaurantPage } from "../../pages/restaurant/restaurant-page";
import { MenuPage } from "../../pages/restaurant/menu/menu-page";
import { ReviewPage } from "../../pages/restaurant/review/reviews-page";
import { DishPage } from "../../pages/dish/dish-page";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="restaurants" element={<RestaurantsPage />}>
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    <Route index element={<Navigate to="menu" replace />} />
                    <Route path="menu" element={<MenuPage />} />
                    <Route path="reviews" element={<ReviewPage />} />
                  </Route>
                </Route>
                <Route path="dish/:dishId" element={<DishPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
