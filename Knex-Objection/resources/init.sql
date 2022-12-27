-- Creation of product table
CREATE TABLE IF NOT EXISTS product (
                                       product_id SERIAL,
                                       name varchar(250) NOT NULL,
    PRIMARY KEY (product_id)
    );

-- Creation of country table
CREATE TABLE IF NOT EXISTS country (
                                       country_id SERIAL,
                                       country_name varchar(450) NOT NULL,
    PRIMARY KEY (country_id)
    );

-- Creation of city table
CREATE TABLE IF NOT EXISTS city (
                                    city_id SERIAL,
                                    city_name varchar(450) NOT NULL,
    PRIMARY KEY (city_id)
    );
