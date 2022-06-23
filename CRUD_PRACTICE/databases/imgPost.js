const bodyParser = require('body-parser');
var express = require('express');
const conn = require("./database");
var app = express();
const fileUpload = require('express-fileupload');

const router = express.Router();

router.post('/' , (req ,res) => {
    const data = req.files.pic;
    const title = req.body.post_title;  //변수 정하는 원리 프론트 form에서 받은 아이디랑 이름을 적어서 변수를 가지고 옴 
    const name = req.files.pic;

    var sql = `INSERT INTO box (title ,  image , name ) VALUES( "${title}" ,  "${data}" , "${name}")`; //SQL구문 이러면 오류를 더 82찾을 수 있음
    //`과 ""과 자바스크립트 문법에 차이가 있음 
    if (data) {
        conn.query( sql , (err , rows , fields) => {
            if(err){
                console.log("에러가 발생했습니다 , 발생한 에러는 " + err);
            } else {
                console.log(rows);
                res.redirect(303 , "/");
            }
        });
    } else {
        res.sendStatus(400); // 데이터를 공백으로 주엇을때 insert x 
    }
});
module.exports = router;
