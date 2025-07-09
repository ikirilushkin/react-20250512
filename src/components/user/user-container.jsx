import { User } from "./user";
import { useGetUsersQuery } from "../../redux/api";

export const UserContainer = ({ id }) => {
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data.find((user) => user.id === id),
    }),
  });
  if (!user) {
    return null;
  }
  return <User name={user.name} />;
};
