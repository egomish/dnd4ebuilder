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
        doQueries();
    }
});


function doQueries () {
    doQueryDebug();
}

//debug example: get all attributes from every tuple
//get every attribute from all classes
function doQueryDebug () {
    var query = "SELECT * FROM classes;";
    con.query(query, function (err, result) {
        if (err) {
            database_error(err, query);
        } else {
            console.log("\n" + query);
            for (tuple in result) {
                for (attr in result[tuple]) {
                    console.log(attr + ": " + result[tuple][attr]);
                }
            }
        }
        doQueryComplex();
    });
}

//complex example: get multiple attributes from multiple tuples
//get all racial features from one race
function doQueryComplex () {
    var racename = "Halfling";
    var query = "SELECT name, benefit "
              + "FROM features "
              + "WHERE origin LIKE '" + racename + "';";
    con.query(query, function (err, result) {
        if (err) {
            database_error(err, query);
        } else {
            console.log("\n" + query);
            for (tuple in result) {
                console.log(result[tuple].name +", " + result[tuple].benefit);
            }
        }
        doQuerySimple();
    });
}

//simple example: get one attribute from one tuple
function doQuerySimple () {
    var classname = "Rogue";
    var query = "SELECT level1HP "
              + "FROM classes "
              + "WHERE name LIKE '" + classname + "';";
    con.query(query, function (err, result) {
        if (err) {
            database_error(err, query);
        } else {
            console.log("\n" + query);
            console.log("level1HP: " + result[0]["level1HP"]);
        }
        doQueryStrengthTotal();
    });
}

function doQueryStrengthTotal () {
    var racename = "Dragonborn";
    var query = "SELECT strBonus "
              + "FROM races "
              + "WHERE name LIKE '" + racename + "';";
    con.query(query, function (err, result) {
        if (err) {
            database_error(err, query);
        } else {
            var bonus = result[0]["strBonus"];
            console.log("\n" + query);
            console.log("strength bonus: " + bonus);
        }
        finishQueries();
    });
}

function finishQueries () {
    con.end();
}

function database_error (err, query) {
  console.log("Database query \"" + query + "\" failed.");
}

