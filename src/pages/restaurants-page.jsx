"use client";

import { TabLink } from "../components/tab-link/tab-link";
import { Loader } from "../components/loader/loader";
import { useGetRestaurantsQuery } from "../redux/api";
import { RequestError } from "../components/request-error/request-error";
import { usePathname } from "next/navigation";

export const RestaurantsPage = ({ children }) => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();
  const pathname = usePathname();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <RequestError />;
  }
  if (!data?.length) {
    return null;
  }

  return (
    <>
      {data.map(({ id, name }) => (
        <TabLink
          to={`/restaurants/${id}/menu`}
          key={id}
          isActive={pathname === `/restaurants/${id}/menu`}
        >
          {name}
        </TabLink>
      ))}
      {children}
    </>
  );
};
