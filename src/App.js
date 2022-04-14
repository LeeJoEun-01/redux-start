import './App.css';
import { Route } from 'react-router-dom';
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Users from './pages/Users';
import history from './history';
import { ConnectedRouter } from "connected-react-router";

function App() {

  return (
    <ConnectedRouter history={history} >
    <Route path="/" exact component={Home} />
    <Route path="/todos" exact component={Todos} />
    <Route path="/users" exact component={Users} />

    </ConnectedRouter>
  );

}

export default App;

// 약한 복사
// history 객체를 만들어서 withExtraArgument로 전달하는 방식

// 강한 복사
// 리덕스 안에 리듀서를 라우터 통째로 연결하는 방식
