"use strict";
const rdbms = require('./mysql');
const seeder = require('./seeder');

//Operations:
exports.testMySql = rdbms.testMySql;
exports.testConnectivity = rdbms.testConnectivity;

// Seeding Operations:
exports.addIngredients = seeder.addIngredients;
exports.addRecipes = seeder.addRecipes;
exports.addDays = seeder.addDays;
exports.addPlans = seeder.addPlans;

