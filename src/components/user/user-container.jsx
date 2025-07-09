import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/slice";
import { User } from "./user";

export const UserContainer = ({ id }) => {
  const user = useSelector((state) => selectUserById(state, id));
  if (!user) {
    return null;
  }
  return <User name={user.name} />;
};
