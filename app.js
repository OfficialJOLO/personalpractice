// 나는 과일가게의 주인이다.
// 현재 사과, 망고, 파인애플 3가지 과일을 팔고 있는데,
// 추후 수박, 키위, 복숭아를 추가하여 총 6가지의 과일을 판매할 예정
// Sep 4 이걸 HTTP 매서드인 GET, POST 그리고 postman을 이용하여 구현
// Sep 5 - DELETE, PUT 추가

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

//개별 과일 DELETE

app.delete("/fruits/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  let fruit = db.get(id);
  if (fruit == undefined) {
    res.json({ message: `${id}는 더 이상 없는 과일입니다.` });
  } else {
    let fruitName = fruit.fruitName;
    db.delete(id);
    res.json({
      message: `${fruitName}은 판매가 중지된 상품입니다 `,
    });
  }
});

// 전체 과일 DELETE
app.delete("/fruits", (req, res) => {
  let message = "";
  if (db.size >= 1) {
    db.clear();
    message = "모든 과일 품목이 삭제되었습니다";
  } else {
    message = "삭제할 과일이 존재하지 않습니다";
  }

  res.json({
    message: message,
  });
});

// 과일 품목수정 PUT

app.put("/fruits/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  let fruit = db.get(id);
  //품목 변경전의 과일
  let oldFruit = fruit.fruitName;
  if (fruit == undefined) {
    res.json({
      message: `${id}는 이미 판매가 중지된 과일입니다`,
    });
  } else {
    let newFruit = req.body.fruitName;
    // db에다가 덮어쓰기 (id 값으로 키 값을 정함)
    fruit.fruitName = newFruit;
    db.set(id, fruit);
  }
});
