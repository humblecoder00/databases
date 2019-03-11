const connection = require("./utilityConnection");

const queryArray = [
  "SELECT city.Name, country.Capital FROM city INNER JOIN country ON city.ID = country.Capital WHERE country.Name = ?",
  "SELECT DISTINCT countrylanguage.language FROM countrylanguage INNER JOIN country ON country.code = countrylanguage.countrycode WHERE country.Region = ?",
  "SELECT COUNT(*) FROM city INNER JOIN countrylanguage ON city.countryCode = countrylanguage.countryCode WHERE countrylanguage.language = ?",
  'SELECT co.continent, co.name, l.language FROM country co INNER JOIN countrylanguage l ON co.code = l.countrycode where l.language IN (SELECT l.language FROM country c INNER JOIN countrylanguage l ON c.code = l.countrycode WHERE c.name = "France" AND l.isofficial = "T") AND co.continent = (SELECT continent FROM country WHERE name = "Barbados")',
  "SELECT continent, COUNT(language)  FROM countrylanguage INNER JOIN country ON country.code = countrylanguage.countrycode GROUP BY country.continent"
];

//"SELECT COUNT(*), Name FROM country INNER JOIN countrylanguage ON country.Code = countrylanguage.CountryCode WHERE countrylanguage.isOfficial = 'T' AND countrylanguage.Language = ?",

const queryQuestions = [
  "1. What is the capital city?",
  "2. List all the languages spoken in the region?",
  "3. Find the number of cities in which language Z is spoken?",
  "4. Are there any countries that have A) Same official language B) Same region If yes, display those countries. If no, display TRUE or FALSE",
  "5. List all the continents with the number of languages spoken in each continent"
];

const queryFormat = [
  "QUERY FORMAT HELP:",
  "To execute the queries in right way, you need to apply the inputs with following formats:",
  "Question 1: What is the capital city of a country - node index query 1 Sweden",
  'Question 2: List all the languages spoken in the region - node index query 2 "Eastern Europe"',
  "Question 3: Find the number of cities in which language Z is spoken - node index query 3 English",
  "Question 4: Are there any countries that have A) Same official language B) Same region If yes, display those countries. If no, display TRUE or FALSE - node index query 4 list",
  "Question 5: List all the continents with the number of languages spoken in each continent - node index query 5 languages"
];

function selectQuery(arg, value) {
  connection.execute(queryArray[arg], [value], (error, results, fields) => {
    if (error) throw error;

    console.log("Question answered: ", queryQuestions[arg]);
    console.log(results);
  });
  connection.end();
}

module.exports = {
  queryArray,
  queryQuestions,
  queryFormat,
  selectQuery
};
