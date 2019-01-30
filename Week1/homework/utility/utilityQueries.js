const connection = require("./utilityConnection");

const queryArray = [
  "SELECT Name FROM country WHERE Population>=8000000",
  'SELECT Name FROM country WHERE Name LIKE "%land%"',
  "SELECT Name FROM country WHERE Population BETWEEN 500000 AND 1000000",
  'SELECT Name FROM country WHERE continent = "Europe"',
  "SELECT Name FROM country ORDER BY SurfaceArea DESC",
  "SELECT city.Name FROM city INNER JOIN country ON city.CountryCode = country.Code WHERE (city.CountryCode = 'NLD' AND country.Code = 'NLD')",
  "SELECT Population FROM city WHERE Name = 'Rotterdam'",
  "SELECT Name FROM country ORDER BY SurfaceArea DESC LIMIT 10",
  "SELECT Name FROM city ORDER BY Population DESC LIMIT 10",
  "SELECT SUM(Population) FROM country"
];

const queryQuestions = [
  "1. What are the names of countries with population greater than 8 million ?",
  "2. What are the names of countries that have “land” in their names ?",
  "3. What are the names of the cities with population in between 500,000 and 1 million ?",
  "4. What's the name of all the countries on the continent ‘Europe’ ?",
  "5. List all the countries in the descending order of their surface areas.",
  "6. What are the names of all the cities in the Netherlands?",
  "7. What is the population of Rotterdam ?",
  "8. What's the top 10 countries by Surface Area ?",
  "9. What's the top 10 most populated cities?",
  "10. What is the population of the world ?"
];

function selectQuery(arg) {
  connection.query(queryArray[arg], (error, results, fields) => {
    if (error) throw error;
    console.log(results);
    console.log("Question answered: ", queryQuestions[arg]);
  });
  connection.end();
}

module.exports = {
  queryArray,
  queryQuestions,
  selectQuery
};
