-- Insert cities
INSERT INTO cities (city, state) VALUES
('Pune', 'Maharashtra'),
('Mumbai', 'Maharashtra'),
('Delhi', 'Delhi'),
('Kolkata', 'West Bengal');

-- Insert warehouses
INSERT INTO warehouses (wname, location, extra_context, city_id) VALUES
('Warehouse 1', 'Location 1', '{"capacity": 1000}', 1),
('Warehouse 2', 'Location 2', '{"capacity": 2000}', 2),
('Warehouse 3', 'Location 3', '{"capacity": 3000}', 3);


-- Insert stores
INSERT INTO stores (store_name, location_city, warehouse_id) VALUES
('Store 1', 'Pune', 1),
('Store 2', 'Mumbai', 2),
('Store 3', 'Delhi', 3),
('Store 4', 'Pune 2', 3),
('Store 5', 'Mumbai 2', 3),
('Store 6', 'Delhi 2', 3);

-- Insert customers
INSERT INTO customers (cname, addr, cu_city) VALUES
('Mr. Patil', 'Address 1', 'Pune'),
('Amit Kumar', 'Address 2', 'Mumbai'),
('Priya Singh', 'Address 3', 'Delhi');

-- Insert orders
INSERT INTO orders (odate, customer_id) VALUES
('2023-04-01', 1),
('2023-04-01', 2),
('2023-04-01', 3),
('2023-04-02', 1),
('2023-04-03', 1),
('2023-04-04', 1),
('2023-04-05', 1),
('2023-04-06', 1),
('2023-04-07', 1);

-- Insert items
INSERT INTO items (description, weight, cost) VALUES
('Item 1', 10.5, 100.25),
('Item 2', 20.0, 200.50),
('Item 3', 30.75, 300.75);

-- Insert order items
INSERT INTO order_items (ordered_quantity, ono, itemno) VALUES
(2, 1, 1),
(5, 1, 2),
(3, 2, 3),
(2, 4, 1),
(5, 4, 2),
(3, 5, 3),
(4, 6, 1),
(1, 6, 3),
(2, 7, 2),
(3, 7, 3);

-- Insert store items
INSERT INTO store_items (quantity, sid, itemno) VALUES
(50, 1, 1),
(100, 1, 2),
(75, 2, 2),
(150, 3, 3);