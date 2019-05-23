const mysql = require('mysql');
const env = require('../env.js');

let connection;

try {
        connection = mysql.createConnection({
        host: 'remotemysql.com',
        name: 'localhost',
        port: 3306,
        user: env.RDBMS_USER,
        password: env.RDBMS_PASSWORD,
        database: env.RDBMS_DB,
    });
    } catch (error) {
        console.log("Error connecting to DB: ", error);
    }

exports.connection = connection;