import mysql from "mysql2/promise";
import dotenv from "dotenv";

// const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME, //mysql의 id
  password: process.env.DATABASE_PASSWORD, //mysql의 password
  database: process.env.DATABASE_NAME, //사용할 데이터베이스
  //   port: 3306,
});

export default connection;