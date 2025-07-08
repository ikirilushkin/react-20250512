import { useParams } from "react-router";
import { DishContainer } from "../../components/dish/dish-container";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../../redux/entities/dishes/slice";
import { Loader } from "../../components/loader/loader";
import { useEffect } from "react";
import { getDishById } from "../../redux/entities/dishes/get-dish-by-id";
import { RequestStatus } from "../../types/request-status";
import { RequestError } from "../../components/request-error/request-error";

export const DishPage = () => {
  const { dishId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishById(dishId));
  }, [dishId, dispatch]);
  const requestStatus = useSelector(selectRequestStatus);
  if (!dishId) {
    return null;
  }
  if (RequestStatus.isLoading(requestStatus)) {
    return <Loader />;
  }
  if (requestStatus === RequestStatus.REJECTED) {
    return <RequestError />;
  }
  return <DishContainer id={dishId} />;
};
