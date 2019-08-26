const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'demo',
    user: 'myuser',
    password: 'pass'
})

connection.query(
    `CREATE TABLE IF NOT EXISTS Persons
    (id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50),
            age INTEGER NOT NULL,
            city VARCHAR(30))`,
    function(err, results){
        if(err)
        {console.log(err)}
        else{
            console.log('Table created successfully')
        }
        connection.close();
    }
)