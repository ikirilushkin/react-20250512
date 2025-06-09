import { Provider } from "react-redux";
import { AuthContextProvider } from "../auth-context/auth-context-provider";
import { Layout } from "../layout/Layout";
import { RestaurantPage } from "../restaurant-page/restaurant-page";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";
import "./global.css";
import { store } from "../../redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Layout>
            <RestaurantPage />
          </Layout>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
