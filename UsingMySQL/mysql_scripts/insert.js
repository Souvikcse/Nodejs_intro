const mysql = require('mysql2');
const insrt = {
    name: process.argv[2],
    age: parseInt(process.argv[3]),
    city: process.argv[4]
}

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'demo',
    user: 'myuser',
    password: 'pass'
})
connection.query(
    `INSERT INTO Persons (name, age, city) VALUES(
        '${insrt.name}', '${insrt.age}' , '${insrt.city}'
    )`,
    function(err, results){
        if(err){
            console.log(err);
        }
        else{
            console.log(results);
            console.log('Inserted successfully');
        }
        connection.close();
    }
)