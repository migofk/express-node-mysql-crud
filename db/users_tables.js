const db = require('../db/db_connection.js');

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `CREATE TABLE users (
        id int NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(255), 
        last_name VARCHAR(255),
        photo  VARCHAR(555),
        email VARCHAR(255), 
        password VARCHAR(255), 
        status VARCHAR(255),
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_DATE(),
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_DATE(),
        PRIMARY KEY (id)
           )`;
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("User Table created");
    });
  });