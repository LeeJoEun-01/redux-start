import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList";
import { getUsersSagaStart } from "../redux/modules/users";

export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  // const start = useCallback(() => {
  //   dispatch(getUsersStart());
  // }, [dispatch]);

  // const success = useCallback((data) => {
  //   dispatch(getUsersSuccess(data));
  // }, [dispatch]);

  // const fail = useCallback((error) => {
  //   dispatch(getUsersFail(error));
  // }, [dispatch]);

  // const getUsers = useCallback(async function getUsers() {
  //   try {
  //     dispatch(getUsersStart());
  //     const res = await axios.get("https://api.github.com/users");
  //     dispatch(getUsersSuccess(res.data));
  //   } catch (error) {
  //     dispatch(getUsersFail(error));
  //   }
  // }, [dispatch]);

  // thunk
  // const getUsers =  useCallback(() => {
  //   dispatch(getUsersThunk());
  // }, [dispatch]);

  //promise
  const getUsers =  useCallback(() => {
  dispatch(getUsersSagaStart());
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />
}