const Boom = require('boom');
const db = require('../db');

let seederRoute = {
    method: 'GET',
    path:'/seeder',
    handler: async (request, h) => {
        return new Promise(async (resolve, reject) => {
            db.addIngredients()
            .then(function(results){
                return resolve(results);
            })
            .catch(function(error){
                console.log(error);
                return reject(Boom.badImplementation());
            });

            // .then((result)=>{
            //     console.log("Result: ", result);
            // })
            // // .then(function(result){
            // //     console.log("Added ingredients, hopefully: ", result);
            // //     db.addRecipes();
            // //     return result;
            // // })
            // // .then(function(result){
            // //     console.log("Added recipes, hopefully ", result);
            // //     db.addDays();
            // //     return result;
            // // })
            // // .then(function(result){
            // //     console.log("Added days? ", result);
            // //     db.addPlans();
            // //     return result;
            // //     // return resolve('Added plans? ', result);
            // // })
            // .catch(function(error){
            //     console.log("Crashtastic!!!");
            //     console.log(error);
            //     return reject(Boom.badImplementation());
            // });
            
        });
    }
};

module.exports = [
    seederRoute
]