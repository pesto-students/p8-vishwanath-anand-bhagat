-- Create Database
CREATE DATABASE warehouse;
-- Select Database
USE warehouse;



-- Create tables
-- City
CREATE TABLE cities (
    id int NOT NULL AUTO_INCREMENT,
    city varchar(20),
    state varchar(20),
    PRIMARY KEY (id)
);

-- Warehouse
CREATE TABLE warehouses (
    wid int NOT NULL AUTO_INCREMENT,
    wname varchar(20),
    location varchar(20),
    extra_context json,
    city_id int NOT NULL,
    PRIMARY KEY (wid),
    FOREIGN KEY (city_id) REFERENCES cities(id)
);

-- Store
CREATE TABLE stores (
    sid int NOT NULL AUTO_INCREMENT,
    store_name varchar(20),
    location_city varchar(20),
    warehouse_id int NOT NULL,
    PRIMARY KEY (sid),
    FOREIGN KEY (warehouse_id) REFERENCES warehouses(wid)
);

-- Customer
CREATE TABLE customers (
    cno int NOT NULL AUTO_INCREMENT,
    cname varchar(20),
    addr varchar(50),
    cu_city varchar(20),
    PRIMARY KEY (cno)
);

-- Order
CREATE TABLE orders (
    ono int NOT NULL AUTO_INCREMENT,
    odate date,
    customer_id int NOT NULL,
    PRIMARY KEY (ono),
    FOREIGN KEY (customer_id) REFERENCES customers(cno)
);

-- Item
CREATE TABLE items (
    itemno int NOT NULL AUTO_INCREMENT,
    description text,
    weight decimal(5,2),
    cost decimal(5,2),
    PRIMARY KEY (itemno)
);

-- order items
CREATE TABLE order_items (
    oiid int NOT NULL AUTO_INCREMENT,
    ordered_quantity int,
    ono int,
    itemno int,
    PRIMARY KEY (oiid),
    FOREIGN KEY (ono) REFERENCES orders(ono),
    FOREIGN KEY (itemno) REFERENCES items(itemno)
);

-- order items
CREATE TABLE store_items (
    siid int NOT NULL AUTO_INCREMENT,
    quantity int,
    sid int,
    itemno int,
    PRIMARY KEY (siid),
    FOREIGN KEY (sid) REFERENCES stores(sid),
    FOREIGN KEY (itemno) REFERENCES items(itemno)
);






