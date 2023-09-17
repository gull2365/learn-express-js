const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoute = require("./route/admin");
const shopRoute = require("./route/shop");

app.use(bodyParser.urlencoded({ extends: false }));

app.use(adminRoute);
app.use(shopRoute);

// express 내부 문서를 읽어보면 app.listen에서 서버를 같이 불러와줌 (http import 제거가 가능)
app.listen(3000);
