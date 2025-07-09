import { useSelector } from "react-redux";
import {
  selectRequestStatus,
  selectRestaurantById,
} from "../../redux/entities/restaurants/slice";
import { Restaurant } from "./restaurant";
import { Loader } from "../loader/loader";
import { RequestStatus } from "../../types/request-status";
import { RequestError } from "../request-error/request-error";

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const requestStatus = useSelector(selectRequestStatus);

  if (RequestStatus.isLoading(requestStatus)) {
    return <Loader />;
  }
  if (requestStatus === RequestStatus.REJECTED) {
    return <RequestError />;
  }
  return (
    <Restaurant name={restaurant.name} description={restaurant.description} />
  );
};
