import {createActions, handleActions} from 'redux-actions';

// cereate action을 수행한 결과물이 액션 생성 함수가 된다.
export const { showAll, showComplete } = createActions(
  "SHOW_ALL",
  "SHOW_COMPLETE",
  { prefix: "redux-start/filter" }
);


// // 액션 타입 정의
// const SHOW_ALL = "redux-start/filter/SHOW_ALL";
// const SHOW_COMPLETE = "redux-start/filter/SHOW_COMPLETE";

//액션 생성 함수 
// export function showALL() {
//   return { type: SHOW_ALL };
// }

// export function showComplete() {
//   return { type: SHOW_COMPLETE };
// }

//초기값
const initialState = "ALL";

const reducer = handleActions(
  {
    SHOW_ALL: (state, action) => "ALL",
    SHOW_COMPLETE: () => "COMPLETE",
  },
  initialState,
  { prefix: "redux-start/filter" }
);

//리듀서 
export default reducer;