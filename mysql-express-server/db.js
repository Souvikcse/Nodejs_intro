const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'pass',
    database: 'demo'
})

function getpersons() {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM Persons`,
            function (err, rows, cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            })
    })
}
function addPerson(name, age, city) {
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO Persons(name, age, city) VALUES(?, ?, ?)`, [name, age, city],
            function(err, results){
                if(err){
                    reject(err)
                }
                else{
                    resolve();
                }
            }
        )
    })
  }

module.exports = {
    getpersons, addPerson
}