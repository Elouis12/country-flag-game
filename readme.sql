/* 1.create the database */

CREATE DATABASE DB_NAME;

 /*2. Select the new db 'DB_NAME' */

 /*3. Insert the remaining commands */

CREATE TABLE DB_TABLE(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(31) NOT NULL,
  url VARCHAR(255),
  PRIMARY KEY (id)
);

LOAD DATA LOCAL INFILE '/xampp/htdocs/country-flag-game/flag_links.csv' 
INTO TABLE DB_TABLE FIELDS TERMINATED BY ',';
