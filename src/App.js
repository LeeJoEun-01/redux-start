import './App.css';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import UserListContainer from './containers/UserListContainer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <UserListContainer />
        <TodoListContainer />
        <TodoFormContainer />
        {/* {JSON.stringify(state)} */}
        {/* <button onClick={click}>추가</button> */}
      </header>
    </div>
  );

}

export default App;
