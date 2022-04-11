import logo from './logo.svg';
import './App.css';
import useReduxState from './hooks/useReduxState';
import useReduxDispatch from './hooks/useReduxDispatch';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoListContainer />
        <TodoFormContainer />
        {/* {JSON.stringify(state)} */}
        {/* <button onClick={click}>추가</button> */}
      </header>
    </div>
  );

}

export default App;
