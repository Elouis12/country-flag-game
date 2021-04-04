/* 1.create the database */

CREATE DATABASE e_flaggame;

 /*2. Select the new db 'e_flaggame' */

 /*3. Insert the remaining commands */

CREATE TABLE e_flags(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(31) NOT NULL,
  url VARCHAR(255),
  PRIMARY KEY (id)
);

LOAD DATA LOCAL INFILE '/xampp/htdocs/Project 2/e_links.csv' 
INTO TABLE e_flags FIELDS TERMINATED BY ',';
