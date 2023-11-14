const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose(); //sqlite3 추가

const app = express();
const port = 3001;

app.use(express.json()); // JSON 형태의 요청 body를 파싱하기 위해 미들웨어 사용
app.use(cors());

// SQLit 데이터베이스 연결
const db = new sqlite3.Database(':memory:');


// 테이블 생성
db.serialize(() => {
    db.run("CREATE TABLE data (id INTEGER PRIMARY KEY AUTOINCREMENT, message TEXT)");
});

// 데이터 조회 api
app.get('/api/data', (req, res) => {
    // SQLite에서 데이터 조회
    db.all("SELECT * FROM data", (err, rows) => {
        if (err) {
            console.error('데이터를 가져오는 중 에러 발생:', error);
            res.status(500).send('서버 에러');
        } else {
            res.json(rows)
        }
    });
});

// 데이터 생성 api
app.post('/api/data', (req,res) => {
    const newData = req.body;

    // SQLite에 데이터 삽입
    db.run("INSERT INTO data (message) VALUES (?)", [newData.message], function (err) {
        if (err) {
            console.error('데이터를 생성하는 중 에러 발생', err);
            res.status(500).send('서버 에러');
        } else {
            // 삽입된 데이터의 ID를 반환
            res.json({ id: this.lastID, message: newData.message });
        }
    });
});

app.listen(port, () => {
    console.log(`서버 http://localhost:${port} 에서 실행 중`);

    // 프로그램 종료 시 SQLit 데이터베이스 닫기
    process.on('exit', () => {
        db.close();
        console.log('SQLite 데이터베이스가 닫혔습니다.');
    });
});