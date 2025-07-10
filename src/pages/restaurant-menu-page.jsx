import { useParams } from "react-router";
import { Loader } from "../components/loader/loader";
import { RequestError } from "../components/request-error/request-error";
import { Dishes } from "../components/dishes/dishes";
import { useGetMenuByRestaurantIdQuery } from "../redux/api";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const {
    data: menu,
    isLoading,
    isError,
  } = useGetMenuByRestaurantIdQuery(restaurantId);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <RequestError />;
  }
  return <Dishes dishes={menu} />;
};
