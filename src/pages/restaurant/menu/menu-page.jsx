import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getDishesByRestaurant } from "../../../redux/entities/dishes/get-dishes-by-restaurant";
import { selectRequestStatus } from "../../../redux/entities/dishes/slice";
import { Loader } from "../../../components/loader/loader";
import { RequestStatus } from "../../../types/request-status";
import { RequestError } from "../../../components/request-error/request-error";
import { selectRestaurantById } from "../../../redux/entities/restaurants/slice";
import { Dishes } from "../../../components/dishes/dishes";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishesByRestaurant(restaurantId));
  }, [dispatch, restaurantId]);
  const { menu } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const requestStatus = useSelector(selectRequestStatus);
  if (!restaurantId) {
    return null;
  }
  if (RequestStatus.isLoading(requestStatus)) {
    return <Loader />;
  }
  if (requestStatus === RequestStatus.REJECTED) {
    return <RequestError />;
  }
  return <Dishes dishes={menu} />;
};
