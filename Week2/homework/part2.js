const connection = require("./utility/utilityConnection");

let arg = process.argv;
let queryCommand = arg[2];
let userCode = arg[3];
let userLang = arg[4];

function insertQuery(...values) {
  let userInput = console.log("There are more than 10 languages!");
  let allowedInput = console.log("Entry updated");
  let triggerQuery =
    "CREATE TRIGGER ?? AFTER INSERT ON ?? FOR EACH ROW BEGIN IF NEW.?? (COUNT >= 10) THEN SET ?? = ?; ELSE SET ?? = ?; END IF; INSERT INTO ?? (??)";
  let formatParams = [
    "language",
    "countrylanguage",
    "language",
    userInput,
    "countrylanguage",
    allowedInput,
    "countrycode",
    "language",
    [...values]
  ];

  triggerQuery = mysql.format(triggerQuery, formatParams);

  connection.query(queryInsert, function(error, results, fields) {
    if (error) throw error;
    return console.log(results);
  });
  connection.end();
}

if (queryCommand == "insert") {
  insertQuery([userCode, userLang]);
  console.log("success - insert");
}

/* MYSQL syntax:

delimiter;;
create procedure new_world.language_add (in_name varchar(52), in lang varchar(30), inoffical enum(‘T’, ‘F’), in _pct float(4,1))
begin
declare v_country_code char(3);
declare v_new_lang_count int;
select code into v_country_code from country where name = in_name;
insert into countrylanguage( countrycode, language, isofficial, percentage)
values
(v_country_code, in_lang, in_official, in_pct);
select(language) into v_new_lang_count
from countrylanguage where countrycode = v_country_code;
if v_new_lang_count >= 10
then
select concat(‘Warning: country’, in_name, ‘now has’, v_new_lang_count, ‘languages’);
else
select concat(‘Succeded: country’, in_name, ‘now has’, v_new_lang_count, ‘languages’);
end if;
end;;

*/
