import mysql from "mysql2/promise";

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root", //mysql의 id
  password: "123456", //mysql의 password
  database: "mulplay", //사용할 데이터베이스
  //   port: 3306,
});

export default connection;
