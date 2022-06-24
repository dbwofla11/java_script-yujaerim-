const maria = require('mysql');
const pw = require('./mypw');

//DB 모듈 불러오기 
const conn = maria.createConnection({
    host        :'localhost',
    user        :'root',
    password    : pw , // 해킹 ㄷㄷ 무서워서 빼놈 //pw는 안올릴거임 
    database    :'gal_db',
    dateStrings : true
})
//모듈을 conn으로 
module.exports = conn;

#//원래 패스워드는 저렇게 놓는게 아니라 환경변수를 설정해서 놓아야 함 근데 임시방편으로 해둔거 
