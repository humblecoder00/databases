const connection = require("./utilityConnection");

const queryArray = [
  "SELECT city.Name, country.Capital FROM city INNER JOIN country ON city.ID = country.Capital WHERE country.Name = ?",
  "SELECT DISTINCT countrylanguage.language FROM countrylanguage INNER JOIN country ON country.code = countrylanguage.countrycode WHERE country.Region = ?",
  "SELECT COUNT(*) FROM city INNER JOIN countrylanguage ON city.countryCode = countrylanguage.countryCode WHERE countrylanguage.language = ?",
  "SELECT COUNT(*), Name FROM country INNER JOIN countrylanguage ON country.Code = countrylanguage.CountryCode WHERE countrylanguage.isOfficial = 'T' AND countrylanguage.Language = ?",
  "SELECT continent, COUNT(language)  FROM countrylanguage INNER JOIN country ON country.code = countrylanguage.countrycode GROUP BY country.continent"
];

//

const queryQuestions = [
  "1. What is the capital of",
  "2. List all the languages spoken in the region",
  "3. Find the number of cities in which language Z is spoken ?",
  "4. Are there any countries that have A) Same official language B) Same region If yes, display those countries. If no, display TRUE or FALSE",
  "5. List all the continents with the number of languages spoken in each continent"
];

function selectQuery(arg, value) {
  connection.query(queryArray[arg], [value], (error, results, fields) => {
    if (error) throw error;

    console.log("Question answered: ", queryQuestions[arg], value);
    console.log(results);
  });
  connection.end();
}

module.exports = {
  queryArray,
  queryQuestions,
  selectQuery
};
