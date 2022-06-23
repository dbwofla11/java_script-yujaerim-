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
