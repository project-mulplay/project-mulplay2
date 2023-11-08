import mysql from "mysql2/promise";

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "0000",
  database: "mulplay",
});

export default connection;

// import mysql from "mysql2/promise";
// // import dotenv from "dotenv";
// import fs from "fs";
// import yaml from "js-yaml";

// const config = yaml.load(fs.readFileSync("mulplay.yaml", "utf8"));
// // dotenv.config();

// const connection = mysql.createConnection({
//   host: config.url,
//   user: config.id, //mysql의 id
//   password: config.pw, //mysql의 password
//   database: "mulplay", //사용할 데이터베이스
//   //   port: 3306,
// });

// export default connection;
