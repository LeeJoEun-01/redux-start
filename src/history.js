// history를 store와 app.js에서 써야하기 때문에 모듈로 따로 뺀다.
import { createBrowserHistory } from 'history';

// react-router-dom과 redux 연결하기 (약한 연결)
const history = createBrowserHistory();
// thunk.withExtraArgument({history});  => 기존의 thunk 자리에 넣기

export default history;