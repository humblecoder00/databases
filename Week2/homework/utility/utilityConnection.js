var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "new_world"
});

connection.connect();
console.log("Connected to MySQL");

module.exports = connection;
