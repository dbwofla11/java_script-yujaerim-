const bodyParser = require('body-parser');
var express = require('express');
const conn = require("./database");
var app = express();
const fileUpload = require('express-fileupload');

// 이미지라는 폴더에 업로드
app.use(fileUpload()); // express dlc 파일업로드 모듈 
const router = express.Router(); // 라우터 정의 

router.post('/'  ,(req ,res) => {
    let sampleFile; //write.html 에서 형식을 가져옴 이미지만 
    let uploadPath;
    const title = req.body.post_title;  //변수 정하는 원리 프론트 form에서 받은 아이디랑 이름을 적어서 변수를 가지고 옴 , // write.html title임 

    if(!req.files || Object.keys(req.files).length === 0){ //이미지 파일이 존재하지 않을때 
        return res.status(400).send('업로드 할 파일이 존재하지 않습니다');
    }
    
    // input이 아래로직임 
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/upload/' + sampleFile.name; //이미지 경로설정 
    console.log(sampleFile); //확인용

    // use mv()는 서버에 파일을 위치시킬떄 씀
    sampleFile.mv(uploadPath , function(err) {
        if(err) {
            return res.status(500).send(err);
        } //파일이 업로드 될 때 
    });
    var sql = `INSERT INTO box (title ,  image ) VALUES( "${title}" ,  "${sampleFile}"  )`; //SQL구문 이러면 오류를 더 82찾을 수 있음
            //`과 ""과 자바스크립트 문법에 차이가 있음 
            conn.query( sql , (err , rows , fields) => {
                console.log("DB insert successful");
                res.redirect(303, '/');
            });
            //DB 엘리먼트 추가 // 탬플릿을 불러서 다시 출력해야겠지??
            //
});

module.exports = router;
