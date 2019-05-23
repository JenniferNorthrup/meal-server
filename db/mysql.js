const connection = require('./mysql-config').connection;

exports.testMySql = () => {

    return new Promise(async (resolve, reject) => {

        try {
            console.log("There should be a connection now? ", !!connection);
            connection.connect();
            connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
                console.log('The solution is: ', results[0].solution);
                return resolve(results);
            });

        } catch (err) {
            return reject(err);

        } finally {
            // connection.end();
        }
    });

};

exports.testConnectivity = () => {

    return new Promise(async (resolve, reject) => {

        try {
            connection.connect();
            connection.query('SELECT * FROM test', function (error, results, fields) {
                console.log('The results are: ', results);
                return resolve(results);
            });

        } catch (err) {
            return reject(err);

        } finally {
            // connection.end();
        }
    });

};
