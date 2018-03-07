var mysql = require('mysql');

var con = mysql.createConnection ({
    host: "sql3.freemysqlhosting.net",
    user: "sql3222527",
    password: "leANL4iLIN",
    database: "sql3222527"
});

con.connect(function (err) {
    if (err) {
        console.log("Connection to database failed")
    } else {
        console.log("Connected to database");
    }
});

doQueries();

function doQueries () {
    doQueryOne();
}

function doQueryOne () {
    var query = "SELECT * FROM classes;";
    con.query(query, function (err, result) {
        if (err) {
            database_error(err, query);
        } else {
            console.log(result[0]);
        }
    });
    doQueryTwo();
}

function doQueryTwo () {
    var query = "SELECT * FROM races;";
    con.query(query, function (err, result) {
        if (err) {
            database_error(err, query);
        } else {
            console.log(result[0]);
        }
    });
    finishQueries();
}

function finishQueries () {
    con.end();
}

function database_error (err, query) {
  console.log("Database query \"" + query + "\" failed.");
}

