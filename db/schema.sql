/*Create database*/
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
/*create table for burger_db*/
CREATE TABLE burgers 
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(100) NOT NULL,
devoured boolean NOT NULL,
PRIMARY KEY(id)
);
