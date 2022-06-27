// const hello = () => {
//     <p>hello</p>
// }

// export default hello;
// //hello라는 컴퍼넌트를 만듬 

// export default function Hello(){
//     return<p>Hello</p>
// }
// 꼭 리턴을 해주어야지 값이 보내진다. 
// JSX는 하나의 태그만 구성할 수 있다. 따라서 맨 껍데기를 div로 묶어주는 거임 
// 위와 아래가 같음 


//2. 컴퍼넌트 사용하기 
import Hello from './component/Hello';
import './App.css';

function App() {
  
  return ( 
    <div className="App">
      <Hello/> 
    </div>
  ); // 태그를 혼자쓸때 <tag/>하면 단독으로 쓰일 수 있다. 
}
//컴퍼넌트는 파이썬에서의 모듈불러오는거 처럼 경로와 모듈이름을 붙여주면 됨 
//App.js도 인덱스에 함수를 보내니 이것또한 컴퍼넌트라 할 수 있다. (아님말고)
export default App;

