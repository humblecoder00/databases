const connection = require("./utility/utilityConnection");
const asking = require("./utility/utilityQueries");

let arg = process.argv;
let command = arg[2];
let userInput = arg[3];

if (command == "query") {
  let int = parseInt(userInput);
  if (Number.isInteger(int) && int > 0 && userInput > 0 && userInput < 11) {
    asking.selectQuery(userInput - 1);
  } else {
    console.log("Error : You need to enter a valid number between 1 and 10");
    connection.end();
  }
}
