const mysql = require('mysql');
const connection = require('./mysql-config').connection;

const mockIngredientData = require('../testdata/ingredients').ingredients;
const mockRecipeData = require('../testdata/recipes').recipes;
const mockDayData = require('../testdata/days').days;
const mockPlanData = require('../testdata/plans').plans;


exports.addIngredients = () => {
    return new Promise(async (resolve, reject) => {
        try {
            connection.connect();
            let query = "INSERT INTO `bti1RDWeLF`.`ingredients` (name, amount, calories, cost) VALUES ?";
                connection.query(query, mockIngredientData, function (error, result) {
                    if (error) { 
                        throw error; 
                    } else {
                        return resolve('Number of records inserted: ' + result.affectedRows);
                    }
                });
        } catch (err) {
            return reject(err);
        } finally {
            connection.end();
        }
    });
};


exports.addRecipes = () => {
    return new Promise(async (resolve, reject) => {
        try {
            connection.connect();
            mockRecipeData.forEach(element => {
                connection.query('INSERT INTO `bti1RDWeLF`.`recipes` (name, prep_time, description, instructions) VALUES :name, :prepTime, :description, :instruction;', function (error, results, fields) {
                    return resolve('Recipes inserted successfully');
                });
            });
        } catch (err) {
            return reject(err);
        } finally {
            connection.end();
        }
    });
};

exports.addDays = () => {
    return new Promise(async (resolve, reject) => {
        try {
            connection.connect();
            mockDayData.forEach(element => {
                connection.query('INSERT INTO `bti1RDWeLF`.`days` (name, description) VALUES :name, description', function (error, results, fields) {
                    return resolve('Days inserted successfully');
                });
            });
        } catch (err) {
            return reject(err);
        } finally {
            connection.end();
        }
    });
};

exports.addPlans = () => {
    return new Promise(async (resolve, reject) => {
        try {
            connection.connect();
            mockPlanData.forEach(element => {
                connection.query('INSERT INTO `bti1RDWeLF`.`plans` (season, date_published, day) VALUES :season, datePublished', function (error, results, fields) {
                    return resolve('Plans inserted successfully');
                });
            });
        } catch (err) {
            return reject(err);
        } finally {
            connection.end();
        }
    });
};
