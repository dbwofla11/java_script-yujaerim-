const maria = require('mysql');

const conn = maria.createConnection({
    host:'localhost',
    user:'root',
    password:'m8161516',
    database:'gal_db',
    dateStrings: true
})

module.exports = conn;