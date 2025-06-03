import { AuthContextProvider } from "../auth-context/auth-context-provider";
import { Layout } from "../layout/Layout";
import { RestaurantPage } from "../restaurantPage/RestaurantPage";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";
import "./global.css";

export const App = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Layout>
          <RestaurantPage />
        </Layout>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};
