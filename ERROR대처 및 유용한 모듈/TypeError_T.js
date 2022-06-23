function myfunc(a){
    console.log(a.b);
}

var myvar;
myfunc(myvar);
// ,를 해서 요소가 없으면 참조오류 
// .을 해서 메소드가 없으면 타입에러로 읽기가 불가능함 
//그래서 post를 성공하더라도 에러를 배출하는 거임 
