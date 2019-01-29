const connection = require("./utilityConnection");
const datalist = require("./utilityDataToAppend");

const countrylist = datalist.countries;
const citylist = datalist.cities;

const mysqlArgs = [
  "CREATE DATABASE IF NOT EXISTS worldhomework",
  "USE worldhomework",
  "CREATE TABLE IF NOT EXISTS countries (name VARCHAR(255), population VARCHAR(255), continent VARCHAR(255))",
  "INSERT INTO countries (name, population, continent) VALUES ?",
  "CREATE TABLE IF NOT EXISTS cities (name VARCHAR(255), population VARCHAR(255), country VARCHAR(255))",
  "INSERT INTO cities (name, population, country) VALUES ?",
  "SHOW TABLES"
];

async function createAndAppend() {
  try {
    const database = await createDBAndTable(mysqlArgs[0]);
    console.log("Database worldhomework created..", database);
    const switching = await createDBAndTable(mysqlArgs[1]);
    console.log(
      "Switching to new database worldhomework..",
      switching,
      countrylist
    );
    await createDBAndTable(mysqlArgs[2]);
    console.log("Country table created..");
    console.log("Applying data..");
    await appendTableData(mysqlArgs[3], [countrylist]);
    console.log("Country table data updated..");
    await createDBAndTable(mysqlArgs[4]);
    console.log("City table created..");
    console.log("Applying data..");
    await appendTableData(mysqlArgs[5], [citylist]);
    console.log("City table data updated..");
    await createDBAndTable(mysqlArgs[6]);
    console.log("Operation is done with success!");
  } catch (err) {
    console.log(err.message);
  }
  connection.end();
}

createAndAppend();

function createDBAndTable(arg) {
  connection.query(arg, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
  });
}

function appendTableData(arg, data) {
  connection.query(arg, data, error => {
    if (error) throw error;
    console.log("Data inserted successfully");
  });
}

module.exports = { createAndAppend };
