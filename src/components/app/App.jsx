import { Layout } from "../layout/Layout";
import { RestaurantPage } from "../restaurantPage/RestaurantPage";

export const App = () => {
  return (
    <Layout>
      <div style={{ padding: 15 + "px" }}>
        <RestaurantPage />
      </div>
    </Layout>
  );
};
