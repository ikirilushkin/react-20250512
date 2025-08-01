import { useParams } from "react-router";
import { DishContainer } from "../components/dish/dish-container";
import { Loader } from "../components/loader/loader";
import { RequestError } from "../components/request-error/request-error";
import { useGetDishByIdQuery } from "../redux/api";

export const DishPage = () => {
  const { dishId } = useParams();
  const { data: dish, isLoading, isError } = useGetDishByIdQuery(dishId);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <RequestError />;
  }
  return <DishContainer dish={dish} />;
};
