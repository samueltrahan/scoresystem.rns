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

function createCourseTable() {
    db.query('CREATE TABLE courses(id INT NOT NULL, userId INT, FOREIGN KEY(userId) REFERENCES users(id), courseId INT NOT NULL, PRIMARY KEY(courseId));', (err, res) => {
        if (err) throw err;
        console.log('Courses table created.')
    })
}


function createHolesTable() {
    db.query('CREATE TABLE holes(id INT NOT NULL, courseId INT, FOREIGN KEY(courseId) REFERENCES courses(id), roundId INT NOT NULL, PRIMARY KEY(roundId), holeIndex INT NOT NULL, score INT NOT NULL));', (err, res) => {
        if(err) throw err;
        console.log("Holes table created.")
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
            if(!res.some(table => table.TABLE_NAME === 'course')) {
                createCourseTable()
            }
            if(!res.some(table => table.TABLE_NAME === 'holes')) {
                createHolesTable()
            }
        })
    } else {
        initialConnection.query(`CREATE DATABASE ${databaseName};`, (err, res) => {
            if (err) throw err;
            console.log(`${databaseName} database created.`)
            connectToDatabase()
            createUserTable()
            createCourseTable()
            createHolesTable()
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