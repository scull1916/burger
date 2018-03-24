CREATE TABLE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id INTEGER(11) NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255),
	devoured BOOLEAN,
	PRIMARY KEY(id)
);