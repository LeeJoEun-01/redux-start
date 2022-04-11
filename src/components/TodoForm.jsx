// 이 검포넌트에는 redux의 흔적이 없다. 
// 그냥 props을 받아서 함수를 실행하는 함수 / 일반적으로 디자인적 요소가 강한 컴포넌트가 된다. 
// presentation한 컴포넌트 or 멍청한 컴포넌트 

import { useRef } from "react";

//역할: 컴테이너가 주는 데이터나 함수를 받아서 보여주거나 함수로 실행하는 컴포넌트 
export default function TodoForm({ add }) {
  const inputRef = useRef();

  return(
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );

  function click() {
    add(inputRef.current.value);
  }
}
