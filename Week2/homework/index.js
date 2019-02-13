const connection = require("./utility/utilityConnection");
const asking = require("./utility/utilityQueries");

let arg = process.argv;
let command = arg[2];
let queryNr = arg[3];
let userInput = arg[4];

if (command == "query") {
  let int = parseInt(queryNr);
  if (Number.isInteger(int) && int > 0 && queryNr > 0 && queryNr < 11) {
    asking.selectQuery(queryNr - 1, userInput);
  } else {
    console.log("Error : You need to enter a valid number between 1 and 10");
    connection.end();
  }
}
