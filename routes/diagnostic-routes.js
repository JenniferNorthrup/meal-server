const Boom = require('boom');
const db = require('../db');

const testSqlRoute = {
    method: 'GET',
    path:'/testsql',
    handler: async (request, h) => {
        console.log("in the handler");
        return new Promise(async (resolve, reject) => {
            console.log("in the handler promise");
            db.testMySql()
            .then(function(results){
                return resolve(results[0].solution);
            })
            .catch(function(error){
                console.log(error);
                return reject(Boom.badImplementation());
            });
        });
    }
};

const TestConnRoute = {
    method: 'GET',
    path:'/testconn',
    handler: async (request, h) => {
        console.log("in the handler");
        return new Promise(async (resolve, reject) => {
            console.log("in the handler promise");
            db.testConnectivity()
            .then(function(results){
                return resolve(results);
            })
            .catch(function(error){
                console.log(error);
                return reject(Boom.badImplementation());
            });
        });
    }
};

module.exports = [
    testSqlRoute,
    TestConnRoute
]
