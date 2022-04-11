import { useContext } from "react";
import ReduxContext from "../contexts/ReduxContext";

//dispatch 가져오는 훅 만들기 
export default function useReduxDispatch() {
  const store = useContext(ReduxContext);

  return store.dispatch;
}