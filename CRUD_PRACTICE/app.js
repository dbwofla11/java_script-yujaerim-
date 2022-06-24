const bodyParser = require('body-parser');
var express = require('express');
const conn = require("./databases/database");
var app = express();
const fileUpload = require('express-fileupload');


//post 라우터 불러오기 
const writepost = require('./databases/imgPost');


conn.connect(err => {
    if (err) console.log("DB연결실패 : " + err);
    console.log("DB가 연결되었습니다");
})
//db연결 //DB스키마 설정 => 미리 cmd에서 태이블을 만듬 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));//이미지 업로드 처리 
app.use(express.static(__dirname + '/css')); // public 디렉토리 접근 허용 
app.use(express.static(__dirname + '/images'));
app.use(fileUpload()); // 익스프레스 파일업로드 모듈 사용허가 
// Note that this option available for versions 1.0.0 and newer. 
app.use(express.static(__dirname + '/public'));
//탬플릿 모아두는 곳 

//파일 localhost에 출력 
app.get('/' , function(req , res){ //메인
    res.sendFile(__dirname + '/index.html');
});
app.get('/signup' , function(req , res){ //회원가입 
    res.sendFile(__dirname + '/signup.html');
});
app.get('/write' , function(req , res){ //글쓰기 페이지 
    res.sendFile(__dirname + '/write.html');
});
app.get('/login' , function(req , res){ // 로그인 
    res.sendFile(__dirname + '/login.html');
});


//post
app.post('/' , writepost);
//post정리 데이터베이스는 비동기식
//post에서 얻는거 2가지 파일데이터와 이름 
//이러면 form에서 넣은 데이터를 DB에 가져다 넣는게 가능함 
//이미지 DB에서 불러오기 get


//포트설정 localhost 3000
var port = 3030;
app.listen(port, function(){
    console.log('서버가 켜졋습니다. http://localhost:' + port);
});



