const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("in another moon");
  res.send(" add product");
});
// express 내부 문서를 읽어보면 app.listen에서 서버를 같이 불러와줌 (http import 제거가 가능)
app.listen(3000);
