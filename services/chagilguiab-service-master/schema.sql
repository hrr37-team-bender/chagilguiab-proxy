DROP DATABASE IF EXISTS deepfryd_descriptions;

CREATE DATABASE deepfryd_descriptions;

USE deepfryd_descriptions;

CREATE TABLE stereos (
  id int NOT NULL AUTO_INCREMENT,
  product_name varchar(100),
  product_category varchar(100),
  deepfryd_id varchar(100),
  model_number int NOT NULL,
  average_rating DECIMAL (2, 1),
  current_price DECIMAL (20, 2),
  previous_price int NOT NULL,
  PRIMARY KEY (ID)
);