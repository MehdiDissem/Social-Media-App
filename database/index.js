const mysql = require("mysql");
const config = require("./config.js");

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("yup conected !!");
  }
});

module.exports = connection;
