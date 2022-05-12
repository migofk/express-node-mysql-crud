var mysql = require('mysql');

let db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "node-crud"
});


module.exports = db;