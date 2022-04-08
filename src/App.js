import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useState } from 'react';
import { addTodo } from './redux/actions';
import ReduxContext from './contexts/ReduxContext';

function useReduxState() {
  const store = useContext(ReduxContext);
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    })
    return () => {
      unsubscribe();
    }
  }, [store]);

  return state;
}

function App() {
  const state = useReduxState();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {JSON.stringify(state)}
        <button onClick={click}>추가</button>
      </header>
    </div>
  );

  function click() {
    // store.dispatch(addTodo("todo"));
  }
}

export default App;
