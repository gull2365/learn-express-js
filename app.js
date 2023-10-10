const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const adminRoute = require("./route/admin");
const shopRoute = require("./route/shop");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extends: false }));

app.use("/admin", adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});

// express 내부 문서를 읽어보면 app.listen에서 서버를 같이 불러와줌 (http import 제거가 가능)
app.listen(3000);
