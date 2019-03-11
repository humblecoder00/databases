var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "new_world"
});

connection.connect();
console.log("Connected to MySQL");

module.exports = connection;
