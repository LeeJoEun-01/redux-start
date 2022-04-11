// 보여주기만하는 멍청한 컴포넌트 
export default function TodoList({ todos }) {

  return (
    <ul>
      {todos.map((todo) => {
        return <li>{ todo.text }</li>;
      })}
    </ul>
  );
}
