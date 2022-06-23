const maria = require('mysql');

const conn = maria.createConnection({
    host:'localhost',
    user:'root',
    password:'##',
    database:'gal_db',
    dateStrings: true
})

module.exports = conn;
