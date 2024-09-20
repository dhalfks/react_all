// 설치한 라이브러리 변수로 받아오기
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

//express 사용하기 위한 app 생성
const app = express();

//express 사용할 서버포트 설정
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

//DB 접속
const db = mysql.createConnection({
    host : 'localhost',
    user: 'react',  //생성
    password: 'mysql',
    port:'3306',
    database:'db_react' //생성
});

// express 접속
app.listen(PORT, ()=>{
    console.log(`server connecting on : http://localhost:${PORT}`);
});

//db 연결
db.connect((err)=>{
    if(!err){
        console.log("seccuss");

    }else{
        console.log("fail");
    }
});

//---DB에서 값을 가져오기-------------

// / => root 연결시 보여지는 기본화면 설정
app.get('/',(req, res)=>{
    res.send("React Server Connect Success!!");
});

//게시글 목록 가져오기
app.get('/list', (req, res)=>{
    console.log('/list');
    const sql = 'select * from board order by id desc';
    db.query(sql, (err, data)=>{
        if(!err){
            res.send(data);
        }else{
            console.log(err);
            res.send('전송오류');
        }
    })
});

// 게시글 하나 가져오기 :id 
// 화면에서 서버로 요청하는 값 : request (req)
// 서버에서 화면으로 보내주는 값 : response (res)
// 화면에서 가져온 파라미터 추출 : req.params.id
app.get('/view/:id', (req, res)=>{
    //파라미터 가져오기 
    const id = req.params.id;
    console.log(`/view/${id}`);
    const sql = `select * from board where id = ${id}`;
    db.query(sql, (err, data)=>{
        if(!err){
            res.send(data);
        }else{
            console.log(err);
            res.send("전송오류");
        }
    })
});

//board 등록
app.post('/insert', (req, res)=>{
    //파라미터 가져오기  request.body

    // const board = req.body;
    // board.title
    const { title, writer, contents } = req.body;

    const sql = `insert into board(title, writer, contents) value (?,?,?)`;
    db.query(sql, [title, writer, contents], (err, data)=>{
        if(!err){
            // res.send("OK");
            res.sendStatus(200);  //전송잘됨.
        }else{
            console.log(err);
            res.send("전송오류");
        }
    })
    
});

//수정
app.post('/update/:id', (req, res) => {
    //파라미터 추출
    const id = req.params.id;
    const { title, writer, contents } = req.body;
    const sql = `update board set title=?, writer=?, contents=? where id = ?`;
    db.query(sql, [title, writer, contents, id], (err, data)=>{
        if(!err){
            console.log(data);
            res.sendStatus(200);  //전송잘됨.
        }else{
            console.log(err);
            res.send("전송오류");
        }
    })
});

//삭제
app.get('/delete/:id', (req, res)=>{
    const id = req.params.id;
    const sql = `delete from board where id=${id}`;
    db.query(sql, (err, data)=>{
        if(!err){
            console.log(data);
            res.sendStatus(200);  //전송잘됨.
        }else{
            console.log(err);
            res.send("전송오류");
        }
    })
})