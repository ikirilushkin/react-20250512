import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { DishContainer } from "../../../components/dish/dish-container";
import styles from "./menu.module.css";
import { useEffect } from "react";
import { getDishesByRestaurant } from "../../../redux/entities/dishes/get-dishes-by-restaurant";
import {
  selectDishesByRestaurant,
  selectRequestStatus,
} from "../../../redux/entities/dishes/slice";
import { Loader } from "../../../components/loader/loader";
import { RequestStatus } from "../../../types/request-status";
import { RequestError } from "../../../components/request-error/request-error";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishesByRestaurant(restaurantId));
  }, [dispatch, restaurantId]);
  const dishes = useSelector((state) =>
    selectDishesByRestaurant(state, restaurantId)
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
  return (
    <>
      {dishes.map(({ id }) => (
        <DishContainer key={id} id={id} className={styles.dish} />
      ))}
    </>
  );
};
