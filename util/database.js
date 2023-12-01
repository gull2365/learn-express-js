const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "051101", {
  dialect: "mysql",
  host: "localhost",
}); // schema, username, password, options connection pool!

//커넥션 풀은 데이터베이스와 연결된 커넥션을 미리 만들어 놓고 이를 pool로 관리하는 것이다. 즉, 필요할 때마다 커넥션 풀의 커넥션을 이용하고 반환하는 기법이다. 이처럼 미리 만들어 놓은 커넥션을 이용하면 Connection에 필요한 비용을 줄일 수 있다. 따라서 DB에 빠르게 접속할 수 있다.

https: module.exports = sequelize;
