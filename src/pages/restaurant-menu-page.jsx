"use client";

import { Loader } from "../components/loader/loader";
import { RequestError } from "../components/request-error/request-error";
import { Dishes } from "../components/dishes/dishes";
import { useGetMenuByRestaurantIdQuery } from "../redux/api";
import { useParams } from "next/navigation";

export const RestaurantMenuPage = () => {
  const { id } = useParams();
  const { data: menu, isLoading, isError } = useGetMenuByRestaurantIdQuery(id);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <RequestError />;
  }
  return <Dishes dishes={menu} />;
};
