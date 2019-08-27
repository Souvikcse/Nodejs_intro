const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'pass',
    database: 'demo'
})

function getpersons() {
    
}