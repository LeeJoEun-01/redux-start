import { useCallback } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addTodo } from "../redux/actions";
// container or 스마트한 component 
// 역할: store와 presentation component를 이어주는 역할을 하는 컴포넌트 

export default function TodoFormContainer() {
  const disapatch = useDispatch();

  const add = useCallback((text) => {
    disapatch(addTodo(text));
  }, [disapatch]);

  return <TodoForm add={add} />;
}