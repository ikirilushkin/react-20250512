import { Outlet } from "react-router";
import { TabLink } from "../components/tab-link/tab-link";
import { Loader } from "../components/loader/loader";
import { useGetRestaurantsQuery } from "../redux/api";
import { RequestError } from "../components/request-error/request-error";

export const RestaurantsPage = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <RequestError />;
  }

  return (
    <>
      {data.map(({ id, name }) => (
        <TabLink to={`/restaurants/${id}`} key={id}>
          {name}
        </TabLink>
      ))}
      <Outlet />
    </>
  );
};
