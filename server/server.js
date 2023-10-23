const express = require("express");
const session = require('express-session');
const path = require('path');
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2"); // mysql 모듈 사용

const db = require('../lib/db');
// const sessionOption = require('./lib/sessionOption');
const bcrypt = require('bcrypt');

// app.use(express.static(path.join(__dirname, '/public')));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use(cors());

// var check;

// const conn = mysql.createConnection({
//     host : "localhost",
//     user : "root", //mysql의 id
//     password : "root", //mysql의 password
//     database : "test", //사용할 데이터베이스
// });


// app.get('/api/tdata', function (req, res) {
//     const sql = "select * from customers;"
//     conn.query(sql, function (err, result, fields){
//         res.send('Hello' + JSON.stringify(result));
//     });
// });

// app.get('/', function(req, res) {
//     res.send(JSON.stringify(check));
// });

// conn.connect(function(err) {
//     if (err) throw err;
//         console.log("Mysql DB Connected!");
// });


// var connection = mysql.createConnection({
//     host : "localhost",
//     user : "root", //mysql의 id
//     password : "123456", //mysql의 password
//     database : "test", //사용할 데이터베이스
// });

db.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send('test server start')
})

app.post("/signup", (req,res)=>{
    const body = req.body.body;
    const head = req.body.head;
    // console.log(req.body);
    db.query("INSERT INTO test (test_body, test_head) values (?, ?)",[body, head],
    function(err,rows,fields){
        if(err){
            console.log("실패");
            // console.log(err);
        }else{
            console.log("성공");
            // console.log(rows);
        };
    });
});

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})