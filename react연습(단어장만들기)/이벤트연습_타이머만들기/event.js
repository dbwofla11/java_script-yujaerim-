window.onload = function(){
    var startButton = document.getElementById("start"); // 시작요소
    var stopButton = document.getElementById("stop"); // 멈춤요소
    var display = document.getElementById("display"); // 결과표시 요소 id값으로 연결됨 
    var starttime , timer;
    
    startButton.onclick = start; //onclick은 활성화 시킴 html에서 쓸수 있도록 
    function start(){
        startButton.onclick = null;
        stopButton.onclick = stop; // 스톱 메서드 
        starttime = new Date();

        timer = setInterval(function() {
            var now = new Date(); // 타이머 정의
            display.innerHTML = ((now - starttime)/1000).toFixed(2); // 2진수로 변환 
        } , 10 );
    }
    function stop() {
        clearInterval(timer); // 타이머 해제 매소드  // 타이머 해제가 0으로 되돌린다라는 뜻 
        startButton.onclick = start; // 타이머를 해제하고 start버튼 활성화 
    }
};

//window.onload외에 html에 함수를 불러오는 메소드
window.addEventListener('DOMContentLoaded' , function(){
    //func();
});
//이걸 쓰면 좀더 빠르게 처리할수 있다한다. 