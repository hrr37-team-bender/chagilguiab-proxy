DROP DATABASE IF EXISTS deepfryd;
CREATE DATABASE IF NOT EXISTS deepfryd;

USE deepfryd;


CREATE TABLE IF NOT EXISTS images (
    id INT AUTO_INCREMENT,
    image_url VARCHAR(255) NOT NULL,
    product_id INT,
    PRIMARY KEY (id)
)



