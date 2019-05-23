--Seed data for meal-server app

--This table will keep recipes
CREATE TABLE `bti1RDWeLF`.`recipes` (
	recipe_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50),
	prep_time INT DEFAULT NULL,
	description  VARCHAR(100),
	instructions VARCHAR(500)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--This table will keep ingredients and amounts
CREATE TABLE `bti1RDWeLF`.`ingredients` (
	ingredient_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
	name VARCHAR(50),
	amount VARCHAR(50),
	cost DOUBLE DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8; 

--This join table will keep track of ingredients by recipe
CREATE TABLE `bti1RDWeLF`.`ingredients_by_recipe` (
	ingredient_id INT NOT NULL, 
	recipe_idx INT NOT NULL,
	CONSTRAINT fk_ingredients FOREIGN KEY(ingredient_id) REFERENCES ingredients(ingredient_id),
	CONSTRAINT fk_recipesx FOREIGN KEY(recipe_idx) REFERENCES recipes(recipe_id),
	PRIMARY KEY (ingredient_id, recipe_idx)
) ENGINE=InnoDB DEFAULT CHARSET=utf8; 

--This table will keep days
CREATE TABLE `bti1RDWeLF`.`days` (
	day_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(25),
	description VARCHAR(200)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--This join table will keep track of recipes by day (one day to many recipes)
CREATE TABLE `bti1RDWeLF`.`recipes_by_day` (
	recipe_idy INT NOT NULL, 
	day_id INT NOT NULL,
	CONSTRAINT fk_recipesy FOREIGN KEY(recipe_idy) REFERENCES recipes(recipe_id),
	CONSTRAINT fk_days FOREIGN KEY(day_id) REFERENCES days(day_id),
	PRIMARY KEY (recipe_idy, day_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8; 


--This table will keep weekly plans (one plan to many days)
CREATE TABLE `bti1RDWeLF`.`plans` (
	plan_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	season VARCHAR(10),
	date_published DATE,
	day1 INT,
	day2 INT,
	day3 INT,
	day4 INT,
	day5 INT,
	day6 INT,
	day7 INT,
	CONSTRAINT fk_daysa FOREIGN KEY(day1) REFERENCES days(day_id),
	CONSTRAINT fk_daysb FOREIGN KEY(day2) REFERENCES days(day_id),
	CONSTRAINT fk_daysc FOREIGN KEY(day3) REFERENCES days(day_id),
	CONSTRAINT fk_daysd FOREIGN KEY(day4) REFERENCES days(day_id),
	CONSTRAINT fk_dayse FOREIGN KEY(day5) REFERENCES days(day_id),
	CONSTRAINT fk_daysf FOREIGN KEY(day6) REFERENCES days(day_id),
	CONSTRAINT fk_daysg FOREIGN KEY(day7) REFERENCES days(day_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/* INSERT INTO plans (season, date_published) VALUES ('spring', '2019-05-21'):
SELECT plan_id FROM plans WHERE season = 'spring' AND date_published = '2019-05-21'); --Use plan_id below
INSERT INTO recipes (name, prep_time, description, instructions, plan_id) VALUES ('Boiled egg', 8, 'A simple boiled egg', 'Boil egg for 6 minutes. Remove, peel, and add salt and a dab of butter.');
INSERT INTO ingredients (name, amount, cost, recipe_id) VALUES ();

SELECT r.name AS 'recipe_name', 
	rec.instructions,
	ing.amount,
	ing.name AS 'ingredient_name' 
FROM recipes rec
JOIN ingredients ing on ing.id = rec.recipe_id; */

