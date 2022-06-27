
export default function Hello(){
    function showname(){
        console.log("mike");
    }
    function showage(age){
        console.log(age);
    }
    return (
    <div>
        <p>Hello</p>
        <button onClick={{showname}}>dbwofla</button>
        <button onClick={()=> {
            showage(30);
        }}>dlawoals</button>
        <input type="text"></input>
    </div>
    );
}
//전달해줄 내용이 문자열이 아니라 함수같은 객체면 안에 {}를 한번 더 해준다 .
//아래 버튼의 경우 매개변수 전달이 편해진다 .
