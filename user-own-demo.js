// user-own-demo.js
// express 모듈세팅
const express = require("express");
const app = express();
app.listen(4444);
app.use(express.json()); // 미들웨어 'json 모듈' 사용

let db = new Map();
let id = 1;

// 로그인 API
app.post("/login", (req, res) => {});

// 회원가입 API
app.post("/join", function (req, res) {
  console.log(req.body);

  if (req.body == {}) {
    res.status(400).json({
      message: "입력값을 다시 확인해주세요",
    });
  } else {
    db.set(id++, req.body);
    res.status(201).json({
      message: `${db.get(id - 1).name}님 가입을 환영합니다!`,
    });
  }
});

// 회원 개별조회 API
app.get("/users/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const user = db.get(id);
  if (user == undefined) {
    res.status(404).json({
      message: "회원 정보가 없습니다",
    });
  } else {
    res.status(200).json({
      userId: user.userId,
      name: user.name,
    });
  }
});

// 회원 개별탈퇴 API
app.delete("/users/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const user = db.get(id);

  if (user == undefined) {
    res.status(404).json({
      message: "일치하는 회원 정보가 없습니다",
    });
  } else {
    db.delete(id);
    res.status(200).json({
      message: `${user.name}님 탈퇴처리가 완료되었습니다.`,
    });
  }
});
