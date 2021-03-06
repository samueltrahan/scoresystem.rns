const mysql = require('mysql');

const mysqlPW = process.env.MYSQL_PW;



let db

let databaseName = 'scoringSystem'

let connectionInfo = {
    host:'localhost',
    user:'root',
    password:process.env.MYSQL_PW,
}

const initialConnection = mysql.createConnection(connectionInfo)

function connectToDatabase() {
    connectionInfo.database = `${databaseName}`
    db = mysql.createConnection(connectionInfo)
    db.connect((err) => {
        if(err) throw err;
        console.log(`MySQL connected to ${db.config.database} database.`)
    })
}

function createUserTable() {
    db.query("CREATE TABLE users(id INT AUTO_INCREMENT NOT NULL, name VARCHAR(45) NOT NULL, email VARCHAR(320) NOT NULL UNIQUE, password VARCHAR(60) NOT NULL, resetLink VARCHAR(2000) NOT NULL DEFAULT '', PRIMARY KEY (id));", (err, res) => {
        if (err) throw err;
        console.log('User table created.')
    })
}


initialConnection.query('SHOW DATABASES;', (err, databases) => {
    if(err) throw err;
    if(databases.some(db => db.Database === `${databaseName}`)) {
        connectToDatabase()
        db.query(`SELECT * FROM information_schema.tables WHERE table_schema = '${databaseName}';`, (err, res) => {
            if(err) throw err;
            if(!res.some(table => table.TABLE_NAME === 'users')) {
                createUserTable()
            }
        })
    } else {
        initialConnection.query(`CREATE DATABASE ${databaseName};`, (err, res) => {
            if (err) throw err;
            console.log(`${databaseName} database created.`)
            connectToDatabase()
            createUserTable()
        })
    }
})

let mysqlCon = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:`${mysqlPW}`,
    database:'scoringSystem'
});


module.exports = mysqlCon