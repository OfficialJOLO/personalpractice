// 나는 과일가게의 주인이다.
// 현재 사과, 망고, 파인애플 3가지 과일을 팔고 있는데,
// 추후 수박, 키위, 복숭아를 추가하여 총 6가지의 과일을 판매할 예정
// → 이걸 HTTP 매서드인 GET, POST 그리고 postman을 이용하여 구현

const express = require("express");
const app = express();
app.listen(1111);

// express에서 http가 아닌 미들웨어 사용하겠다
// 그리고 그 body값을 json 으로 읽어볼 수 있게끔 하겠다
app.use(express.json());

//REST API 생성
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my Fruit Shop!",
  });
});

app.get("/fruits/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const fruit = db.get(id);

  if (fruit == undefined) {
    res.json({
      message: "우리는 그 과일을 판매하고있지않습니다",
    });
  } else {
    res.json(fruit);
  }
});

//객체(과일) 생성

let fruit1 = {
  fruitName: "Apple",
  stock: 35,
  price: 5700,
};

let fruit2 = {
  fruitName: "Mango",
  stock: 5,
  price: 9700,
};

let fruit3 = {
  fruitName: "PineApple",
  stock: 56,
  price: 2200,
};

// Map(db) 생성

let db = new Map();
let id = 1;
db.set(id++, fruit1);
db.set(id++, fruit2);
db.set(id++, fruit3);

// POST
app.post("/fruits", (req, res) => {
  db.set(id++, req.body);
  res.json({
    message: `${db.get(id - 1).fruitName}이 판매 시작됩니다`,
  });
});
