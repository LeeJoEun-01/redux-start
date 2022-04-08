import { combineReducers } from "redux";
import { ADD_TODO, COMPLETE_TODO, SHOW_COMPLETE, SHOW_ALL } from "./actions";
//  reducers 파일로 나누기 전


// state 모습 구상하기
// ['코딩', '점심 먹기'];
// [{text: '코딩', done: false}, {text: '점심 먹기', done: true}]  => const initialState = [];
// {todos: [{text: '코딩', done: false}, {text: '점심 먹기', done: true}], Filter: 'ALL'}
// const initialState = {todos: [], filter: 'ALL'};

//[combineReducers 나누기 전 ]
// export function todoApp(previousState = initialState, action) {
  //초기값을 설정해주는 부분
  // if (previousState === undefined) {
  //   return [];
  // }

  // if(action.type === ADD_TODO) {
  //   return {
  //     ...previousState, //Filter: 'ALL'도 있어야 하기 때문에 ...previousState 불러오고 거기에 todos 덮어씌우는 방식으로 
  //     todos: [ ...previousState.todos, { text: action.text, done: false }]};
  // }

  // if (action.type === COMPLETE_TODO) {
  //   return {
  //     ...previousState,
  //     todos: previousState.todos.map((todo, index) => {
  //     if (index === action.index) {
  //       return { ...todo, done: true }
  //     }
  //     return todo;
  //   })};
  // }

  // if (action.type === SHOW_COMPLETE) {
  //   return {
  //     ...previousState,
  //     filter: "COMPLETE",
  //   };
  // }

  // if (action.type === SHOW_ALL) {
  //   return {
  //     ...previousState,
  //     filter: "ALL",
  //   };
  // }

  // previousState.push() => immutable하지 않은 방법(push는 객체를 변경하지만 객체의 레퍼런스가 변경되지 않기 때문에) 사용 X

//   return previousState;
// }

// [reducer 나누기]
// const todosInitialState = initialState.todos;
// const filterInitialState= initialState.filter;

// const todoApp = combineReducers({
//   todos: todosReducer,
//   filter: filterRecucer,
// });

// export default todoApp; 

// function todosReducer(previousState = todosInitialState, action) {

//   if(action.type === ADD_TODO) {
//     return [ ...previousState, { text: action.text, done: false }];
//   }

//   if (action.type === COMPLETE_TODO) {
//     return previousState.map((todo, index) => {
//       if (index === action.index) {
//         return { ...todo, done: true }
//       }
//       return todo;
//     });
//   }

//   return previousState;
// }

// function filterRecucer(previousState = filterInitialState, action) {
//   if (action.type === SHOW_COMPLETE) {
//     return "COMPLETE";
//   }

//   if (action.type === SHOW_ALL) {
//     return "ALL";
//   }
//   return previousState;
// }