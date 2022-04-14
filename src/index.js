import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import { Provider } from "react-redux";

// // store의 상태가 변경되면 안에 있는 함수가 호출 
// // return이 unsubscribe이다.
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// })

// // console.log(store);
// // // 현재 state 상태 출력 
// // console.log(store.getState());
// // // dispatch 사용해서 action을 던지면 state가 변경됨
// store.dispatch(addTodo("coding"));
// store.dispatch(addTodo("read book"));
// store.dispatch(addTodo("eat"));
// // console.log(store.getState());

// unsubscribe(); // 콘솔에 출력은 안되지만 실제로 추가는 됨
// store.dispatch(addTodo("coding"));
// store.dispatch(addTodo("read book"));
// store.dispatch(addTodo("eat"));

// store.subscribe(() => {
//   console.log(store.getState());
// })

// store.dispatch(addTodo("coding"));
// store.dispatch(completeTodo(0));
// store.dispatch(addTodo("read book"));
// store.dispatch(completeTodo(1));
// store.dispatch(addTodo("project"));
// store.dispatch(showComplete());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
