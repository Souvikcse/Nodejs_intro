const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'demo',
    user: 'myuser',
    password: 'pass'
})
connection.query(
    `SELECT * FROM Persons`,
    function(err, results, fields){
        if(err){
            console.log(err);
        }
        else{
            console.log(results);
            console.log(fields)
        }
        connection.close();
    }
)