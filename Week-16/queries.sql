-- Find the item that has minimum weight.
SELECT * from items ORDER BY weight ASC LIMIT 1;

-- Find the different warehouses in “Pune”.
SELECT * from warehouses INNER JOIN cities ON warehouses.city_id = cities.id where cities.city = 'Pune';

-- Find the details of items ordered by a customer “Mr. Patil”.
SELECT * from items 
    INNER JOIN order_items ON items.itemno = order_items.itemno 
    INNER JOIN orders on orders.ono =  order_items.ono
    INNER JOIN customers on orders.customer_id =  customers.cno
     where customers.cname = 'Mr. Patil';

-- Find a Warehouse which has maximum stores.
SELECT *, count(warehouse_id) from warehouses
    INNER JOIN stores ON stores.warehouse_id = warehouses.wid GROUP BY warehouse_id ORDER BY count(warehouse_id) DESC LIMIT 1;

-- Find an item which is ordered for a minimum number of times.
SELECT *, count(items.itemno) from items 
    INNER JOIN order_items ON order_items.itemno = items.itemno GROUP BY items.itemno ORDER BY count(items.itemno) ASC LIMIT 1;


-- Find the detailed orders given by each customer.
SELECT items.itemno, description, weight, cost, ordered_quantity, odate, cname, addr, cu_city from items 
    INNER JOIN order_items ON items.itemno = order_items.itemno 
    INNER JOIN orders on orders.ono =  order_items.ono
    INNER JOIN customers on orders.customer_id =  customers.cno;