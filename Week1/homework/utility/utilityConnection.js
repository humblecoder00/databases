var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "new_world"
});

connection.connect();
console.log("Connected to MySQL");

// connection.query("SELECT 1 + 1 AS solution", function(error, results, fields) {
//   if (error) throw error;
//   console.log("The solution is: ", results[0].solution);
// });

// connection.end();

module.exports = connection;
