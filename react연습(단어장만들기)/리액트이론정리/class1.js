//처음 App.js , react의 기본적인 이해 
import './App.css';

function class1() {
  const name = 'Tom';
  return ( //다시하는 리액트 공부 HMR 바로바로 반영이 되는 걸 말함 
    <div className="App">
      <h1
      style={{
        color: "chocolate",
        backgroundColor: "cyan"
      }}>
        hello world {name}!! 
      </h1>
    </div>
  );
}// 변수를 가져오는 방법 (위 hello world {변수이름})
//{} 안에 객체 style처럼 생긴것은 가져올 수가 없음 
export default class1;

// 컴퍼넌트를 나누는 것 = 기능을 나누는 것 (버튼 하나하나 기능 하나하나를 말함)
// 함수로 만듬 => 함수 컴퍼넌트 이가 리턴하는 것은 JSX라고 함 