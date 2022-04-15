import axios from "axios";
import { push } from "connected-react-router";
import { call, delay, put, takeEvery } from "redux-saga/effects";

// 액셔 타입 정의
// 깃헙 APT 호출을 시작하는 것을 의미 
export const GET_USERS_START ='redux-stat/users/GET_USERS_START';
// 깃헙 APT 호출에 대한 응답이 성공적으로 돌아온 경우
export const GET_USERS_SUCCESS ='redux-stat/users/GET_USERS_SUCCESS'; 
// 깃헙 APT 호출에 대한 응답이 실패로 돌아온 경우
export const GET_USERS_FAIL ='redux-stat/users/GET_USERS_FAIL'; 

// redux-promise-middleware
const GET_USERS = 'redux-stat/users/GET_USERS';

export const GET_USERS_PENDING = 'redux-stat/users/GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'redux-stat/users/GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'redux-stat/users/GET_USERS_REJECTED';

// 액션 생성 함수
export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}

export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}

// 초기값
const initialState = {
  loading: false,
  data: [],
  error: null,
};

//리듀서 
export default function reducer(state = initialState, action) {
  if (action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }

  if (action.type === GET_USERS_FULFILLED) {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  }

  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }

  if (action.type === GET_USERS_REJECTED) {
    return {
      ...state,
      loading: false,
      error: action.PAYLOAD,
    };
  }

  return state;
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

//redux-thunk
export function getUsersThunk() {
  return async(dispatch, getState, { history }) => {
    try {
      console.log(history);
      dispatch(getUsersStart());
      // sleep
      await sleep(2000);
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
      history.push("/");
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  }
}

// redux-promise-middleware
export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    }
  }
}

// redux-saga 
const GET_USERS_SAGA_START = 'GET_USERS_SAGA_START';

function* getUsersSaga(action) {
  try {
    yield put(getUsersStart());
    // sleep
    yield delay(2000);
    // 첫 번째 인자: 함수의 이름 , 두 번째 인자: 함수에 들어가는 매개변수 (API)
    const res = yield call(axios.get, "https://api.github.com/users");
    yield put(getUsersSuccess(res.data));
    yield put(push("/"));
  } catch (error) {
    yield put(getUsersFail(error));
  }
}

export function getUsersSagaStart() {
  return {
    type: GET_USERS_SAGA_START,
  };
}

export function* usersSaga() {
  // 어떤 action 타입에 의해서 어떤 saga 함수가 발동할 것인지를 적는다. 
  yield takeEvery(GET_USERS_SAGA_START, getUsersSaga);
}