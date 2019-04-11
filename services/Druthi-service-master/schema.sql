DROP DATABASE IF EXISTS deepfryd_images;
CREATE DATABASE IF NOT EXISTS deepfryd_images;

USE deepfryd_images;


CREATE TABLE IF NOT EXISTS images (
    id INT AUTO_INCREMENT,
    image_url VARCHAR(255) NOT NULL,
    product_id INT,
    PRIMARY KEY (id)
)



