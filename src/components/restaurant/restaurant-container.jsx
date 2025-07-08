import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantById } from "../../redux/entities/restaurants/get-restaurant-by-id";
import {
  selectRequestStatus,
  selectRestaurantById,
} from "../../redux/entities/restaurants/slice";
import { Restaurant } from "./restaurant";
import { Loader } from "../loader/loader";
import { RequestStatus } from "../../types/request-status";
import { RequestError } from "../request-error/request-error";

export const RestaurantContainer = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurantById(id));
  }, [dispatch, id]);
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
