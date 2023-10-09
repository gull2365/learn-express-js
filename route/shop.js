const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});
// path = 실행중인 운영체제를 감지하여 자동으로 올바른 경로를 생성함
// 절대 경로를 붙여도 페이지 서빌이 되지만 path를 사용하면 리눅스와 윈도우 모두에서 사용가능한 파일 시스템 경로를 만들어줌
module.exports = router;
